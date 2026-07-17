import {
  Award,
  BookOpen,
  BrainCircuit,
  ClipboardList,
  Code2,
  Database,
  FolderOpen,
  Github,
  GraduationCap,
  Laptop,
  Mail,
  MessageCircle,
  Network,
  Presentation,
  Users,
  Wrench,
} from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { OTHER_PROJECTS, PROJECTS } from "@/lib/projects";

const PROFILE_SKILLS = [
  {
    title: "Docencia y capacitación",
    description: "Capacidad para explicar conceptos de manera clara, estructurada y adaptada al nivel de cada estudiante.",
  },
  {
    title: "Manejo de grupos",
    description: "Experiencia trabajando con grupos pequeños, medianos y grandes, manteniendo organización, participación y comunicación.",
  },
  {
    title: "Planeación educativa",
    description: "Preparación de actividades, materiales y dinámicas de aprendizaje orientadas a objetivos concretos.",
  },
  {
    title: "Tecnología aplicada",
    description: "Conocimientos en sistemas web, programación, bases de datos, redes, automatización y herramientas digitales.",
  },
  {
    title: "Comunicación",
    description: "Facilidad para presentar temas, resolver dudas y mantener una comunicación clara con estudiantes y colaboradores.",
  },
  {
    title: "Inglés C1",
    description: "Dominio avanzado del idioma inglés para enseñanza, comunicación, documentación y entornos profesionales.",
  },
  {
    title: "Liderazgo",
    description: "Coordinación de personas, organización de actividades, toma de decisiones y seguimiento de objetivos.",
  },
  {
    title: "Adaptabilidad",
    description: "Capacidad para ajustar contenidos, ejemplos y métodos de enseñanza según la edad, conocimientos y ritmo de aprendizaje.",
  },
];

const HERO_TAGS = ["Ingeniería en Sistemas", "Docencia", "Informática", "Desarrollo de software", "Redes", "Inglés C1", "Gestión de grupos"];
const TEACHING_TAGS = ["Planeación de clases", "Manejo de grupos", "Regularización", "Cursos de verano", "Niños y adolescentes", "Inglés", "Comunicación", "Aprendizaje práctico"];
const CERT_TAGS = ["Cisco Networking Academy", "CCNA", "Redes", "Routing", "Switching", "Seguridad", "Automatización"];
const PROFILE_SKILLS_LOOP = [...PROFILE_SKILLS, ...PROFILE_SKILLS];

const NAV_ITEMS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Perfil", href: "#perfil" },
  { label: "Experiencia docente", href: "#experiencia-docente" },
  { label: "Certificaciones", href: "#certificaciones" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

const TEACHING_EXPERIENCE = [
  {
    title: "Universidad Capital",
    meta: ["Puesto: Docente de Inglés", "Duración: 4 meses"],
    description:
      "Impartición de clases de inglés en nivel universitario, preparación de contenidos y acompañamiento a estudiantes con diferentes niveles de dominio del idioma.",
    responsibilities: [
      "Planeación y preparación de clases.",
      "Explicación de contenidos gramaticales y comunicativos.",
      "Resolución de dudas y seguimiento del aprendizaje.",
      "Adaptación de actividades a diferentes niveles.",
      "Manejo de grupo y participación en clase.",
      "Uso del inglés en contextos académicos y profesionales.",
    ],
  },
  {
    title: "Colegio Ramón Baltierra — Chilchota, Michoacán",
    meta: ["Puesto: Docente", "Duración: 1 año"],
    description:
      "Experiencia docente trabajando con estudiantes en un entorno escolar, desarrollando habilidades de comunicación, organización, manejo de grupos y acompañamiento académico.",
    responsibilities: [
      "Preparación y organización de actividades educativas.",
      "Manejo de grupos y seguimiento de estudiantes.",
      "Explicación clara de temas y resolución de dudas.",
      "Adaptación de actividades según el nivel del grupo.",
      "Promoción de la participación y el trabajo colaborativo.",
      "Comunicación respetuosa con estudiantes y personal educativo.",
    ],
  },
  {
    title: "Clases particulares y regularización académica",
    meta: ["Modalidad: Clases particulares, regularización y cursos de verano", "Público: Niños y adolescentes"],
    description:
      "Impartición de clases particulares y actividades de regularización para niños y adolescentes, incluyendo cursos de verano y acompañamiento personalizado de acuerdo con las necesidades de cada estudiante.",
    responsibilities: [
      "Regularización y reforzamiento de conocimientos.",
      "Preparación de ejercicios y materiales de apoyo.",
      "Atención personalizada y seguimiento del progreso.",
      "Uso de ejemplos prácticos y actividades dinámicas.",
      "Trabajo con estudiantes de distintas edades.",
      "Adaptación al ritmo y estilo de aprendizaje.",
      "Organización de actividades para cursos de verano.",
    ],
  },
];

const INFORMATICS_AREAS = [
  [Laptop, "Fundamentos de informática", "Hardware, software, sistemas operativos, archivos, seguridad digital y uso responsable de la tecnología."],
  [Presentation, "Ofimática y herramientas digitales", "Procesadores de texto, presentaciones, hojas de cálculo, colaboración en línea y organización digital."],
  [Code2, "Programación", "Pensamiento lógico, algoritmos, fundamentos de programación y creación de proyectos sencillos."],
  [Wrench, "Desarrollo web", "Fundamentos de HTML, CSS, JavaScript y construcción de sitios o aplicaciones web."],
  [Network, "Redes y conectividad", "Conceptos de redes, direccionamiento, dispositivos, conectividad y fundamentos de Cisco."],
  [Database, "Bases de datos", "Organización de información, fundamentos de bases de datos y consultas básicas."],
  [ClipboardList, "Proyectos tecnológicos", "Planeación, desarrollo y presentación de proyectos que relacionen tecnología con problemas reales."],
  [BrainCircuit, "Inteligencia artificial aplicada", "Uso responsable de herramientas de inteligencia artificial como apoyo para investigación, aprendizaje y productividad."],
] as const;

const CERTIFICATIONS = [
  {
    title: "CCNA: Introduction to Networks",
    items: ["Fundamentos de redes.", "Modelos y protocolos de comunicación.", "Direccionamiento IP.", "Configuración inicial de dispositivos.", "Conectividad y solución básica de problemas."],
  },
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    items: ["Switching y routing.", "VLAN y redes inter-VLAN.", "Redes inalámbricas.", "Seguridad de red.", "Configuración y diagnóstico de conectividad."],
  },
  {
    title: "CCNA: Enterprise Networking, Security, and Automation",
    items: ["Redes empresariales.", "Seguridad.", "Protocolos de enrutamiento.", "Automatización.", "Diseño, operación y solución de problemas de red."],
  },
];

export default function Home() {
  return (
    <main id="inicio" className="portfolio-bg min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10">
        <nav className="site-nav mb-5" aria-label="Navegación principal">
          <a className="nav-brand" href="#inicio">Moisés Medina Moreno</a>
          <details className="nav-menu">
            <summary aria-label="Abrir menú de navegación">Menú</summary>
            <div className="nav-links">{NAV_ITEMS.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</div>
          </details>
        </nav>

        <header className="hero-premium reveal-section relative scroll-mt-28 overflow-hidden rounded-[1.7rem] border border-white/10 p-5 sm:p-7 md:p-8">
          <div className="pointer-events-none absolute -top-20 -left-16 h-56 w-56 rounded-full bg-emerald-300/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 -bottom-20 h-56 w-56 rounded-full bg-violet-300/10 blur-3xl" />
          <div className="relative grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="min-w-0">
              <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-slate-200">Desarrollo de software · Informática · Redes · Docencia · Inglés C1</div>
              <h1 className="name-title mt-4 font-semibold tracking-tight">Moisés Medina Moreno</h1>
              <h2 className="mt-2 text-lg font-medium text-emerald-100 sm:text-xl md:text-2xl">Ingeniería en Sistemas, Gestión de Proyectos y Docencia</h2>
              <p className="mt-3 max-w-2xl text-sm text-slate-200 sm:text-base">Estudiante de Ingeniería en Sistemas Computacionales con experiencia en desarrollo de soluciones digitales, dirección de proyectos y docencia. He trabajado con estudiantes de diferentes edades, impartiendo clases en instituciones educativas, cursos de regularización y actividades de verano. Mi perfil combina conocimientos técnicos, comunicación, liderazgo y capacidad para explicar conceptos de manera clara, práctica y adaptada a distintos niveles de aprendizaje.</p>
              <TagList tags={HERO_TAGS} className="mt-4" />
              <div className="hero-actions mt-6" id="contacto">
                <a className="btn-premium" href="https://github.com/MoyRb" target="_blank" rel="noreferrer"><Github size={18} />GitHub</a>
                <a className="btn-secondary" href="mailto:moisesmed2482@gmail.com"><Mail size={18} />Contacto</a>
                <a className="btn-secondary" href="https://wa.me/523511345108" target="_blank" rel="noreferrer"><MessageCircle size={18} />WhatsApp</a>
                <a className="btn-violet" href="#proyectos"><FolderOpen size={18} />Ver proyectos</a>
                <a className="btn-secondary" href="#experiencia-docente"><GraduationCap size={18} />Experiencia docente</a>
              </div>
            </div>
            <aside id="perfil" className="hero-panel min-w-0 scroll-mt-28">
              <h3 className="text-sm font-medium uppercase tracking-[0.12em] text-slate-300">Perfil profesional</h3>
              <div className="skills-carousel mt-4" aria-label="Carrusel de habilidades profesionales"><div className="skills-carousel-track">{PROFILE_SKILLS_LOOP.map((skill, idx) => <article key={`${skill.title}-${idx}`} className="skill-card"><h4 className="skill-card-title">{skill.title}</h4><p className="skill-card-desc">{skill.description}</p></article>)}</div></div>
              <p className="mt-4 text-xs text-slate-300/90 sm:text-sm">Perfil híbrido que integra ingeniería en sistemas, liderazgo, comunicación, docencia, inglés C1 y tecnología aplicada.</p>
            </aside>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <Stat icon={<Users size={18} />} title="Manejo de grupos" desc="Organización, participación y comunicación con estudiantes y equipos." />
            <Stat icon={<ClipboardList size={18} />} title="Gestión de proyectos" desc="Priorización, seguimiento, documentación y entregables." />
            <Stat icon={<BookOpen size={18} />} title="Docencia" desc="Explicación clara, planeación de actividades y adaptación a distintos niveles." />
            <Stat icon={<Wrench size={18} />} title="Tecnología aplicada" desc="Sistemas web, bases de datos, redes, automatización y despliegue." />
          </div>
        </header>

        <section id="experiencia-docente" className="reveal-section glass-panel mt-8 scroll-mt-28 rounded-[1.6rem] p-5 sm:p-7">
          <SectionHeading title="Experiencia docente" desc="Experiencia impartiendo clases y actividades educativas a estudiantes de distintas edades, combinando conocimientos académicos, herramientas tecnológicas y estrategias de comunicación para facilitar el aprendizaje." />
          <div className="mt-6 grid gap-5 lg:grid-cols-3">{TEACHING_EXPERIENCE.map((exp) => <TeachingCard key={exp.title} {...exp} />)}</div>
          <div className="mt-6 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-5"><p className="text-sm font-medium text-emerald-50">Experiencia trabajando con grupos pequeños, medianos y grandes, así como en sesiones individuales de regularización y acompañamiento académico.</p><TagList tags={TEACHING_TAGS} className="mt-4" /></div>
        </section>

        <section className="reveal-section glass-panel mt-8 rounded-[1.6rem] p-5 sm:p-7">
          <SectionHeading title="Perfil para docencia en Informática" desc="Mi formación en Ingeniería en Sistemas Computacionales me permite vincular la enseñanza con aplicaciones prácticas de la tecnología. Puedo introducir a los estudiantes en el uso responsable de herramientas digitales, fundamentos de computación, programación, redes, bases de datos, desarrollo web y resolución de problemas tecnológicos, adaptando la profundidad de los contenidos al nivel educativo correspondiente." />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{INFORMATICS_AREAS.map(([Icon, title, desc]) => <article key={title} className="glass-card p-5"><Icon className="text-emerald-200" size={22} aria-hidden="true" /><h3 className="mt-3 text-base font-semibold">{title}</h3><p className="mt-2 text-sm text-slate-200">{desc}</p></article>)}</div>
        </section>

        <section id="certificaciones" className="reveal-section glass-panel mt-8 scroll-mt-28 rounded-[1.6rem] p-5 sm:p-7">
          <SectionHeading title="Certificaciones y formación técnica" desc="Formación técnica orientada a redes, conectividad, seguridad y automatización, integrada con el perfil de Ingeniería en Sistemas Computacionales." />
          <div className="mt-6 rounded-2xl border border-violet-300/20 bg-white/[.04] p-5"><div className="flex flex-wrap items-center gap-3"><span className="rounded-full border border-violet-200/25 bg-violet-300/10 p-2 text-violet-100"><Award size={22} /></span><h3 className="text-xl font-semibold">Ruta CCNA — Cisco Networking Academy</h3></div><div className="mt-5 grid gap-4 md:grid-cols-3">{CERTIFICATIONS.map((cert) => <Panel key={cert.title} title={cert.title} items={cert.items} />)}</div><p className="mt-5 text-sm text-slate-300">Formación completada mediante Cisco Networking Academy como parte de la ruta académica de preparación en tecnologías CCNA.</p><TagList tags={CERT_TAGS} className="mt-4" /></div>
        </section>

        <section className="reveal-section glass-panel mt-8 rounded-[1.6rem] p-5 sm:p-7">
          <h2 className="text-2xl font-semibold tracking-tight">Experiencia en gestión y dirección de proyectos</h2>
          <p className="mt-2 max-w-4xl text-slate-200">Perfil orientado a la gestión y dirección de proyectos de software, combinando liderazgo, operación comercial, comunicación con diferentes perfiles y criterio técnico para transformar necesidades reales en soluciones digitales funcionales.</p>
          <div className="mt-6 grid gap-5 md:grid-cols-3"><Panel title="Liderazgo y coordinación" items={["Coordinación de actividades, pendientes y responsabilidades.","Comunicación con involucrados para mantener claridad en los avances.","Organización de prioridades según impacto y urgencia.","Adaptación de información compleja a explicaciones claras.","Experiencia coordinando operación en Croplink."]} /><Panel title="Gestión de proyectos de software" items={["Levantamiento de requerimientos desde necesidades reales.","Priorización de funcionalidades según valor para el usuario y el negocio.","Seguimiento de entregables, validación de avances y mejora continua.","Documentación y explicación de procesos técnicos para facilitar decisiones."]} /><Panel title="Operación comercial y ventas" items={["Experiencia en procesos de venta, atención y operación diaria.","Comprensión de flujos comerciales: cliente, pedido, seguimiento, entrega y control.","Capacidad para diseñar soluciones pensando en usuarios reales y operación práctica."]} /></div>
        </section>

        <section id="proyectos" className="reveal-section mt-8 scroll-mt-28">
          <h2 className="text-2xl font-semibold tracking-tight">Proyectos recientes y liderazgo aplicado</h2>
          <p className="mt-2 text-slate-200">Selección de proyectos enfocados en liderazgo, dirección de software, pensamiento lógico, documentación, comunicación y uso práctico de tecnología.</p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">{PROJECTS.map((p, idx) => <ProjectCard key={p.title} p={p} priority={idx < 2} />)}</div>
          <h3 className="mt-10 text-xl font-semibold tracking-tight text-slate-100">Otros proyectos</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">{OTHER_PROJECTS.map((p) => <ProjectCard key={p.title} p={p} compact />)}</div>
        </section>
      </div>
    </main>
  );
}

function SectionHeading({ title, desc }: { title: string; desc: string }) { return <div><h2 className="text-2xl font-semibold tracking-tight">{title}</h2><p className="mt-2 max-w-4xl text-slate-200">{desc}</p></div>; }
function TagList({ tags, className = "" }: { tags: string[]; className?: string }) { return <div className={`flex flex-wrap gap-2 ${className}`}>{tags.map((tag) => <span key={tag} className="tag-chip">{tag}</span>)}</div>; }
function TeachingCard({ title, meta, description, responsibilities }: { title: string; meta: string[]; description: string; responsibilities: string[] }) { return <article className="glass-card p-5"><div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"><GraduationCap size={16} />Experiencia</div><h3 className="mt-4 text-lg font-semibold">{title}</h3><div className="mt-3 space-y-1 text-sm text-emerald-100">{meta.map((item) => <p key={item}>{item}</p>)}</div><p className="mt-4 text-sm text-slate-200">{description}</p><ul className="mt-4 space-y-2 text-sm text-slate-200">{responsibilities.map((item) => <li key={item} className="flex gap-2"><span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" /><span>{item}</span></li>)}</ul></article>; }
function Stat({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) { return <div className="glass-card p-5"><div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">{icon} {title}</div><div className="mt-2 text-sm text-slate-200">{desc}</div></div>; }
function Panel({ title, items }: { title: string; items: string[] }) { return <div className="glass-card p-5"><h3 className="text-lg font-semibold">{title}</h3><ul className="mt-4 space-y-2 text-sm text-slate-200">{items.map((i) => <li key={i} className="flex gap-2"><span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" /><span>{i}</span></li>)}</ul></div>; }
