import "./globals.css";

export const metadata = {
  title: "Moisés Medina Moreno | Portafolio",
  description:
    "Portafolio orientado a análisis, reporteo, inventarios, ERP y optimización de procesos.",
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