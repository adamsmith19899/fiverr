"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollFadeWrapper from "@/components/scroll-fade-wrapper"
import { useLanguage } from "@/contexts/language-context"

// List of categories with titles and placeholder image URLs (you can replace these with actual images)
const categories = [
  {
    title: "Logo Design & Brand Identity",
    image: "/logo-design.jpg",
    href: "/logo-design",
  },
  {
    title: "YouTube Thumbnail Design",
    image: "/youtube-thumbnail.webp",
    href: "/categories/youtube-thumbnails",
  },
  {
    title: "Social Media Graphics & Banners",
    image: "/social-media.webp",
    href: "/graphics-banners",
  },
  {
    title: "Packaging & Label Design",
    image: "/packaging.jpg",
    href: "/packaging-label-design",
  },
  {
    title: "Book Cover & eBook Design",
    image: "book.jpg",
    href: "/book-cover-ebook-design",
  },
  {
    title: "Custom Illustrations & Art",
    image: "/art.jpg",
    href: "/custom-illustrations-art",
  },
  {
    title: "Website & UI/UX Design",
    image: "/web.webp",
    href: "/website-uiux-design",
  },
  {
    title: "DIY & Craft Design Services",
    image: "/diy.webp",
    href: "/diy-craft-design-services",
  },
]

function CategoriesContent() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-20">
        <ScrollFadeWrapper delay={0}>
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
                Top Rated Gigs
              </h1>
              <p className="text-lg text-white/80">Choose a category to explore our creative offerings</p>
            </div>

            {/* 4x2 Grid (8 items, 4 columns) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {categories.map((category, index) => (
                <a
                  key={index}
                  href={category.href}
                  className="group block rounded-xl overflow-hidden glass border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {/* Landscape Thumbnail */}
                  <div className="relative pb-[75%]"> {/* 4:3 aspect ratio */}
                    <img
                      src={category.image}
                      alt={category.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:object-scale-down transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute top-4 left-4 right-4">
                    <h3 className="text-sm md:text-base font-semibold text-white drop-shadow-md line-clamp-3">
                      {category.title}
                    </h3>
                  </div>
                </a>
              ))}
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
