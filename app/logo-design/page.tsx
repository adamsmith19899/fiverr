"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollFadeWrapper from "@/components/scroll-fade-wrapper"
import { ExternalLink, ZoomIn } from "lucide-react"

// Logo design portfolio items
const logoDesigns = [
  {
    id: 1,
    title: "Modern Tech Logo",
    description: "Professional modern tech logo design for startups and technology companies. This includes a sleek, contemporary design that conveys innovation and cutting-edge technology. Perfect for SaaS platforms, tech startups, software companies, and digital agencies. The package includes multiple design concepts, vector source files, full color variations, transparent backgrounds, and commercial usage rights. We focus on clean lines, geometric shapes, and minimalist typography to create a timeless brand identity that stands out in the competitive tech industry.",
    link: "https://www.fiverr.com/logo-design",
    iframeSrc: "https://go.fiverr.com/visit/?bta=1143605&brand=fiverrmarketplace&landingPage=https%253A%252F%252Fwww.fiverr.com%252Fcaroline_s07%252Fdo-custom-3d-professional-logo-with-free-vector-files%253Fcontext_referrer%253Dsearch_gigs_with_recommendations_row_1%2526source%253Dtop-bar%2526ref_ctx_id%253Df4d8c14c4f3c480d8a02a49ade44a0ba%2526pckg_id%253D1%2526pos%253D1%2526context_type%253Dauto%2526funnel%253Df4d8c14c4f3c480d8a02a49ade44a0ba%2526seller_online%253Dtrue%2526fiverr_choice%253Dtrue%2526imp_id%253D6e03000b-1def-41cd-bea2-f1c502398053"
  },
  {
    id: 2,
    title: "Elegant Brand Identity",
    description: "Complete luxury brand identity package for high-end businesses and premium brands. This comprehensive service includes logo design, color palette selection, typography guidance, brand guidelines document, business card design, and social media assets. Ideal for fashion brands, luxury goods, premium services, and upscale hospitality businesses. The design approach emphasizes sophistication, elegance, and exclusivity with attention to fine details, premium materials representation, and timeless aesthetics that communicate quality and refinement.",
    link: "https://www.fiverr.com/brand-identity",
    iframeSrc: "https://www.fiverr.com/brand-identity"
  },
  {
    id: 3,
    title: "Minimalist Design",
    description: "Clean, simple, and impactful minimalist logo designs for modern brands that value clarity and elegance. This service focuses on essential elements only, removing any unnecessary details to create a powerful visual identity. Perfect for brands that want to communicate simplicity, efficiency, and modernity. The minimalist approach works exceptionally well for tech companies, lifestyle brands, wellness businesses, and startups that want a sophisticated yet approachable image. Includes multiple minimalist concepts, various formats, and comprehensive brand application examples.",
    link: "https://www.fiverr.com/minimalist-logo",
    iframeSrc: "https://www.fiverr.com/minimalist-logo"
  },
  {
    id: 4,
    title: "Vintage Style Logo",
    description: "Retro-inspired vintage logo designs that capture classic appeal and timeless charm. Perfect for brands wanting to evoke nostalgia, tradition, and authenticity. Ideal for craft breweries, artisanal food products, barber shops, boutique stores, and heritage brands. The designs incorporate elements from various eras including Art Deco, Victorian, Mid-Century Modern, and 1950s Americana. Each logo is carefully crafted with authentic period details, ornate typography, and classic color palettes that transport viewers to a bygone era while remaining functional for modern business applications.",
    link: "https://www.fiverr.com/vintage-logo",
    iframeSrc: "https://www.fiverr.com/vintage-logo"
  },
  {
    id: 5,
    title: "Creative Mascot Logo",
    description: "Custom character mascots and illustrated logos that create memorable brand personalities. This service creates unique, engaging characters that become the face of your brand. Perfect for children's products, sports teams, food brands, entertainment venues, and any business wanting a friendly, approachable image. The process includes character concept development, multiple style options, expression variations, and application examples showing how the mascot works across different media. Each mascot is designed to be distinctive, scalable, and full of personality that resonates with your target audience.",
    link: "https://www.fiverr.com/mascot-logo",
    iframeSrc: "https://www.fiverr.com/mascot-logo"
  },
  {
    id: 6,
    title: "Professional Business Logo",
    description: "Corporate identity and professional business logos for established companies and enterprises. This service creates sophisticated, authoritative logos that convey trust, reliability, and expertise. Ideal for law firms, financial institutions, consulting agencies, medical practices, and other professional service providers. The designs balance tradition with modernity, using classic typography, conservative color palettes, and clean layouts that project competence and stability. Includes comprehensive brand application mockups showing how the logo appears on business cards, letterheads, presentations, and digital platforms.",
    link: "https://www.fiverr.com/business-logo",
    iframeSrc: "https://www.fiverr.com/business-logo"
  },
  {
    id: 7,
    title: "Handcrafted Lettering",
    description: "Custom typography and hand-lettered logos that showcase unique, artisanal craftsmanship. This service creates one-of-a-kind lettering designs where every curve and stroke is carefully crafted by hand. Perfect for brands wanting to emphasize authenticity, creativity, and human touch in their identity. Ideal for craft breweries, artisanal food products, creative agencies, wedding services, and boutique businesses. The process includes multiple lettering styles, custom flourishes, and careful attention to kerning and spacing to create logos that feel personal and distinctive rather than computer-generated.",
    link: "https://www.fiverr.com/hand-lettering",
    iframeSrc: "https://www.fiverr.com/hand-lettering"
  },
  {
    id: 8,
    title: "Icon-Based Logo",
    description: "Symbolic, icon-based logos that represent your brand essence through powerful visual metaphors. This service creates memorable, scalable icons that work independently of text and communicate your brand's core values at a glance. Perfect for apps, tech companies, service businesses, and brands that need maximum versatility across different platforms and sizes. The design process focuses on conceptual thinking, creating symbols that have multiple layers of meaning related to your business. Includes various icon styles, color options, and extensive testing to ensure the icon works effectively at small sizes and in different contexts.",
    link: "https://www.fiverr.com/icon-logo",
    iframeSrc: "https://www.fiverr.com/icon-logo"
  },
  {
    id: 9,
    title: "Complete Brand Package",
    description: "Comprehensive full-service branding package that includes everything you need to establish a cohesive brand identity. This premium service goes beyond just a logo to include complete brand strategy, color psychology analysis, typography system, brand voice guidelines, stationery design, social media templates, email signature design, and brand implementation guide. Perfect for startups launching their brand or established businesses rebranding. The package ensures consistency across all touchpoints and provides you with everything needed to present a professional, unified brand image to your customers and stakeholders.",
    link: "https://www.fiverr.com/brand-package",
    iframeSrc: "https://www.fiverr.com/brand-package"
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
                    className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-400/20 flex flex-col h-96"
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {/* Iframe Container - Replaces Image */}
                    <div className="relative flex-1 min-h-0">
                      <iframe
                        src={item.iframeSrc}
                        className="absolute inset-0 w-full h-full rounded-t-2xl border-0"
                        style={{ minHeight: '200px' }}
                        title={item.title}
                        loading="lazy"
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
                    <div className="p-6 flex-1 min-h-0 overflow-y-auto custom-scrollbar">
                      <h3 className="font-bold text-white text-lg mb-3 group-hover:text-green-300 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed mb-4">
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
