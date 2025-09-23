import { Suspense } from "react"
import { Text } from "@medusajs/ui"
import { HttpTypes } from "@medusajs/types"

import { getProductsListWithSort, getProductsList } from "@lib/data/products"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"

type AllProductsProps = {
  region: HttpTypes.StoreRegion
  countryCode: string
}

const AllProducts = async ({ region, countryCode }: AllProductsProps) => {
  // Get all products with a reasonable limit
  const { response: { products } } = await getProductsListWithSort({
    page: 1,
    queryParams: { limit: 12 },
    sortBy: "created_at",
    countryCode,
  })

  if (!products || products.length === 0) {
    return null
  }

  return (
    <div className="content-container py-12 small:py-16">
      {/* Zeki-style header */}
      <div className="flex flex-col xsmall:flex-row xsmall:justify-between xsmall:items-center mb-12 gap-y-4">
        <div className="flex flex-col gap-y-2">
          <Text className="text-3xl xsmall:text-2xl font-bold text-ui-fg-base">
            All Products
          </Text>
          <Text className="text-base text-ui-fg-subtle">
            Discover our complete collection
          </Text>
        </div>
        
        {/* Filter/Sort options like Zeki */}
        <div className="flex items-center gap-x-4">
          <Text className="text-sm text-ui-fg-subtle hidden xsmall:block">
            Showing Results
          </Text>
          <select className="px-4 py-2 border border-ui-border-base rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-ui-fg-interactive transition-all duration-200">
            <option value="all">All Products</option>
            <option value="new">New Arrivals</option>
            <option value="bestseller">Bestsellers</option>
            <option value="skincare">Skincare & Beauty</option>
            <option value="organic">Organic Foods</option>
          </select>
        </div>
      </div>

      {/* Products Grid - Zeki style */}
      <div className="w-full">
        <ul className="grid grid-cols-1 xsmall:grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-12 xsmall:gap-y-16">
          {products.map((product) => (
            <li key={product.id} className="group">
              <ProductPreview 
                product={product} 
                region={region} 
                isFeatured={false}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Show more button like Zeki */}
      {products.length >= 12 && (
        <div className="flex justify-center mt-16">
          <a 
            href="/store"
            className="px-8 py-4 bg-ui-fg-base text-white rounded-lg hover:bg-ui-fg-subtle transition-all duration-300 font-medium text-base shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            View All Products →
          </a>
        </div>
      )}
    </div>
  )
}

export default AllProducts
