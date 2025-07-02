import React, { useRef } from "react";
import TitleHeader from "../components/TitleHeader";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import ContactExperience from "../components/models/contact/ContactExperience";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const contact1Ref = useRef(null);
  const contact2Ref = useRef(null);
  const contact3Ref = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );

    // Animations for each app showcase
    const cards = [
      contact1Ref.current,
      contact2Ref.current,
      contact3Ref.current,
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
    <section id="contact" className="flex-center section-padding">
      <div ref={sectionRef} className="w-full h-full md:px-10 px-5">
        <TitleHeader
          ref={contact1Ref}
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div ref={contact2Ref} className="xl:col-span-5"></div>
          <div className="xl:col-span-7 min-h-96">
            <div
              ref={contact3Ref}
              className="bg-purple-200 w-full h-full hover:cursor-grab rounded-3xl overflow-hidden"
            >
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
