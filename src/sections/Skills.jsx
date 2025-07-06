import React, { useRef } from "react";
import TitleHeader from "../components/TitleHeader";
import FeatureCards from "./FeatureCards";

import LogoShowcase from "./LogoShowcase";

const Skills = () => {
  // const frontendRefs = useRef([]);
  // const backendRefs = useRef([]);

  // const handleMouseMove = (index, refsGroup) => (e) => {
  //   const card = refsGroup.current[index];
  //   if (!card) return;

  //   const rect = card.getBoundingClientRect();
  //   const mouseX = e.clientX - rect.left - rect.width / 2;
  //   const mouseY = e.clientY - rect.top - rect.height / 2;

  //   let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
  //   angle = (angle + 360) % 360;

  //   card.style.setProperty("--start", angle + 60);
  // };

  return (
    <>
      <section className="w-full flex-center md:mt-25 mt-20 section-padding xl:px-0">
        <div className="w-full h-full md:px-20 px-5">
          <TitleHeader
            title="Skills, Technologies & Tools I Use"
            sub="🛠 Skills"
          />

          {/* <div className="mt-15 frontend flex flex-wrap justify-center gap-7">
            {frontendIcons.map((logo, index) => (
              <div
                key={index}
                ref={(el) => (frontendRefs.current[index] = el)}
                onMouseMove={handleMouseMove(index, frontendRefs)}
                className="card card-border timeline-card rounded-xl p-5 flex items-center justify-center"
              >
                <img
                  src={logo.imgPath}
                  alt={`Logo ${index}`}
                  width={40}
                  height={40}
                  className=""
                />
              </div>
            ))}
          </div>

          <div className="mt-10 backend flex flex-wrap justify-center gap-10">
            {backendIcons.map((logo, index) => (
              <div
                key={index}
                ref={(el) => (backendRefs.current[index] = el)}
                onMouseMove={handleMouseMove(index, backendRefs)}
                className="card card-border timeline-card rounded-xl p-4 flex items-center justify-center"
              >
                <img
                  src={logo.imgPath}
                  alt={`Logo ${index}`}
                  width={40}
                  height={40}
                  className=""
                />
              </div>
            ))}
          </div> */}
        </div>
      </section>
      <LogoShowcase />
      <FeatureCards />
    </>
  );
};

export default Skills;
