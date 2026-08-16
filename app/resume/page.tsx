import { Metadata } from "next";
import ClientResumeViewer from "../Components/resume/ClientResumeViewer";

export const metadata: Metadata = {
  title: "Resume — Vamsee Vemulapalli",
  description: "View my current experience, projects, skills, and certifications.",
};

export default function ResumePage() {
  return (
    <>
      <ClientResumeViewer />
    </>
  );
}
