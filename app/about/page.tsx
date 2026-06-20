import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Download, Send, ArrowUpRight, Coffee, Code2, Sparkles } from "lucide-react";
import { DiGithub } from "react-icons/di";
import PersonalImage from "../../public/IMG_1924 (1).jpeg";
import Image from "next/image";
import Link from "next/link";

export default function BioSection() {
  return (
    <section className="max-w-5xl mx-auto px-4 pb-20">
      <Card className="relative overflow-hidden border-border/40 bg-gradient-to-br from-card/80 via-card/50 to-card/80 backdrop-blur-xl hover:border-primary/30 transition-all duration-500 shadow-2xl shadow-black/5 dark:shadow-black/20">
        
        {/* Decorative background gradient */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 via-cyan-500/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-purple-500/5 via-transparent to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        
        <CardContent className="relative p-8 md:p-10 lg:p-12">
          <div className="flex flex-col md:flex-row gap-10 lg:gap-14 items-center md:items-start">

            {/* ========== LEFT COLUMN ========== */}
            <div className="flex-shrink-0 flex flex-col items-center gap-6 w-full md:w-auto">
              
              {/* Profile Image with creative frame */}
              <div className="relative group">
                {/* Outer glow ring */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary via-cyan-400 to-purple-500 rounded-[1.25rem] opacity-0 group-hover:opacity-40 blur-lg transition-all duration-700" />
                
                {/* Rotating border */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary via-cyan-400 to-purple-500 rounded-[1.25rem] opacity-0 group-hover:opacity-70 transition-all duration-700" 
                     style={{
                       backgroundSize: "200% 200%",
                       animation: "spin-slow 4s linear infinite",
                     }}
                />
                
                {/* Image container */}
                <div className="relative rounded-2xl overflow-hidden ring-1 ring-border/50 group-hover:ring-transparent transition-all duration-500">
                  <Image
                    src={PersonalImage}
                    alt="Parham Pazargadi"
                    width={220}
                    height={220}
                    className="w-48 h-48 md:w-56 md:h-56 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    priority
                  />
                  
                
                </div>
              </div>

              {/* Contact Cards */}
              <div className="w-full space-y-2.5">
                {/* Location */}
                <div className="group/item flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/30 hover:bg-muted/50 border border-transparent hover:border-border/50 transition-all duration-300 cursor-default">
                  <span className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover/item:bg-primary/20 group-hover/item:scale-110 transition-all duration-300">
                    <MapPin className="w-4 h-4 text-primary" />
                  </span>
                  <div className="text-left">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60">Location</p>
                    <p className="text-sm font-medium group-hover/item:text-foreground transition-colors">Tehran, Iran</p>
                  </div>
                </div>

                {/* Email */}
                <a
                  href="mailto:p.77.pazargadi@gmail.com"
                  className="group/item flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/30 hover:bg-muted/50 border border-transparent hover:border-border/50 transition-all duration-300 hover:no-underline"
                >
                  <span className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover/item:bg-primary/20 group-hover/item:scale-110 transition-all duration-300">
                    <Mail className="w-4 h-4 text-primary" />
                  </span>
                  <div className="text-left min-w-0">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60">Email</p>
                    <p className="text-sm font-medium group-hover/item:text-foreground transition-colors truncate">
                      p.77.pazargadi@gmail.com
                    </p>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground/40 group-hover/item:text-primary group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all duration-300 ml-auto flex-shrink-0" />
                </a>

                {/* GitHub */}
                <Link
                  href="https://github.com/parham-devdocs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/item flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/30 hover:bg-muted/50 border border-transparent hover:border-border/50 transition-all duration-300 hover:no-underline"
                >
                  <span className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover/item:bg-primary/20 group-hover/item:scale-110 transition-all duration-300">
                    <DiGithub className="w-4 h-4 text-primary" />
                  </span>
                  <div className="text-left min-w-0">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60">GitHub</p>
                    <p className="text-sm font-medium group-hover/item:text-foreground transition-colors truncate">
                      parham-devdocs
                    </p>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground/40 group-hover/item:text-primary group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all duration-300 ml-auto flex-shrink-0" />
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-2.5 w-full">
                <div className="text-center p-3 rounded-xl bg-muted/30 border border-border/20 hover:border-primary/20 transition-colors duration-300">
                  <p className="text-lg font-bold text-primary">5+</p>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Years Exp</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-muted/30 border border-border/20 hover:border-primary/20 transition-colors duration-300">
                  <p className="text-lg font-bold text-primary">10+</p>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Projects</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-muted/30 border border-border/20 hover:border-primary/20 transition-colors duration-300">
                  <p className="text-lg font-bold text-primary">5+</p>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Technologies</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-muted/30 border border-border/20 hover:border-primary/20 transition-colors duration-300">
                  <p className="text-lg font-bold text-primary">∞</p>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Curiosity</p>
                </div>
              </div>
            </div>

            {/* ========== RIGHT COLUMN ========== */}
            <div className="flex-1 space-y-8 min-w-0">
              
              {/* Top badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-xs font-mono text-primary/80 tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                Available for hire
                <Sparkles className="w-3.5 h-3.5" />
              </div>

              {/* Heading */}
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                  Hey, I&apos;m{" "}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-primary via-cyan-400 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                      Parham
                    </span>
                    <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-primary/50 via-cyan-400/50 to-purple-500/50 rounded-full" />
                  </span>
                  <br />
                  <span className="text-muted-foreground/80">Pazargadi</span>
                </h2>
                <p className="text-lg text-muted-foreground font-medium">
                  Full-Stack Developer • React • Next.js • TypeScript • Nest.js 
                </p>
              </div>

              {/* Bio Paragraphs with icons */}
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Code2 className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <p className="text-[15px] md:text-base">
                    I&apos;m a passionate full-stack developer who loves crafting
                    complete digital experiences. I specialize in building modern,
                    performant frontends with{" "}
                    <strong className="text-foreground font-semibold bg-yellow-500/10 px-1.5 py-0.5 rounded">
                      React & Next.js
                    </strong>
                    , and robust backend systems that scale effortlessly with 
                    <strong className="text-foreground font-semibold bg-yellow-500/10 px-1.5 py-0.5 rounded">
                     express & Nest.js 
                    </strong>
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                      <Sparkles className=" animate- w-4 h-4 text-cyan-400" />
                    </div>
                  </div>
                  <p className="text-[15px] md:text-base">
                    What drives me is turning complex problems into simple,
                    elegant solutions. I care deeply about clean code, great user
                    experiences, and systems that just work — from the database
                    all the way to the pixel.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                      <Coffee className="w-4 animate-caret-blink h-4 text-purple-400" />
                    </div>
                  </div>
                  <p className="text-[15px] md:text-base">
                    When I&apos;m not coding, you&apos;ll find me exploring new
                    technologies, contributing to side projects, or enjoying a
                    good cup of coffee while reading about software architecture.
                  </p>
                </div>
              </div>

              {/* Status badge - improved */}
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-green-500/5 border border-green-500/20 hover:bg-green-500/10 transition-colors duration-300">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 ring-2 ring-green-500/30" />
                </span>
                <span className="text-sm font-semibold text-green-600 dark:text-green-400 tracking-wide">
                  Open to new opportunities
                </span>
              </div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border/30" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-card px-4 text-xs text-muted-foreground/50 font-mono tracking-widest uppercase">
                    Let&apos;s Connect
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="gap-2.5 font-semibold shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5 bg-gradient-to-r from-primary to-primary/90 hover:from-primary hover:to-primary"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2.5 font-semibold border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  Let&apos;s Talk
                </Button>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>

    </section>
  );
}