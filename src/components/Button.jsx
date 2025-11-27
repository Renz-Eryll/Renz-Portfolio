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
      href={href}
      onClick={handleClick}
      {...(download ? { download } : {})}
      // Base Styles: Flex container, hidden overflow for the fill effect, transition
      className={`
        group relative inline-flex items-center justify-center overflow-hidden rounded-xl 
        bg-zinc-900 px-8 py-4 font-medium text-white shadow-lg ring-1 ring-zinc-800
        transition-all duration-300 hover:ring-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]
        ${className ?? ""}
      `}
    >
      {/* Hover Fill Effect: A gradient background that slides in from the left */}
      <span className="absolute inset-0 h-full w-full origin-left scale-x-0 bg-gradient-to-r from-purple-600 to-purple-800 transition-transform duration-500 ease-out group-hover:scale-x-100" />

      {/* Content Wrapper: Relative to sit on top of the fill */}
      <span className="relative z-10 flex items-center gap-3">
        <span className="text-sm font-bold uppercase tracking-wider text-zinc-200 group-hover:text-white transition-colors">
          {text}
        </span>

        {/* Icon Animation Wrapper */}
        <div className="relative flex items-center justify-center w-5 h-5 overflow-hidden">
          {/* Default Icon (Arrow Down) - Slides out up-right on hover */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="absolute inset-0 w-full h-full transition-all duration-500 group-hover:-translate-y-5 group-hover:translate-x-5 text-zinc-400 group-hover:text-white"
          >
            <path d="M12 16L7 11H10V4H14V11H17L12 16M12 18C7.58 18 4 14.42 4 10V20H20V10C20 14.42 16.42 18 12 18Z" />
          </svg>

          {/* Hover Icon (Arrow Down) - Slides in from bottom-left */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="absolute inset-0 w-full h-full transition-all duration-500 -translate-x-5 translate-y-5 group-hover:translate-x-0 group-hover:translate-y-0 text-white"
          >
            <path d="M12 16L7 11H10V4H14V11H17L12 16M12 18C7.58 18 4 14.42 4 10V20H20V10C20 14.42 16.42 18 12 18Z" />
          </svg>
        </div>
      </span>
    </a>
  );
};

export default Button;
