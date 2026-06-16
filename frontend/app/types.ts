

export type NavItem={
    href:string
    label:string
}

export type Project={
    imageUrl: string
    description:string
    title:string
    technologies:string[]
    githubLink?:string
    publicLink?:string
    status?: "completed" | "in-progress" | "planned";
}