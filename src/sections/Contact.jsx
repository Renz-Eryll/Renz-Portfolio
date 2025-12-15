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
      className="w-full min-h-screen  bg-black overflow-hidden py-24"
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
        className="relative z-10 w-full max-w-[1400px] mt-30 mx-auto px-5 md:px-20"
      >
        {/* Header */}
        <div className="mb-20">
          <TitleHeader
            title="Let's Work Together"
            sub="Have questions or ideas? "
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* --- LEFT COLUMN: Contact Info --- */}
          <div
            ref={infoRef}
            className="lg:col-span-5 space-y-10 order-2 lg:order-1"
          >
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Got an idea? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-700">
                  Let's ship it.
                </span>
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                I'm currently available for freelance projects and open to
                full-time opportunities.
              </p>
            </div>

            {/* Contact Details Minimalist */}
            <div className="space-y-8">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
                  Comms Channel
                </span>
                <a
                  href="mailto:renzeryll09@gmail.com"
                  className="text-2xl md:text-3xl text-white font-medium hover:text-purple-300 transition-colors decoration-purple-500/30 underline underline-offset-8"
                >
                  renzeryll09@gmail.com
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
                  Base of Operations
                </span>
                <p className="text-xl text-zinc-300">
                  Sariaya, Quezon Philippines
                </p>
              </div>
            </div>

            {/* Socials Row */}
            <div className="pt-6 border-t border-white/10">
              <div className="flex gap-6">
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
                    className="text-sm font-mono text-zinc-500 hover:text-white transition-colors flex items-center gap-2 uppercase"
                  >
                    <img
                      src={social.img}
                      alt={social.label}
                      className="w-5 h-5 opacity-60"
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
            className="lg:col-span-7 order-1 lg:order-2 flex justify-center lg:justify-end perspective-1000"
          >
            {/* THE CARD CONTAINER */}
            <div className="relative w-full max-w-[600px] aspect-[4/3] group">
              {/* 1. Back Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500 animate-tilt"></div>

              {/* 2. Main Glass Card */}
              <div className="relative w-full h-full bg-[#050505] rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col">
                {/* Noise Texture Overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay"></div>

                {/* Header Bar (Mac style but dark) */}
                <div className="relative z-10 w-full h-10 border-b border-white/5 bg-white/5 flex items-center px-4 justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                    <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                  </div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    System Status: Online
                  </div>
                </div>

                {/* CONTENT INSIDE THE CARD */}
                <div className="relative z-10 flex-1 p-6 md:p-10 flex flex-col justify-between">
                  {/* Top Section: Connection Status */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-purple-700 flex items-center justify-center">
                          <span className="text-white font-bold text-lg">
                            R
                          </span>
                        </div>
                        <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-[#050505] rounded-full"></div>
                        <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full animate-ping"></div>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg">
                          Renz Eryll
                        </h4>
                        <p className="text-green-400 text-xs font-mono uppercase tracking-wide">
                          ● Available for Work
                        </p>
                      </div>
                    </div>

                    {/* Animated Signal Bars */}
                    <div className="flex gap-1 items-end h-8">
                      <div className="w-1 bg-purple-500/50 animate-[pulse_1s_ease-in-out_infinite] h-[40%]"></div>
                      <div className="w-1 bg-purple-500/50 animate-[pulse_1.5s_ease-in-out_infinite] h-[70%]"></div>
                      <div className="w-1 bg-purple-500/50 animate-[pulse_1.2s_ease-in-out_infinite] h-[100%]"></div>
                      <div className="w-1 bg-purple-500/50 animate-[pulse_0.8s_ease-in-out_infinite] h-[60%]"></div>
                    </div>
                  </div>

                  {/* Middle Section: Abstract Data Viz */}
                  <div className="relative w-full h-32 my-6 rounded-lg border border-white/5 bg-white/[0.02] flex items-center justify-center overflow-hidden">
                    {/* Background Grid inside Viz */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_14px]"></div>

                    {/* Glowing Line (Sine Wave Effect) */}
                    <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent top-1/2"></div>
                    <div className="absolute w-20 h-20 bg-purple-500/20 blur-xl rounded-full animate-pulse"></div>

                    <div className="relative z-10 text-center">
                      <p className="text-3xl font-bold text-white tracking-tighter">
                        100%
                      </p>
                      <p className="text-[10px] text-zinc-500 font-mono uppercase">
                        Response Rate
                      </p>
                    </div>
                  </div>

                  {/* Bottom Section: Tech Stack "Tags" */}
                  <div>
                    <p className="text-xs font-mono text-zinc-500 mb-3 uppercase">
                      Preferred Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
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
                          className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-zinc-300 hover:bg-white/10 hover:border-purple-500/30 transition-colors cursor-default"
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
