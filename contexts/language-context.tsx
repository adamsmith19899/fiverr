"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.portfolio": "Portfolio",
    "nav.articles": "Articles",
    "nav.talks": "Talks",
    "nav.streaming": "Streaming",
    "nav.hackathon": "Hackathon",
    "nav.contact": "Contact",

    // Hero Section
    "hero.greeting": "Welcome to my **personal portfolio**",
    "hero.title": "I vibecode and scale products people love",
    "hero.card1": "Expert in scalable product design & marketing.",
    "hero.card2": "Passionate about Web3, AI, and sustainability.",
    "hero.card3": "Remote work across 15+ countries as a digital nomad.",
    "hero.card4": "Helped 40+ companies with impactful solutions.",

    // Trusted By Section
    "trustedBy.title": "Trusted by",
    "trustedBy.subtitle":
      "Companies and organizations that have trusted my expertise to drive their digital transformation and growth strategies.",

    // Portfolio Section
    "portfolio.title": "Portfolio",
    "portfolio.subtitle": "Top-rated Fiverr gigs showcasing exceptional design and development services for businesses worldwide.",

    // About Section
    "about.title": "ABOUT ME",
    "about.bio1":
      "Discover the *highest-rated* Fiverr gigs across all categories. We carefully select only the *top-performing services* from *verified sellers* with proven track records of excellence and customer satisfaction.",
    "about.bio2":
      "Our curated collection features *best-selling services* in graphic design, digital marketing, programming, writing, video editing and more. Each gig has been *thoroughly vetted* for quality, delivery time, and customer reviews.",
    "about.bio3":
      "We partner exclusively with *Fiverr Pro sellers* and *top-rated freelancers* who consistently deliver exceptional results. All recommended gigs come with *money-back guarantee* and *premium support* for complete peace of mind.",
    "about.links.title": "Links",
    "about.cta": "Join Fiverr",

    // Companies Section
    "companies.eluter.title": "Premium Logo Design Gig",
    "companies.eluter.description":
      "**Professional logo design** service by **top-rated Fiverr seller** with **500+ 5-star reviews**. Get **custom, unique logos** with **unlimited revisions**, **vector files**, and **commercial rights**. Perfect for **brands, startups, and businesses** looking for **professional identity** that stands out in the market.",
    "companies.eluter.button": "View Gig",
    "companies.desafia.title": "Expert Web Development Gig",
    "companies.desafia.description":
      "**Full-stack web development** service by **Fiverr Pro seller** specializing in **responsive websites**, **e-commerce solutions**, and **web applications**. Includes **SEO optimization**, **mobile-friendly design**, and **technical support**. Ideal for **businesses** needing **professional websites** that **convert visitors into customers**.",
    "companies.desafia.button": "View Gig",

    // Talks Section
    "talks.title": "Talks & Workshops",
    "talks.description":
      "I am an **international speaker**, delivering practical talks and workshops on **UX Design, Marketing, Sustainability**, and **exponential technologies** such as **crypto, blockchain, and Artificial Intelligence**. My approach combines **theory and practical experience** to empower **entrepreneurs and professionals** in the **digital era**.",
    "talks.cta": "REQUEST A TALK/WORKSHOP",
    "talks.argentina": "Argentina",
    "talks.international": "International",

    // Blog Section
    "blog.title": "Articles & Case Studies",
    "blog.subtitle": "Insights on design, technology, and business strategy from real projects and client work",
    "blog.readMore": "Read on Medium",
    "blog.noArticles": "No articles found. Check back soon!",
    "blog.viewAll": "View Latest 10 Articles",

    // Footer
    "footer.portfolio": "PORTFOLIO",
    "footer.portfolio.design": "Product Design",
    "footer.about": "ABOUT ME",
    "footer.about.bio": "Short Biography",
    "footer.about.talks": "Talks and Workshops",
    "footer.about.articles": "Articles",
    "footer.connect": "LET'S CONNECT",
    "footer.connect.project": "Have any questions",
    "footer.connect.touch": "Get in touch",
    "footer.made": "MADE BY",

    // Streaming Section
    "streaming.title": "Live Streaming",
    "streaming.backHome": "Back to Home",
    "streaming.description":
      "Join me live for discussions about design, technology, and entrepreneurship. Follow along as I share insights, work on projects, and connect with the community.",
    "streaming.joinWhatsApp": "Join WhatsApp Group",

    // Hackathon Section
    "hackathon.backHome": "Back to Home",
  },
  es: {
    // Navbar
    "nav.home": "Inicio",
    "nav.about": "Acerca",
    "nav.portfolio": "Portafolio",
    "nav.articles": "Artículos",
    "nav.talks": "Charlas",
    "nav.streaming": "Streaming",
    "nav.hackathon": "Hackathon",
    "nav.contact": "Contacto",

    // Hero Section
    "hero.greeting": "Bienvenido a mi **portfolio personal**",
    "hero.title": "Programo con IA y hago crecer productos que la gente ama",
    "hero.card1": "Experto en diseño de productos escalables y marketing.",
    "hero.card2": "Apasionado por Web3, IA y sostenibilidad.",
    "hero.card3": "Trabajo remoto en más de 15 países como nómada digital.",
    "hero.card4": "Ayudé a más de 40 empresas con soluciones impactantes.",

    // Trusted By Section
    "trustedBy.title": "Confían en mí",
    "trustedBy.subtitle":
      "Empresas y organizaciones que han confiado en mi experiencia para impulsar su transformación digital y estrategias de crecimiento.",

    // Portfolio Section
    "portfolio.title": "Portfolio",
    "portfolio.subtitle":
      "Casos de estudio y proyectos de diseño que muestran soluciones centradas en el usuario para productos digitales",

    // About Section
    "about.title": "ACERCA DE MÍ",
    "about.bio1":
      "Arturo Grande (Salta, 1995) es *diseñador multimedia*, *emprendedor* y *entusiasta de la tecnología*. Se desempeñó como *Director Nacional de Marketing* en *AIESEC* en Argentina y España, y es fundador y profesor en *DESAFIA*, un programa que acompaña a emprendedores en la creación y escalado de *productos digitales* con proyección global.",
    "about.bio2":
      "Ha participado como orador en *eventos de UX y tecnología*, co-organizó *SAIAConf*, y dicta clases en los programas de posgrado en *Negocios Digitales (UCEMA)* y *CriptoEconomía (UNCUYO)*. Actualmente, es *Head of Product & Marketing* en *Eluter*, liderando *estrategias de crecimiento* y *diseño de productos digitales*.",
    "about.bio3":
      "Es graduado de la *Polkadot Blockchain Academy X* y fue seleccionado como *Scholar* en el track de *Organizadores de la Comunidad Ethereum ARG* de *Devconnect 2025*.",
    "about.links.title": "Enlaces",
    "about.cta": "CONTACTAR",

    // Companies Section
    "companies.eluter.title": "Más sobre Eluter",
    "companies.eluter.description":
      "**Eluter** es una **plataforma fintech** que simplifica los **pagos globales** y el **intercambio de divisas** para empresas en Argentina. Permite a las empresas enviar, recibir y convertir **ARS, USD, EUR y stablecoins** con **velocidad, transparencia y cumplimiento**, ayudando a **importadores, exportadores y empresas de e-commerce** a crecer internacionalmente.",
    "companies.eluter.button": "Más información",
    "companies.desafia.title": "Más sobre DESAFIA",
    "companies.desafia.description":
      "**DESAFIA** es una **plataforma educativa** fundada por **Arturo Grande** que ayuda a **emprendedores y profesionales** a crear y escalar **productos digitales**. Con un enfoque práctico en **estrategia, diseño, producto, marketing y finanzas**, DESAFIA entrena a la próxima generación de **builders en LATAM** para lanzar y hacer crecer sus **startups globalmente**.",
    "companies.desafia.button": "Más información",

    // Talks Section
    "talks.title": "Charlas y Talleres",
    "talks.description":
      "Soy un **speaker internacional**, brindando charlas prácticas y talleres sobre **Diseño UX, Marketing, Sostenibilidad**, y **tecnologías exponenciales** como **crypto, blockchain e Inteligencia Artificial**. Mi enfoque combina **teoría y experiencia práctica** para empoderar **emprendedores y profesionales** en la **era digital**.",
    "talks.cta": "SOLICITAR CHARLA/TALLER",
    "talks.argentina": "Argentina",
    "talks.international": "Internacional",

    // Blog Section
    "blog.title": "Artículos y Casos de Estudio",
    "blog.subtitle":
      "Insights sobre diseño, tecnología y estrategia de negocio desde proyectos reales y trabajo con clientes",
    "blog.readMore": "Leer en Medium",
    "blog.noArticles": "No se encontraron artículos. ¡Vuelve pronto!",
    "blog.viewAll": "Ver Últimos 10 Artículos",

    // Footer
    "footer.portfolio": "PORTAFOLIO",
    "footer.portfolio.design": "Diseño de Productos",
    "footer.about": "ACERCA DE MÍ",
    "footer.about.bio": "Biografía Corta",
    "footer.about.talks": "Charlas y Talleres",
    "footer.about.articles": "Artículos",
    "footer.connect": "CONECTEMOS",
    "footer.connect.project": "¿Tienes un proyecto en mente?",
    "footer.connect.touch": "Ponte en contacto",
    "footer.made": "HECHO POR",

    // Streaming Section
    "streaming.title": "Transmisión en Vivo",
    "streaming.backHome": "Volver al Inicio",
    "streaming.description":
      "Acompáñame en vivo para discusiones sobre diseño, tecnología y emprendimiento. Sígueme mientras comparto insights, trabajo en proyectos y me conecto con la comunidad.",
    "streaming.joinWhatsApp": "Únete al Grupo de WhatsApp",

    // Hackathon Section
    "hackathon.backHome": "Volver al Inicio",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
