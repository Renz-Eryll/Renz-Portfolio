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
      if (card) {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
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
      }
    });
  }, []);

  return (
    <>
      <div className="h-24 md:h-32 lg:h-40"></div>
      <section id="contact" className="w-full mb-24 md:mb-32">
        <div
          ref={sectionRef}
          className="w-full h-full px-5 md:px-20 flex-center"
        >
          <div className="w-full">
            <TitleHeader
              ref={contact1Ref}
              title="Get in Touch – Let's Connect"
              sub="💬 Have questions or ideas? Let's talk! 🚀"
            />
            <div className="grid-12-cols mt-5">
              <div
                ref={contact2Ref}
                className="xl:col-span-5 space-y-6 px-8 py-10 rounded-xl"
              >
                <div className="text-2xl font-semibold text-white">
                  Contact Information
                </div>

                <div className="space-y-4 text-base text-white-50">
                  <p>📍 Address: Sariaya, Quezon Philippines </p>
                  <p>📞 Contact Number: +63 930 703 3769</p>
                  <p>
                    📧 Email:{" "}
                    <a
                      href="mailto:renzeryll09@gmail.com"
                      className="underline hover:text-purple-300"
                    >
                      renzeryll09@gmail.com
                    </a>
                  </p>
                </div>
                <div className="text-2xl font-semibold pt-5 text-white">
                  Socials
                </div>
                <div className="flex items-center gap-4 ">
                  <a
                    href="https://www.facebook.com/renzeryll.ramelo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/fb.png"
                      alt="facebook logo"
                      className="rounded-sm"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/renz-eryll-ramelo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/linkedin.png"
                      alt="linkedin logo"
                      className="rounded-sm"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/rnz_eryll/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/insta.png"
                      alt="instagram logo"
                      className="rounded-sm"
                    />
                  </a>
                </div>
              </div>
              <div className="xl:col-span-7 min-h-96">
                <div
                  ref={contact3Ref}
                  className="bg-purple-200 w-full h-full hover:cursor-grab border rounded-xl overflow-hidden"
                >
                  <ContactExperience />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
