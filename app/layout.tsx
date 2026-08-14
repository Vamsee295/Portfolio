import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full bg-white text-[#111111] antialiased">
        {children}
      </body>
    </html>
  );
}
