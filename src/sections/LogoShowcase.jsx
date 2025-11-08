import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="mt-0 flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
};

const LogoShowcase = () => (
  <div className="relative section-padding">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-20 ">
      <div className="marquee-box md:gap-18 gap-10">
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
