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
              <div className="grid grid-cols-12 mt-5">
                <div className="col-span-12 flex justify-center">
                  <div className="max-w-8xl w-full">
                    <ul className="text-lg text-white grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-15">
                      <li>
                        🎓 I'm an aspiring web developer passionate about
                        building responsive and efficient web applications.
                      </li>
                      <li>
                        🌱 Currently exploring more about backend technologies
                        and full-stack system.
                      </li>
                      <li>
                        🐝 Highlight: We developed an IoT-enabled stingless bee
                        hive monitoring system for our capstone project.
                      </li>
                      <li>
                        🤝 Strong believer in teamwork, clean code, and
                        continuous learning.
                      </li>
                      <li>
                        🎮 When I'm not coding, I love gaming and listening to
                        music.
                      </li>
                    </ul>
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
