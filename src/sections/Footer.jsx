import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="flex flex-col justify-center"></div>
        <div className="socials">
          <p className="text-center md:text-end">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-purple-10 font-semibold">
              Renz Eryll Ramelo.
            </span>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
