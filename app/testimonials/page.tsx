import { ProjectCard } from "@/components/projectCard";
import { getProjects } from "../actions/projects";
import { connectDB } from "../db";

export const revalidate = 86400; // 24 hours

const page = async () => {
  const projects = await getProjects();
  
  // Handle case where projects might be undefined or have no data
  if (!projects || !projects.projects || projects.projects.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-gray-500">No projects found</p>
      </div>
    );
  }
  
  return (
    <div className="w-full h-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-4">
      {projects.projects.map((p, i) => (
        <ProjectCard
          _id={p._id}
          key={i}
          document={p.document}
          github={p.github}
          imageUrl={p.imageUrl}
          technologies={p.technologies}
          link={p.link}
          title={p.title}
          description={p.description}
          status={p.status}
        />
      ))}
    </div>
  );
};

export default page;