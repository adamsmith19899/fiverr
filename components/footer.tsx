"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { MessageCircle } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          {/* About Widget (replaces Portfolio) */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">About This Site</h3>
            <p className="text-white/75 mb-4">
              Discover the highest-rated Fiverr gigs across all categories. We carefully select only the top-performing services from verified sellers with proven track records of excellence and customer satisfaction.
            </p>
          </div>

          {/* Quick Links (replaces About Me) */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Quick Links</h3>
            <div className="space-y-3">
              <a
                href="/privacy-policy"
                className="block text-white/75 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/disclaimer"
                className="block text-white/75 hover:text-white transition-colors"
              >
                Disclaimer
              </a>
              <a
                href="/about-us"
                className="block text-white/75 hover:text-white transition-colors"
              >
                About Us
              </a>
              <a
                href="/contact"
                className="block text-white/75 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Let's Connect */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">{t("footer.connect")}</h3>
            <p className="text-white/75 mb-4">
              {t("footer.connect.project")}{" "}
            </p>
            <p className="text-white/75 mb-6">nolushac@gmail.com</p>

            <div className="mb-6">
              <Button
                className="glass glass-hover border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3 group transition-all duration-300 hover:scale-105"
                onClick={() =>
                  window.open("https://wa.me/5491154000421?text=Hola%2C%20%C2%BFC%C3%B3mo%20est%C3%A1s%3F", "_blank")
                }
              >
                <MessageCircle className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                {t("about.cta")}
              </Button>
            </div>

            <div className="flex space-x-4 justify-center md:justify-start">
              <Button
                size="icon"
                className="glass glass-hover rounded-full border-white/20 hover:border-white/40"
                onClick={() => window.open("https://twitter.com/ArtuGrande", "_blank")}
              >
                <Image src="/icons/x.svg" alt="X (Twitter)" width={20} height={20} className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                className="glass glass-hover rounded-full border-white/20 hover:border-white/40"
                onClick={() => window.open("https://www.instagram.com/artugrande/", "_blank")}
              >
                <Image src="/icons/instagram.svg" alt="Instagram" width={20} height={20} className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                className="glass glass-hover rounded-full border-white/20 hover:border-white/40"
                onClick={() => window.open("https://www.linkedin.com/in/arturo-grande/", "_blank")}
              >
                <Image src="/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                className="glass glass-hover rounded-full border-white/20 hover:border-white/40"
                onClick={() => window.open("https://medium.com/@infoarturogrande", "_blank")}
              >
                <Image src="/icons/medium.svg" alt="Medium" width={20} height={20} className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                className="glass glass-hover rounded-full border-white/20 hover:border-white/40"
                onClick={() => window.open("https://v0.app/user/artugrandey", "_blank")}
              >
                <Image src="/icons/v0logo.svg" alt="v0" width={20} height={20} className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-center items-center pt-8 border-t border-white/10">
          <div className="text-white/75 text-sm">
            {t("footer.made")} <span className="font-bold text-white">my-gigs.vercel.app</span> © 2025
          </div>
        </div>
      </div>
    </footer>
  )
}
