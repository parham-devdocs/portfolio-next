import { NavItem, Project } from "./types";
import {  } from "../public/challenge-66-thumbnail.jpeg";

export const navItems:NavItem[]=[
    {href:"/about",label:"About"},
    {href:"/skills",label:"Skils"},
    {href:"/testimonials",label:"Testimonials"}

]

export const projects:Project[]=[
{ imageUrl: "/challenge-64-thumbnail.jpeg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    title: "Interactive Dashboard",
    description: "A modern analytics dashboard with real-time data visualization, interactive charts, and customizable widgets for tracking key metrics.",
    githubLink: "https://github.com/yourusername/interactive-dashboard",
    publicLink: "https://interactive-dashboard-demo.vercel.app",
    status:"completed"
},
{  imageUrl: "/challenge-66-thumbnail.jpeg",
    technologies: ["Next.js", "Node.js", "MongoDB", "JWT"],
    title: "Task Management System",
    description: "A full-stack task management application with user authentication, real-time updates, team collaboration features, and priority-based task organization.",
    githubLink: "https://github.com/yourusername/task-management-system",
    publicLink: "https://task-management-system.vercel.app",
    status:"in-progress"
},
{ imageUrl: "/challenge-71-thumbnail.jpeg",
    technologies: ["Vue.js", "Vuex", "Firebase", "SCSS"],
    title: "E-Commerce Platform",
    description: "A responsive e-commerce platform with product catalog, shopping cart functionality, user authentication, and secure payment integration.",
    githubLink: "https://github.com/yourusername/ecommerce-platform",
    publicLink: "https://ecommerce-platform.vercel.app",
    status:"planned"
}
]