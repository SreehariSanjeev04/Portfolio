import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sreehari Sanjeev — Full-Stack Engineer & Systems Builder",
  description:
    "Final-year CS undergrad at NIT Calicut. Building real-time platforms, OS kernels and agentic AI workflows. Ex-Project Intern at Oracle.",
  keywords: [
    "Sreehari Sanjeev",
    "Full-Stack Developer",
    "NIT Calicut",
    "React",
    "Next.js",
    "Systems Programming",
    "Agentic AI",
  ],
  openGraph: {
    title: "Sreehari Sanjeev — Full-Stack Engineer & Systems Builder",
    description:
      "Real-time platforms, OS kernels and agentic AI workflows. Ex-Project Intern at Oracle.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="relative">{children}</body>
    </html>
  );
}
