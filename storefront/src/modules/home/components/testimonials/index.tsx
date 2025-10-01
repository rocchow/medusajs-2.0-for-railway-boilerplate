import { Heading, Text } from "@medusajs/ui"

const testimonials = [
  {
    name: "Emily R.",
    location: "Los Angeles, CA",
    rating: 5,
    text: "This store has the most amazing selection of beauty products! The quality is outstanding and my skin has never looked better. The customer service is incredible too!",
    avatar: "ER"
  },
  {
    name: "Jessica M.",
    location: "New York, NY", 
    rating: 5,
    text: "I'm obsessed with their makeup collection! Every product is high-quality and long-lasting. The packaging is beautiful and they always have the latest trends.",
    avatar: "JM"
  },
  {
    name: "Sophie L.",
    location: "Miami, FL",
    rating: 5,
    text: "Finally found a store that truly understands beauty! From skincare to makeup, everything is cruelty-free and works wonderfully. My confidence has never been higher!",
    avatar: "SL"
  }
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

const Testimonials = () => {
  return (
    <div className="w-full py-16 xsmall:py-20 small:py-24 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      <div className="content-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="h2" className="text-3xl xsmall:text-4xl small:text-5xl font-bold text-slate-900 mb-4">
            What Our Customers Say
          </Heading>
          <Text className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join thousands of beautiful women who trust us for their beauty needs
          </Text>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 small:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
                {/* Quote Icon */}
                <div className="mb-6">
                  <svg className="w-8 h-8 text-blue-500 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>

                {/* Rating */}
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>

                {/* Testimonial Text */}
                <Text className="text-slate-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </Text>

                {/* Customer Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <Text className="font-semibold text-slate-900">
                      {testimonial.name}
                    </Text>
                    <Text className="text-sm text-slate-500">
                      {testimonial.location}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 grid grid-cols-2 small:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-600">10K+</div>
            <Text className="text-slate-600">Happy Customers</Text>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-green-600">4.9★</div>
            <Text className="text-slate-600">Average Rating</Text>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-600">500+</div>
            <Text className="text-slate-600">Products</Text>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-orange-600">24/7</div>
            <Text className="text-slate-600">Support</Text>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials


