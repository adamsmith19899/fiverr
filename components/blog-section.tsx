"use client"

import { useState, useEffect } from "react"
import { ExternalLink, Calendar, Search, Grid, List } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface FiverrGig {
  title: string
  link: string
  rating: string
  price: string
  description: string
  image?: string
}

export default function PopularGigsSection() {
  const [gigs, setGigs] = useState<FiverrGig[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<"featured" | "all">("featured")
  const [searchQuery, setSearchQuery] = useState("")
  const { t } = useLanguage()

  useEffect(() => {
    fetchGigs()
  }, [])

  const fetchGigs = async () => {
    try {
      // Simulate fetching popular Fiverr gigs
      const mockGigs: FiverrGig[] = [
        {
          title: "Professional Logo Design",
          link: "https://www.fiverr.com/",
          rating: "⭐ 5.0 (1.2k reviews)",
          price: "Starting at $50",
          description: "Custom logo design with unlimited revisions and source files",
          image: "/images/logo-design.jpg"
        },
        {
          title: "Website Development",
          link: "https://www.fiverr.com/",
          rating: "⭐ 4.9 (890 reviews)",
          price: "Starting at $100",
          description: "Responsive website development with modern technologies",
          image: "/images/web-development.jpg"
        },
        {
          title: "Social Media Marketing",
          link: "https://www.fiverr.com/",
          rating: "⭐ 4.8 (750 reviews)",
          price: "Starting at $80",
          description: "Complete social media strategy and management",
          image: "/images/social-media.jpg"
        },
        {
          title: "SEO Optimization",
          link: "https://www.fiverr.com/",
          rating: "⭐ 4.9 (620 reviews)",
          price: "Starting at $120",
          description: "Comprehensive SEO audit and optimization services",
          image: "/images/seo.jpg"
        },
        {
          title: "Content Writing",
          link: "https://www.fiverr.com/",
          rating: "⭐ 5.0 (950 reviews)",
          price: "Starting at $40",
          description: "High-quality content writing for blogs and websites",
          image: "/images/content-writing.jpg"
        },
        {
          title: "Video Editing",
          link: "https://www.fiverr.com/",
          rating: "⭐ 4.8 (540 reviews)",
          price: "Starting at $60",
          description: "Professional video editing with effects and transitions",
          image: "/images/video-editing.jpg"
        }
      ]
      setGigs(mockGigs)
    } catch (error) {
      console.error("Error fetching gigs:", error)
    } finally {
      setLoading(false)
    }
  }

  const cleanText = (text: string | undefined, fallback = "") => {
    if (!text || text === "undefined" || text.trim() === "") {
      return fallback
    }
    return text.trim()
  }

  const filteredGigs = gigs.filter(
    (gig) =>
      gig.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gig.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const featuredGigs = gigs.slice(0, 6)

  return (
    <section id="gigs" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-sans">
            Popular Fiverr Gigs
          </h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">{t("gigs.subtitle")}</p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex bg-white/5 backdrop-blur-md rounded-full p-1 border border-white/10">
              <button
                onClick={() => setActiveTab("featured")}
                className={`flex items-center px-6 py-2 rounded-full transition-all duration-300 ${
                  activeTab === "featured"
                    ? "bg-white/20 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <Grid className="w-4 h-4 mr-2" />
                Featured
              </button>
              <button
                onClick={() => setActiveTab("all")}
                className={`flex items-center px-6 py-2 rounded-full transition-all duration-300 ${
                  activeTab === "all" ? "bg-white/20 text-white" : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <List className="w-4 h-4 mr-2" />
                All Gigs ({gigs.length})
              </button>
            </div>

            {/* Search Bar - only show in 'all' tab */}
            {activeTab === "all" && (
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search gigs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full pl-10 pr-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent w-64"
                />
              </div>
            )}
          </div>
        </div>

        {/* Content based on active tab */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 animate-pulse border border-white/10">
                <div className="h-40 bg-white/10 rounded-lg mb-4"></div>
                <div className="h-4 bg-white/20 rounded mb-4"></div>
                <div className="h-3 bg-white/20 rounded mb-2"></div>
                <div className="h-3 bg-white/20 rounded mb-4"></div>
                <div className="h-8 bg-white/20 rounded"></div>
              </div>
            ))}
          </div>
        ) : gigs.length > 0 ? (
          <>
            {/* Featured Tab - Cards View */}
            {activeTab === "featured" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredGigs.map((gig, index) => (
                  <a
                    key={index}
                    href={gig.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl block cursor-pointer"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={gig.image || "/placeholder.svg?height=200&width=400&query=gig cover"}
                        alt={gig.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg?height=200&width=400"
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center text-green-400 text-sm mb-3">
                        {gig.rating}
                      </div>

                      <h3 className="text-white font-semibold text-lg mb-3 line-clamp-2 group-hover:text-green-300 transition-colors">
                        {cleanText(gig.title, "Untitled Gig")}
                      </h3>

                      <p className="text-white/75 text-sm mb-4 line-clamp-3">
                        {cleanText(gig.description, "No description available.")}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-white font-bold text-lg">{gig.price}</span>
                        <div className="inline-flex items-center text-green-400 group-hover:text-green-300 font-medium text-sm transition-colors group-hover:translate-x-1 transform duration-200">
                          View Gig
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}

            {activeTab === "all" && (
              <div className="space-y-4">
                {filteredGigs.length > 0 ? (
                  filteredGigs.map((gig, index) => (
                    <a
                      key={index}
                      href={gig.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] p-6 block cursor-pointer"
                    >
                      <div className="flex flex-col sm:flex-row gap-4">
                        {/* Gig Image */}
                        <div className="flex-shrink-0">
                          <img
                            src={gig.image || "/placeholder.svg?height=80&width=120&query=gig thumbnail"}
                            alt={gig.title}
                            className="w-full sm:w-24 h-20 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.src = "/placeholder.svg?height=80&width=120"
                            }}
                          />
                        </div>

                        {/* Gig Content */}
                        <div className="flex-1 min-w-0">
                          <div className="text-green-400 text-sm mb-2">
                            {gig.rating}
                          </div>

                          <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2 group-hover:text-green-300 transition-colors">
                            {cleanText(gig.title, "Untitled Gig")}
                          </h3>

                          <p className="text-white/75 text-sm mb-3 line-clamp-2">
                            {cleanText(gig.description, "No description available.")}
                          </p>

                          <div className="flex items-center justify-between">
                            <span className="text-white font-bold">{gig.price}</span>
                            <div className="inline-flex items-center text-green-400 group-hover:text-green-300 font-medium text-sm transition-colors">
                              View Gig
                              <ExternalLink className="w-3 h-3 ml-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-white/75 text-lg">No gigs found matching "{searchQuery}"</p>
                  </div>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-white/75 text-lg">{t("gigs.noGigs")}</p>
          </div>
        )}

        {/* View All Link - only show in featured tab */}
        {gigs.length > 0 && activeTab === "featured" && (
          <div className="text-center mt-12">
            <button
              onClick={() => setActiveTab("all")}
              className="inline-flex items-center bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-3 rounded-full hover:bg-white/15 transition-all duration-300 hover:scale-105 font-medium"
            >
              View All {gigs.length} Gigs
              <List className="w-5 h-5 ml-2" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
