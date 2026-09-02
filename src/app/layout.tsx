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
    "Portfolio de Moisés Medina Moreno, desarrollador de software y Technical Project Manager con experiencia construyendo productos digitales de principio a fin — desde el levantamiento de requerimientos hasta el despliegue en producción.",
  keywords: [
    "software developer",
    "technical project manager",
    "full stack developer",
    "desarrollador de software",
    "gestión de proyectos",
    "Zamora Michoacán",
    "Python",
    "JavaScript",
    "Supabase",
    "Next.js",
  ],
  openGraph: {
    title: "Moisés Medina Moreno — Software Developer",
    description: "Desarrollo software. Gestiono proyectos. Entrego productos.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
