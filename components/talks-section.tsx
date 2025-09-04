"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { Mail, MapPin, Globe } from "lucide-react"

export default function TalksSection() {
  const { t } = useLanguage()

  const renderTextWithBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g)
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="text-white font-semibold">
            {part.slice(2, -2)}
          </strong>
        )
      }
      return part
    })
  }

  const popularCategories = [
    "🎨 Logo Design & Branding",
    "💻 Website Development",
    "📱 App Development",
    "📊 SEO & Digital Marketing",
    "✍️ Content Writing",
    "🎬 Video Editing",
    "📸 Photo Editing",
    "🔍 Social Media Management",
    "📈 Business Consulting",
    "🎯 E-commerce Solutions"
  ]

  const trendingServices = [
    "⭐ AI Chatbot Development",
    "🚀 Crypto & Blockchain Services",
    "🤖 AI Content Creation",
    "📱 TikTok & Social Media Growth",
    "🌐 WordPress Development",
    "🎨 Canva Design Templates",
    "📊 Data Analysis & Visualization",
    "🔗 Smart Contract Development",
    "📧 Email Marketing Campaigns",
    "🎵 Podcast Editing & Production"
  ]

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Popular Fiverr Services</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Featured Gig */}
          <div className="lg:col-span-1">
            <Card className="glass p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 group">
              <div className="mb-4">
                <div className="w-full h-48 rounded-lg overflow-hidden mb-4 relative">
                  <Image
                    src="/images/talks.jpg"
                    alt="Top-rated Fiverr gig - Professional services"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              <p className="text-white/75 leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-300">
                {renderTextWithBold(t("Join Fiverr Below"))}
              </p>

              <Button className="w-full glass glass-hover border border-white/20 hover:border-green-400/60 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/20 group/btn">
                <Mail className="w-5 h-5 mr-2 transition-transform duration-300 group-hover/btn:rotate-12 group-hover/btn:text-green-400" />
                {t("Join Now")}
              </Button>
            </Card>
          </div>

          {/* Popular Categories */}
          <div className="lg:col-span-1">
            <Card className="glass p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 group">
              <div className="flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 mr-2 text-blue-400" />
                <h3 className="text-2xl font-bold text-center text-white group-hover:text-blue-400 transition-colors duration-300">
                  Popular Categories
                </h3>
              </div>
              <div className="space-y-3">
                {popularCategories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-2 text-white/75 hover:text-white hover:translate-x-2 transition-all duration-300"
                  >
                    <span className="text-sm mt-1 text-blue-400">•</span>
                    <span className="text-sm hover:text-blue-300 transition-colors duration-200">{category}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Trending Services */}
          <div className="lg:col-span-1">
            <Card className="glass p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 group">
              <div className="flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 mr-2 text-purple-400" />
                <h3 className="text-2xl font-bold text-center text-white group-hover:text-purple-400 transition-colors duration-300">
                  Trending Services
                </h3>
              </div>
              <div className="space-y-3">
                {trendingServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-2 text-white/75 hover:text-white hover:translate-x-2 transition-all duration-300"
                  >
                    <span className="text-sm mt-1 text-purple-400">•</span>
                    <span className="text-sm hover:text-purple-300 transition-colors duration-200">{service}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
