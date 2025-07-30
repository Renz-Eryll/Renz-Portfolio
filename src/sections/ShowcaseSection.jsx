import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";
import { FaFigma, FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { FiFigma } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const project4Ref = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each project card
    const cards = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
      project4Ref.current,
    ];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );

      // Smooth hover animation setup
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -5,
          duration: 0.4,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      });
    });
  }, []);

  return (
    <section>
      <div id="projects" ref={sectionRef} className="app-showcase">
        <div className="w-full">
          <div className="mb-10">
            <TitleHeader
              title="Personal Works and Web Apps"
              sub="🚀 My Projects"
            />
          </div>

          {/* Single Column Card Layout */}
          <div className="flex flex-col gap-8">
            {/* Project Card 1 */}
            <div
              ref={project1Ref}
              className="bg-black border border-white-50 rounded-2xl p-6 transition-all duration-300 hover:border-white cursor-pointer"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-shrink-0 w-full md:w-1/2">
                  <img
                    src="/images/syncit.svg"
                    alt="Sync It"
                    className="w-full h-48 md:h-64 object-contain rounded-lg"
                  />
                </div>
                <div className="flex-1 w-full md:w-1/2 text-center md:text-left">
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                    Sync It: A Storage and File Sharing Platform
                  </h2>
                  <p className="text-white-50 md:text-lg mb-4">
                    A storage and file sharing app built with Next.js 15 and
                    Appwrite for seamless file management.
                  </p>
                  <div className="flex justify-center md:justify-start gap-3">
                    <a
                      href="https://github.com/Renz-Eryll/SyncIt.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3  bg-purple-100 text-white rounded-lg text-sm font-semibold transition-all duration-300 hover:from-purple-700 hover:to-blue-700 hover:shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-0.5"
                    >
                      <FaGithub size={18} />
                      View Code
                    </a>
                    <a
                      href="https://sync-it-project.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-1 border-white-50 text-white-50 rounded-lg text-sm font-semibold transition-all duration-300  hover:shadow-lg hover:shadow-purple-400/25 transform hover:-translate-y-0.5"
                    >
                      <FiExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div
              ref={project2Ref}
              className="bg-black border border-white-50  rounded-2xl p-6 transition-all duration-300 hover:border-white cursor-pointer"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-shrink-0 w-full md:w-1/2">
                  <img
                    src="/images/resumind.svg"
                    alt="Resumind"
                    className="w-full h-48 md:h-64 object-contain rounded-lg"
                  />
                </div>
                <div className="flex-1 w-full md:w-1/2 text-center md:text-left">
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                    Resumind: AI-Powered Resume Analyzer App
                  </h2>
                  <p className="text-white-50 md:text-lg mb-4">
                    A resume analyzer tool that allows users to create job
                    listings, upload resumes, and match them to requirements.
                  </p>
                  <div className="flex justify-center md:justify-start gap-3">
                    <a
                      href="https://github.com/Renz-Eryll/Resumind.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-purple-100 text-white rounded-lg text-sm font-semibold transition-all duration-300 hover:from-purple-700 hover:to-blue-700 hover:shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-0.5"
                    >
                      <FaGithub size={18} />
                      View Code
                    </a>
                    <a
                      href="resumind-app.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-1 border-white-50 text-white-50 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/25 transform hover:-translate-y-0.5"
                    >
                      <FiExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Project Card 3 */}
            <div
              ref={project3Ref}
              className="bg-black border border-white-50  rounded-2xl p-6 transition-all duration-300 hover:border-white cursor-pointer"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-shrink-0 w-full md:w-1/2">
                  <img
                    src="/images/liteNotee.svg"
                    alt="LiteNote"
                    className="w-full h-48 md:h-64 object-contain rounded-lg"
                  />
                </div>
                <div className="flex-1 w-full md:w-1/2 text-center md:text-left">
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                    LiteNote: Full-Stack Note-Taking App
                  </h2>
                  <p className="text-white-50 md:text-lg mb-4">
                    A comprehensive note-taking application with full-stack
                    functionality for organizing and managing your thoughts.
                  </p>
                  <div className="flex justify-center md:justify-start gap-3">
                    <a
                      href="https://github.com/Renz-Eryll/LiteNote.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-purple-100 text-white rounded-lg text-sm font-semibold transition-all duration-300 hover:from-purple-700 hover:to-blue-700 hover:shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-0.5"
                    >
                      <FaGithub size={18} />
                      View Code
                    </a>
                    <a
                      href="https://litenote-kapw.onrender.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-1 border-white-50 text-white-50 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/25 transform hover:-translate-y-0.5"
                    >
                      <FiExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 4 */}
            <div
              ref={project4Ref}
              className="bg-black border border-white-50  rounded-2xl p-6 transition-all duration-300 hover:border-white cursor-pointer"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-shrink-0 w-full md:w-1/2">
                  <img
                    src="/images/movie.svg"
                    alt="MovieApp"
                    className="w-full h-48 md:h-64 object-contain rounded-lg"
                  />
                </div>
                <div className="flex-1 w-full md:w-1/2 text-center md:text-left">
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                    Movie Browsing App
                  </h2>
                  <p className="text-white-50 md:text-lg mb-4">
                    A movie discovery application for browsing and exploring
                    films with an intuitive user interface.
                  </p>
                  <div className="flex justify-center md:justify-start gap-3">
                    <a
                      href="https://github.com/Renz-Eryll/MovieBrowsingApp.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-purple-100 text-white rounded-lg text-sm font-semibold transition-all duration-300 hover:from-purple-700 hover:to-blue-700 hover:shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-0.5"
                    >
                      <FaGithub size={18} />
                      View Code
                    </a>
                    <span className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 border-1 border-gray-600 text-gray-400 cursor-not-allowed rounded-lg text-sm font-semibold opacity-60">
                      <FiExternalLink size={18} />
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More Projects Coming Soon Message */}
          <div className="mt-10 text-center">
            <div className="inline-flex flex-col items-center justify-center p-8 rounded-lg border-2 border-dashed border-gray-600 bg-gray-900/30">
              <div className="w-12 h-12 mb-4 rounded-full bg-gray-800 flex items-center justify-center">
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
              <p className="text-sm text-gray-500 max-w-md">
                I'm constantly working on new and exciting projects. Stay tuned
                for more innovative web applications and creative solutions!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="skills"></div>
    </section>
  );
};

export default ShowcaseSection;
