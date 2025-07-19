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

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
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
          <div className="showcaselayout">
            {/* LEFT */}
            <div className="first-project-wrapper" ref={project1Ref}>
              <div className="image-wrapper">
                <img
                  src="/images/syncit.svg"
                  alt="Sync It"
                  className="transition-transform duration-200 hover:scale-101"
                />
              </div>
              <div className="text-content">
                <h2>Sync It: A Storage and File Sharing Platform </h2>
                <p className="text-white-50 md:text-lg">
                  A storage and file sharing app built with Next.js 15 and
                  Appwrite for seamless file management.
                </p>
                <div className="flex justify-start gap-3">
                  <div className="relative group">
                    <a
                      href="https://github.com/Renz-Eryll/SyncIt.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-3 bg-purple-100 text-white rounded-md text-sm font-medium transition-transform duration-200 hover:scale-102"
                    >
                      <FaGithub size={16} />
                      Code
                    </a>
                  </div>

                  <a
                    href="https://sync-it-project.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 border border-white-50 text-white-50 rounded-md text-md font-medium transition-transform duration-200 hover:scale-105"
                  >
                    <FiExternalLink size={16} />
                    Live
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="project-list-wrapper overflow-hidden">
              <div className="project" ref={project2Ref}>
                <div className="image-wrapper bg-white-50 p-5">
                  <img
                    src="/images/liteNotee.svg"
                    alt="LiteNote"
                    width={20}
                    height={20}
                  />
                </div>
                <h2>LiteNote: Full-Stack Note-Taking App</h2>

                <div className="flex justify-start mt-3 gap-3">
                  <div className="relative group">
                    <a
                      href="https://github.com/Renz-Eryll/LiteNote.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-3 bg-purple-100 text-white rounded-md text-sm font-medium transition-transform duration-200 hover:scale-102"
                    >
                      <FaGithub size={16} />
                      Code
                    </a>
                  </div>

                  <a
                    href="https://litenote-kapw.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 border border-white-50 text-white-50 rounded-md text-md font-medium transition-transform duration-200 hover:scale-105"
                  >
                    <FiExternalLink size={16} />
                    Live
                  </a>
                </div>
              </div>

              <div className="project" ref={project3Ref}>
                <div className="image-wrapper bg-white-50 p-5">
                  <img src="/images/movie.svg" alt="MovieApp" />
                </div>
                <h2>Movie Browsing App</h2>
                <div className="flex justify-start mt-3 gap-3">
                  <div className="relative group">
                    <a
                      href="https://github.com/Renz-Eryll/MovieBrowsingApp.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-3 bg-purple-100 text-white rounded-md text-sm font-medium transition-transform duration-200 hover:scale-102"
                    >
                      <FaGithub size={16} />
                      Code
                    </a>
                  </div>

                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    aria-disabled="true"
                    className="inline-flex items-center gap-2 px-2.5 py-2 border border-white-50 text-gray-400 cursor-not-allowed opacity-50 rounded-md text-sm font-medium pointer-events-none"
                  >
                    <FiExternalLink size={14} />
                    Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="skills"></div>
    </section>
  );
};

export default ShowcaseSection;
