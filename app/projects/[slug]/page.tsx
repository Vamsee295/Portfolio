import { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "../../data/caseStudies";

import ReadingProgress from "../../Components/case-study/ReadingProgress";
import CaseStudyHero from "../../Components/case-study/CaseStudyHero";
import ProjectSnapshot from "../../Components/case-study/ProjectSnapshot";
import ProblemSection from "../../Components/case-study/ProblemSection";
import IdeaFlowSection from "../../Components/case-study/IdeaFlowSection";
import ArchitectureSection from "../../Components/case-study/ArchitectureSection";
import TheorySection from "../../Components/case-study/TheorySection";
import FeatureShowcase from "../../Components/case-study/FeatureShowcase";
import EngineeringDecisions from "../../Components/case-study/EngineeringDecisions";
import {
  ChallengesSection,
  OutcomeSection,
  LearningsSection
} from "../../Components/case-study/CaseStudyConclusions";
import CaseStudyNavigation from "../../Components/case-study/CaseStudyNavigation";

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) return { title: "Project Not Found" };

  return {
    title: `${study.title} — Vamsee Vemulapalli`,
    description: study.tagline,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies[slug];

  if (!study) {
    notFound();
  }

  const prevStudy = caseStudies[study.prevSlug];
  const nextStudy = caseStudies[study.nextSlug];

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <ReadingProgress />
      
      <CaseStudyHero study={study} />
      <ProjectSnapshot study={study} />
      
      <ProblemSection study={study} />
      <IdeaFlowSection study={study} />
      <ArchitectureSection study={study} />
      
      <TheorySection study={study} />
      
      <FeatureShowcase study={study} />
      <EngineeringDecisions study={study} />
      
      <ChallengesSection study={study} />
      <OutcomeSection study={study} />
      <LearningsSection study={study} />
      
      <CaseStudyNavigation 
        study={study} 
        prevTitle={prevStudy?.title || "Previous"} 
        nextTitle={nextStudy?.title || "Next"} 
      />
    </main>
  );
}
