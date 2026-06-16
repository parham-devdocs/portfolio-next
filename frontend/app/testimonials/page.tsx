import { ProjectCard } from "@/components/projectCard"
import { projects } from "../mockData"

const page = () => {
  return (
    <div className=' w-full h-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 '>
{projects.map((p,i)=>{
  return <ProjectCard key={i}/>
})}
    </div>
  )
}

export default page