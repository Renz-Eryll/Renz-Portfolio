import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-black py-8 border-t border-white/10">
      {/* --- Top Glowing Line Effect (Subtle) --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>

      <div className="container mx-auto px-5 flex flex-col items-center justify-center gap-2">
        {/* Main Copyright */}
        <p className="text-sm md:text-base text-zinc-500 text-center font-light">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-white font-medium hover:text-purple-400 transition-colors cursor-default">
            Renz Eryll Ramelo
          </span>
          . All rights reserved.
        </p>

        {/* Optional: Tiny tagline or status */}
        <p className="text-xs text-zinc-700 font-mono uppercase tracking-widest mt-1">
          Web Developer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
