"use client"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function HeroSection() {
  const { t, language } = useLanguage()

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(/images/background.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div>
          {/* Profile Introduction */}
          <div className="flex items-center justify-center mb-4 sm:mb-8">
            <div className="glass rounded-full p-1 mr-3 sm:mr-4">
              <Image
                src="/logo.png"
                alt="Best Freelance Gigs - Top Services"
                width={40}
                height={40}
                className="rounded-full sm:w-[60px] sm:h-[60px]"
              />
            </div>
            <div className="text-center">
              <p className="text-sm sm:text-lg text-white/75">
                {language === "en" ? (
                  <>
                    Discover the <strong>best Freelance gigs</strong> 👋
                  </>
                ) : (
                  <>
                    Descubre los <strong>mejores servicios de Freelance</strong> 👋
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="relative mb-6 sm:mb-12">
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white px-2 mb-4">
              {language === "en" ? (
                <>
                  Best Freelance Gigs & Services <br />
                  <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-normal text-white/90 block mt-4">
                    Top-rated services for your business at unbeatable prices
                  </span>
                </>
              ) : (
                <>
                  Mejores Servicios de Freelance <br />
                  <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-normal text-white/90 block mt-4">
                    Servicios mejor valorados para tu negocio a precios insuperables
                  </span>
                </>
              )}
            </h1>

            {/* Freelance Logo - moved to top left */}
            <div className="absolute -top-8 sm:-top-12 -left-4 sm:-left-8 animate-float-1 transform rotate-12">
              <div className="glass glass-hover rounded-xl sm:rounded-2xl p-2 sm:p-4 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
                <Image
                  src="/images/Freelance-logo.png"
                  alt="Freelance logo - Top freelance services"
                  width={20}
                  height={20}
                  className="sm:w-[32px] sm:h-[32px] md:w-[40px] md:h-[40px]"
                />
              </div>
            </div>

            <div className="absolute top-12 sm:top-16 -left-4 sm:-left-8 animate-float-2 transform -rotate-6">
              <div className="glass glass-hover rounded-xl sm:rounded-2xl p-2 sm:p-4 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
                <Image
                  src="/images/5-star.png"
                  alt="5-star rating - Top-rated Freelance services"
                  width={20}
                  height={20}
                  className="sm:w-[32px] sm:h-[32px] md:w-[40px] md:h-[40px]"
                />
              </div>
            </div>

            {/* Affiliate icon - moved to top right */}
            <div className="absolute -top-8 sm:-top-12 -right-4 sm:-right-8 animate-float-3 transform rotate-6">
              <div className="glass glass-hover rounded-xl sm:rounded-2xl p-2 sm:p-4 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
                <Image
                  src="/images/affiliate.png"
                  alt="Affiliate program - Verified Freelance services"
                  width={20}
                  height={20}
                  className="sm:w-[32px] sm:h-[32px] md:w-[40px] md:h-[40px]"
                />
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-12 px-2">
            <Card className="glass glass-hover p-3 sm:p-6 text-center group">
              <div className="flex items-start justify-center space-x-2 sm:space-x-3">
                <div className="text-lg sm:text-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  💼
                </div>
                <div>
                  <p className="font-semibold text-white text-xs sm:text-base">
                    {language === "en" ? "Professional Services" : "Servicios Profesionales"}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass glass-hover p-3 sm:p-6 text-center group">
              <div className="flex items-start justify-center space-x-2 sm:space-x-3">
                <div className="text-lg sm:text-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  ⭐
                </div>
                <div>
                  <p className="font-semibold text-white text-xs sm:text-base">
                    {language === "en" ? "Top-Rated Sellers" : "Vendedores Mejor Valorados"}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass glass-hover p-3 sm:p-6 text-center group">
              <div className="flex items-start justify-center space-x-2 sm:space-x-3">
                <div className="text-lg sm:text-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  🔥
                </div>
                <div>
                  <p className="font-semibold text-white text-xs sm:text-base">
                    {language === "en" ? "Best Selling Gigs" : "Servicios Más Vendidos"}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass glass-hover p-3 sm:p-6 text-center group">
              <div className="flex items-start justify-center space-x-2 sm:space-x-3">
                <div className="text-lg sm:text-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  💰
                </div>
                <div>
                  <p className="font-semibold text-white text-xs sm:text-base">
                    {language === "en" ? "Affiliate Deals" : "Ofertas de Afiliados"}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Scroll Button */}
          <div className="flex justify-center">
            <button
              onClick={scrollToAbout}
              className="animate-gentle-bounce hover:scale-105 transition-all duration-500 group"
            >
              <div className="glass glass-hover rounded-full p-2 sm:p-4 w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center">
                <ChevronDown className="w-5 h-5 sm:w-8 sm:h-8 text-white group-hover:text-white/80 transition-colors duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
