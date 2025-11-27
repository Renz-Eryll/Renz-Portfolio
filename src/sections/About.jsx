import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const email = "renzeryll09@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Data for focus items
  const focusItems = [
    {
      color: "bg-green-400",
      label: "Backend",
      text: "PostgreSQL & Prisma ORM",
    },
    {
      color: "bg-blue-400",
      label: "API",
      text: "RESTful Integration",
    },
    {
      color: "bg-purple-400",
      label: "Framework",
      text: "Next.js Best Practices",
    },
    {
      color: "bg-yellow-400",
      label: "Freelance",
      text: "Building Client Projects",
    },
  ];

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".bento-item");

      gsap.fromTo(
        items,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full py-20 overflow-hidden bg-black"
    >
      {/* --- Background Effects --- */}
      <div className="absolute inset-0 pointer-events-none bg-grid-white [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"></div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 px-5 md:px-10 lg:px-20">
        {/* Header */}
        <div className="mb-16 bento-item">
          <TitleHeader title="Who I Am" sub="👨‍💻 About Me" />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* 2. Current Focus (Tall) */}
          <div className="bento-item md:col-span-1 lg:col-span-2 row-span-1 lg:row-span-1 p-6 border rounded-2xl bg-zinc-900 border-zinc-800 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.15)]">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🎯</span>
              <h4 className="text-xl font-bold text-zinc-100">Current Focus</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {focusItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg bg-zinc-950/50 border border-zinc-800/50"
                >
                  <div
                    className={`mt-1.5 w-2 h-2 rounded-full ${item.color} shadow-[0_0_8px_rgba(255,255,255,0.5)]`}
                  />
                  <div>
                    <div className="text-xs font-bold uppercase text-zinc-500 tracking-wider mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-sm text-zinc-300 font-medium">
                      {item.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* --- 1. IDE STYLE BIO CARD (New Design) --- */}
          <div className="bento-item md:col-span-2 lg:col-span-2 row-span-2 group relative border rounded-2xl bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors  duration-300 flex flex-col overflow-hidden shadow-2xl">
            {/* Mac-style Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/50 border-b border-zinc-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-xs font-mono text-zinc-500">
                renz_profile.tsx
              </div>
              <div className="w-10" /> {/* Spacer for balance */}
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-sm md:text-base overflow-x-auto">
              <div className="flex flex-col gap-1.5">
                {" "}
                {/* Increased gap slightly for readability */}
                {/* Line 1 */}
                <div className="flex gap-4">
                  <span className="text-zinc-700 select-none w-4 text-right">
                    1
                  </span>
                  <span>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-yellow-200">developer</span>{" "}
                    <span className="text-zinc-400">=</span>{" "}
                    <span className="text-purple-400">{`{`}</span>
                  </span>
                </div>
                {/* Line 2: Name */}
                <div className="flex gap-4">
                  <span className="text-zinc-700 select-none w-4 text-right">
                    2
                  </span>
                  <span className="pl-4">
                    <span className="text-purple-300">name</span>:{" "}
                    <span className="text-green-400">"Renz Eryll Ramelo"</span>,
                  </span>
                </div>
                {/* Line 3: Role */}
                <div className="flex gap-4">
                  <span className="text-zinc-700 select-none w-4 text-right">
                    3
                  </span>
                  <span className="pl-4">
                    <span className="text-purple-300">role</span>:{" "}
                    <span className="text-green-400">"Web Developer"</span>,
                  </span>
                </div>
                {/* Line 4: Email (Interactive) */}
                <div className="flex gap-4 group/email">
                  <span className="text-zinc-700 select-none w-4 text-right">
                    4
                  </span>
                  <span className="pl-4 flex items-center flex-wrap gap-2">
                    <span className="text-purple-300">email</span>:
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-2 px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-purple-500/50 transition-all group-hover/email:scale-105"
                    >
                      <span className="text-green-400 truncate max-w-[150px] sm:max-w-none">
                        "{email}"
                      </span>
                      {copied ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-400"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-zinc-500"
                        >
                          <rect
                            x="9"
                            y="9"
                            width="13"
                            height="13"
                            rx="2"
                            ry="2"
                          ></rect>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                      )}
                    </button>
                    <span className="text-zinc-500 hidden sm:inline">
                      // Click copy
                    </span>
                  </span>
                </div>
                {/* Line 5: Skills/Traits (Array) */}
                <div className="flex gap-4">
                  <span className="text-zinc-700 select-none w-4 text-right">
                    5
                  </span>
                  <span className="pl-4">
                    <span className="text-purple-300">traits</span>:{" "}
                    <span className="text-yellow-200">[</span>
                    <span className="text-green-400">"Creative"</span>,{" "}
                    <span className="text-green-400">"Curious"</span>
                    <span className="text-yellow-200">]</span>,
                  </span>
                </div>
                {/* Line 6: Hobbies (Array) */}
                <div className="flex gap-4">
                  <span className="text-zinc-700 select-none w-4 text-right">
                    6
                  </span>
                  <span className="pl-4">
                    <span className="text-purple-300">hobbies</span>:{" "}
                    <span className="text-yellow-200">[</span>
                    <span className="text-green-400">"Gaming"</span>,{" "}
                    <span className="text-green-400">"Coffee"</span>
                    <span className="text-yellow-200">]</span>,
                  </span>
                </div>
                {/* Line 7: Availability (Boolean) */}
                <div className="flex gap-4">
                  <span className="text-zinc-700 select-none w-4 text-right">
                    7
                  </span>
                  <span className="pl-4">
                    <span className="text-purple-300">hireable</span>:{" "}
                    <span className="text-orange-300">true</span>,
                  </span>
                </div>
                {/* Line 8: Closing */}
                <div className="flex gap-4">
                  <span className="text-zinc-700 select-none w-4 text-right">
                    8
                  </span>
                  <span>
                    <span className="text-purple-400">{`}`}</span>;
                    <span className="animate-pulse ml-1 w-2 h-4 bg-purple-500 inline-block align-middle"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Fun Fact (Box) */}
          <div className="bento-item md:col-span-1 p-6 border rounded-2xl bg-zinc-900 border-zinc-800 hover:border-yellow-500/30 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                Fun Fact
              </div>
            </div>

            <p className="text-zinc-300 text-sm leading-relaxed">
              We developed an IoT-enabled{" "}
              <span className="text-yellow-400 font-semibold">
                stingless bee hive
              </span>{" "}
              monitoring system for our capstone project. 🐝
            </p>
          </div>

          {/* 4. Tech Stack / Tools Summary (Wide) */}
          <div className="bento-item md:col-span-2 lg:col-span-1 p-6 border rounded-2xl bg-zinc-900 border-zinc-800 flex flex-col justify-center items-center text-center hover:bg-zinc-800/50 transition-colors">
            <div className="mb-3 text-purple-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h4 className="text-lg font-bold text-white mb-1">
              Full Stack Ready
            </h4>
            <p className="text-sm text-zinc-400">
              Crafting scalable, SEO-friendly web solutions with modern
              architectures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
