import React from "react";
import TitleHeader from "../components/TitleHeader";
import FeatureCards from "./FeatureCards";

const Skills = () => {
  return (
    <>
      <section className="w-full flex-center md:mt-10 mt-20 section-padding xl:px-0">
        <div className="w-full h-full md:px-20 px-5">
          <TitleHeader
            title="Skills, Technologies & Tools I Use"
            sub="🛠 Skills"
          />
        </div>
      </section>
      <FeatureCards />
    </>
  );
};

export default Skills;
