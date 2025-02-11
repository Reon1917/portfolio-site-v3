import { Button } from "@/components/ui/button"
import { Github, Mail, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"
import About from "@/components/sections/About"
import Projects from "@/components/sections/Projects"
import Contact from "@/components/sections/Contact"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center space-y-4 py-8 text-center md:py-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
          Hi, I&apos;m Lin Myat Phyo 👋
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          I&apos;m a software developer specializing in web development. Currently pursuing my Bachelor&apos;s in IT at Assumption University.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/#contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/#projects">
              View Projects
            </Link>
          </Button>
        </div>
        <div className="mt-4 flex gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/Reon1917/" target="_blank">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/lin-myat-phyo-b872b1217/" target="_blank">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.instagram.com/re0n1917/" target="_blank">
              <Instagram className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container flex justify-center space-y-6 py-8 md:py-12 lg:py-24">
        <div className="w-full max-w-5xl">
          <About />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container flex justify-center space-y-6 py-8 md:py-12 lg:py-24">
        <div className="w-full max-w-6xl">
          <Projects />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container flex justify-center space-y-6 py-8 md:py-12 lg:py-24">
        <div className="w-full max-w-3xl">
          <Contact />
        </div>
      </section>
    </div>
  )
}
