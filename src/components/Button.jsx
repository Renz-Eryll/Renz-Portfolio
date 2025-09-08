import React from "react";

const Button = ({ text, className, id, href, download }) => {
  const handleClick = (e) => {
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
      className={`${className || ""} cta-wrapper`}
      href={href}
      {...(download ? { download } : {})}
      aria-label={text}
    >
      <div className="cta-button group" role="button" tabIndex={0}>
        <div className="bg-circle" />
        <p className="text text-white" style={{ transition: "all 0.3s" }}>
          {text}
        </p>
        <div className="arrow-wrapper">
          <img src="/images/download2.svg" alt="Arrow icon" />
        </div>
      </div>
    </a>
  );
};

export default Button;
