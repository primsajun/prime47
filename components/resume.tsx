"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Briefcase, GraduationCap, Award } from "lucide-react"

export default function Resume() {
  const [activeTab, setActiveTab] = useState("experience")

  const experience = [
    {
      title: "Senior Web Developer",
      company: "TechCorp Solutions",
      period: "2021 - Present",
      description:
        "Led the development of multiple web applications using React and Next.js. Implemented responsive designs and optimized performance for better user experience.",
    },
    {
      title: "Web Developer",
      company: "Digital Innovations",
      period: "2018 - 2021",
      description:
        "Developed and maintained client websites. Collaborated with designers to implement responsive and accessible web designs.",
    },
    {
      title: "Junior Frontend Developer",
      company: "WebTech Studios",
      period: "2016 - 2018",
      description:
        "Assisted in the development of web applications. Implemented UI components and fixed bugs in existing projects.",
    },
  ]

  const education = [
    {
      degree: "B.E.Computer Science and Engineering",
      institution: "Stella Mary's College of Enginnering",
      period: "2022 - 2026",
      description: "Specialized in Web Technologies and User Interface Design.",
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "St.Bernadette's Higher Secondary School",
      period: "2022",
      description: "Focused on Software Development and Database Management.",
    },
  ]

  const certifications = [
    {
      title: "Advanced React and Redux",
      issuer: "Frontend Masters",
      year: "2022",
    },
    {
      title: "UI/UX Design Fundamentals",
      issuer: "Design Academy",
      year: "2021",
    },
    {
      title: "Full Stack Web Development",
      issuer: "Coding Bootcamp",
      year: "2019",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      year: "2018",
    },
  ]

  return (
    <section id="resume" className="py-20 px-4 bg-gradient-to-b from-black/30 to-black/50">
      <div className="container mx-auto max-w-4xl">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">My Resume</h2>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Download CV
          </Button>
        </div>

        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="experience" className="data-[state=active]:bg-primary">
              <Briefcase className="h-4 w-4 mr-2" />
              Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="data-[state=active]:bg-primary">
              <GraduationCap className="h-4 w-4 mr-2" />
              Education
            </TabsTrigger>
            <TabsTrigger value="certifications" className="data-[state=active]:bg-primary">
              <Award className="h-4 w-4 mr-2" />
              Certifications
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="space-y-6">
            {experience.map((job, index) => (
              <div key={index} className="bg-black/40 rounded-lg p-6 border-l-4 border-primary">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{job.title}</h3>
                  <span className="text-sm text-gray-400 bg-black/30 px-3 py-1 rounded-full">{job.period}</span>
                </div>
                <h4 className="text-primary mb-4">{job.company}</h4>
                <p className="text-gray-300">{job.description}</p>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="education" className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-black/40 rounded-lg p-6 border-l-4 border-primary">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <span className="text-sm text-gray-400 bg-black/30 px-3 py-1 rounded-full">{edu.period}</span>
                </div>
                <h4 className="text-primary mb-4">{edu.institution}</h4>
                <p className="text-gray-300">{edu.description}</p>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="certifications">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-black/40 rounded-lg p-4 border-l-4 border-primary">
                  <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                  <div className="flex justify-between">
                    <span className="text-primary">{cert.issuer}</span>
                    <span className="text-gray-400">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

