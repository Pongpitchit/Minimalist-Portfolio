"use client"

import { useState } from "react"
import { ExternalLink, Eye, Github } from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface PortfolioSectionProps {
  data?: typeof portfolioData
}

interface Project {
  title: string
  category: string
  image: string
  description: string
  tech: string[]
  liveUrl: string
  githubUrl: string
}

export function PortfolioSection({ data = portfolioData }: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects =
    activeFilter === "all" ? data.projects : data.projects.filter((p) => p.category === activeFilter)

  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Portfolio</h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 md:gap-3">
        {data.categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 md:px-5 py-2 md:py-2.5 rounded-xl text-xs md:text-sm font-medium capitalize transition-all ${
              activeFilter === category
                ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20"
                : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-secondary rounded-xl md:rounded-2xl border border-border overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/10"
          >
            <div className="aspect-[4/3] overflow-hidden bg-background">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {project.title}
              </h3>

              <div className="flex gap-2 md:gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-accent text-accent-foreground rounded-lg text-xs md:text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <Eye className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  Preview
                </button>
                {/* <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-secondary border border-border text-foreground rounded-lg text-xs md:text-sm font-medium hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  Demo
                </a> */}
              </div>
            </div>

            {/* Category Badge */}
            <div className="absolute top-3 right-3 md:top-4 md:right-4 px-2.5 md:px-3 py-1 md:py-1.5 bg-background/90 backdrop-blur-sm border border-border rounded-lg text-xs font-medium text-accent capitalize">
              {project.category}
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
          </DialogHeader>

          {selectedProject && (
            <div className="space-y-6">
              {/* Project Image */}
              <div className="w-full rounded-xl overflow-hidden border border-border">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Project Description */}
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-2">About</h3>
                <p className="text-foreground leading-relaxed">{selectedProject.description}</p>
              </div>

              {/* Technology Stack */}
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-3">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-accent/10 text-accent border border-accent/20 rounded-lg text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex gap-3 pt-4 border-t border-border">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  <Eye className="w-4 h-4" />
                  View Demo
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-secondary border border-border text-foreground rounded-lg font-medium hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
