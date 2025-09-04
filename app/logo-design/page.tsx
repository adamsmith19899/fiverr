"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollFadeWrapper from "@/components/scroll-fade-wrapper"
import Image from "next/image"
import { ExternalLink, ZoomIn } from "lucide-react"

// Logo design portfolio items
const logoDesigns = [
  {
    id: 1,
    title: "Modern Tech Logo",
    description: "Sleek and contemporary logo for technology startups",
    image: "/images/logo-designs/tech-logo.jpg",
    link: "https://www.fiverr.com/logo-design"
  },
  {
    id: 2,
    title: "Elegant Brand Identity",
    description: "Complete brand package for luxury businesses",
    image: "/images/logo-designs/luxury-brand.jpg",
    link: "https://www.fiverr.com/brand-identity"
  },
  {
    id: 3,
    title: "Minimalist Design",
    description: "Clean and simple logo for modern brands",
    image: "/images/logo-designs/minimalist-logo.jpg",
    link: "https://www.fiverr.com/minimalist-logo"
  },
  {
    id: 4,
    title: "Vintage Style Logo",
    description: "Retro-inspired designs with classic appeal",
    image: "/images/logo-designs/vintage-logo.jpg",
    link: "https://www.fiverr.com/vintage-logo"
  },
  {
    id: 5,
    title: "Creative Mascot Logo",
    description: "Custom character mascots for memorable branding",
    image: "/images/logo-designs/mascot-logo.jpg",
    link: "https://www.fiverr.com/mascot-logo"
  },
  {
    id: 6,
    title: "Professional Business Logo",
    description: "Corporate identity for established businesses",
    image: "/images/logo-designs/business-logo.jpg",
    link: "https://www.fiverr.com/business-logo"
  },
  {
    id: 7,
    title: "Handcrafted Lettering",
    description: "Custom typography and hand-lettered logos",
    image: "/images/logo-designs/lettering-logo.jpg",
    link: "https://www.fiverr.com/hand-lettering"
  },
  {
    id: 8,
    title: "Icon-Based Logo",
    description: "Symbolic logos that represent your brand essence",
    image: "/images/logo-designs/icon-logo.jpg",
    link: "https://www.fiverr.com/icon-logo"
  },
  {
    id: 9,
    title: "Complete Brand Package",
    description: "Full branding including logo, colors, and guidelines",
    image: "/images/logo-designs/full-brand.jpg",
    link: "https://www.fiverr.com/brand-package"
  }
]

function LogoDesignPage() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-20">
        <ScrollFadeWrapper delay={0}>
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                  Logo Design & Brand Identity
                </h1>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Discover professional logo design and brand identity services from top-rated Fiverr sellers. 
                  Each gig includes custom designs, multiple revisions, and full commercial rights.
                </p>
              </div>

              {/* 3x3 Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {logoDesigns.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-400/20"
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Hover Effect */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-green-500/90 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                          <ZoomIn className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-bold text-white text-lg mb-2 group-hover:text-green-300 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-white/70 text-sm mb-4">
                        {item.description}
                      </p>
                      <div className="flex items-center text-green-400 group-hover:text-green-300 text-sm font-medium transition-colors duration-300">
                        View Gig
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </div>
                    </div>

                    {/* Border Highlight */}
                    <div className={`absolute inset-0 rounded-2xl border-2 border-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${hoveredItem === item.id ? 'opacity-100' : 'opacity-0'}`} />
                  </a>
                ))}
              </div>

              {/* Call to Action */}
              <div className="text-center max-w-3xl mx-auto">
                <div className="glass rounded-2xl p-8 border border-white/10">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Ready to Get Your Professional Logo?
                  </h2>
                  <p className="text-white/80 mb-6">
                    Browse hundreds of top-rated logo design gigs on Fiverr and find the perfect designer for your brand.
                  </p>
                  <a
                    href="https://www.fiverr.com/c/graphics-design/logo-design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Explore Logo Design Gigs
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </ScrollFadeWrapper>
      </main>

      <Footer />
    </div>
  )
}

export default LogoDesignPage
