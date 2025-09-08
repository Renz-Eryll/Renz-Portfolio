import React, { useEffect, useState, useCallback } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}
      role="navigation"
    >
      <div className="inner">
        <a href="#home" className="logo" aria-label="Home">
          <img
            src="/renz-logo.png"
            alt="Renz Logo"
            className="w-18 h-18 object-contain"
          />
        </a>
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a
                  href={link}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector(link)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  aria-label={`Navigate to ${name}`}
                >
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#contact"
          className="contact-btn group"
          aria-label="Contact me"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
