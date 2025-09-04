import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  preload: true,
  fallback: ["system-ui", "arial"],
})

export const metadata: Metadata = {
  title: "My Gigs - Best Fiverr Gigs",
  description:
    "Top-rated services for your business at unbeatable prices.",
  keywords: [
    "Artu Grande",
    "vibecoder",
    "growth strategist",
    "product design",
    "UX Argentina",
    "Web3 consultant",
    "AI sustainability",
    "digital nomad designer",
    "Eluter",
    "DESAFIA",
    "blockchain UX",
    "fintech design",
  ],
  authors: [{ name: "Artu Grande" }],
  creator: "Artu Grande",
  publisher: "Artu Grande",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    alternateLocale: "en_US",
    url: "https://my-gigs.vercel.app",
    siteName: "Artu Grande Portfolio",
    title: "My Gigs - Best Fiverr Gigs",
    description:
      "Top-rated services for your business at unbeatable prices",
    images: [
      {
        url: "/images/portfolioimage.png",
        width: 1200,
        height: 630,
        alt: "Artu Grande - My Gigs - Best Fiverr Gigs Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Gigs - Best Fiverr Gigs",
    description:
      "Top-rated services for your business at unbeatable prices.",
    creator: "@artugrandey",
    images: ["/images/portfolioimage.png"],
  },
  alternates: {
    canonical: "https://my-gigs.vercel.app",
    languages: {
      "es-AR": "https://my-gigs.vercel.app/es",
      "en-US": "https://my-gigs.vercel.app/en",
    },
  },
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} antialiased`}>
      <head>
        <link rel="preload" href="/images/portfolioimage.png" as="image" type="image/png" />
        <link rel="preload" href="/images/profile.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/background.jpg" as="image" type="image/jpeg" />
        <link rel="dns-prefetch" href="https://medium.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://my-gigs.vercel.app/#website",
              url: "https://my-gigs.vercel.app",
              name: "My Gigs - Best Fiverr Gigs",
              description: "Top-rated services for your business at unbeatable prices",
              publisher: {
                "@id": "https://my-gigs.vercel.app/#person",
              },
              inLanguage: ["es-AR", "en-US"],
              potentialAction: {
                "@type": "SearchAction",
                target: "https://my-gigs.vercel.app/?s={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </head>
      <body className={spaceGrotesk.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
