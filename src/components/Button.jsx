import React from "react";

const Button = ({ text, className, id, href, download }) => {
  const handleClick = (e) => {
    // Only prevent default if there's an id prop (for scroll)
    if (id) {
      e.preventDefault();

      const target = document.getElementById(id);

      if (target) {
        const offset = window.innerHeight * 0.15;
        const top =
          target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <a
      onClick={handleClick}
      className={`${className ?? ""} cta-wrapper`}
      href={href}
      {...(download ? { download } : {})}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text text-white">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/download2.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
