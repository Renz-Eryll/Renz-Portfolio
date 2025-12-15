import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import AnimatedCounter from "../components/AnimatedCounter";

const words = [
  { text: "Codes", icon: "" },
  { text: "Designs", icon: "" },
  { text: "Ideas", icon: "" },
  { text: "Concepts", icon: "" },
];

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // 1. Handle Page Load Animation
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // 2. Cycle through words
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden bg-black flex flex-col justify-between font-sans text-white"
      role="banner"
    >
      <div className="hero-ambient">
        <div className="section-dark-overlay" />
        <div className="section-grid-pattern" />
        <div className="section-glow-purple" />
        <div className="section-glow-blue" />
        <div className="section-vignette" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow w-full px-5 pt-28 md:px-20">
        {/* Availability Badge */}
        <div
          className={`transition-all duration-1000 ease-out transform ${
            isLoaded ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 border border-zinc-800 rounded-full bg-zinc-900/50 backdrop-blur-md hover:border-zinc-700 hover:bg-zinc-800/50 transition-all cursor-default group">
            <span className="relative flex w-2 h-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-zinc-400 group-hover:text-zinc-300 transition-colors">
              Available for Work
            </span>
          </div>
        </div>

        {/* --- Modern Typography Group --- */}
        <div className="flex flex-col items-center text-center relative">
          {/* Graphic Element: Subtle Glow Behind Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-b from-purple-500/10 to-transparent blur-3xl -z-10 rounded-full" />

          {/* Line 1: Turning */}
          <h1
            className={`text-6xl  sm:text-8xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 mb-5 transition-all duration-700 delay-100 ${
              isLoaded
                ? "translate-y-0 opacity-100 blur-0"
                : "translate-y-8 opacity-0 blur-sm"
            }`}
          >
            Turning
          </h1>

          {/* Line 2: The Modern "Glass Card" Switcher */}
          <div
            className={`relative flex items-center justify-center h-[1.3em] my-2 transition-all duration-700 delay-200 ${
              isLoaded
                ? "translate-y-0 opacity-100 blur-0"
                : "translate-y-8 opacity-0 blur-sm"
            }`}
          >
            {/* Dynamic Word Container */}
            <div className="relative w-[300px] md:w-[500px] flex justify-center">
              {words.map((word, index) => (
                <div
                  key={index}
                  className={`
                    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    flex items-center gap-3 md:gap-5 px-6 py-2 md:px-10 md:py-3
                    rounded-2xl border border-purple-500/30 bg-purple-500/10 backdrop-blur-md
                    shadow-[0_0_30px_-10px_rgba(168,85,247,0.3)]
                    transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                    ${
                      index === currentWordIndex
                        ? "opacity-100 scale-100 blur-0 rotate-0"
                        : "opacity-0 scale-90 blur-xl rotate-3"
                    }
                  `}
                >
                  {/* Text */}
                  <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-sm whitespace-nowrap">
                    {word.text}
                  </span>

                  {/* Decorative Sparkles (CSS only) */}
                  <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]" />
                  <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-150" />
                </div>
              ))}
            </div>
          </div>

          {/* Line 3: Into Reality */}
          <h1
            className={`text-6xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 mt-4 transition-all duration-700 delay-300 ${
              isLoaded
                ? "translate-y-0 opacity-100 blur-0"
                : "translate-y-8 opacity-0 blur-sm"
            }`}
          >
            Into Real Projects
          </h1>

          {/* Graphic Element: Gradient Line Separator */}
          <div
            className={`mt-8 md:mt-12 w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full opacity-50 transition-all duration-1000 delay-500 ${
              isLoaded ? "scale-100 opacity-50" : "scale-0 opacity-0"
            }`}
          />
        </div>

        {/* Subtext */}
        <p
          className={`hero-cta mt-8 max-w-lg text-center text-base sm:text-lg text-zinc-400 md:text-xl transition-all duration-700 delay-500 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          Hello, I’m <span className="text-white font-semibold">Renz</span>. I
          engineer pixel-perfect, accessible, and high-performance web
          experiences.
        </p>

        {/* Action Buttons */}
        <div
          className={`hero-cta mt-10 flex flex-col sm:flex-row items-center gap-6 transition-all duration-700 delay-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Button
            text="Download CV"
            href="/files/Renz_Ramelo_Resume.pdf"
            download
          />
          <a
            href="#projects"
            className="group text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors flex items-center gap-2"
          >
            View Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-purple-500"
            >
              <path
                fillRule="evenodd"
                d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Footer Stats */}
      <div className="w-full pb-10 md:pb-16 relative z-20">
        <AnimatedCounter />
      </div>
    </section>
  );
};

export default Hero;
