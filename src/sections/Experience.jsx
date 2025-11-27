import React, { useRef, useState, useEffect } from "react";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const experience = [
  {
    title: "Frontend Developer, UI/UX Designer & Quality Assurance",
    company: "On-the-job training / Internship",
    date: "2023 - 2024",
    logo: "/images/logos/React.svg",
    description:
      "Performed QA testing to ensure functionality, fix issues, and maintain compatibility. Designed and developed user-friendly, responsive interfaces for the customer, agent, and admin portals.  Collaborated with the back-end team to integrate ticket management and status updates using React.js and Laravel",
    skills: ["React.js", "Laravel PHP", "TailwindCSS", "MySQL"],
    image: "/images/ticketing.svg",
    caseStudyLink: "#",
    githubLink: "https://github.com/Renz-Eryll/Ticketing-System",
  },

  {
    title: "Frontend Developer, Arduino Programmer",
    company: "Capstone Project",
    date: "2023 - 2024",
    logo: "/images/logos/HTML5.svg",
    description:
      "Developed the front-end interfaces for real-time hive monitoring, harvest tracking, and notifications using HTML, CSS and Bootstrap Programmed and integrated Arduino-based sensors and IoT modules for automated temperature, humidity, and hive weight monitoring, with data transmission to the web system.",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "Arduino", "MySQL"],
    image: "/images/beemo-thumbnail.svg",
    caseStudyLink: "#",
    githubLink: "https://github.com/CJcode6754/BeeMo",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative w-full py-20  bg-black overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-20 mt-20">
        <TitleHeader title="Web Development Journey" sub="🚀 Experience" />

        <div className="relative flex flex-col gap-12 md:gap-24 mt-10">
          {/* The Central Timeline Line (Hidden on mobile, visible on desktop) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent hidden md:block transform md:-translate-x-1/2" />

          {experience.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Mobile Timeline Line & Dot */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-zinc-800 md:hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-purple-500 bg-black z-10" />
                </div>

                {/* Side A: The Project/Image Card */}
                <div className="w-full md:w-1/2 md:px-12 pl-16 md:pl-12">
                  <GlowCard className="h-64 md:h-85 w-full group/image">
                    <div className="absolute inset-0 p-2">
                      <div className="w-full h-full rounded-xl overflow-hidden relative">
                        {/* Image Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
                        />

                        {/* Action Buttons */}
                        <div className="absolute bottom-4 left-4 right-4 z-20 flex gap-2">
                          {/* <a
                            href={item.caseStudyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold hover:bg-white/20 transition-colors"
                          >
                            View Case Study
                          </a> */}
                          <a
                            href={item.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold hover:bg-white/20 transition-colors"
                          >
                            View Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                </div>

                {/* Center Timeline Node (Desktop Only) */}
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center md:flex">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.2)] z-20 overflow-hidden">
                    <img
                      src={item.logo}
                      alt={`${item.company} logo`}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>

                {/* Side B: The Details Card */}
                <div className="w-full md:w-1/2 md:px-12 pl-16 md:pl-12">
                  <div className="flex flex-col gap-4">
                    {/* Date Badge */}
                    <div className="self-start px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-bold uppercase tracking-wide">
                      {item.date}
                    </div>

                    {/* Title & Company */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-lg text-zinc-400 font-medium">
                        {item.company}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-zinc-800/50 border border-zinc-700 text-zinc-300 text-xs font-medium hover:bg-zinc-800 hover:text-white transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
