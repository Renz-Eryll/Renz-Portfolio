import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

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
          <div className="mb-20">
            <TitleHeader
              title="My Projects and Web Apps"
              sub="🚀 Personal Projects"
            />
          </div>
          <div className="showcaselayout">
            {/* LEFT */}
            <div className="first-project-wrapper" ref={project1Ref}>
              <div className="image-wrapper">
                <img src="/images/syncit.svg" alt="Sync It" />
              </div>
              <div className="text-content">
                <h2>Sync It: A Storage and File Sharing Platform </h2>
                <p className="text-white-50 md:text-lg">
                  A storage and file sharing app built with Next.js 15 and
                  Appwrite for seamless file management.
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="project-list-wrapper overflow-hidden">
              <div className="project" ref={project2Ref}>
                <div className="image-wrapper bg-purple-100 p-5">
                  <img src="/images/ticketing.svg" alt="ticketing" />
                </div>
                <h2>Ticketing & Support Management System</h2>
              </div>

              <div className="project" ref={project3Ref}>
                <div className="image-wrapper bg-purple-100 p-5">
                  <img src="/images/ticketing.svg" alt="" />
                </div>
                <h2>MedCare: A Healthcare Platform</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
