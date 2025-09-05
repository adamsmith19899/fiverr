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
    title: "Custom 3d professional logo design",
    description: "Are you looking for a professional, impactful 3D logo that will make your brand stand out in a crowded market? Look no further! With over 10 years of professional experience, I specialize in creating custom 3D logos that are visually striking, versatile, and tailored to your brands identity.",
    image: "/logo/1.jpg",
    link: "https://go.fiverr.com/visit/?bta=1143605&brand=fiverrmarketplace&landingPage=https%253A%252F%252Fwww.fiverr.com%252Fcaroline_s07%252Fdo-custom-3d-professional-logo-with-free-vector-files%253Fcontext_referrer%253Dsearch_gigs_with_recommendations_row_1%2526source%253Dtop-bar%2526ref_ctx_id%253Df4d8c14c4f3c480d8a02a49ade44a0ba%2526pckg_id%253D1%2526pos%253D1%2526context_type%253Dauto%2526funnel%253Df4d8c14c4f3c480d8a02a49ade44a0ba%2526seller_online%253Dtrue%2526fiverr_choice%253Dtrue%2526imp_id%253D6e03000b-1def-41cd-bea2-f1c502398053"
  },
  {
    id: 2,
    title: "Modern Minimalist logo design for your business",
    description: "Minimalist Business Logo | Real Estate logo | YouTube Channel | Beauty | Care | Finance | Food | Fashion | Travel | Event | Construction | Luxury | Social Media | Retail | Sports & Fitness | Technology",
    image: "/logo/2.jpg",
    link: "https://go.fiverr.com/visit/?bta=1143605&brand=fiverrmarketplace&landingPage=https%253A%252F%252Fwww.fiverr.com%252Fmewindson%252Fdo-minimal-logo-design%253Fcontext_referrer%253Dsearch_gigs_with_recommendations_row_1%2526source%253Dtop-bar%2526ref_ctx_id%253Df4d8c14c4f3c480d8a02a49ade44a0ba%2526pckg_id%253D1%2526pos%253D3%2526context_type%253Dauto%2526funnel%253Df4d8c14c4f3c480d8a02a49ade44a0ba%2526seller_online%253Dtrue%2526imp_id%253D6488fcfa-2f87-4e4c-9327-846c60a29d51"
  },
  {
    id: 3,
    title: "Professional business logo design for your brand",
    description: "Specializing in creating professional minimalist business logo designs that are simple yet powerful the kind of logo that speaks for your brand even without words. A minimalist logo is not just a trend it's a timeless style that looks great everywhere.",
    image: "/logo/3.jpg",
    link: "https://go.fiverr.com/visit/?bta=1143605&brand=fiverrmarketplace&landingPage=https%253A%252F%252Fwww.fiverr.com%252Fsidrraaa%252Fdo-modern-minimalist-logo-design%253Fcontext_referrer%253Dsearch_gigs_with_recommendations_row_1%2526source%253Dtop-bar%2526ref_ctx_id%253Df4d8c14c4f3c480d8a02a49ade44a0ba%2526pckg_id%253D1%2526pos%253D13%2526context_type%253Dauto%2526funnel%253Df4d8c14c4f3c480d8a02a49ade44a0ba%2526imp_id%253Ddb8c9401-8792-49f4-845b-9b114076a164"
  },
  {
    id: 4,
    title: "Professional & Modern business logo design",
    description: "With their expertise in graphic design and branding, they understand the significance of a well-crafted logo in establishing a strong brand identity. They take a collaborative approach, working closely with clients to understand their vision, target audience, and unique selling points. This enables them to create designs that not only stand out but also resonate with the target market.",
    image: "/logo/4.jpg",
    link: "https://go.fiverr.com/visit/?bta=1143605&brand=fiverrmarketplace&landingPage=https%253A%252F%252Fwww.fiverr.com%252Flogo_expert091%252Fdo-professional-business-logo-design-at-a-competitive-price%253Fcontext_referrer%253Dsearch_gigs_with_recommendations_row_1%2526source%253Dtop-bar%2526ref_ctx_id%253Df4d8c14c4f3c480d8a02a49ade44a0ba%2526pckg_id%253D1%2526pos%253D19%2526context_type%253Dauto%2526funnel%253Df4d8c14c4f3c480d8a02a49ade44a0ba%2526seller_online%253Dtrue%2526imp_id%253D007b29c5-8f5c-42fe-b925-0a20c095bcb9"
  },
  {
    id: 5,
    title: "Logo Design for your business or brand",
    description: "With over nine years of experience, Saad Tariq specializes in logo design and branding. His approach is centered on crafting simple, modern, and timeless logos that provide businesses with a foundation for a strong and consistent brand identity.",
    image: "/logo/5.jpg",
    link: "https://go.fiverr.com/visit/?bta=1143605&brand=fiverrmarketplace&landingPage=https%253A%252F%252Fwww.fiverr.com%252Fsaad_tariq15%252Fdo-3d-modern-business-logo-design-for-your-brand%253Fcontext_referrer%253Dsearch_gigs_with_recommendations_row_1%2526source%253Dtop-bar%2526ref_ctx_id%253Df4d8c14c4f3c480d8a02a49ade44a0ba%2526pckg_id%253D1%2526pos%253D22%2526context_type%253Dauto%2526funnel%253Df4d8c14c4f3c480d8a02a49ade44a0ba%2526seller_online%253Dtrue%2526imp_id%253Dde936020-8fa1-41be-b223-f3887905b64a"
  },
  {
    id: 6,
    title: "Beautiful Initials, Monogram and highly minimal wedding logo in 24hr",
    description: "Creating professional hand drawn premium high quality minimalist initials/ lettering logos combined with floral crests or custom illustrations that will perfectly fit in your wedding invitations and other wedding stationery.",
    image: "/logo/6.jpg",
    link: "https://go.fiverr.com/visit/?bta=1143605&brand=fiverrmarketplace&landingPage=https%253A%252F%252Fwww.fiverr.com%252Faroosagraphics%252Fdesign-modern-initials-and-hand-drawn-line-art-based-wedding-logo%253Fcontext_referrer%253Dsearch_gigs_with_recommendations_row_1%2526source%253Dtop-bar%2526ref_ctx_id%253Df4d8c14c4f3c480d8a02a49ade44a0ba%2526pckg_id%253D1%2526pos%253D42%2526context_type%253Dauto%2526funnel%253Df4d8c14c4f3c480d8a02a49ade44a0ba%2526imp_id%253D03b6ef85-d50e-4f3f-8220-fe68d7f2e7e7"
  },
  {
    id: 7,
    title: "Custom Sacred Geometry, Mystical, Yoga, Holistic, Spiritual Logo Design",
    description: "Are you looking for a logo that is more than a design but an experience of a spiritual nature? A logo that captures the essence of sacred geometry, mystical, yoga, spiritual and holistic vibes? You've come to the right spot!",
    image: "/logo/7.jpg",
    link: "https://go.fiverr.com/visit/?bta=1143605&brand=fiverrmarketplace&landingPage=https%253A%252F%252Fwww.fiverr.com%252Flaiba_d3signs%252Fdo-custom-sacred-geometry-mystical-yoga-holistic-spiritual-logo-design%253Fcontext_referrer%253Dsearch_gigs_with_recommendations_row_1%2526source%253Dtop-bar%2526ref_ctx_id%253Df4d8c14c4f3c480d8a02a49ade44a0ba%2526pckg_id%253D1%2526pos%253D48%2526context_type%253Dauto%2526funnel%253Df4d8c14c4f3c480d8a02a49ade44a0ba%2526imp_id%253Ddec716b5-deab-4c20-923e-b94cf735e52f"
  },
  {
    id: 8,
    title: "Highly Luxury Minimalist & Modern business logo design",
    description: "Looking for a modern, minimalist, and luxury business logo design that sets your business apart? You're in the right hands",
    image: "/logo/8.png",
    link: "https://go.fiverr.com/visit/?bta=1143605&brand=fiverrmarketplace&landingPage=https%253A%252F%252Fwww.fiverr.com%252Fdesignglint%252Fhighly-luxury-minimalist-and-modern-business-logo-design%253Fcontext_referrer%253Dsearch_gigs_with_recommendations_row_1%2526source%253Dtop-bar%2526ref_ctx_id%253Df4d8c14c4f3c480d8a02a49ade44a0ba%2526pckg_id%253D1%2526pos%253D40%2526context_type%253Dauto%2526funnel%253Df4d8c14c4f3c480d8a02a49ade44a0ba%2526seller_online%253Dtrue%2526imp_id%253D050d07e5-4fa4-4eea-ad95-3c99bfdb3fcd"
  },
  {
    id: 9,
    title: "Unique Hand Lettering & Typography Logo",
    description: "Each logo is meticulously crafted by hand, using paper and pencil, ensuring every design is original and perfectly aligned with your brands identity. My approach blends creativity with professionalism to deliver standout results that elevate your business",
    image: "/logo/9.jpg",
    link: "https://go.fiverr.com/visit/?bta=1143605&brand=fiverrmarketplace&landingPage=https%253A%252F%252Fwww.fiverr.com%252Fhasans_studio%252Fdesign-a-unique-hand-lettering-and-typography-logo%253Fcontext_referrer%253Dsearch_gigs_with_recommendations_row_1%2526source%253Dtop-bar%2526ref_ctx_id%253Df4d8c14c4f3c480d8a02a49ade44a0ba%2526pckg_id%253D1%2526pos%253D39%2526context_type%253Dauto%2526funnel%253Df4d8c14c4f3c480d8a02a49ade44a0ba%2526imp_id%253D73c871f9-13cb-4483-91de-d76c28f245a1"
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
                    href="https://go.fiverr.com/visit/?bta=1143605&brand=fiverrmarketplace&landingPage=https%253A%252F%252Fwww.fiverr.com%252Fsearch%252Fgigs%253Fquery%253Dlogo%252520design%2526source%253Dtop-bar%2526ref_ctx_id%253Df4d8c14c4f3c480d8a02a49ade44a0ba%2526search_in%253Deverywhere%2526search-autocomplete-original-term%253Dlogo%252520design"
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
