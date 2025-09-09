import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { abilities } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const FeatureCards = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(() => {
    // Container entrance animation
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Card entrance animations
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            y: 60,
            opacity: 0,
            scale: 0.95,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Animate elements within each card
        const image = card.querySelector("img");
        const title = card.querySelector("h3");
        const description = card.querySelector("p");

        gsap.from([image, title, description], {
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

        // Hover animation
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            boxShadow: "0 10px 20px rgba(128, 0, 255, 0.2)",
            duration: 0.4,
            ease: "power2.out",
          });
          gsap.to(image, {
            scale: 1.1,
            duration: 0.4,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            boxShadow: "none",
            duration: 0.4,
            ease: "power2.out",
          });
          gsap.to(image, {
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          });
        });
      }
    });
  }, []);

  return (
    <div ref={containerRef} className="w-full padding-x-lg mt-10">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc }, index) => (
          <div
            key={title}
            ref={(el) => (cardRefs.current[index] = el)}
            className="card-border rounded-xl p-8 flex flex-col gap-4 transition-all duration-300 cursor-pointer group"
          >
            <div className="size-14 flex items-center justify-center rounded-full">
              <img src={imgPath} alt={title} width={25} height={25} />
            </div>
            <h3 className="text-white-50 text-2xl font-semibold mt-2">
              {title}
            </h3>
            <p className="text-white-50 text-base">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
