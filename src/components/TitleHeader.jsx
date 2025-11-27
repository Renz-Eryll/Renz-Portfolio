import React from "react";

const TitleHeader = ({ title, sub }) => (
  <div className="flex flex-col items-center justify-center text-center mb-5">
    {/* Subtitle / Tag */}
    <div className="flex items-center gap-2 mb-3 opacity-90">
      <span className="h-0.5 w-8 bg-purple-500 rounded-full"></span>
      <span className="text-sm font-bold uppercase tracking-[0.2em] text-purple-400">
        {sub}
      </span>
      <span className="h-0.5 w-8 bg-purple-500 rounded-full"></span>
    </div>

    {/* Main Title - Matches Hero Typography */}
    <h2 className="text-3xl sm:text-2xl md:text-4xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
      {title}
    </h2>
  </div>
);

export default TitleHeader;
