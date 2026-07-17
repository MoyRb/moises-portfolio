export type Project = {
  title: string;
  subtitle: string;
  highlights: string[];
  stack: string[];
};

export const PROJECTS: Project[] = [
  {
    title: "Croplink",
    subtitle:
      "Croplink representa mi experiencia más fuerte en coordinación operativa y liderazgo. En este proyecto he participado en la organización de actividades, seguimiento de pendientes, comunicación con involucrados y mejora de procesos relacionados con ventas y operación comercial.",
    highlights: [
      "Coordinación de operación y seguimiento de actividades.",
      "Organización de prioridades y pendientes.",
      "Comunicación con involucrados para mantener claridad en la ejecución y explicar procesos operativos.",
      "Enfoque en ventas, atención, operación y mejora de procesos.",
      "Liderazgo aplicado en un entorno real.",
      "Conexión entre necesidades comerciales y soluciones digitales.",
    ],
    stack: ["Liderazgo", "Operación comercial", "Ventas", "Gestión de procesos", "Coordinación"],
  },
  {
    title: "UCES",
    subtitle:
      "UCES representa una experiencia importante de trabajo en equipo y dirección de proyecto. Participé en la organización de actividades, coordinación de responsabilidades y seguimiento de avances para mantener una visión clara del objetivo del sistema.",
    highlights: [
      "Coordinación de tareas y responsabilidades dentro del equipo.",
      "Participación en la dirección y seguimiento del proyecto.",
      "Comunicación constante para alinear avances y necesidades.",
      "Organización del desarrollo con enfoque en entregables, documentación y comprensión del equipo.",
      "Experiencia aplicando liderazgo en un entorno colaborativo.",
      "Toma de decisiones para mantener claridad y avance del proyecto.",
      "Planeación y seguimiento de funcionalidades.",
    ],
    stack: ["Trabajo en equipo", "Dirección de proyecto", "Gestión colaborativa", "MVP", "Sistema web"],
  },
  {
    title: "CachuProject",
    subtitle:
      "Sistema web orientado a la operación de pedidos, cocina, estaciones de preparación, empaquetado y entrega. Este proyecto demuestra cómo traduzco una operación real de negocio en un flujo digital claro, dividido por roles, estados y responsabilidades.",
    highlights: [
      "Flujo operativo desde kiosco/captura hasta cocina, empaquetado y entrega.",
      "Separación por estaciones y roles de trabajo.",
      "Estados del pedido para seguimiento operativo.",
      "Priorización de funcionalidades según operación real.",
      "Proyecto útil para demostrar gestión de producto y dirección de software.",
      "Diseño pensado para usuarios, procesos reales y explicación clara del flujo de trabajo.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Vercel"],
  },
  {
    title: "Flor del Volcán",
    subtitle:
      "Proyecto desarrollado para una operación real, donde participé en la adaptación del sistema a necesidades del cliente, seguimiento de cambios, validación de funcionalidades y mejora del flujo de trabajo.",
    highlights: [
      "Levantamiento y ajuste de requerimientos del cliente.",
      "Seguimiento de cambios y validación de entregables.",
      "Mejora de flujos operativos dentro del sistema.",
      "Comunicación entre necesidad de negocio y solución técnica, adaptando información compleja a explicaciones claras.",
      "Experiencia trabajando con expectativas reales de cliente.",
      "Adaptación del sistema según retroalimentación.",
    ],
    stack: ["Cliente real", "Requerimientos", "Entregables", "Comunicación", "Gestión operativa", "Software"],
  },
  {
    title: "RackHouse",
    subtitle:
      "Proyecto reciente enfocado en la construcción de una solución digital con visión de producto. RackHouse representa planeación, estructura, ejecución técnica y organización de funcionalidades para resolver una necesidad específica.",
    highlights: [
      "Planeación de funcionalidades y estructura del sistema.",
      "Organización del proyecto con enfoque de producto.",
      "Desarrollo orientado a resolver una necesidad concreta.",
      "Capacidad para conectar diseño, tecnología y operación.",
      "Ejecución reciente dentro de mi portafolio.",
      "Dirección técnica, pensamiento lógico y claridad en la organización del proyecto.",
    ],
    stack: ["Producto digital", "Dirección técnica", "Planeación", "Software", "Ejecución", "Proyecto reciente"],
  },
];

export const OTHER_PROJECTS: Project[] = [
  {
    title: "Farmacias Libra",
    subtitle: "Gestión multi-sucursal con enfoque operativo y control por procesos.",
    highlights: ["Caso complementario para operación, sucursales y seguimiento comercial."],
    stack: ["Sistema web", "Operación"],
  },
  {
    title: "Optimización de programación de cirugías",
    subtitle: "Proyecto analítico de apoyo para planeación y evaluación de escenarios.",
    highlights: ["Implementación de algoritmos, visualización de resultados y explicación de escenarios para decisión."],
    stack: ["Python", "Streamlit"],
  },
];
