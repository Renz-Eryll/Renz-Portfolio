import React from "react";
import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => (
  <div className="mt-10 flex-none flex-center marquee-item">
    <img
      src={icon.imgPath}
      alt={icon.name || "Technology logo"}
      className="w-12 h-12 object-contain"
    />
  </div>
);

const LogoShowcase = () => (
  <div className="relative overflow-hidden">
    <div className="gradient-edge" />
    <div className="gradient-edge" />
    <div className="marquee h-50">
      <div className="marquee-box md:gap-18 gap-10 flex">
        {[...logoIconsList, ...logoIconsList].map((icon, index) => (
          <LogoIcon key={`${icon.imgPath}-${index}`} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
