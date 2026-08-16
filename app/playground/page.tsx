import type { Metadata } from "next";
import Navbar from "../Components/navbar/Navbar";
import Footer from "../Components/footer/Footer";
import PlaygroundExplorer from "../Components/playground/PlaygroundExplorer";

export const metadata: Metadata = {
  title: "Vibe Coding — Vamsee Vemulapalli",
  description:
    "All builds, experiments, machine learning notebooks, AI agent prototypes, and side projects by Vamsee Vemulapalli. 46+ repositories across AI, software engineering, and data science.",
  keywords: [
    "Vamsee Vemulapalli",
    "Projects",
    "AI Experiments",
    "Machine Learning",
    "Colab Notebooks",
    "GitHub Repositories",
    "Vibe Coding",
    "Side Projects",
    "Data Science",
  ],
  openGraph: {
    title: "Vibe Coding — Vamsee Vemulapalli",
    description:
      "Every experiment, notebook, and prototype I've shipped or studied. 46+ builds across AI, ML, data, and software.",
    type: "website",
  },
};

export default function PlaygroundPage() {
  return (
    <>
      <Navbar />
      <PlaygroundExplorer />
      <Footer />
    </>
  );
}
