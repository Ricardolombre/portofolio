import { Code, Database, Layout, Layers } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function SkillsSection() {
  const technicalSkills = [
    {
      category: "Langages de programmation",
      icon: <Code className="h-6 w-6 text-blue-800" />,
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript", level: 75 },
        { name: "PHP", level: 80 },
        { name: "Python", level: 65 },
        { name: "Flutter", level: 80 },
        { name: "C", level: 70 },
        { name: "C++", level: 85 },
        { name: "C#", level: 65 },
      ],
    },
    {
      category: "Bases de données",
      icon: <Database className="h-6 w-6 text-blue-800" />,
      skills: [
        { name: "MySQL", level: 80 },
        { name: "ORACLE", level: 65 },
        { name: "SQL SERVER", level: 70 },
        { name: "Supabase", level: 75 },
      ],
    },
    {
      category: "Frameworks & Outils",
      icon: <Layers className="h-6 w-6 text-blue-800" />,
      skills: [
        { name: "React", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "Django", level: 90 },
        { name: "React Native", level: 80 },
        { name: "Qt-creator", level: 75 },
        { name: "Architecture MVC", level: 80 },
        { name: "Git/GitHub", level: 85 },
        { name: "VSCode", level: 90 },
        { name: "Netlify", level: 75 },
        { name: "Enterprise Architect", level: 70 },
        { name: "Outils bureautiques", level: 90 },
      ],
    },
  ]

  const softSkills = [
    { name: "Sens de l'adaptation", icon: <Layout className="h-10 w-10 text-blue-800" /> },
    { name: "Polyvalence", icon: <Layers className="h-10 w-10 text-blue-800" /> },
    { name: "Dynamisme", icon: <Code className="h-10 w-10 text-blue-800" /> },
    { name: "Curiosité", icon: <Database className="h-10 w-10 text-blue-800" /> },
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Mes <span className="text-blue-800">Compétences</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200">Compétences Techniques</h3>
            <div className="space-y-8">
              {technicalSkills.map((category, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-xl">
                      {category.icon}
                      <span className="ml-2">{category.category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                            <span className="text-sm font-medium text-blue-800">{skill.level}%</span>
                          </div>
                          <Progress
                            value={skill.level}
                            className="h-2 bg-gray-200 dark:bg-gray-700"
                            indicatorClassName="bg-blue-800"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200">Compétences Personnelles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {softSkills.map((skill, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4">{skill.icon}</div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h3 className="text-2xl font-semibold mt-12 mb-8 text-gray-800 dark:text-gray-200">
              Centres d&apos;Intérêt
            </h3>
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <div className="h-2 w-2 rounded-full bg-blue-800 mr-3"></div>
                    Jeux vidéo
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <div className="h-2 w-2 rounded-full bg-blue-800 mr-3"></div>
                    Développement web et application
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <div className="h-2 w-2 rounded-full bg-blue-800 mr-3"></div>
                    Apprentissage et veille technologique
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
