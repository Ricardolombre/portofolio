import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">
              W<span className="text-blue-500">.</span>Batoumeni
            </h2>
            <p className="text-gray-400 mt-2">Développeur passionné et créatif</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="https://github.com/Ricardolombre" className="text-gray-400 hover:text-blue-500 transition-colors" aria-label="Github">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/wildnis-shade-rich-batoumeni" className="text-gray-400 hover:text-blue-500 transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:batoumeniwildnis@gmail.com"
              className="text-gray-400 hover:text-blue-500 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Wildnis Shade Rich Batoumeni. Tous droits réservés.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-500 transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Projets
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
