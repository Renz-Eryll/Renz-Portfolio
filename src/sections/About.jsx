import React, { useRef, Suspense } from "react";
import Experience from "./Experience";
import TitleHeader from "../components/TitleHeader";

const About = ({ index }) => {
  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    card.style.setProperty("--start", angle + 60);
  };

  return (
    <>
      <section
        className="flex-center py-10 md:mt-20 mt-20 section-padding xl:px-0"
        role="region"
        aria-label="About Me Section"
      >
        <div className="w-full h-full md:px-20 px-5">
          <TitleHeader title="Know About Me" sub="👨‍💻 About Me" />
          <div className="mt-5">
            <div className="relative mb-7">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg blur-3xl" />
              <div className="relative bg-black/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-1 text-center lg:text-left">
                    <div className="flex justify-center items-center gap-3 mb-6">
                      <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
                        I'm{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                          Renz
                        </span>{" "}
                        Eryll Ramelo
                      </h1>
                      <img
                        src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
                        width="40px"
                        alt="Wave animation"
                        className="animate-bounce"
                      />
                    </div>
                    <div className="space-y-4 text-lg text-gray-300">
                      <p className="flex items-center justify-center gap-2">
                        <span className="text-2xl">🇵🇭</span>A Web Developer from
                        the Philippines
                      </p>
                      <p className="flex items-center justify-center gap-2 text-green-400 font-medium">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                        </span>
                        Open for work and freelance opportunities!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-7">
                {[
                  {
                    icon: "🎓",
                    text: "I'm an aspiring web developer passionate about building responsive and efficient web applications.",
                  },
                  {
                    icon: "🌱",
                    text: "Currently exploring more about backend technologies and full-stack system.",
                  },
                  {
                    icon: "🤝",
                    text: "Strong believer in teamwork, clean code, and continuous learning.",
                  },
                  {
                    icon: "🎮",
                    text: "When I'm not coding, I love gaming and listening to music.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    ref={(el) => (cardRefs.current[idx] = el)}
                    onMouseMove={handleMouseMove(idx)}
                    className="group relative overflow-hidden backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10"
                  >
                    <div className="absolute inset-0 card-border via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-start gap-4">
                      <div className="text-3xl p-2 bg-gray-800/50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <p className="text-gray-300 text-base leading-relaxed flex-1 group-hover:text-white transition-colors duration-300">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Suspense
                fallback={<div className="flex-center h-32">Loading...</div>}
              >
                <div className="relative mb-7">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-3xl blur-2xl" />
                  <div className="relative bg-black/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="text-4xl">🎯</div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                        Currently Focused On
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {[
                        {
                          color: "green",
                          text: "Expanding skills in backend with PostgreSQL & Prisma ORM",
                        },
                        {
                          color: "blue",
                          text: "Connecting Frontend to Backend via RESTful APIs",
                        },
                        {
                          color: "purple",
                          text: "Enhancing Next.js Skills & Learning Best Practices",
                        },
                        {
                          color: "yellow",
                          text: "Currently Developing Freelance Projects",
                        },
                      ].map((focus, idx) => (
                        <div
                          key={idx}
                          className="group relative overflow-hidden bg-gray-900/30 border border-gray-700/30 rounded-xl p-4 hover:border-gray-600/50 transition-all duration-300"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`relative w-3 h-3 bg-${focus.color}-400 rounded-full`}
                            >
                              <div
                                className={`absolute inset-0 bg-${focus.color}-400 rounded-full animate-ping opacity-75`}
                              />
                            </div>
                            <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">
                              {focus.text}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Suspense>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-2xl blur-xl" />
                <div className="relative bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-yellow-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl p-2 bg-yellow-500/10 rounded-xl">
                      💡
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-yellow-400 mb-2 flex items-center gap-2">
                        Fun Fact
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        We developed an IoT-enabled stingless bee hive
                        monitoring system for our capstone project. 🐝🐝🐝
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Experience />
    </>
  );
};

export default About;
