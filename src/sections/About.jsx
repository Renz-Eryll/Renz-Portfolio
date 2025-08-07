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
          <div className="mt-10 ">
            <div>
              <div className="flex justify-center items-center gap-3">
                <h1 className="text-3xl lg:text-3xl font-bold">
                  I'm <span className="text-purple-50">Renz</span> Eryll Ramelo
                </h1>
                <img
                  src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
                  width="35px"
                  alt="wave"
                />
              </div>

              <div className="text-lg text-white-50 text-center space-y-3 mt-5">
                <p>A Web Developer from the Philippines 🇵🇭</p>
                <p>🎯 Open for work and freelance opportunities!</p>
              </div>
            </div>
            <div className="mt-15">
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-4 p-4 rounded-lg card-border  transition-all duration-300">
                  <span className="text-lg mt-1">🎓</span>
                  <p className="text-base text-white-50 flex-1">
                    I'm an aspiring web developer passionate about building
                    responsive and efficient web applications.
                  </p>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg card-border transition-all duration-300">
                  <span className="text-lg mt-1">🌱</span>
                  <p className="text-base text-white-50 flex-1">
                    Currently exploring more about backend technologies and
                    full-stack system.
                  </p>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg card-border transition-all duration-300">
                  <span className="text-lg mt-1">🤝</span>
                  <p className="text-base text-white-50 flex-1">
                    Strong believer in teamwork, clean code, and continuous
                    learning.
                  </p>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg card-border transition-all duration-300">
                  <span className="text-lg mt-1">🎮</span>
                  <p className="text-base text-white-50 flex-1">
                    When I'm not coding, I love gaming and listening to music.
                  </p>
                </div>
              </div>

              {/* Current Focus Section */}
              <div className="mt-12 p-6 card-border rounded-lg ">
                <h3 className="text-xl font-semibold text-purple-50 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Currently Focused On
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-black/30 rounded-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white-50">
                      Expanding skills in backend with PostgreSQL & Prisma ORM
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-black/30 rounded-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-white-50">
                      Connecting Frontend to Backend via RESTful APIs
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-black/30 rounded-lg">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    <span className="text-white-50">
                      Enhancing Next.js Skills & Learning Best Practices
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-black/30 rounded-lg">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <span className="text-white-50">
                      Currently Developing Freelance Projects
                    </span>
                  </div>
                </div>
              </div>

              {/* Fun Fact Section */}
              <div className="mt-8 p-4 card-border">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💡</span>
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-400">
                      Fun Fact
                    </h4>
                    <p className="text-white-50 text-base mt-1">
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
