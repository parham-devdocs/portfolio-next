// models/Project.ts
import mongoose, { Schema, Document, Types } from 'mongoose';
import { IDocument } from './documentModel';

export interface IProject extends Document {
  title: string;
  description: string;
  image?: string;
  link?: string;
  github?: string;
  technologies: string[];
  category: string;
  isActive: boolean;
  document?: mongoose.Types.ObjectId | IDocument; // ✅ Add reference to Document
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      maxlength: [1000, 'Description cannot exceed 1000 characters'],
    },
    image: {
      type: String,
      trim: true,
    },
    link: {
      type: String,
      trim: true,
    },
    github: {
      type: String,
      trim: true,
    },
    technologies: {
      type: [String],
      default: [],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    document: {
      type: Schema.Types.ObjectId,
      ref: 'Document', // ✅ References the Document model
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// ✅ Add index for faster queries
ProjectSchema.index({ title: 1 });
ProjectSchema.index({ category: 1 });
ProjectSchema.index({ isActive: 1 });

// ✅ Virtual populate (optional - to get document details when querying project)
ProjectSchema.virtual('documentDetails', {
  ref: 'Document',
  localField: 'document',
  foreignField: '_id',
  justOne: true,
});

// ✅ Ensure virtuals are included in JSON output
ProjectSchema.set('toJSON', { virtuals: true });
ProjectSchema.set('toObject', { virtuals: true });

// ✅ Static method to get project with document
ProjectSchema.statics.findWithDocument = async function(projectId: string) {
  return this.findById(projectId).populate('document');
};

const ProjectModel = mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);
export default ProjectModel;