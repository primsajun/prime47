"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment integration.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Web Development",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website for a professional photographer showcasing their work with a custom gallery.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Web Design",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Web Development",
  },
  {
    title: "Restaurant Website",
    description: "A modern website for a restaurant with online reservation system and menu management.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Express", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Web Design",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard that displays current and forecasted weather data with interactive visualizations.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["JavaScript", "Chart.js", "Weather API"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Web Development",
  },
  {
    title: "Travel Blog",
    description: "A travel blog with content management system, user authentication, and interactive maps.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Sanity CMS", "Mapbox"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Web Design",
  },
]

export default function Projects() {
  const [filter, setFilter] = useState("All")
  const categories = ["All", "Web Development", "Web Design"]

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20 px-4 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">My Projects</h2>

        <div className="flex justify-center mb-10 space-x-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-black/50 border-0 overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

