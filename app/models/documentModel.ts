// models/Project.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IDocument extends Document {
filename:string
mimeType:string
size:number
path:string
  createdAt: Date;
  updatedAt: Date;
}

const DocumentSchema = new Schema<IDocument>(
  {
    filename: {
      type: String,
      required:true,
      trim: true,
    },
    mimeType: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
    },
    path:{
        type:String,
        required:true

    }
  },
  {
    timestamps: true,
  }
);

const DocumentModel = mongoose.models.Document || mongoose.model<IDocument>('Document', DocumentSchema);
export default DocumentModel