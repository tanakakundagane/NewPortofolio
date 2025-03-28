import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TopButton from "./components/TopButton";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      <TopButton/>
    </div>
  );
}
