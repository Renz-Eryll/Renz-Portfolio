import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Experience from "./sections/Experience";

const App = () => {
  return (
    <>
      <div className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className=" ">
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Skills />
          <ShowcaseSection />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
