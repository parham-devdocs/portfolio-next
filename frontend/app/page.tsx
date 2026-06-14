import Image from "next/image";
import profilePicture from "./../public/young-bearded-man-with-striped-shirt_273609-5677.avif";
import TypingEffect from "@/components/heroHeader";

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
        <div className="relative group">
          {/* Animated rotating gradient ring */}
          <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 animate-spin-slow opacity-70 blur-md"></div>
          
          {/* Pulsing glow effect */}
          <div className="absolute -inset-2 rounded-full bg-cyan-500 animate-pulse-glow opacity-20"></div>
          
          <div className="relative w-[280px] md:w-[380px] aspect-square rounded-full overflow-hidden ring-4 ring-cyan-500/50 shadow-2xl">
            {/* Image with zoom effect */}
            <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-110">
              <Image 
                src={profilePicture} 
                alt="Parham"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 280px, 380px"
                priority
                quality={100}
              />
            </div>
            
            {/* Cyberpunk scanline effect */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent animate-scan"></div>
            
            {/* Gradient overlay with vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Neon border animation */}
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/0 group-hover:border-cyan-400/80 transition-all duration-500"></div>
            
            {/* Code brackets with glass morphism */}
            <div className="absolute -top-5 -left-5 z-20">
              <div className="bg-black/60 backdrop-blur-md rounded-lg px-3 py-2 border border-cyan-500/50 shadow-lg shadow-cyan-500/20">
                <span className="text-cyan-400 text-3xl md:text-4xl font-mono font-bold animate-pulse">
                  &lt;/&gt;
                </span>
              </div>
            </div>
            
            <div className="absolute -bottom-5 -right-5 z-20">
              <div className="bg-black/60 backdrop-blur-md rounded-lg px-3 py-2 border border-cyan-500/50 shadow-lg shadow-cyan-500/20">
                <span className="text-cyan-400 text-3xl md:text-4xl font-mono font-bold animate-pulse">
                  {"{}"}
                </span>
              </div>
            </div>
            
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="absolute w-1 h-1 bg-cyan-400 rounded-full top-1/4 left-1/4 animate-float"></div>
              <div className="absolute w-1 h-1 bg-blue-400 rounded-full top-2/3 left-1/3 animate-float-delayed"></div>
              <div className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full top-1/2 left-3/4 animate-float-slow"></div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  )
}