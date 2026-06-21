// models/index.ts
import mongoose from 'mongoose';
import ProjectModel from './models/documentModel';
import DocumentModel from './models/project.model';

// Export all models
export { ProjectModel, DocumentModel };

// Function to ensure all models are registered
export function registerAllModels() {
    console.log('📦 Registering all models...');
    
    // Force model registration by referencing them
    const models = {
        Project: ProjectModel,
        Document: DocumentModel,
    };
    
    // Check registration
    const registered = mongoose.modelNames();
    console.log('✅ Registered models:', registered);
    
    return models;
}

