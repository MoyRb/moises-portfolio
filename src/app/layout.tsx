import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moisés Medina Moreno | Sistemas, Proyectos y Docencia",
  description:
    "Portafolio de Moisés Medina Moreno, Ingeniero en Sistemas Computacionales con experiencia en desarrollo de software, gestión de proyectos, docencia, enseñanza de inglés, redes Cisco y capacitación tecnológica.",
  keywords: [
    "docente de informática",
    "maestro de informática",
    "ingeniería en sistemas",
    "desarrollo de software",
    "Cisco Networking Academy",
    "CCNA",
    "redes",
    "enseñanza de inglés",
    "gestión de proyectos",
    "Chilchota",
    "Michoacán",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
