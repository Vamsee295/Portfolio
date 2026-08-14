import Navbar from "./Components/navbar/Navbar";
import Hero from "./Components/hero/Hero";
import TechStrip from "./Components/tech-strip/TechStrip";
import ProjectsSection from "./Components/projects/ProjectsSection";
import About from "./Components/about/About";
import ExperienceEducation from "./Components/experience/ExperienceEducation";
import Skills from "./Components/skills/Skills";
import FinalCTA from "./Components/footer/FinalCTA";
import Footer from "./Components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TechStrip />
        <ProjectsSection />
        <About />
        <ExperienceEducation />
        <Skills />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
