// models/Project.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
  title: string;
  description: string;
  image?: string;
  link?: string;
  github?: string;
  technologies: string[];
  category: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    image: {
      type: String,
    },
    link: {
      type: String,
    },
    github: {
      type: String,
    },
    technologies: {
      type: [String],
      default: [],
    }
  },
  {
    timestamps: true,
  }
);

const ProjectModel = mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);
export default ProjectModel