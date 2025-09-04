"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollFadeWrapper from "@/components/scroll-fade-wrapper"
import { useLanguage } from "@/contexts/language-context"

// Top Fiverr gig categories
const gigCategories = [
  {
    name: "Logo Design",
    role: "Starting at $50",
    image: "/images/logo-design.jpg",
  },
  {
    name: "Web Development",
    role: "Starting at $100",
    image: "/images/web-development.jpg",
  },
  {
    name: "Social Media Marketing",
    role: "Starting at $80",
    image: "/images/social-media.jpg",
  },
  {
    name: "SEO Optimization",
    role: "Starting at $120",
    image: "/images/seo.jpg",
  },
  {
    name: "Content Writing",
    role: "Starting at $40",
    image: "/images/content-writing.jpg",
  },
  {
    name: "Video Editing",
    role: "Starting at $60",
    image: "/images/video-editing.jpg",
  },
]

// Popular Fiverr services
const popularServices = [
  {
    date: "⭐ 5.0 (1.2k reviews)",
    time: "Starting at $50",
    title: "Professional Logo Design",
    description: "Custom logo design with unlimited revisions and source files",
  },
  {
    date: "⭐ 4.9 (890 reviews)",
    time: "Starting at $100",
    title: "Website Development",
    description: "Responsive website development with modern technologies",
  },
  {
    date: "⭐ 4.8 (750 reviews)",
    time: "Starting at $80",
    title: "Social Media Marketing",
    description: "Complete social media strategy and management",
  },
]

function AboutUsContent() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-20">
        <ScrollFadeWrapper delay={0}>
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                About Us
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Your trusted source for discovering the <strong className="text-green-400">best Fiverr gigs</strong> and{" "}
                <strong className="text-blue-400">top-rated services</strong> across all categories.
              </p>
            </div>

            {/* Mission Section */}
            <div className="glass rounded-2xl p-8 md:p-10 border border-white/10 mb-16 max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-green-400 mb-6">Our Mission</h2>
              <p className="text-white/90 leading-relaxed mb-4">
                We help you find the perfect Fiverr service for your needs. Our team carefully curates and reviews gigs
                to ensure you get access to top-quality services from verified sellers with proven track records.
              </p>
              <p className="text-white/90 leading-relaxed">
                Whether you need design, development, marketing, or writing services, we've done the research so you
                don't have to.
              </p>
            </div>

            {/* Value Proposition */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 max-w-5xl mx-auto">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">Why Choose Our Recommendations?</h2>
                <p className="text-white/80 leading-relaxed">
                  We only feature gigs from <strong>top-rated sellers</strong> with excellent reviews and proven
                  delivery records. Every service we recommend has been vetted for quality, reliability, and customer
                  satisfaction.
                </p>
                <p className="text-white/80 mt-4">
                  Our goal is simple: <strong>save you time</strong> and ensure you get the best value for your money
                  when shopping on Fiverr.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-full max-w-xs aspect-square bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl flex items-center justify-center text-6xl font-black text-white shadow-2xl">
                  FIVERR
                  <span className="text-purple-300">GIGS</span>
                </div>
              </div>
            </div>

            {/* Gig Categories */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                Popular Gig Categories
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {gigCategories.map((category, index) => (
                  <div
                    key={index}
                    className="glass rounded-xl overflow-hidden border border-white/10 text-center hover:border-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-white">{category.name}</h3>
                      <p className="text-sm text-white/70">{category.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Services */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Top Rated Services
              </h2>
              <div className="space-y-6 max-w-3xl mx-auto">
                {popularServices.map((service, index) => (
                  <div
                    key={index}
                    className="glass rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-bold text-white">{service.title}</h3>
                        <p className="text-white/80 mt-1">{service.description}</p>
                      </div>
                      <div className="text-right md:text-left whitespace-nowrap">
                        <p className="font-semibold text-green-400">{service.date}</p>
                        <p className="text-sm text-white/70">{service.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-white/90 mb-4">Ready to Find Your Perfect Gig?</h2>
              <p className="text-white/70 mb-6">
                Explore our curated selection of top-rated Fiverr services and get exactly what you need.
              </p>
              <a
                href="https://www.fiverr.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-green-600 to-blue-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-shadow duration-300"
              >
                Explore Fiverr Gigs
              </a>
            </div>
          </section>
        </ScrollFadeWrapper>
      </main>

      <Footer />
    </div>
  )
}

export default function AboutUsPage() {
  return <AboutUsContent />
}
