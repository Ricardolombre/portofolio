import { GraduationCap, Calendar } from "lucide-react"

export default function EducationSection() {
  const educationItems = [
    {
      degree: "Licence : Génie logiciel",
      institution: "CFI-CIRAS – Brazzaville",
      period: "2022 – En cours",
      icon: <GraduationCap className="h-10 w-10 text-blue-800" />,
    },
    {
      degree: "Baccalauréat : série C",
      institution: "Lycée Pierre Savorgnan de Brazza – Brazzaville",
      period: "2019 – 2022",
      icon: <GraduationCap className="h-10 w-10 text-blue-800" />,
    },
    {
      degree: "Brevet d'Etude du Premier Cycle",
      institution: "Angola-libre – Brazzaville",
      period: "2019",
      icon: <GraduationCap className="h-10 w-10 text-blue-800" />,
    },
  ]

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          <span className="text-blue-800">Formation</span> Académique
        </h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>

          {/* Timeline items */}
          {educationItems.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center mb-16 ${
                index % 2 === 0 ? "md:flex-row-reverse text-right" : "text-left"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-800 border-4 border-white dark:border-gray-950 z-10"></div>

              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="hidden md:block">{index % 2 === 0 ? null : item.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.degree}</h3>
                    <div className="hidden md:block">{index % 2 === 0 ? item.icon : null}</div>
                    <div className="block md:hidden">{item.icon}</div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{item.institution}</p>
                  <div className="flex items-center text-blue-800">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{item.period}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
