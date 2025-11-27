import React from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";

const AnimatedCounter = () => {
  return (
    <div className="w-full px-5 mt-10 sm:px-10 md:px-20 lg:px-20 md:mt-20">
      <div className="grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8">
        {counterItems.map((item, index) => (
          <div
            key={index}
            // Modern Card Container styling
            className="group relative flex flex-col justify-center p-8 transition-all duration-300 border rounded-xl bg-zinc-900 border-zinc-800 hover:border-purple-500/50 hover:bg-zinc-800/50 hover:-translate-y-2 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.15)]"
          >
            {/* Decorative gradient blob behind text (visible on hover) */}
            <div className="absolute w-20 h-20 transition-opacity duration-500 rounded-full opacity-0 -top-4 -right-4 bg-purple-500/20 blur-2xl group-hover:opacity-100" />

            {/* The Number */}
            <div className="relative z-10 mb-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl md:mb-3">
              <CountUp
                end={item.value}
                suffix={item.suffix}
                duration={2.5}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
            </div>

            {/* The Label */}
            <div className="relative z-10 text-sm font-medium tracking-wider uppercase text-zinc-400 group-hover:text-purple-300 transition-colors duration-300">
              {item.label}
            </div>
          </div>
        ))}
      </div>
      <div id="about"></div>
    </div>
  );
};

export default AnimatedCounter;
