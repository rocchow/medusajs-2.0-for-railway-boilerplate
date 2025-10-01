import { Heading, Text } from "@medusajs/ui"

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
      </svg>
    ),
    title: "Free Shipping",
    subtitle: "Orders Over $50",
    description: "Free shipping on all beauty orders over $50. Fast delivery with tracking included.",
    color: "text-pink-600"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
    ),
    title: "Beauty Experts",
    subtitle: "Professional Guidance",
    description: "Our beauty experts are ready to help you find the perfect products for your skin type and needs.",
    color: "text-rose-600"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
      </svg>
    ),
    title: "Easy Returns",
    subtitle: "30-Day Policy",
    description: "Not satisfied? Return your purchase within 30 days for a full refund or exchange.",
    color: "text-purple-600"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    title: "100% Authentic",
    subtitle: "Certified Products",
    description: "All our beauty products are 100% authentic and sourced directly from authorized distributors.",
    color: "text-fuchsia-600"
  }
]

const Features = () => {
  return (
    <div className="w-full py-16 xsmall:py-20 small:py-24 bg-white">
      <div className="content-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="h2" className="text-3xl xsmall:text-4xl small:text-5xl font-bold text-slate-900 mb-4">
            Why Choose Us
          </Heading>
          <Text className="text-lg text-slate-600 max-w-2xl mx-auto">
            We're committed to providing the best beauty shopping experience with authentic products and expert guidance
          </Text>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 xsmall:grid-cols-2 small:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-slate-50 to-slate-100 ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <Heading level="h3" className="text-xl font-bold text-slate-900">
                    {feature.title}
                  </Heading>
                  <Text className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                    {feature.subtitle}
                  </Text>
                  <Text className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </Text>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 xsmall:p-12 text-white">
          <div className="grid grid-cols-1 small:grid-cols-2 gap-8">
            {/* Location 1 */}
            <div className="space-y-4">
              <Heading level="h3" className="text-xl font-bold">
                📍 Fairview Mall Location
              </Heading>
              <div className="space-y-2 text-slate-300">
                <Text>Fairview Mall 1F, Toronto, ON M2J 5A7</Text>
                <Text>📧 support@borderlineoutdoor.com</Text>
                <Text>📞 416-800-8374</Text>
              </div>
            </div>

            {/* Location 2 */}
            <div className="space-y-4">
              <Heading level="h3" className="text-xl font-bold">
                📍 Richmond Hill Location
              </Heading>
              <div className="space-y-2 text-slate-300">
                <Text>160 West Beaver Creek Rd, Unit 5</Text>
                <Text>Richmond Hill, ON L4B 1B4</Text>
                <Text>📧 support@borderlineoutdoor.com</Text>
                <Text>📞 416-800-9053</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features


