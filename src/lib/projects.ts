export type Project = {
  title: string;
  subtitle: string;
  highlights: string[];
  stack: string[];
  links: { label: string; href?: string }[];
};

export const PROJECTS: Project[] = [
  {
    title: "CachuProject",
    subtitle:
      "Sistema de pedidos/operación con enfoque a control y reportes (ideal para inventarios y costos).",
    highlights: [
      "Modelado de datos para operación (pedidos, productos, movimientos).",
      "Base para reportes: ventas, consumo, rotación y margen.",
      "Pensado para flujo real (captura → control → reporte).",
    ],
    stack: ["Next.js/React", "Supabase", "Postgres", "Excel/Reportes"],
    links: [
      { label: "Repo (si es privado, luego lo enlazamos)" },
      { label: "Demo (opcional)" },
    ],
  },
  {
    title: "Farmacias Libra",
    subtitle:
      "Gestión multi-sucursal (inventarios + operación), listo para analítica y control.",
    highlights: [
      "Estructura de datos para inventarios, compras/ventas y control por sucursal.",
      "Orientado a conciliación de información y reporteo operativo.",
      "Excelente caso para mostrar 'ERP + Excel + datos'.",
    ],
    stack: ["Next.js/React", "Supabase", "Postgres", "RLS/Seguridad"],
    links: [
      { label: "Repo (si es privado, luego lo enlazamos)" },
      { label: "Demo (opcional)" },
    ],
  },
  {
    title: "Optimización de programación de cirugías",
    subtitle:
      "App de optimización con interfaz y KPIs (GA / SA / PSO) + export a Excel.",
    highlights: [
      "Interfaz tipo dashboard (Streamlit) para parametrizar el problema.",
      "KPIs y exportación de resultados a Excel para análisis.",
      "Enfoque 100% ‘datos → decisión’ (ideal para perfiles analíticos).",
    ],
    stack: ["Python", "Streamlit", "Algoritmos (GA/SA/PSO)", "Pandas"],
    links: [
      {
        label: "Repo",
        href: "https://github.com/MoyRb/Optimizacion_de_programacion_cirugias",
      },
    ],
  },
];