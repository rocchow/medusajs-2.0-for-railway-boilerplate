import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import AllProducts from "@modules/home/components/all-products"
import FeaturedCategories from "@modules/home/components/featured-categories"
import Testimonials from "@modules/home/components/testimonials"
import Features from "@modules/home/components/features"
import Newsletter from "@modules/home/components/newsletter"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Luxurious Beauty Products - Premium Makeup & Skincare",
  description:
    "Discover our curated selection of premium beauty products. From radiant makeup to nourishing skincare - enhance your natural beauty with authentic, cruelty-free cosmetics. Free shipping $50+",
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  return (
    <>
      {/* Hero Section with promotional banner */}
      <Hero />
      
      {/* Featured Categories */}
      <FeaturedCategories />
      
      {/* All Products Section */}
      <AllProducts region={region} countryCode={countryCode} />
      
      {/* Featured Collections (if available) */}
      {collections && collections.length > 0 && (
        <div className="py-12 bg-ui-bg-subtle">
          <ul className="flex flex-col gap-x-6">
            <FeaturedProducts collections={collections} region={region} />
          </ul>
        </div>
      )}

      {/* Customer Testimonials */}
      <Testimonials />

      {/* Features & Benefits */}
      <Features />

      {/* Newsletter Signup */}
      <Newsletter />
    </>
  )
}
