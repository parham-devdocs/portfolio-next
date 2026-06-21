"use server";
import { Project } from "../types";
import ProjectModel from "../models/project.model";
import { connectDB } from "../db";
import { registerAllModels } from "../modelRegistration";
type ProjectApi = {
    count: number;
    projects: Project[];
};

export async function getProjects(): Promise<ProjectApi> {
    await connectDB()
     registerAllModels()
    try {
        const projects = await ProjectModel.find()
            .populate('document') 
            .sort({ createdAt: -1 })
            .lean()
            .exec(); 
                        const count = await ProjectModel.countDocuments().exec();

        console.log(`Found ${count} projects`);
        console.log({ projects, count });

        return {
            count,
            projects: projects as Project[],
        };
    } catch (error) {
        console.error("Failed to fetch projects:", error);
        return {
            count: 0,
            projects: [],
        };
    }
}