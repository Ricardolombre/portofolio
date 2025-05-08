"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Download, Github, Linkedin } from "lucide-react"

export default function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Développeur"
  const typingSpeed = 150

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, typingSpeed)
      return () => clearTimeout(timeout)
    }
  }, [typedText])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 opacity-90">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid-8"></div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between z-10">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Wildnis Shade Rich
            <br />
            <span className="text-blue-400">Batoumeni</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-300 mb-6 h-10">
            {typedText}
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-lg">
            Étudiant en troisième année de Génie logiciel passionné par l&apos;informatique et le développement
            logiciel.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="/BATOUMENI Wildnis Shade Rich.pdf" download>
              <Button className="bg-blue-800 hover:bg-blue-900">
                <Download className="mr-2 h-4 w-4" /> Télécharger CV
              </Button>
            </a>

            <a href="https://github.com/Ricardolombre" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-950/50">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
            </a>

            <a href="https://www.linkedin.com/in/wildnis-shade-rich-batoumeni" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-950/50">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Button>
            </a>

          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-400 shadow-xl shadow-blue-900/20">
            <img
              src="/profil.jpg?height=400&width=400"
              alt="Wildnis Shade Rich Batoumeni"
              className="w-full h-full object-cover"
            />

          </div>
        </div>
      </div>
      <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-blue-400" />
      </a>
    </section>
  )
}
