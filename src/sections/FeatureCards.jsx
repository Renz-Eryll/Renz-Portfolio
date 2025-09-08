import React from "react";
import { abilities } from "../constants";

const FeatureCards = () => {
  return (
    <div className="w-full padding-x-lg mt-10">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc }) => (
          <div
            key={title}
            className="card-border rounded-xl p-8 flex flex-col gap-4 transition-all duration-300 cursor-pointer group hover:bg-gray-900/50 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <div className="size-14 flex items-center justify-center rounded-full bg-gray-800/50 group-hover:bg-purple-500/20 transition-colors duration-300">
              <img src={imgPath} alt={`${title} icon`} width={25} height={25} />
            </div>
            <h3 className="text-white-50 text-2xl font-semibold mt-2 group-hover:text-white transition-colors duration-300">
              {title}
            </h3>
            <p className="text-white-50 text-base group-hover:text-gray-200 transition-colors duration-300">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
