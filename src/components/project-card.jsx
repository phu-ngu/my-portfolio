import { ExternalLink } from "lucide-react"
import Image from "next/image"

export default function ProjectCard({ project }) {
  return (
    <div className="group bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-xl">
      <div className="relative overflow-hidden h-48">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View project ${project.title}`}>
          <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white">
            <ExternalLink className="w-4 h-4 text-gray-700" />
          </button>
        </a>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium border border-blue-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
