import Image from "next/image";
import profilePicture from "./../public/young-bearded-man-with-striped-shirt_273609-5677.avif";
import TypingEffect from "@/components/heroHeader";

export  const dynamic = 'force-static';


export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-between flex-col lg:flex-row gap-12 px-4 md:px-8 lg:px-16">
      <div className="flex-1 space-y-6 text-center lg:text-left">
        <div className="space-y-2">
          <span className="text-cyan-500 font-mono text-sm bg-cyan-500/10 px-3 py-1 rounded-full">
            Available for work
          </span>
        
          <TypingEffect/>
          <p className="text-xl text-muted-foreground">
            Full-stack Developer & UI Enthusiast
          </p>
        </div>
        
        <div className="flex gap-4 justify-center lg:justify-start">
          <button className="px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all hover:scale-105">
            View Projects
          </button>
          <button className="px-6 py-2 border border-cyan-500 text-cyan-500 rounded-lg hover:bg-cyan-500/10 transition-all">
            Contact Me
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="relative">
          {/* Simple elegant glow */}
          <div className="absolute -inset-4 rounded-full bg-cyan-500/20 blur-2xl animate-pulse"></div>
          
          {/* Main image container - improved shape */}
          <div className="relative w-[280px] md:w-[380px] aspect-square rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl">
            <Image 
              src={profilePicture} 
              alt="Parham"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 280px, 380px"
              priority
              quality={100}
            />
            
            {/* Simple gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>
          
          {/* Ping animations - fixed positioning */}
          <div className="absolute bottom-1 -left-12 lg:-bottom-16 lg:-left-16">
            {/* Outer ring */}
            <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full border-2 border-cyan-500 animate-ping opacity-75"></div>
            {/* Middle ring */}
            <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full border-2 border-cyan-500 animate-ping absolute top-3 left-3 lg:top-4 lg:left-4 opacity-75"></div>
            {/* Inner ring */}
            <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full border-2 border-cyan-500 animate-ping absolute top-6 left-6 lg:top-8 lg:left-8 opacity-75"></div>
          </div>
        </div>
      </div>
    </div>
  );
}