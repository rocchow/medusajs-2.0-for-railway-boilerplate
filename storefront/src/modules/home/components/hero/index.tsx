import { Heading, Text, Button } from "@medusajs/ui"
import Link from "next/link"

const Hero = () => {
  return (
    <>
      {/* Floating Scrolling Promotional Banner */}
      <div className="fixed top-0 left-0 right-0 w-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white py-3 z-50 overflow-hidden shadow-lg">
        <div className="animate-scroll whitespace-nowrap">
          <span className="inline-block text-sm font-medium px-8">
            ✨ New Spring Collection | Free Gift with Orders $75+ | Free Shipping on $50+ 
          </span>
          <span className="inline-block text-sm font-medium px-8">
            ✨ New Spring Collection | Free Gift with Orders $75+ | Free Shipping on $50+ 
          </span>
          <span className="inline-block text-sm font-medium px-8">
            ✨ New Spring Collection | Free Gift with Orders $75+ | Free Shipping on $50+ 
          </span>
          <span className="inline-block text-sm font-medium px-8">
            ✨ New Spring Collection | Free Gift with Orders $75+ | Free Shipping on $50+ 
          </span>
        </div>
      </div>
      
      {/* Spacer to push content below fixed banner */}
      <div className="h-12"></div>

      {/* Main Hero Section */}
      <div className="w-full bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="content-container py-20 xsmall:py-24 small:py-32 relative">
          <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
            {/* Main Heading */}
            <div className="space-y-4">
              <Heading
                level="h1"
                className="text-5xl xsmall:text-6xl small:text-7xl leading-tight text-slate-900 font-bold tracking-tight"
              >
                Enhance Your
                <span className="block bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent">Natural Beauty</span>
              </Heading>
              <Text className="text-xl xsmall:text-2xl text-slate-600 max-w-2xl leading-relaxed font-light">
                Discover luxurious beauty products crafted with care. 
                From radiant makeup to nourishing skincare - embrace your confidence every day.
              </Text>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col xsmall:flex-row gap-4 mt-8">
              <Link href="/store">
                <Button 
                  size="xlarge" 
                  className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Shop Now
                </Button>
              </Link>
              <Link href="/store">
                <Button 
                  variant="secondary" 
                  size="xlarge"
                  className="border-2 border-pink-300 hover:border-pink-400 text-slate-700 hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-white/80 backdrop-blur-sm"
                >
                  Browse Bestsellers
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <Text className="text-sm font-medium">Cruelty-Free</Text>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <Text className="text-sm font-medium">100% Authentic</Text>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                </div>
                <Text className="text-sm font-medium">Free Returns</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
