import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Plateforme e-learning",
      description:
        "Développement d'une plateforme d'apprentissage en ligne avec système de cours, quiz interactifs et suivi de progression.",
      technologies: ["React", "TailwindCSS", "Supabase", "JavaScript"],
      image: "/fKFlgB6K1b9IwjcgwtGl.png?height=300&width=500",
      codeLink: "https://github.com/Ricardolombre/acdn_elearning",
      demoLink: "https://acdn-elearning.netlify.app/",
    },
    {
      title: "Application de gestion de consultation",
      description: "Conception d'une application permettant la gestion des consultations médicales.",
      technologies: ["C++", "Qt-creator", "SQL"],
      image: "/images.png?height=300&width=500",
      codeLink: "https://github.com/Ricardolombre/consultation-qt-creator-c-oracle",
    },
    {
      title: "Site web pour ISIC-Congo",
      description:
        "Développement d'un site web dédié à l'organisation et à la gestion des visites guidées pour ISIC-Congo.",
      technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
      image: "/PHP-logo.svg.png?height=300&width=500",
      codeLink: "https://github.com/Ricardolombre/isic-congo-php-projet",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Mes <span className="text-blue-800">Projets</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white">{project.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                {project.codeLink && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-blue-800 border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-950"
                    asChild
                  >
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                )}
                {project.demoLink && (
                  <Button
                    size="sm"
                    className="bg-blue-800 hover:bg-blue-900"
                    asChild
                  >
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Démo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
