"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./Components/loader/LoadingScreen";
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

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

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
    </>
  );
}
