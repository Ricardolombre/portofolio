"use client"

import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Me <span className="text-blue-800">Contacter</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Informations de Contact</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              N&apos;hésitez pas à me contacter pour toute question ou opportunité de collaboration. Je suis ouvert aux
              discussions et aux nouvelles opportunités.
            </p>

            <div className="space-y-6">
              <Card>
                <CardContent className="flex items-center p-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Téléphone</p>
                    <p className="font-medium text-gray-900 dark:text-white">+242 064795072</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center p-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="font-medium text-gray-900 dark:text-white">batoumeniwildnis@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center p-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Adresse</p>
                    <p className="font-medium text-gray-900 dark:text-white">153, Rue Lounianga météo, Brazzaville</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Envoyez-moi un Message</h3>

            {/* Important: Using method="POST" as required by FormSubmit.co */}
            <form action="https://formsubmit.co/batoumeniwildnis@gmail.com" method="POST" className="space-y-6">
              {/* FormSubmit.co configuration fields */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://tonsite.com/merci" />
              <input type="hidden" name="_subject" value="Nouveau message de contact" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Nom
                  </label>
                  <Input id="name" name="name" placeholder="Votre nom" required className="w-full" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="Votre email" required className="w-full" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Sujet
                </label>
                <Input id="subject" name="subject" placeholder="Sujet de votre message" required className="w-full" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Votre message"
                  required
                  className="w-full min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full bg-blue-800 hover:bg-blue-900">
                <Send className="h-4 w-4 mr-2" />
                Envoyer Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
