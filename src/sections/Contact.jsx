import React, { useRef } from "react";
import TitleHeader from "../components/TitleHeader";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const graphicRef = useRef(null);
  const infoRef = useRef(null);

  useGSAP(() => {
    // 1. Section Fade In
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

    // 2. Staggered Animation
    const items = [infoRef.current, graphicRef.current];
    items.forEach((item, index) => {
      if (item) {
        gsap.fromTo(
          item,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.2 * index,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=100",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section
      id="contact"
      className="w-full bg-black overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="contact-ambient">
        <div className="section-dark-overlay" />
        <div className="section-grid-pattern" />
        <div className="section-glow-purple" />
        <div className="section-glow-blue" />
        <div className="section-glow-cyan" />
        <div className="section-vignette" />
      </div>
      <div
        ref={sectionRef}
        className="relative z-10 w-full max-w-[1400px] mt-15 lg:mt-30 mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20"
      >
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-12">
          <TitleHeader
            title="Let's Work Together"
            sub="Have questions or ideas? "
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 sm:gap-10 lg:gap-12 xl:gap-16 items-start lg:items-center">
          {/* --- LEFT COLUMN: Contact Info --- */}
          <div
            ref={infoRef}
            className="lg:col-span-5 space-y-6 sm:space-y-8 md:space-y-10 order-2 lg:order-1"
          >
            <div className="space-y-4 sm:space-y-6 text-center sm:text-left">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Got an idea? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-700">
                  Let's ship it.
                </span>
              </h3>
              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-md mx-auto sm:mx-0">
                I'm currently available for freelance projects and open to
                full-time opportunities.
              </p>
            </div>

            {/* Contact Details Minimalist */}
            <div className="space-y-6 sm:space-y-8 text-center sm:text-left">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
                  Comms Channel
                </span>
                <a
                  href="mailto:renzeryll09@gmail.com"
                  className="text-xl sm:text-2xl md:text-3xl text-white font-medium hover:text-purple-300 transition-colors decoration-purple-500/30 underline underline-offset-8 break-all"
                >
                  renzeryll09@gmail.com
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
                  Base of Operations
                </span>
                <p className="text-lg sm:text-xl text-zinc-300">
                  Sariaya, Quezon Philippines
                </p>
              </div>
            </div>

            {/* Socials Row */}
            <div className="pt-4 sm:pt-6 border-t border-white/10">
              <div className="flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-start">
                {[
                  {
                    href: "https://www.facebook.com/renzeryll.ramelo",
                    img: "images/fb.png",
                    label: "FB",
                  },
                  {
                    href: "https://www.linkedin.com/in/renz-eryll-ramelo",
                    img: "images/linkedin.png",
                    label: "LN",
                  },
                  {
                    href: "https://www.instagram.com/rnz_eryll/",
                    img: "images/insta.png",
                    label: "IG",
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-mono text-zinc-500 hover:text-white transition-colors flex items-center gap-2 uppercase"
                  >
                    <img
                      src={social.img}
                      alt={social.label}
                      className="w-4 h-4 sm:w-5 sm:h-5 opacity-60"
                    />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: Advanced Neon Graphic --- */}
          <div
            ref={graphicRef}
            className="lg:col-span-7 order-1 lg:order-2 flex justify-center lg:justify-end w-full"
          >
            {/* THE CARD CONTAINER */}
            <div className="relative w-full max-w-[550px] group">
              {/* 1. Back Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl sm:rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500 animate-tilt"></div>

              {/* 2. Main Glass Card */}
              <div className="relative w-full bg-[#050505] rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col">
                {/* Noise Texture Overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay"></div>

                {/* Header Bar (Mac style but dark) */}
                <div className="relative z-10 w-full h-8 sm:h-10 border-b border-white/5 bg-white/5 flex items-center px-3 sm:px-4 justify-between flex-shrink-0">
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-zinc-700"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-zinc-700"></div>
                  </div>
                  <div className="text-[8px] sm:text-[10px] font-mono text-zinc-500 uppercase tracking-widest whitespace-nowrap">
                    System Status: Online
                  </div>
                </div>

                {/* CONTENT INSIDE THE CARD */}
                <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col gap-4 sm:gap-5 md:gap-6">
                  {/* Top Section: Connection Status */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4 min-w-0">
                      <div className="relative flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-purple-700 flex items-center justify-center">
                          <span className="text-white font-bold text-base sm:text-lg md:text-xl">
                            R
                          </span>
                        </div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-green-500 border-2 border-[#050505] rounded-full"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-green-500 rounded-full animate-ping"></div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-white font-semibold text-sm sm:text-base md:text-lg truncate">
                          Renz Eryll
                        </h4>
                        <p className="text-green-400 text-[10px] sm:text-xs font-mono uppercase tracking-wide">
                          ● Available for Work
                        </p>
                      </div>
                    </div>

                    {/* Animated Signal Bars */}
                    <div className="flex gap-0.5 sm:gap-1 items-end h-5 sm:h-6 md:h-7 flex-shrink-0">
                      <div className="w-0.5 sm:w-1 bg-purple-500/50 animate-[pulse_1s_ease-in-out_infinite] h-[40%]"></div>
                      <div className="w-0.5 sm:w-1 bg-purple-500/50 animate-[pulse_1.5s_ease-in-out_infinite] h-[70%]"></div>
                      <div className="w-0.5 sm:w-1 bg-purple-500/50 animate-[pulse_1.2s_ease-in-out_infinite] h-[100%]"></div>
                      <div className="w-0.5 sm:w-1 bg-purple-500/50 animate-[pulse_0.8s_ease-in-out_infinite] h-[60%]"></div>
                    </div>
                  </div>

                  {/* Middle Section: Abstract Data Viz */}
                  <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36 rounded-lg border border-white/5 bg-white/[0.02] flex items-center justify-center overflow-hidden">
                    {/* Background Grid inside Viz */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_14px]"></div>

                    {/* Glowing Line (Sine Wave Effect) */}
                    <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent top-1/2"></div>
                    <div className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-purple-500/20 blur-xl rounded-full animate-pulse"></div>

                    <div className="relative z-10 text-center">
                      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tighter">
                        100%
                      </p>
                      <p className="text-[9px] sm:text-[10px] md:text-xs text-zinc-500 font-mono uppercase">
                        Response Rate
                      </p>
                    </div>
                  </div>

                  {/* Bottom Section: Tech Stack "Tags" */}
                  <div>
                    <p className="text-[10px] sm:text-xs font-mono text-zinc-500 mb-2 sm:mb-3 uppercase">
                      Preferred Stack
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {[
                        "React",
                        "Next.js",
                        "Express.js",
                        "Tailwind",
                        "Node.js",
                        "MongoDB",
                        "JavaScript",
                        "TypeScript",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 sm:px-2.5 sm:py-1 md:px-3 rounded-md bg-white/5 border border-white/10 text-[10px] sm:text-xs text-zinc-300 hover:bg-white/10 hover:border-purple-500/30 transition-colors cursor-default whitespace-nowrap"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
