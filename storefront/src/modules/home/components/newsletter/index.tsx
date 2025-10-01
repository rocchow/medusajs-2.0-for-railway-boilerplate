"use client"

import { Heading, Text, Button, Input } from "@medusajs/ui"
import { useState } from "react"

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true)
      setIsLoading(false)
      setEmail("")
    }, 1000)
  }

  if (isSubscribed) {
    return (
      <div className="w-full py-16 xsmall:py-20 small:py-24 bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600">
        <div className="content-container">
          <div className="max-w-2xl mx-auto text-center text-white">
            <div className="mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <Heading level="h2" className="text-3xl font-bold mb-4">
                Welcome to Beauty Heaven!
              </Heading>
              <Text className="text-xl opacity-90">
                Thank you for subscribing! You'll be the first to know about new beauty drops, exclusive offers, and beauty tips.
              </Text>
            </div>
            <Button 
              onClick={() => setIsSubscribed(false)}
              variant="secondary"
              className="bg-white/20 hover:bg-white/30 text-white border-white/30"
            >
              Subscribe Another Email
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full py-16 xsmall:py-20 small:py-24 bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="content-container relative">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Header */}
          <div className="mb-12">
            <Heading level="h2" className="text-3xl xsmall:text-4xl small:text-5xl font-bold mb-6">
              Join the Beauty Community
            </Heading>
            <Text className="text-xl xsmall:text-2xl opacity-90 leading-relaxed max-w-2xl mx-auto">
              Be the first to know about new beauty drops, exclusive offers, and get expert beauty tips delivered to your inbox.
            </Text>
          </div>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12">
            <div className="flex flex-col xsmall:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-6 py-4 text-lg rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:border-white/50 focus:bg-white/20"
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="px-8 py-4 bg-white text-pink-600 hover:bg-gray-100 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-pink-600 border-t-transparent rounded-full animate-spin" />
                    Subscribing...
                  </div>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </div>
          </form>

          {/* Benefits */}
          <div className="grid grid-cols-1 xsmall:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <Text className="font-semibold">Exclusive Offers</Text>
              <Text className="text-sm opacity-80">Get access to member-only discounts and early sales</Text>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <Text className="font-semibold">New Arrivals</Text>
              <Text className="text-sm opacity-80">Be first to discover the latest outdoor gear and equipment</Text>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <Text className="font-semibold">Expert Tips</Text>
              <Text className="text-sm opacity-80">Receive outdoor guides and adventure tips from our experts</Text>
            </div>
          </div>

          {/* Privacy Note */}
          <Text className="text-sm opacity-70 mt-8">
            We respect your privacy. Unsubscribe at any time. No spam, just great outdoor content.
          </Text>
        </div>
      </div>
    </div>
  )
}

export default Newsletter


