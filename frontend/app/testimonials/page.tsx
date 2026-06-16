import { ProjectCard } from "@/components/projectCard";
import { projects } from "../mockData";

const page = () => {
  return (
    <div className=" w-full h-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
      {projects.map((p, i) => {
        return (
          <ProjectCard
            key={i}
            githubLink={p.githubLink}
            imageUrl={p.imageUrl}
            technologies={p.technologies}
            publicLink={p.publicLink}
            title={p.title}
            description={p.description}
            status={p.status}
          />
        );
      })}
    </div>
  );
};

export default page;
