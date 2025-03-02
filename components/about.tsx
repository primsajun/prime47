export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="aspect-square rounded-full overflow-hidden border-4 border-primary/50 max-w-[300px] mx-auto">
            <img src="/WhatsApp Image 2025-03-02 at 2.18.14 PM.jpeg" alt="Prim Sajun" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              I&apos;m Prim Sajun, a passionate web developer and designer with over 5 years of experience creating
              engaging digital experiences. I specialize in building modern, responsive websites and applications that
              not only look great but also deliver exceptional user experiences.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My approach combines technical expertise with creative design thinking, allowing me to transform complex
              requirements into elegant solutions. I&apos;m constantly exploring new technologies and design trends to
              stay at the forefront of web development.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I&apos;m not coding, you can find me exploring design inspiration, contributing to open-source
              projects, or enjoying outdoor activities to recharge my creative energy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

