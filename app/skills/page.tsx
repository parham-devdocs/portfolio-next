import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code, 
  Database, 
  Layout, 
  Server, 
  Smartphone, 
  Terminal, 
  Layers
} from "lucide-react";

export  const dynamic = 'force-static';


export default function SkillsPage() {


  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="h-5 w-5" />,
      description: "Building responsive, interactive user interfaces.",
      skills: [
        { name: "React", level: "Advanced" },
        { name: "Next.js", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "Redux/Redux Toolkit", level: "Advanced" },
        { name: "Zustand", level: "Advanced" },
        { name: "React Query", level: "Advanced" },
        { name: "ShadCN/UI", level: "Advanced" },
        { name: "MaterialUI", level: "Advanced" },
        { name: "SASS", level: "Advanced" },
        { name: "RSuite", level: "Intermediate" },
        { name: "Framer Motion", level: "Intermediate" },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="h-5 w-5" />,
      description: "Developing robust server-side logic and APIs.",
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "NestJS", level: "Advanced" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "REST APIs", level: "Advanced" },
        { name: "PostgreSQL", level: "Advanced" },
        { name: "MongoDB", level: "Advanced" },
        { name: "SQL", level: "Advanced" },
        { name: "Authentication Flows", level: "Advanced" },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <Terminal className="h-5 w-5" />,
      description: "Essential tools for development and collaboration.",
      skills: [
        { name: "Git/GitHub", level: "Advanced" },
        { name: "Docker", level: "Advanced" },
        { name: "GitLab CI/CD", level: "Advanced" },
        { name: "Figma", level: "Advanced" },
        { name: "Axios", level: "Advanced" },
        { name: "Zod", level: "Advanced" },
        { name: "Trello", level: "Advanced" },
        { name: "Jest", level: "Intermediate" }
      ],
    },
    {
      title: "Core Competencies",
      icon: <Layers className="h-5 w-5" />,
      description: "Professional skills and methodologies.",
      skills: [
        { name: "Component-Based Architecture", level: "Advanced" },
        { name: "UI/UX Design Translation", level: "Advanced" },
        { name: "Performance Optimization", level: "Advanced" },
        { name: "State Management", level: "Advanced" },
        { name: "API Integration", level: "Advanced" },
        { name: "Code Quality & Documentation", level: "Advanced" },
        { name: "Agile/Scrum", level: "Advanced" },
        { name: "Full Product Lifecycle", level: "Advanced" },
      ],
    },
  ];

  const featuredSkills = [
    { name: "React", icon: <Smartphone className="h-5 w-5 " /> },
    { name: "Next.js", icon: <Layers className="h-5 w-5" /> },
    { name: "TypeScript", icon: <Code className="h-5 w-5" /> },
    { name: "Node.js", icon: <Server className="h-5 w-5" /> },
    { name: "PostgreSQL", icon: <Database className="h-5 w-5" /> },
    { name: "Docker", icon: <Terminal className="h-5 w-5" /> },
  ];



  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
   

     

      {/* Featured Skills */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
          <Badge variant="outline" className="text-sm">Featured</Badge>
          Core Competencies
        </h2>
        <div className="flex flex-wrap gap-3">
          {featuredSkills.map((skill) => (
            <Badge
              key={skill.name}
              variant="secondary"
              className="px-4 text-cyan-600 dark:animate-pulse  py-2 text-sm gap-2 hover:bg-secondary/80 transition-colors"
            >
              {skill.icon}
              {skill.name}
            </Badge>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {skillCategories.map((category) => (
          <Card key={category.title} className="shadow-2xs hover:shadow-2xl hover:scale-[101%] transition-all duration-500 shadow-cyan-300">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="rounded-md bg-primary/10 p-2 text-primary">
                  {category.icon}
                </div>
                <div>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <Badge
                      variant={
                        skill.level === "Advanced"
                          ? "default"
                          : skill.level === "Intermediate"
                          ? "secondary"
                          : "outline"
                      }
                      className="text-xs"
                    >
                      {skill.level}
                    </Badge>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

     
    </div>
  );
}