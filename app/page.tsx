import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Resume from "@/components/resume"
import Contact from "@/components/contact"
import SpaceBackground from "@/components/space-background"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <SpaceBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </main>
  )
}

