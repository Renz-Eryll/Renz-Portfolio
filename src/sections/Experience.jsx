import React, { useRef, useState, useEffect } from "react";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const experience = [
  {
    title: "Web Developer",
    company: "YAT Transcription and Business Outsourcing Services",
    date: "Nov 2025 - Jan 2026",
    logo: "/images/book-solid.svg",
    description:
      "Tested and debugged phishing simulation email templates for security awareness training programs. Identified and resolved rendering issues across multiple Outlook versions and email clients. Collaborated with team using Jira for task tracking and Slack for communication.",
    skills: ["HTML", "CSS", "Email Development", "Jira", "Slack"],
    image: "/images/yat-thumbnail.svg",
    caseStudyLink: "#",
    githubLink: null, // No github link for this experience
  },

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
      className="relative w-full py-16 md:py-20 lg:py-24 bg-black overflow-hidden"
    >
      <div className="experience-ambient">
        <div className="section-dark-overlay" />
        <div className="section-grid-pattern" />
        <div className="section-glow-blue" />
        <div className="section-glow-purple" />
        <div className="section-vignette" />
      </div>
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 md:px-10 lg:px-20 mt-20 md:mt-30">
        <div className="mb-12 md:mb-16 lg:mb-20">
          <TitleHeader title="Web Development Journey" sub="🚀 Experience" />
        </div>

        <div className="relative flex flex-col gap-12 md:gap-16 lg:gap-24">
          {/* The Central Timeline Line (Hidden on mobile, visible on md+) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent hidden md:block transform md:-translate-x-1/2" />

          {experience.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Mobile Timeline Line & Dot */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-zinc-800 md:hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-purple-500 bg-black z-10" />
                </div>

                {/* Side A: The Project/Image Card */}
                <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-6 lg:px-12">
                  <GlowCard className="h-48 sm:h-56 md:h-64 lg:h-80 w-full group/image">
                    <div className="absolute inset-0 p-2">
                      <div className="w-full h-full rounded-xl overflow-hidden relative">
                        {/* Image Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
                        />

                        {/* Action Buttons - Only show if githubLink exists */}
                        {item.githubLink && (
                          <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4 z-20 flex gap-2">
                            <a
                              href={item.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2.5 md:px-3 py-1 md:py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] md:text-xs font-bold hover:bg-white/20 transition-colors"
                            >
                              View Code
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </GlowCard>
                </div>

                {/* Center Timeline Node (Desktop Only) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.2)] z-20 overflow-hidden">
                    <img
                      src={item.logo}
                      alt={`${item.company} logo`}
                      className="w-6 h-6 lg:w-8 lg:h-8 object-contain"
                    />
                  </div>
                </div>

                {/* Side B: The Details Card */}
                <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-6 lg:px-12">
                  <div className="flex flex-col gap-3 md:gap-4">
                    {/* Date Badge */}
                    <div className="self-start px-2.5 md:px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-[10px] md:text-xs font-bold uppercase tracking-wide">
                      {item.date}
                    </div>

                    {/* Title & Company */}
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-white mb-1 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-base md:text-lg text-zinc-400 font-medium">
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
                          className="px-2 md:px-2.5 py-1 rounded-md bg-zinc-800/50 border border-zinc-700 text-zinc-300 text-[10px] md:text-xs font-medium hover:bg-zinc-800 hover:text-white transition-colors cursor-default"
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
