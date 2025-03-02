"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div
        className={`text-center transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          Hi, I&apos;m <span className="text-primary">Prim Sajun</span>
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8">Web Developer & Designer</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Creating beautiful, functional, and user-friendly digital experiences
        </p>
        <Button onClick={scrollToAbout} className="rounded-full px-8 py-6 text-lg group">
          Explore My Work
          <ArrowDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
        </Button>
      </div>
    </section>
  )
}

