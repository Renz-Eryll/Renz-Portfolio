import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div id="skills" className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
};

const LogoShowcase = () => (
  <div className="relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-50">
      <div className="marquee-box md:gap-20 gap-10 ">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}

        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
