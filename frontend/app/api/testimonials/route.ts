import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../db";
import ProjectModel from "@/app/models/project.model";
import ProjectSchema from "@/schemas/project";

export async function POST(
    req: NextRequest,
) {
try {
    const body=await req.json();
    await connectDB()
    ProjectSchema.parse(body)

   const project = new ProjectModel(body);
   const savedProject = await project.save();

   return NextResponse.json(savedProject)
 
} catch (error) {
    console.log(error)
    throw new Error("error is received")
}
  


}