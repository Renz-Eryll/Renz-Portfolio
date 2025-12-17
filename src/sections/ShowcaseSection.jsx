import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiFolder } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const projects = [
    {
      id: 1,
      title: "SubTrack",
      description: "Subscription management system for users and transactions.",
      image: "/images/SubTrack.svg",
      github: "https://github.com/Renz-Eryll/SubTrack.git",
      demo: "",
      tech: ["Express.js", "Node.js", "MongoDB", "JWT"],
    },
    {
      id: 2,
      title: "Postagram",
      description:
        "Social media web application with user authentication, post creation.",
      image: "/images/postagram-thumbnail.svg",
      github: "https://github.com/Renz-Eryll/Postagram.git",
      demo: "https://postagram-app.vercel.app",
      tech: ["Next.js", "Neon", "Prisma", "Clerk", "Shadcn UI"],
    },
    {
      id: 3,
      title: "CourseBoard",
      description:
        "A frontend admin dashboard for managing courses and subscriptions.",
      image: "/images/courseboard.svg",
      github: "https://github.com/Renz-Eryll/CourseBoard.git",
      demo: "https://courseboard.vercel.app",
      tech: ["Next.js", "Tailwind CSS", "Shadcn UI"],
    },
    {
      id: 4,
      title: "Memory Game",
      description:
        "An engaging memory game built to challenge your cognitive skills.",
      image: "/images/memoryGame-thumbnail.svg",
      github: "https://github.com/Renz-Eryll/Memory_Game.git",
      demo: "https://memory-concentration-game.vercel.app",
      tech: ["React.js", "TypeScript", "SCSS"],
    },
    {
      id: 5,
      title: "Resumind",
      description:
        "An AI-powered resume analyzer for job listings and resume matching.",
      image: "/images/resumind-thumbnail.svg",
      github: "https://github.com/Renz-Eryll/Resumind.git",
      demo: "https://resumind-app.vercel.app",
      tech: ["React Router", "Puter.js", "Tailwind CSS"],
    },
    {
      id: 6,
      title: "Sync It",
      description:
        "A storage and file sharing app built with Next.js 15 and Appwrite for seamless file management.",
      image: "/images/syncit.svg",
      github: "https://github.com/Renz-Eryll/SyncIt.git",
      demo: "https://sync-it-project.vercel.app",
      tech: ["Next.js", "Appwrite", "Shadcn UI"],
    },
    {
      id: 7,
      title: "FilmFindr",
      description:
        "A movie discovery app with an intuitive user interface with TMDB API.",
      image: "/images/filmfindr.svg",
      github: "https://github.com/Renz-Eryll/MovieBrowsingApp.git",
      demo: null,
      tech: ["React.js", "TMDB API", "Appwrite"],
    },
  ];

  // Pagination logic
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  useGSAP(() => {
    // Section Fade In
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // Card animations (Staggered)
    const validRefs = projectRefs.current.filter((el) => el !== null);

    if (validRefs.length > 0) {
      gsap.fromTo(
        validRefs,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: validRefs[0],
            start: "top 85%",
          },
        }
      );
    }
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="projects-ambient">
        <div className="section-dark-overlay" />
        <div className="section-grid-pattern" />
        <div className="section-glow-purple" />
        <div className="section-glow-blue" />
        <div className="section-vignette" />
      </div>
      <div
        ref={sectionRef}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20"
      >
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <TitleHeader title="Personal Works and Builds" sub="My Projects" />
        </div>

        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {currentProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className="group relative bg-zinc-900/30 border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* Image Container - Fixed aspect ratio */}
              <div className="relative w-full aspect-video overflow-hidden border-b border-white/5 flex-shrink-0">
                <div className="absolute inset-0 bg-zinc-800 animate-pulse" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="relative w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark Overlay on Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80"></div>
                {/* Floating Icon Top Right */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-lg text-zinc-400 group-hover:text-white transition-colors">
                  <FiFolder className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>

              {/* Content - Flexible container */}
              <div className="p-7 sm:p-5 md:p-6 lg:p-8 flex flex-col flex-grow">
                {/* Title and Description - Grows to fill space */}
                <div className="flex-grow flex flex-col min-h-0">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                    {project.title}
                  </h2>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 md:mb-6 line-clamp-2 sm:line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack - Fixed at bottom */}
                <div className="mb-4 sm:mb-5 md:mb-6 flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-white/5 border border-white/10 rounded-md text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-zinc-300 group-hover:border-purple-500/30 transition-colors whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-[10px] text-zinc-500 font-mono">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Buttons - Fixed at bottom */}
                <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-white/5 flex-shrink-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                  >
                    <FaGithub className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>Code</span>
                  </a>

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors ml-auto group/link"
                    >
                      <span className="whitespace-nowrap">Live Demo</span>
                      <FiExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform flex-shrink-0" />
                    </a>
                  ) : (
                    <span className="ml-auto text-[10px] sm:text-xs font-mono text-zinc-600 uppercase cursor-not-allowed whitespace-nowrap">
                      Coming Soon!
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modern Pagination */}
        {totalPages > 1 && (
          <div className="mt-6 sm:mt-8 md:mt-9 flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
                  currentPage === page
                    ? "bg-purple-50 text-white"
                    : "bg-gray-800/50 text-gray-300 hover:bg-purple-50/20 hover:text-purple-400"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ShowcaseSection;
