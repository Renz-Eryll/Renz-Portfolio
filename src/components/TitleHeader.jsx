import React from "react";

const TitleHeader = ({ title, sub }) => {
  return (
    <div
      className="text-center mb-12 animate-fade-in"
      style={{ animationDelay: "0.2s" }}
    >
      <p
        className="text-purple-400 text-sm font-medium mb-2"
        aria-hidden="true"
      >
        {sub}
      </p>
      <h2
        className="text-4xl font-bold text-white"
        role="heading"
        aria-level="2"
      >
        {title}
      </h2>
      <div
        className="w-20 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto mt-4 rounded-full"
        style={{ transition: "transform 0.3s" }}
      />
    </div>
  );
};

export default TitleHeader;
