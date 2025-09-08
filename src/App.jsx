import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

// Lazy load sections below the fold
const ShowcaseSection = lazy(() => import("./sections/ShowcaseSection"));
const About = lazy(() => import("./sections/About"));
const Skills = lazy(() => import("./sections/Skills"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

const App = () => {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Suspense
          fallback={<div className="flex-center min-h-screen">Loading...</div>}
        >
          <About />
          <ShowcaseSection />
          <Skills />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default App;
