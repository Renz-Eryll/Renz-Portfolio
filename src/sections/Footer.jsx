import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center"></div>
        <div className="socials">
          {" "}
          <p className="text-center md:text-end">
            © {new Date().getFullYear()}{" "}
            <span className="text-purple-10 font-semibold">
              Renz Eryll Ramelo.
            </span>{" "}
            All rights reserved.
          </p>
        </div>
        <div className="flex flex-col justify-center"></div>
      </div>
    </footer>
  );
};

export default Footer;
