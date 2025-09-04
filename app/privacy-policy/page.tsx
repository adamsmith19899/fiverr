"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollFadeWrapper from "@/components/scroll-fade-wrapper"
import { useLanguage } from "@/contexts/language-context"

function PrivacyPolicyContent() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-20">
        <ScrollFadeWrapper delay={0}>
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-8 text-center">
                Privacy Policy
              </h1>

              <div className="space-y-8 text-white/90 leading-relaxed">
                <p>
                  <strong>Last Updated:</strong> April 5, 2025
                </p>

                <p>
                  Welcome to <strong>mygigs.vercel.app</strong> ("we", "us", or "our"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and disclose your information when you visit or use our website.
                </p>

                <h2 className="text-2xl font-semibold text-purple-400 mt-10">1. Information We Collect</h2>
                <p>
                  We do not collect any personal data from users unless explicitly provided by you. Currently, our site does not include forms, analytics, cookies, or tracking scripts.
                </p>

                <h2 className="text-2xl font-semibold text-purple-400 mt-10">2. How We Use Your Information</h2>
                <p>
                  Since we do not collect any personal information, we do not use, store, or share user data.
                </p>

                <h2 className="text-2xl font-semibold text-purple-400 mt-10">3. Log Files & Non-Personal Data</h2>
                <p>
                  Like most websites, our hosting provider (Vercel) may automatically log non-personal information such as:
                </p>
                <ul className="list-disc list-inside ml-5 mt-2 space-y-1 text-white/80">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Pages visited</li>
                  <li>Time and date of visit</li>
                </ul>
                <p>This data is used for analytics and security purposes by Vercel and is subject to their <a href="https://vercel.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Privacy Policy</a>.</p>

                <h2 className="text-2xl font-semibold text-purple-400 mt-10">4. Cookies</h2>
                <p>
                  Our website does not use cookies. We do not employ third-party services that place cookies on your device.
                </p>

                <h2 className="text-2xl font-semibold text-purple-400 mt-10">5. Third Parties</h2>
                <p>
                  We do not share, sell, or transfer your personal information to third parties. Your privacy is our priority.
                </p>

                <h2 className="text-2xl font-semibold text-purple-400 mt-10">6. Children's Privacy</h2>
                <p>
                  Our service is not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If you believe we have mistakenly collected such information, please contact us immediately.
                </p>

                <h2 className="text-2xl font-semibold text-purple-400 mt-10">7. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date.
                </p>

                <h2 className="text-2xl font-semibold text-purple-400 mt-10">8. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul className="list-disc list-inside ml-5 mt-2 space-y-1 text-white/80">
                  <li><strong>Email:</strong> <a href="mailto:nolushac@gmail.com" className="text-cyan-400 hover:underline">nolushac@gmail.com</a></li>
                  <li><strong>Website:</strong> <a href="https://mygigs.vercel.app" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://mygigs.vercel.app</a></li>
                </ul>

                <div className="text-center mt-12 pt-6 border-t border-white/10">
                  <p className="text-white/70 text-sm">
                    Thank you for trusting mygigs.vercel.app. Your privacy matters to us.
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

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />
}
