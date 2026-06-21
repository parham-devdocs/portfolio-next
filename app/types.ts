

export type NavItem={
    href:string
    label:string
}

export type Document={
    _id: string,
    filename?: string,
    mimeType?:string,
    size?: number,
    path: string,
    createdAt?:string,
    updatedAt?: string

}

export interface Project extends Document{
    _id:string
    imageUrl: string
    description:string
    title:string
    technologies:string[]
    github?:string
    link?:string
    status?: "completed" | "in-progress" | "planned";
    
}