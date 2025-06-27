import React from "react";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import Navbar from "./components/Navbar";
import LogoShowcase from "./components/LogoShowcase";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <LogoShowcase /> */}
      <ShowcaseSection />
    </>
  );
};

export default App;
