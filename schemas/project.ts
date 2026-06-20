import { z } from 'zod';

const ProjectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  image: z.string("Invalid image URL").optional(), // Marked optional
  link: z.string("Invalid link URL").optional(),   // Marked optional
  github: z.string("Invalid GitHub URL").optional(), // Marked optional
  technologies: z.array(z.string()).default([]), // Default empty array
});

export default ProjectSchema;