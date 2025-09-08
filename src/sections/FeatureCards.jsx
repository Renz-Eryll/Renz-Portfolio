import React from "react";
import { abilities } from "../constants";

const FeatureCards = () => {
  return (
    <div className="w-full padding-x-lg mt-10">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc }) => (
          <div
            key={title}
            className="card-border rounded-xl p-8 flex flex-col gap-4 transition-all duration-300 cursor-pointer group"
          >
            <div className="size-14 flex items-center justify-center rounded-full">
              <img src={imgPath} alt={title} width={25} height={25} />
            </div>
            <h3 className="text-white-50 text-2xl font-semibold mt-2">
              {title}
            </h3>
            <p className="text-white-50 text-base">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
