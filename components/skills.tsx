"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Paintbrush, Database, Layers, Workflow, Lightbulb } from "lucide-react"

const skillCategories = [
  {
    name: "Frontend",
    icon: <Code className="h-6 w-6" />,
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS", "SASS"],
  },
  {
    name: "Design",
    icon: <Paintbrush className="h-6 w-6" />,
    skills: ["UI/UX Design", "Figma", "Adobe XD", "Photoshop", "Illustrator", "Responsive Design", "Design Systems"],
  },
  {
    name: "Backend",
    icon: <Database className="h-6 w-6" />,
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "RESTful APIs", "GraphQL"],
  },
  {
    name: "Tools",
    icon: <Layers className="h-6 w-6" />,
    skills: ["Git", "GitHub", "VS Code", "Webpack", "Docker", "CI/CD", "Vercel", "Netlify"],
  },
  {
    name: "Workflow",
    icon: <Workflow className="h-6 w-6" />,
    skills: ["Agile", "Scrum", "Jira", "Trello", "Project Management", "Team Collaboration"],
  },
  {
    name: "Soft Skills",
    icon: <Lightbulb className="h-6 w-6" />,
    skills: [
      "Problem Solving",
      "Communication",
      "Time Management",
      "Adaptability",
      "Attention to Detail",
      "Creativity",
    ],
  },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name)

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-black/0 to-black/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">My Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`flex flex-col items-center justify-center p-4 rounded-lg transition-all ${
                activeCategory === category.name
                  ? "bg-primary text-primary-foreground"
                  : "bg-black/40 text-gray-300 hover:bg-black/60"
              }`}
            >
              {category.icon}
              <span className="mt-2 text-sm font-medium">{category.name}</span>
            </button>
          ))}
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-6">{activeCategory} Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skillCategories
              .find((category) => category.name === activeCategory)
              ?.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-black/30 rounded-lg p-4"
                >
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${Math.random() * 30 + 70}%` }}
                    ></div>
                  </div>
                  <p className="text-gray-300 mt-2">{skill}</p>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

