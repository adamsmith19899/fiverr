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
              <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-8 text-center">
                Disclaimer
              </h1>

              <div className="space-y-8 text-white/90 leading-relaxed">
                <p>
                  <strong>Last Updated:</strong> April 5, 2025
                </p>

                <p>
                  Welcome to <strong>mygigs.vercel.app</strong>. This website is maintained as a personal or community-focused platform to share information about tech events, design services, and development opportunities, including collaborations with communities such as <strong>SaltaDev</strong> and <strong>DESAFIA</strong>.
                </p>

                <h2 className="text-2xl font-semibold text-purple-400 mt-10">1. Accuracy of Information</h2>
                <p>
                  While we strive to provide up-to-date and accurate information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on this website for any purpose. Any reliance you place on such information is strictly at your own risk.
                </p>

                <h2 className="text-2xl font-semibold text-purple-400 mt-10">2. External Links</h2>
                <p>
                  This site may contain links to other websites or third-party resources (e.g., <a href="https://desafia.tech" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">desafia.tech</a>, <a href="https://salta.dev.ar" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">salta.dev.ar</a>). These links are provided for your convenience only. We do not endorse, control, or assume responsibility for the content, privacy policies, or practices of any third-party sites.
                </p>

                <h2 className="text-2xl font-semibold text-purple-400 mt-10">3. Events & Collaborations</h2>
                <p>
                  References to events such as the <strong>Mini Hackathon - SaltaDev x DESAFIA</strong> or workshops like <em>"Taller de empleabilidad e IA"</em> are based on public information shared by the respective organizing communities. Participation details, dates, and prizes are subject to change by the organizers. Always verify event details directly on the official platforms.
                </p>

                <h2 className="text-2xl font-semibold text-purple-400 mt-10">4. No Professional Advice</h2>
                <p>
                  The content on this website is for general informational purposes only and does not constitute professional advice — whether legal, financial, technical, or career-related. Always seek the advice of qualified professionals regarding specific circumstances.
                </p>

                <h2 className="text-2xl font-semibold text-purple-400 mt-10">5. Use at Your Own Risk</h2>
                <p>
                  Your use of this website and any material or services provided through it is entirely at your own risk. We shall not be liable for any direct, indirect, or consequential loss or damage arising from the use of this site or reliance on any information presented herein.
                </p>

                <h2 className="text-2xl font-semibold text-purple-400 mt-10">6. Affiliation Disclosure</h2>
                <p>
                  mygigs.vercel.app is not officially affiliated with <strong>SaltaDev</strong> or <strong>DESAFIA</strong>, though it may reference or support their initiatives. SaltaDev and DESAFIA are independent community organizations. Any collaboration mentioned is for informational and promotional purposes only.
                </p>

                <h2 className="text-2xl font-semibold text-purple-400 mt-10">7. Contact Us</h2>
                <p>
                  If you have any questions or concerns about this Disclaimer, please contact us:
                </p>
                <ul className="list-disc list-inside ml-5 mt-2 space-y-1 text-white/80">
                  <li><strong>Email:</strong> <a href="mailto:nolushac@gmail.com" className="text-cyan-400 hover:underline">nolushac@gmail.com</a></li>
                  <li><strong>Website:</strong> <a href="https://mygigs.vercel.app" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://mygigs.vercel.app</a></li>
                </ul>

                <div className="text-center mt-12 pt-6 border-t border-white/10">
                  <p className="text-white/70 text-sm">
                    Thank you for visiting mygigs.vercel.app. Stay informed, stay inspired, and code with purpose.
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
