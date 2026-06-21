"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Project } from "@/app/types"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { DiGithub } from "react-icons/di"
import Link from "next/link"
import { CollapsibleText } from "./collapsible"

export function ProjectCard({ 
  technologies, 
  title, 
  github, 
  description, 
  path,
  status, 
  link,
}: Project) {
  console.log({link,github})
  const statusColors = {
    completed: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    "in-progress": "bg-cyan-400/10 text-cyan-400 border-cyan-400/20",
    planned: "bg-blue-500/10 text-blue-500 border-blue-500/20"
  }

  return (
    <div className="group relative w-full max-w-sm">
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500 group-hover:duration-200" />
      
      <Card className="relative overflow-hidden dark:bg-gray-800  backdrop-blur-sm shadow-xl transition-all duration-300 hover:shadow-2xl shadow-cyan-400/10">
        
        {/* Top status bar with cyan accent */}
        
        <CardHeader className="space-y-4">
          {/* Title with cyan accent */}
          <div className="flex items-start justify-between">
            <CardTitle className="text-xl font-bold dark:text-white text-black transition-colors duration-300">
              {title}
            </CardTitle>
            {status && (
              <Badge 
                variant="outline" 
                className={cn(
                  "capitalize text-xs font-medium border",
                  statusColors[status as keyof typeof statusColors] || "bg-gray-500/10 text-gray-400"
                )}
              >
                {status}
              </Badge>
            )}
          </div>

          {/* Image with overlay gradient */}
          <div className="relative overflow-hidden rounded-lg bg-gray-800">
            <Image 
              src={path} 
              alt={title} 
              width={500} 
              height={300}
              className="object-cover object-center w-full h-48 transition-transform duration-500 group-hover:scale-110"
              priority
              quality={100}
            />
            {/* Gradient overlay on image */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Quick action buttons on image hover */}
            <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              {link && (
                <a 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-cyan-400/90 hover:bg-cyan-400 rounded-full text-gray-900 transition-colors shadow-lg"
                >
                  <ExternalLink size={16} />
                </a>
              )}
              {github && (
                <a 
                  href={github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-colors shadow-lg"
                >
                  <DiGithub size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Description with gradient text */}
          
          
<CollapsibleText  content={description} initialLineNumber={2} />
          {/* Metadata chips */}
         
        </CardHeader>

        <CardContent>
          {/* Technology tags with cyan accents */}
          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="outline">{tech}</Badge>
              ))}
            </div>
          )}
        </CardContent>

        <CardFooter className="flex gap-3 pt-2 bg-transparent">
          {github && (
            <Button 
              type="button" 
              variant="outline"
              className="flex-1 bg-gradient-to-r dark:bg-white bg-black  hover:from-cyan-700  hover:to-cyan-800 text-black hover:text-white border-0  transition-all duration-300 gap-2 group/btn"
              asChild
            >
              <Link href={github} target="_blank" rel="noopener noreferrer">
                <DiGithub size={18} className="transition-transform duration-300 group-hover/btn:scale-110" />
                Source Code
              </Link>
            </Button>
          )}
          
          {link && (

            <button className="relative bg-black text-white rounded-full px-3.5 py-2 overflow-hidden group">
            {/* Sliding background that slides in from left on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-800 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
            
            {/* Content with higher z-index */}
            <div className="relative z-10">
              <Link href={link} target="_blank" rel="noopener noreferrer" className="flex gap-3 items-center">
                <ExternalLink size={18} className="transition-transform duration-300 group-hover:scale-110" />
                Live Demo
              </Link>
            </div>
          </button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}