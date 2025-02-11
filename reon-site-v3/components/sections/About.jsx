"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { GraduationCap, Code2, Database, Brain, Laptop, Server } from "lucide-react"

const skillCategories = {
  frontend: {
    icon: <Laptop className="h-5 w-5" />,
    title: "Frontend",
    skills: ["NextJS", "React"]
  },
  backend: {
    icon: <Server className="h-5 w-5" />,
    title: "Backend",
    skills: ["Python", "Java"]
  },
  database: {
    icon: <Database className="h-5 w-5" />,
    title: "Database",
    skills: ["MongoDB", "Supabase", "Oracle", "SQL", "PostgreSQL"]
  }
}

export default function About() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
        <p className="max-w-[42rem] text-muted-foreground sm:text-lg">
          A passionate software developer with a focus on creating efficient and user-friendly applications.
        </p>
      </div>

      <Separator className="my-4 md:my-8" />

      <div className="grid gap-4 md:gap-8 lg:grid-cols-2">
        {/* Education Card */}
        <Card className="border-2">
          <CardHeader className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-xl">
              <GraduationCap className="h-6 w-6" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <h3 className="text-lg font-semibold">Assumption University of Thailand</h3>
              <p className="text-sm text-muted-foreground">Bachelor of Science in IT</p>
              <p className="text-sm text-muted-foreground">Concentration: Software Development</p>
            </div>
          </CardContent>
        </Card>

        {/* Skills Card */}
        <Card className="border-2">
          <CardHeader className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Code2 className="h-6 w-6" />
              Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {Object.entries(skillCategories).map(([key, category]) => (
                <div key={key} className="space-y-2">
                  <div className="flex items-center gap-2">
                    {category.icon}
                    <h4 className="font-medium">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="px-2.5 py-0.5 text-sm transition-colors hover:bg-secondary/80"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  {key !== "database" && (
                    <Separator className="mt-4" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 