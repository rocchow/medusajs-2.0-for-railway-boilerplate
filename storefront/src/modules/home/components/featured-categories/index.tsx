import { Heading, Text } from "@medusajs/ui"
import Link from "next/link"

const categories = [
  {
    title: "Makeup",
    description: "Foundations, lipsticks, and color cosmetics",
    image: "💄",
    href: "/store",
    color: "from-pink-500 to-rose-600"
  },
  {
    title: "Skincare",
    description: "Cleansers, serums, and moisturizers",
    image: "✨",
    href: "/store",
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "Haircare",
    description: "Shampoos, treatments, and styling products",
    image: "💇‍♀️",
    href: "/store",
    color: "from-rose-500 to-pink-600"
  },
  {
    title: "Fragrance",
    description: "Perfumes and body mists for every occasion",
    image: "🌸",
    href: "/store",
    color: "from-fuchsia-500 to-purple-600"
  }
]

const FeaturedCategories = () => {
  return (
    <div className="w-full py-16 xsmall:py-20 small:py-24 bg-white">
      <div className="content-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Heading level="h2" className="text-3xl xsmall:text-4xl small:text-5xl font-bold text-slate-900 mb-4">
            Shop by Category
          </Heading>
          <Text className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our luxurious beauty collections curated for every woman
          </Text>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 xsmall:grid-cols-2 small:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link key={index} href={category.href} className="group">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className={`bg-gradient-to-br ${category.color} p-8 text-white relative`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                  </div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {category.image}
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-2">
                      <Heading level="h3" className="text-xl font-bold">
                        {category.title}
                      </Heading>
                      <Text className="text-sm opacity-90 leading-relaxed">
                        {category.description}
                      </Text>
                    </div>

                    {/* Arrow Icon */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="text-center mt-12">
          <Link href="/categories">
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              View All Categories
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedCategories


