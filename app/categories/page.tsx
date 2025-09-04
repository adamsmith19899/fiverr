"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollFadeWrapper from "@/components/scroll-fade-wrapper"
import { useLanguage } from "@/contexts/language-context"

// You can replace these with actual icons or images later
const categoryIcons = [
  "🎨", "🎬", "📱", "📦", "📘", "🖌️", "💻", "✂️"
]

function CategoriesContent() {
  const { t } = useLanguage()

  const categories = [
    "Logo Design & Brand Identity",
    "YouTube Thumbnail Design",
    "Social Media Graphics & Banners",
    "Packaging & Label Design",
    "Book Cover & eBook Design",
    "Custom Illustrations & Art",
    "Website & UI/UX Design",
    "DIY & Craft Design Services",
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-20">
        <ScrollFadeWrapper delay={0}>
          <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-6xl mx-auto text-center space-y-12">
              {/* Page Title */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Design Categories
                </h1>
                <p className="text-xl text-white/80">Explore our creative services and bring your ideas to life</p>
              </div>

              {/* 4x4 Grid (8 items, 4 columns on large screens, 2 on mobile) */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                {categories.map((category, index) => (
                  <a
                    key={index}
                    href={`/category/${encodeURIComponent(category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''))}`}
                    className="group relative aspect-[4/3] rounded-xl overflow-hidden glass hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-white/10"
                  >
                    {/* Background Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-colors"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-4 flex flex-col items-center justify-center h-full text-center">
                      <span className="text-4xl mb-3 drop-shadow-lg">{categoryIcons[index]}</span>
                      <h3 className="font-semibold text-white text-sm leading-tight group-hover:text-purple-200 transition-colors">
                        {category}
                      </h3>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                         style={{
                           boxShadow: '0 0 30px rgba(147, 51, 234, 0.4)',
                         }}></div>
                  </a>
                ))}
              </div>

              {/* Optional Caption */}
              <p className="text-white/60 text-sm mt-8">
                Click on any category to explore services, portfolios, and order custom designs
              </p>
            </div>
          </section>
        </ScrollFadeWrapper>
      </main>

      <Footer />
    </div>
  )
}

export default function CategoriesPage() {
  return <CategoriesContent />
}
