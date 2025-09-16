import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  // Sample project data (expanded to test pagination)
  const projects = [
    {
      id: 1,
      title: "Sync It",
      description:
        "A storage and file sharing app built with Next.js 15 and Appwrite for seamless file management.",
      image: "/images/syncit.svg",
      github: "https://github.com/Renz-Eryll/SyncIt.git",
      demo: "https://sync-it-project.vercel.app",
      tech: ["Next.js", "Appwrite", "Tailwind CSS", "Shadcn UI"],
    },
    {
      id: 2,
      title: "Resumind",
      description:
        "An AI-powered resume analyzer for job listings and resume matching.",
      image: "/images/resumind.svg",
      github: "https://github.com/Renz-Eryll/Resumind.git",
      demo: "https://resumind-app.vercel.app",
      tech: ["React Router", "Puter.js", "Tailwind CSS"],
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
      title: "FilmFindr",
      description: "A movie discovery app with an intuitive user interface.",
      image: "/images/filmfindr.svg",
      github: "https://github.com/Renz-Eryll/MovieBrowsingApp.git",
      demo: null,
      tech: ["React.js", "TMDB API", "Tailwind CSS", "Appwrite"],
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
    // Section animation
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Card animations
    projectRefs.current.forEach((card, index) => {
      if (card) {
        // Card entrance animation
        gsap.fromTo(
          card,
          { opacity: 0, xPercent: -30, rotateY: 10 },
          {
            opacity: 1,
            xPercent: 0,
            rotateY: 0,
            duration: 0.8,
            delay: 0.15 * (index % projectsPerPage),
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Animate elements within each card
        const image = card.querySelector("img");
        const title = card.querySelector("h2");
        const description = card.querySelector("p");
        const techStack = card.querySelector(".tech-stack");
        const buttons = card.querySelector(".buttons");

        gsap.from([image, title, description, techStack, buttons], {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({
      top: sectionRef.current.offsetTop - 100,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full padding-x-lg  py-16">
      <div
        id="projects"
        ref={sectionRef}
        className="container mx-auto px-4 xl:px-0"
      >
        <div className="mb-12">
          <TitleHeader
            title="Personal Works and Web Apps"
            sub="🚀 My Projects"
          />
        </div>

        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className="relative card-border rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 card-border rounded-xl blur-3xl "></div>
              <div className="relative pointer-events-none">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              </div>
              <div className="p-6 pointer-events-auto mb-3">
                <h2 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="tech-stack flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-purple-10/10 text-purple-10 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="buttons flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-800 text-white rounded-lg text-sm font-semibold hover:bg-purple-100 transition-colors z-10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub size={16} />
                    Code
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg text-sm font-semibold hover:border-purple-500 hover:text-white transition-colors z-10"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiExternalLink size={16} />
                      Demo
                    </a>
                  ) : (
                    <span
                      className="inline-flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-400 rounded-lg text-sm font-semibold opacity-60 cursor-not-allowed z-10"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiExternalLink size={16} />
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
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

        {/* More Projects Coming Soon */}
        <div className="mt-12 text-center">
          <div className="relative inline-flex flex-col items-center justify-center p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-gray-700/50">
            <div className="absolute inset-0 rounded-2xl blur-xl"></div>
            <div className="relative w-12 h-12 mb-4 rounded-full bg-gray-800/50 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-300 mb-2">
              More Projects Coming Soon
            </h3>
            <p className="text-sm text-gray-400 max-w-md">
              I'm constantly working on new and exciting projects. Stay tuned
              for more innovative web applications!
            </p>
          </div>
        </div>
      </div>
      <div id="skills"></div>
    </section>
  );
};

export default ShowcaseSection;
