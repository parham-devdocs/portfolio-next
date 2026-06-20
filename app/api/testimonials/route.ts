import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../db";
import ProjectModel from "@/app/models/project.model";
import ProjectSchema from "@/schemas/project";
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";
import DocumentModel from "../../models/documentModel";
import DocumentSchema from "@/schemas/documentSchema";

export async function POST(req: NextRequest) {
  try {
    // Define supported formats and size limits
    const supportedFormats = [
      "image/jpeg", 
      "image/png", 
      "image/webp", 
      "image/gif",
      "image/svg+xml",
      "image/svg"
    ];
    const maximumFileSize = 1024 * 1024 * 5; // 5MB (more realistic for images)
    let imageUrl = null;

    // 1. Parse FormData
    const formData = await req.formData();
    
    // 2. Get the file
    const file = formData.get('file') as File | null;
    
    // 3. Get the project data (sent as JSON string)
    const projectDataString = formData.get('projectData') as string;
    
    // 4. Validate project data exists
    if (!projectDataString) {
      return NextResponse.json(
        { error: 'Project data is required' },
        { status: 400 }
      );
    }

    // 5. Validate file exists
    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' }, 
        { status: 400 }
      );
    }

    console.log('📁 File received:', file.name, file.size, file.type);

    // 6. Validate file size
    if (file.size > maximumFileSize) {
      return NextResponse.json(
        { error: `File size must not exceed ${maximumFileSize / 1024 / 1024}MB` },
        { status: 400 }
      );
    }

    // 7. Validate file format
    if (!supportedFormats.includes(file.type)) {
      return NextResponse.json(
        { error: 'File format is not supported. Supported formats: JPEG, PNG, WebP, GIF, SVG' },
        { status: 400 }
      );
    }

    // 8. Create upload directory if it doesn't exist
    const uploadDir = path.join(process.cwd(), 'public/uploads');
    await fs.mkdir(uploadDir, { recursive: true });
    console.log('✅ Upload directory ready:', uploadDir);

    // 9. Generate unique filename
    const fileExtension = path.extname(file.name);
    const fileName = `${crypto.randomUUID()}${fileExtension}`;
    const filePath = path.join(uploadDir, fileName);
    
    console.log('📝 Generated filename:', fileName);

    // 10. Convert file to Buffer and save
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await fs.writeFile(filePath, buffer);
    
    console.log('✅ File saved:', filePath);
    
    // 11. Generate public URL for the image
    imageUrl = `/uploads/${fileName}`;

    // 12. Connect to database
    await connectDB();

    // 13. Parse and validate project data
    const parsedProjectData = JSON.parse(projectDataString);
    ProjectSchema.parse(parsedProjectData);

    // 14. Prepare document data for storage
    const documentToBeSaved = {
      filename: fileName,
      size: file.size,
      mimeType: file.type,
      path: imageUrl,
    };
    DocumentSchema.parse(documentToBeSaved);

    // 15. Create Document first (or save in parallel)
    const document = new DocumentModel(documentToBeSaved);
    const savedDocument = await document.save();
    console.log('✅ Document saved with ID:', savedDocument._id);

    // 16. Create Project with document reference (ObjectId)
    const projectDataWithImage = {
      ...parsedProjectData,
      image: imageUrl,
      document: savedDocument._id, // ✅ Save ONLY the ObjectId reference
    };

    const project = new ProjectModel(projectDataWithImage);
    const savedProject = await project.save();
    console.log('✅ Project saved with ID:', savedProject._id);

    // 17. Return success response
    return NextResponse.json(
      { 
        success: true,
        project: {
          ...savedProject.toJSON(),
          document: savedDocument // Include populated document in response
        },
        imageUrl: imageUrl,
        message: 'Project created successfully' 
      },
      { status: 201 }
    );

  } catch (error: any) {
    console.error('❌ Error in POST /api/projects:', error);
    
    // Handle Zod validation errors
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { 
          error: 'Validation failed', 
          details: error.errors 
        },
        { status: 400 }
      );
    }

    // Handle JSON parsing errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: 'Invalid JSON in project data' },
        { status: 400 }
      );
    }

    // Handle MongoDB duplicate key errors
    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'Duplicate entry. A file with this name already exists.' },
        { status: 409 }
      );
    }

    // Handle file system errors
    if (error.code === 'ENOENT') {
      return NextResponse.json(
        { error: 'Directory not found' },
        { status: 500 }
      );
    }

    // Generic error response
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: error.message || 'Something went wrong'
      },
      { status: 500 }
    );
  }
}


export async function GET() {
  try {
    
    await connectDB();
    
    
    const projects = await ProjectModel.find()
      .populate('document') 
      .sort({ createdAt: -1 }) 
      .lean(); 
    
    console.log(`✅ Found ${projects.length} projects`);
    
    return NextResponse.json(
      { 
        success: true,
        count: projects.length,
        projects,
        message: 'Projects fetched successfully' 
      },
      { status: 200 } 
    );
    
  } catch (error:any) {
    console.error('❌ Error fetching projects:', error);
    

    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to fetch projects',
        message: error.message || 'Internal server error'
      },
      { status: 500 }
    );
  }
}