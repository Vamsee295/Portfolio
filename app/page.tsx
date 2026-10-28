import Navbar from "./Components/navbar/Navbar";
import Hero from "./Components/hero/Hero";
import TechStrip from "./Components/tech-strip/TechStrip";
import ProjectsSection from "./Components/projects/ProjectsSection";
import About from "./Components/about/About";
import ExperienceEducation from "./Components/experience/ExperienceEducation";
import Certifications from "./Components/certifications/Certifications";
import Skills from "./Components/skills/Skills";
import FinalCTA from "./Components/footer/FinalCTA";
import Footer from "./Components/footer/Footer";
import HelloStartup from "./Components/intro/HelloStartup";
import TalkSticker from "./Components/common/TalkSticker";

export default function Home() {
  return (
    <HelloStartup>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TechStrip />
        <ProjectsSection />
        <About />
        <ExperienceEducation />
        <Certifications />
        <Skills />
        <FinalCTA />
      </main>
      <Footer />
      <TalkSticker />
    </HelloStartup>
  );
}
