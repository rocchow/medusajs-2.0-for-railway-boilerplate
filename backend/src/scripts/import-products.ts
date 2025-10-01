import { ExecArgs } from "@medusajs/framework/types";
import { ContainerRegistrationKeys, Modules, ProductStatus } from "@medusajs/framework/utils";
import { createProductsWorkflow, createProductCategoriesWorkflow } from "@medusajs/medusa/core-flows";
import * as fs from 'fs';
import * as path from 'path';
const csv = require('csv-parser');

// Parse CSV using proper library
function parseCSV(csvPath: string): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const results: any[] = [];
    fs.createReadStream(csvPath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', reject);
  });
}

export default async function importProductsFromCSV({ container }: ExecArgs) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER);
  
  try {
    // Read CSV file
    const csvPath = path.join(process.cwd(), 'products.csv');
    
    if (!fs.existsSync(csvPath)) {
      logger.error(`CSV file not found at: ${csvPath}`);
      logger.info('Please place your products.csv file in the backend root directory');
      return;
    }

    const products = await parseCSV(csvPath);
    
    logger.info(`Found ${products.length} products in CSV`);
    
    // Filter out rows that are just additional images (no title)
    const mainProducts = products.filter(p => p.Title && p.Title.trim() !== '');
    
    logger.info(`Found ${mainProducts.length} main products after filtering`);

    // Group products by handle to collect all images
    const productGroups = new Map();
    
    products.forEach(row => {
      const handle = row.Handle;
      if (!handle) return;
      
      if (!productGroups.has(handle)) {
        productGroups.set(handle, {
          main: null,
          images: []
        });
      }
      
      const group = productGroups.get(handle);
      
      if (row.Title && row.Title.trim() !== '') {
        group.main = row;
      }
      
      if (row['Image Src'] && row['Image Src'].trim() !== '') {
        group.images.push({
          url: row['Image Src'].trim(),
          position: parseInt(row['Image Position']) || 1
        });
      }
    });

    // Get unique categories from main products
    const categories = [...new Set(mainProducts.map(p => p['Product Category']).filter(Boolean))];
    
    if (categories.length > 0) {
      logger.info(`Ensuring categories exist: ${categories.join(', ')}`);
      
      // Try to create categories, but ignore if they already exist
      try {
        await createProductCategoriesWorkflow(container).run({
          input: {
            product_categories: categories.map(name => ({
              name,
              is_active: true,
            })),
          },
        });
        logger.info('Categories created successfully');
      } catch (error: any) {
        if (error.message?.includes('already exists')) {
          logger.info('Categories already exist, continuing...');
        } else {
          throw error;
        }
      }
    }

    // Transform Shopify CSV data to Medusa product format
    const productData = Array.from(productGroups.values())
      .filter(group => group.main)
      .map(group => {
        const product = group.main;
        
        // Sort images by position
        const sortedImages = group.images.sort((a, b) => a.position - b.position);
        
        return {
          title: product.Title,
          handle: product.Handle,
          description: product['Body (HTML)'] || '',
          status: product.Status === 'active' ? ProductStatus.PUBLISHED : ProductStatus.DRAFT,
          images: sortedImages.map(img => ({ url: img.url })),
          options: [
            {
              title: "Default",
              values: ["Default"],
            }
          ],
          variants: [
            {
              title: product.Title,
              sku: product['Variant SKU'] || undefined,
              prices: [
                {
                  amount: Math.round((parseFloat(product['Variant Price']) || 0) * 100), // Convert to cents
                  currency_code: "usd",
                },
              ],
              options: {
                "Default": "Default",
              },
              weight: parseFloat(product['Variant Grams']) || undefined,
              inventory_quantity: parseInt(product['Variant Inventory Qty']) || 0,
            },
          ],
          // Skip categories for now to avoid import issues
          // categories: product['Product Category'] ? [{ name: product['Product Category'] }] : [],
        };
      });

    logger.info('Creating products...');
    
    // Create products in batches
    const batchSize = 10;
    for (let i = 0; i < productData.length; i += batchSize) {
      const batch = productData.slice(i, i + batchSize);
      
      await createProductsWorkflow(container).run({
        input: {
          products: batch,
        },
      });
      
      logger.info(`Created products ${i + 1}-${Math.min(i + batchSize, productData.length)} of ${productData.length}`);
    }

    logger.info('✅ Product import completed successfully!');
    
  } catch (error) {
    logger.error('❌ Error importing products:', error);
    throw error;
  }
}
