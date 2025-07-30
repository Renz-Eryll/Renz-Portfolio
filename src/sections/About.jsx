import { useRef } from "react";
import TitleHeader from "../components/TitleHeader";
import Experience from "./Experience";

const About = ({ index }) => {
  // refs for all the cards
  const cardRefs = useRef([]);

  // when mouse moves over a card, rotate the glow effect
  const handleMouseMove = (index) => (e) => {
    // get the current card
    const card = cardRefs.current[index];
    if (!card) return;

    // get the mouse position relative to the card
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    // calculate the angle from the center of the card to the mouse
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

    // adjust the angle so that it's between 0 and 360
    angle = (angle + 360) % 360;

    // set the angle as a CSS variable
    card.style.setProperty("--start", angle + 60);
  };

  return (
    <>
      <section className="flex-center py-10 md:mt-20 mt-20 section-padding xl:px-0">
        <div className="w-full h-full md:px-20 px-5 ">
          <TitleHeader title="Know About Me" sub="👨‍💻 About Me" />
          <div
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseMove={handleMouseMove(index)}
            className="mt-10 card timeline-card rounded-xl p-10 lg:p-20 mb-0 break-inside-avoid-column"
          >
            <div>
              {/* Profile Image Section */}
              <div className="flex justify-center mb-6">
                <div className="relative group">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 p-1 shadow-2xl shadow-purple-500/20">
                    <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                      {/* Placeholder for profile image - you can replace with actual image */}
                      <div className="text-4xl md:text-5xl">👨‍💻</div>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-black flex items-center justify-center">
                    <span className="text-xs">✨</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center gap-3">
                <h1 className="text-3xl lg:text-4xl font-bold">
                  I'm <span className="text-purple-50">Renz</span> Eryll Ramelo
                </h1>
                <img
                  src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
                  width="35px"
                  alt="wave"
                />
              </div>

              <div className="text-xl text-white-50 text-center space-y-3 mt-5">
                <p>A Web Developer from the Philippines 🇵🇭</p>
                <p>🎯 Open for work and freelance opportunities!</p>
              </div>

              <hr className="mt-6 border-t border-white/20" />
            </div>
            <div className="mt-10">
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-900/20 to-transparent rounded-lg border-l-4 border-purple-500 hover:from-purple-900/30 transition-all duration-300">
                  <span className="text-2xl mt-1">🎓</span>
                  <p className="text-lg text-white flex-1">
                    I'm an aspiring web developer passionate about building
                    responsive and efficient web applications.
                  </p>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-900/20 to-transparent rounded-lg border-l-4 border-green-500 hover:from-green-900/30 transition-all duration-300">
                  <span className="text-2xl mt-1">🌱</span>
                  <p className="text-lg text-white flex-1">
                    Currently exploring more about backend technologies and
                    full-stack system.
                  </p>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-900/20 to-transparent rounded-lg border-l-4 border-blue-500 hover:from-blue-900/30 transition-all duration-300">
                  <span className="text-2xl mt-1">🤝</span>
                  <p className="text-lg text-white flex-1">
                    Strong believer in teamwork, clean code, and continuous
                    learning.
                  </p>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-pink-900/20 to-transparent rounded-lg border-l-4 border-pink-500 hover:from-pink-900/30 transition-all duration-300">
                  <span className="text-2xl mt-1">🎮</span>
                  <p className="text-lg text-white flex-1">
                    When I'm not coding, I love gaming and listening to music.
                  </p>
                </div>
              </div>

              {/* Current Focus Section */}
              <div className="mt-12 p-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg border border-purple-500/30">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Currently Focused On
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-black/30 rounded-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white-50">
                      Learning Backend Technologies like Node.js & Express
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-black/30 rounded-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-white-50">
                      Building Full-Stack Apps
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-black/30 rounded-lg">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    <span className="text-white-50">
                      Exploring Cloud Platforms & Database Systems
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-black/30 rounded-lg">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-white-50">
                      Open Source Contributions
                    </span>
                  </div>
                </div>
              </div>

              {/* Fun Fact Section */}
              <div className="mt-8 p-4 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-lg border border-yellow-500/30">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💡</span>
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-400">
                      Fun Fact
                    </h4>
                    <p className="text-white-50 text-sm mt-1">
                      We developed an IoT-enabled stingless bee hive monitoring
                      system for our capstone project. 🐝🐝🐝
                    </p>
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
