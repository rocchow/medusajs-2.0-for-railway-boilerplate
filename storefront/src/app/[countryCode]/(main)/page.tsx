import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import AllProducts from "@modules/home/components/all-products"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Evola - Premium Products Store",
  description:
    "Discover our delightful selection of premium products. We take pride in offering quality items that cater to all your needs.",
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
      <Hero />
      
      {/* All Products Section - Zeki Style */}
      <AllProducts region={region} countryCode={countryCode} />
      
      {/* Featured Collections (if available) */}
      {collections && collections.length > 0 && (
        <div className="py-12 bg-ui-bg-subtle">
          <ul className="flex flex-col gap-x-6">
            <FeaturedProducts collections={collections} region={region} />
          </ul>
        </div>
      )}
    </>
  )
}
