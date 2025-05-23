import { Calendar, Mail, MapPin, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          À Propos de <span className="text-blue-800">Moi</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Qui suis-je ?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Étudiant en troisième année en Génie logiciel, je suis passionné par l&apos;informatique et le
              développement logiciel. Motivé, curieux et en quête d&apos;expérience professionnelle, je cherche à mettre
              en pratique mes compétences en programmation pour contribuer à des projets innovants.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Ma formation académique et mes projets personnels m&apos;ont permis de développer des compétences
              techniques solides en programmation et en conception de logiciels. Je suis constamment à la recherche de
              nouvelles connaissances et technologies pour améliorer mes compétences.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Informations Personnelles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card>
                <CardContent className="flex items-center p-4">
                  <MapPin className="h-5 w-5 text-blue-800 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Adresse</p>
                    <p className="font-medium text-gray-900 dark:text-white">153, Rue Lounianga météo, Brazzaville</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center p-4">
                  <Phone className="h-5 w-5 text-blue-800 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Téléphone</p>
                    <p className="font-medium text-gray-900 dark:text-white">+242 064795072</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center p-4">
                  <Mail className="h-5 w-5 text-blue-800 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="font-medium text-gray-900 dark:text-white">batoumeniwildnis@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center p-4">
                  <Calendar className="h-5 w-5 text-blue-800 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Date de naissance</p>
                    <p className="font-medium text-gray-900 dark:text-white">01/09/2004</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-6 text-gray-800 dark:text-gray-200">Langues</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4">
                  <p className="font-medium text-gray-900 dark:text-white">Français</p>
                  <p className="text-sm text-blue-800">Courant</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <p className="font-medium text-gray-900 dark:text-white">Anglais</p>
                  <p className="text-sm text-blue-800">Élémentaire A2</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <p className="font-medium text-gray-900 dark:text-white">Italien</p>
                  <p className="text-sm text-blue-800">Élémentaire A2</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
