"use client";
import { ReactTyped } from "react-typed";

const TypingEffect = () => (
  <div>
    {/* First part - static */}
    <h1 className="text-4xl md:text-2xl lg:text-6xl font-bold">
      <ReactTyped
        strings={["Hi, I'm "]}
        typeSpeed={80}
        showCursor={false}
        className="inline"
      />
      <span className="text-cyan-500 ml-2">
        <ReactTyped
          strings={[" parham"]}
          typeSpeed={80}
          startDelay={1100}
          showCursor={true}
          cursorChar="|"
        />
      </span>
    </h1>
    
    {/* Second part - typing effect for the role */}
    <div className="text-xl md:text-2xl lg:text-3xl font-bold mt-4">
      <ReactTyped
        strings={[
          "Full-stack Developer & UI Enthusiast",
          "Problem Solver",
          "Creative Thinker",
          "Tech Enthusiast"
        ]}
        typeSpeed={60}
        backSpeed={40}
        backDelay={1500}
        loop
        showCursor={true}
        cursorChar="|"
      />
    </div>
  </div>
);

export default TypingEffect;