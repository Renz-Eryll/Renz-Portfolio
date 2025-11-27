import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger the "pill" effect after scrolling 50px
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
        ${
          scrolled
            ? "top-4 w-[90%] md:w-[600px] rounded-full border border-white/10 bg-black/60 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] py-3 px-6"
            : "top-0 w-full bg-transparent py-6 px-5 md:px-10 border-b border-transparent"
        }
      `}
    >
      <div className="flex items-center justify-between w-full">
        {/* Logo Section */}
        <a
          href="#home"
          className="relative z-50 flex items-center gap-2 font-bold tracking-tighter text-white transition-transform duration-300 hover:scale-105"
        >
          {/* Replaced img with text/icon fallback for reliability, but you can swap back to <img> */}

          <span className={`${scrolled ? "hidden md:block" : "block"}`}>
            <a href="#home" className="logo">
              <img
                src="/renz-logo.png"
                alt="logo"
                className="w-14 h-14 object-contain"
              />
            </a>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map(({ link, name }) => (
              <li key={name}>
                <a
                  href={link}
                  className={`
                    relative px-4 py-2 text-sm font-medium transition-colors rounded-full group
                    ${
                      scrolled
                        ? "text-zinc-400 hover:text-white hover:bg-white/10"
                        : "text-zinc-400 hover:text-white"
                    }
                  `}
                >
                  {name}
                  {/* Underline effect only when NOT scrolled (cleaner look for pill mode) */}
                  {!scrolled && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-1/2" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Call to Action (Contact) */}
        <a
          href="#contact"
          className={`
            hidden md:flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300
            ${
              scrolled
                ? "bg-white text-black hover:bg-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                : "bg-white/10 text-white border border-white/10 hover:bg-white/20"
            }
          `}
        >
          Let's Talk
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="relative z-50 flex flex-col justify-center gap-1.5 w-8 h-8 md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`
          absolute top-full left-0 w-full mt-2 overflow-hidden rounded-2xl border border-white/10 bg-black/80 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] md:hidden
          ${
            mobileMenuOpen
              ? "max-h-96 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4"
          }
        `}
      >
        <ul className="flex flex-col p-2">
          {navLinks.map(({ link, name }) => (
            <li key={name}>
              <a
                href={link}
                className="block px-5 py-4 text-sm font-medium text-zinc-400 rounded-xl hover:bg-white/10 hover:text-white transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="block px-5 py-4 mt-2 text-sm font-bold text-center text-black bg-white rounded-xl hover:bg-purple-400 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Let's Talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
