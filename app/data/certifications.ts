export interface Certification {
  id: string;
  title: string;
  shortName?: string;
  issuer: string;
  category: string;
  url: string;
  type: "credential" | "certificate";
}

export const certifications: Certification[] = [
  {
    id: "cert-01",
    title: "Microsoft Certified: Azure Fundamentals",
    shortName: "AZ-900",
    issuer: "Microsoft",
    category: "Cloud",
    url: "https://www.credly.com/badges/51dcfc45-d558-4965-adef-a86402b0f156/public_url",
    type: "credential",
  },
  {
    id: "cert-02",
    title: "MongoDB Associate Developer",
    issuer: "MongoDB",
    category: "Database / Developer",
    url: "https://www.credly.com/badges/74627ef2-b271-4c30-a779-f4c8fbcf6ae6/public_url",
    type: "credential",
  },
  {
    id: "cert-03",
    title: "Cambridge English Linguaskill",
    issuer: "Cambridge English",
    category: "English Language",
    url: "https://drive.google.com/file/d/1C3Kr2O8gTLZ3eRx9WGwnHYhul-jH_a1k/view?usp=sharing",
    type: "certificate",
  },
  {
    id: "cert-04",
    title: "Aviatrix Multicloud Network Associate",
    shortName: "Aviatrix Multicloud Network Associate",
    issuer: "Aviatrix",
    category: "Cloud Networking",
    url: "https://www.credly.com/badges/e79fb121-c08d-4269-8945-84f8bbfaf8cf/public_url",
    type: "credential",
  },
  {
    id: "cert-05",
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    shortName: "OCI Data Science Professional",
    issuer: "Oracle",
    category: "Cloud / Data Science / AI",
    url: "https://drive.google.com/file/d/1MTmPZHxrgMUeu3dR21DYKw39aIN0dFON/view?usp=sharing",
    type: "certificate",
  }
];
