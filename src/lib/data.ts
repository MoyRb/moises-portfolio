export const PROFILE = {
  name: "Moisés Medina Moreno",
  initials: "MM",
  role: "Software Developer",
  roleAlt: "Technical Project Manager",
  email: "moisesmed2482@gmail.com",
  github: "https://github.com/MoyRb",
  githubHandle: "MoyRb",
  whatsapp: "https://wa.me/523511345108",
  location: "Zamora, Michoacán",
  education: {
    degree: "Ingeniería en Sistemas Computacionales",
    institution: "Instituto Tecnológico de Zamora — TecNM",
    status: "Etapa final · En curso",
  },
};

export const ABOUT = {
  headline: "Desarrollo software.\nGestiono proyectos.\nEntrego productos.",
  paragraphs: [
    "Trabajo en la intersección entre ingeniería de software, visión de producto y coordinación de proyectos — llevando ideas desde la primera conversación con el cliente hasta un producto desplegado y funcionando.",
    "Mi experiencia en FORMEX me dio exposición real a trabajo técnico orientado al cliente: traducir necesidades de negocio en especificaciones técnicas, coordinar ciclos de desarrollo, tomar decisiones de arquitectura y gestionar cambios de alcance sin perder momentum.",
    "Escribo código, coordino proyectos, documento decisiones y me comunico con fluidez en entornos técnicos y no técnicos. Si un proyecto necesita a alguien que lo pueda llevar desde el descubrimiento hasta el despliegue, ese soy yo.",
  ],
  attributes: [
    "Levantamiento de requerimientos",
    "Definición de alcance",
    "Desarrollo Full Stack",
    "Coordinación de proyectos",
    "Documentación técnica",
    "Comunicación con clientes",
    "Visión de producto",
    "Desarrollo asistido por IA",
  ],
};

export type Experience = {
  company: string;
  companyType: string;
  role: string;
  period: string;
  duration: string;
  location: string;
  description: string;
  highlights: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    company: "FORMEX / FORMEX3D",
    companyType: "Tecnología y Soluciones",
    role: "Desarrollador de Software y Coordinador Técnico de Proyectos",
    period: "2024 – Presente",
    duration: "~1 año",
    location: "Zamora, Michoacán",
    description:
      "Fungí como referencia técnica para proyectos de software orientados a clientes — gestionando el ciclo completo desde el levantamiento de requerimientos y definición de alcance hasta el desarrollo, validación y despliegue.",
    highlights: [
      "Lideré sesiones de levantamiento de requerimientos con clientes, traduciendo necesidades de negocio en especificaciones funcionales y propuestas técnicas con alcance definido.",
      "Definí estructuras de proyecto, plazos y entregables — coordinando el avance desde la conceptualización hasta pruebas y despliegue.",
      "Elaboré propuestas de software con dimensionamiento de esfuerzo, definición de módulos y recomendaciones de arquitectura adaptadas a las restricciones de cada cliente.",
      "Gestioné la comunicación entre stakeholders comerciales y técnicos, manteniendo las expectativas alineadas durante todo el ciclo de vida del proyecto.",
      "Participé en decisiones de selección de tecnología y arquitectura, evaluando equilibrios entre velocidad de entrega, escalabilidad y costo.",
      "Documenté soluciones, validé entregables y gestioné cambios de alcance para mantener la integridad del proyecto bajo condiciones reales.",
      "Conceptualicé e implementé soluciones incorporando IA, NFC, APIs REST, servicios cloud y automatización donde agregaban valor real al producto.",
    ],
  },
];

export type Project = {
  index: string;
  title: string;
  subtitle: string;
  problem: string;
  role: string;
  highlights: string[];
  stack: string[];
  type: string;
  featured: boolean;
};

export const PROJECTS: Project[] = [
  {
    index: "01",
    title: "Sistema de Control de Acceso NFC",
    subtitle:
      "Gestión de asistencia de principio a fin para una institución educativa mediante credenciales NFC.",
    problem:
      "La institución necesitaba una solución confiable y escalable para registrar la asistencia de estudiantes, reemplazando procesos manuales con un sistema digital validado.",
    role: "Definición completa del sistema y desarrollo, desde el modelo operativo hasta la propuesta técnica y comercial.",
    highlights: [
      "Definí el modelo operativo completo: registro de alumnos, asignación de credenciales NFC, validación de entradas/salidas y prevención de lecturas duplicadas.",
      "Desarrollé la interfaz de administración con historial completo de asistencia y generación de reportes.",
      "Adapté la arquitectura para soportar lectura NFC desde Android y lector USB, garantizando flexibilidad de implementación.",
      "Estructuré la propuesta técnica y comercial para presentación ante la institución.",
    ],
    stack: ["Python", "NFC", "SQL", "Web"],
    type: "Desarrollo de Producto",
    featured: true,
  },
  {
    index: "02",
    title: "Plataforma Web de Pedidos y Fidelización",
    subtitle:
      "Aplicación web full stack desplegada en Vercel para clientes y administradores de negocio.",
    problem:
      "Un negocio necesitaba un sistema digital de pedidos con seguimiento de clientes y programa de puntos, reemplazando una operación completamente manual.",
    role: "Desarrollo full stack desde el diseño de autenticación hasta el despliegue en producción.",
    highlights: [
      "Construí los flujos completos de autenticación, gestión de pedidos e historial de cliente, con integridad de datos garantizada a nivel de base de datos.",
      "Implementé un sistema de puntos de fidelización con estado persistente entre sesiones.",
      "Diseñé experiencias diferenciadas por rol — cliente y administrador — con alertas de nuevos pedidos en tiempo real.",
      "Desplegué y mantuve la aplicación en Vercel con acceso por código QR para clientes.",
    ],
    stack: ["JavaScript", "Supabase", "PostgreSQL", "Vercel"],
    type: "Full Stack Web",
    featured: true,
  },
  {
    index: "03",
    title: "Optimizador de Programación Quirúrgica",
    subtitle:
      "Herramienta de apoyo a la toma de decisiones que convierte un proceso manual complejo en software accionable.",
    problem:
      "La programación de cirugías de un área hospitalaria era completamente manual, dificultando la evaluación de escenarios y la planificación eficiente.",
    role: "Modelado del problema, diseño de la lógica de optimización y desarrollo de visualización interactiva.",
    highlights: [
      "Modelé el problema operativo, identifiqué variables clave y diseñé la lógica de optimización para evaluación de escenarios.",
      "Construí una capa de visualización interactiva con Streamlit para presentar resultados y apoyar decisiones en tiempo real.",
      "Entregué una herramienta funcional que reemplaza un flujo manual por un proceso estructurado orientado a datos.",
    ],
    stack: ["Python", "Streamlit", "Algoritmos", "Visualización de datos"],
    type: "Datos y Optimización",
    featured: false,
  },
  {
    index: "04",
    title: "Diseño de Plataformas Empresariales — CRM / ERP",
    subtitle:
      "Levantamiento de requerimientos y diseño conceptual de sistemas para empresas de distintos sectores.",
    problem:
      "Múltiples empresas necesitaban digitalizar su operación — desde CRM e inventarios hasta nómina y seguimiento de producción — sin arquitectura definida para comenzar.",
    role: "Análisis de requerimientos, diseño modular de sistemas y elaboración de propuestas técnicas.",
    highlights: [
      "Analicé procesos operativos en producción, nómina, inventarios, personal temporal y seguimiento de procesos para identificar oportunidades de digitalización.",
      "Estructuré diseños modulares con flujos de datos definidos, roles de usuario y puntos de integración.",
      "Elaboré propuestas técnicas alineadas a objetivos de negocio, restricciones de tiempo e infraestructura existente.",
    ],
    stack: ["Requerimientos", "Arquitectura de sistemas", "Diseño de producto"],
    type: "Producto y Arquitectura",
    featured: false,
  },
];

export const STACK = [
  {
    category: "Lenguajes",
    items: ["Python", "JavaScript", "SQL"],
  },
  {
    category: "Web y APIs",
    items: ["Node.js", "REST APIs", "Autenticación", "HTML / CSS"],
  },
  {
    category: "Datos y Bases de datos",
    items: ["Supabase", "PostgreSQL", "SQLite", "Diseño relacional"],
  },
  {
    category: "Infraestructura",
    items: ["Git", "GitHub", "Vercel", "Docker", "Linux"],
  },
  {
    category: "Herramientas",
    items: ["Streamlit", "Desarrollo asistido por IA", "Prototipado rápido", "Documentación técnica"],
  },
  {
    category: "Producto y Gestión",
    items: [
      "Levantamiento de requerimientos",
      "Definición de alcance",
      "Gestión de cambios",
      "Validación de entregables",
    ],
  },
];

export const APPROACH = [
  {
    step: "01",
    title: "Descubrir",
    description:
      "Conversaciones con stakeholders, levantamiento de requerimientos y comprensión del problema real antes del técnico.",
  },
  {
    step: "02",
    title: "Definir",
    description:
      "Definición de alcance, decisiones de arquitectura, selección de tecnología y planificación de entregables.",
  },
  {
    step: "03",
    title: "Construir",
    description:
      "Desarrollo full stack con código limpio, lógica estructurada y avance iterativo hacia un producto funcional.",
  },
  {
    step: "04",
    title: "Validar",
    description:
      "Pruebas de flujos, casos borde, sesiones de retroalimentación con el cliente y revisión de uso real.",
  },
  {
    step: "05",
    title: "Desplegar",
    description:
      "Llevar a producción, configurar infraestructura y garantizar una entrega estable y confiable.",
  },
  {
    step: "06",
    title: "Iterar",
    description:
      "Incorporar retroalimentación, gestionar cambios de alcance y mejorar el producto de forma continua.",
  },
];
