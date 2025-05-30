import { forwardRef } from "react"
import ProjectCard from "./project-card"
import { projectsData } from "../lib/data"

const ProjectsSection = forwardRef((props, ref) => {
  return (
    <section id="projects" ref={ref} className="min-h-screen py-20 relative bg-white/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Research Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of the bioinformatics projects I&apos;ve worked on recently. Each represents a unique
            computational challenge in biological data analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
})

ProjectsSection.displayName = "ProjectsSection"
export default ProjectsSection
