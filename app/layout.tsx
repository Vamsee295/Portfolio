import type { Metadata } from "next";
import { Anton, Barlow_Condensed, Caveat, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ViewModeProvider } from "./context/ViewModeContext";

const anton = Anton({ variable: "--font-anton", weight: "400", subsets: ["latin"], display: "swap" });
const barlow = Barlow_Condensed({ variable: "--font-barlow", weight: ["500", "700"], subsets: ["latin"], display: "swap" });
const caveat = Caveat({ variable: "--font-caveat", subsets: ["latin"], display: "swap" });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Vamsee Vemulapalli — AI & Software Engineer",
  description:
    "Computer Science student building AI-powered software and intelligent systems. Focused on AI/ML, AI Agents, Software Engineering, and Data.",
  keywords: [
    "Vamsee Vemulapalli",
    "AI Engineer",
    "Software Engineer",
    "Machine Learning",
    "AI Agents",
    "Computer Science",
    "Portfolio",
  ],
  authors: [{ name: "Vamsee Vemulapalli" }],
  openGraph: {
    title: "Vamsee Vemulapalli — AI & Software Engineer",
    description:
      "Computer Science student building AI-powered software and intelligent systems.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${barlow.variable} ${caveat.variable} ${inter.variable} ${jetbrains.variable} h-full`}
    >
      <body className="min-h-full bg-paper text-ink antialiased">
        <ViewModeProvider>
          {children}
        </ViewModeProvider>
      </body>
    </html>
  );
}
