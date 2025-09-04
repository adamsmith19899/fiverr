"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollFadeWrapper from "@/components/scroll-fade-wrapper"
import { useLanguage } from "@/contexts/language-context"

function DisclaimerContent() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-20">
        <ScrollFadeWrapper delay={0}>
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-8 text-center">
                Disclaimer
              </h1>

              <div className="space-y-8 text-white/90 leading-relaxed">
                <p>
                  <strong>Last Updated:</strong> April 5, 2025
                </p>

                <p>
                  Welcome to <strong>mygigs.vercel.app</strong>. This website is an affiliate marketing platform that promotes and links to various services available on Fiverr.com. We are not directly affiliated with Fiverr but participate in their affiliate program.
                </p>

                <h2 className="text-2xl font-semibold text-green-400 mt-10">1. Affiliate Disclosure</h2>
                <p>
                  This website contains affiliate links to Fiverr.com. When you click on these links and make a purchase, we may receive a commission at no additional cost to you. This helps support our platform and allows us to continue providing valuable content about the best Fiverr gigs and services.
                </p>

                <h2 className="text-2xl font-semibold text-green-400 mt-10">2. Accuracy of Information</h2>
                <p>
                  While we strive to provide accurate and up-to-date information about Fiverr gigs, we cannot guarantee the completeness, accuracy, or reliability of the information presented. Gig prices, availability, and seller ratings may change without notice. Always verify details directly on Fiverr before making a purchase.
                </p>

                <h2 className="text-2xl font-semibold text-green-400 mt-10">3. No Professional Endorsement</h2>
                <p>
                  The gigs featured on this website are selected based on our research and criteria, but we do not endorse or guarantee the quality of any specific service or seller. The relationship between buyers and sellers is solely between them, and we are not responsible for the quality of work delivered by any Fiverr seller.
                </p>

                <h2 className="text-2xl font-semibold text-green-400 mt-10">4. External Links</h2>
                <p>
                  This site contains links to Fiverr.com and other third-party websites. These links are provided for your convenience only. We do not control, endorse, or assume responsibility for the content, privacy policies, or practices of any third-party sites, including Fiverr.com.
                </p>

                <h2 className="text-2xl font-semibold text-green-400 mt-10">5. User Responsibility</h2>
                <p>
                  Your use of this website and any purchases made through our affiliate links are entirely at your own risk. We shall not be liable for any direct, indirect, or consequential loss or damage arising from your use of Fiverr services or reliance on any information presented on this site.
                </p>

                <h2 className="text-2xl font-semibold text-green-400 mt-10">6. Fiverr Terms</h2>
                <p>
                  All purchases made through Fiverr are subject to Fiverr's Terms of Service and Privacy Policy. We encourage you to review these documents on Fiverr's official website before making any purchases.
                </p>

                <h2 className="text-2xl font-semibold text-green-400 mt-10">7. Contact Us</h2>
                <p>
                  If you have any questions or concerns about this Disclaimer, please contact us:
                </p>
                <ul className="list-disc list-inside ml-5 mt-2 space-y-1 text-white/80">
                  <li><strong>Email:</strong> <a href="mailto:nolushac@gmail.com" className="text-cyan-400 hover:underline">nolushac@gmail.com</a></li>
                  <li><strong>Website:</strong> <a href="https://mygigs.vercel.app" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://mygigs.vercel.app</a></li>
                </ul>

                <div className="text-center mt-12 pt-6 border-t border-white/10">
                  <p className="text-white/70 text-sm">
                    Thank you for visiting mygigs.vercel.app. We hope you find the perfect Fiverr gig for your needs!
                  </p>
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

export default function DisclaimerPage() {
  return <DisclaimerContent />
}
