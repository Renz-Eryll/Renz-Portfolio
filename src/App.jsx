import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import About from "./sections/About";
import FeatureCards from "./sections/FeatureCards";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ShowcaseSection />
      <LogoShowcase />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
