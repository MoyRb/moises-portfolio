import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moisés Medina Moreno — Software Developer · Technical Project Manager",
  description:
    "Software developer and technical project manager specializing in building digital products end-to-end — from requirements gathering and scope definition to development, deployment, and iteration.",
  keywords: [
    "software developer",
    "technical project manager",
    "full stack developer",
    "product developer",
    "software engineer",
    "Zamora Michoacán",
    "Python",
    "JavaScript",
    "Supabase",
    "Next.js",
  ],
  openGraph: {
    title: "Moisés Medina Moreno — Software Developer",
    description: "Building software. Coordinating projects. Shipping products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
