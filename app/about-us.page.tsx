"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollFadeWrapper from "@/components/scroll-fade-wrapper"
import { useLanguage } from "@/contexts/language-context"

// Staff members from SaltaDev
const staff = [
  {
    name: "Facundo Padilla",
    role: "Fundador",
    image: "https://salta.dev.ar/img/staff/facundo_padilla.jpg",
  },
  {
    name: "Arturo Grande",
    role: "Administrador",
    image: "https://salta.dev.ar/img/staff/arturo_grande.jpg",
  },
  {
    name: "Franco Saracho",
    role: "Administrador",
    image: "https://salta.dev.ar/img/staff/franco_saracho.jpeg",
  },
  {
    name: "Juan P. Gutiérrez",
    role: "Administrador",
    image: "https://salta.dev.ar/img/staff/juan_gutierrez.jpg",
  },
  {
    name: "Mariano Velarde",
    role: "Administrador",
    image: "https://salta.dev.ar/img/staff/mariano_velarde.jpg",
  },
  {
    name: "Verónica Torres",
    role: "Administradora",
    image: "https://salta.dev.ar/img/staff/veronica_torres.jpg",
  },
]

// Key events from SaltaDev
const events = [
  {
    date: "10/09/2025",
    time: "20:00 - 22:00",
    title: "Mini Hackathon - SaltaDev x DESAFIA",
    description:
      "Desafío: crear una mini app web para publicar animales perdidos/encontrados durante la Procesión del Milagro.",
  },
  {
    date: "31/07/2025",
    time: "20:00 - 22:30",
    title: "Saber para crecer",
    description:
      "Una expo gratuita sobre negocios, tecnología y productos intangibles para emprendedores de la nueva economía del conocimiento.",
  },
  {
    date: "25/07/2025",
    time: "17:00 - 20:00",
    title: "Taller de empleabilidad e inteligencia artificial",
    description:
      "Inscribite al Taller de Empleabilidad e IA para mejorar tu CV, entrevistas, LinkedIn y usar herramientas como ChatGPT en tu búsqueda laboral!",
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
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6">
                About Us
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                A community-driven initiative by <strong className="text-cyan-400">SaltaDev</strong> and{" "}
                <strong className="text-purple-400">DESAFIA</strong> to empower developers, designers, and innovators
                across Argentina and beyond.
              </p>
            </div>

            {/* Mission Section */}
            <div className="glass rounded-2xl p-8 md:p-10 border border-white/10 mb-16 max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-purple-400 mb-6">Our Mission</h2>
              <p className="text-white/90 leading-relaxed mb-4">
                We believe in the power of community, learning, and innovation. SaltaDev and DESAFIA are dedicated to
                fostering tech talent through free events, courses, and real-world challenges that help individuals grow
                both personally and professionally.
              </p>
              <p className="text-white/90 leading-relaxed">
                From hackathons to employability workshops, we create opportunities for everyone — no matter your
                background or experience level.
              </p>
            </div>

            {/* Collaboration Highlight */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 max-w-5xl mx-auto">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-pink-400 mb-4">SaltaDev x DESAFIA</h2>
                <p className="text-white/80 leading-relaxed">
                  This collaboration brings together two passionate communities focused on education, technology, and
                  social impact. Together, we host events like the upcoming{" "}
                  <strong>Mini Hackathon on 10/09/2025</strong>, where participants will build web apps to help reunite
                  lost pets with their families during the Procesión del Milagro.
                </p>
                <p className="text-white/80 mt-4">
                  Our goal is simple: <strong>empower creators</strong>, connect professionals, and give back to the
                  community.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-full max-w-xs aspect-square bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-6xl font-black text-white shadow-2xl">
                  DESAF
                  <span className="text-blue-300">IA</span>
                </div>
              </div>
            </div>

            {/* Staff Team */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                Meet the Team
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {staff.map((member, index) => (
                  <div
                    key={index}
                    className="glass rounded-xl overflow-hidden border border-white/10 text-center hover:border-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-48 object-cover object-top"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-white">{member.name}</h3>
                      <p className="text-sm text-white/70">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Upcoming Events
              </h2>
              <div className="space-y-6 max-w-3xl mx-auto">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="glass rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-bold text-white">{event.title}</h3>
                        <p className="text-white/80 mt-1">{event.description}</p>
                      </div>
                      <div className="text-right md:text-left whitespace-nowrap">
                        <p className="font-semibold text-purple-400">{event.date}</p>
                        <p className="text-sm text-white/70">{event.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-white/90 mb-4">Ready to Grow With Us?</h2>
              <p className="text-white/70 mb-6">
                Join our community, attend events, learn new skills, and connect with developers and creators who share your passion.
              </p>
              <a
                href="https://salta.dev.ar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-shadow duration-300"
              >
                Join SaltaDev
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
