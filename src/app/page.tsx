import { Github, Mail, MessageCircle, FolderOpen, Users, ClipboardList, BriefcaseBusiness, Wrench } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { OTHER_PROJECTS, PROJECTS } from "@/lib/projects";

const PROFILE_SKILLS = [
  {
    title: "Liderazgo",
    description: "Coordinación de equipos, comunicación y toma de decisiones.",
  },
  {
    title: "Dirección de proyecto",
    description: "Planeación, seguimiento de avances y organización de entregables.",
  },
  {
    title: "Trabajo en equipo",
    description: "Colaboración, distribución de responsabilidades y alineación de objetivos.",
  },
  {
    title: "Operación comercial",
    description: "Ventas, clientes, procesos y entendimiento de necesidades reales.",
  },
  {
    title: "Requerimientos",
    description: "Traducción de necesidades del negocio en funcionalidades claras.",
  },
  {
    title: "Priorización",
    description: "Ordenar tareas según impacto, urgencia y valor para el usuario.",
  },
  {
    title: "Comunicación",
    description: "Claridad para presentar avances, acuerdos y decisiones.",
  },
  {
    title: "Inglés C1 fluido",
    description: "Comunicación fluida en inglés para colaboración, documentación y entornos profesionales.",
  },
];

const PROFILE_SKILLS_LOOP = [...PROFILE_SKILLS, ...PROFILE_SKILLS];

export default function Home() {
  return (
    <main className="portfolio-bg min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10">
        <header className="hero-premium reveal-section relative overflow-hidden rounded-[1.7rem] border border-white/10 p-5 sm:p-7 md:p-8">
          <div className="pointer-events-none absolute -top-20 -left-16 h-56 w-56 rounded-full bg-emerald-300/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 -bottom-20 h-56 w-56 rounded-full bg-violet-300/10 blur-3xl" />

          <div className="relative grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="min-w-0">
              <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-slate-200">
                Gestión de proyectos • Liderazgo • Operación comercial
              </div>

              <h1 className="name-title mt-4 font-semibold tracking-tight">Moisés Medina Moreno</h1>
              <h2 className="mt-2 text-lg font-medium text-emerald-100 sm:text-xl md:text-2xl">Gestión y Dirección de Proyectos de Software</h2>
              <p className="mt-3 max-w-2xl text-sm text-slate-200 sm:text-base">
                Ing. Sistemas Computacionales con enfoque en liderazgo, operación comercial y desarrollo de
                soluciones digitales. He coordinado operación en Croplink y trabajado en UCES, CachuProject, Flor del Volcán y
                RackHouse, conectando necesidades reales de negocio con sistemas funcionales y orientados a resultados. También cuento
                con dominio de inglés en nivel C1, con capacidad de comunicación fluida en contextos académicos, técnicos y profesionales.
              </p>

              <div className="hero-actions mt-6">
                <a className="btn-premium" href="https://github.com/MoyRb" target="_blank" rel="noreferrer"><Github size={18} />GitHub</a>
                <a className="btn-secondary" href="mailto:moisesmed2482@gmail.com"><Mail size={18} />Contacto</a>
                <a className="btn-secondary" href="https://wa.me/523511345108" target="_blank" rel="noreferrer"><MessageCircle size={18} />WhatsApp</a>
                <a className="btn-violet" href="#proyectos"><FolderOpen size={18} />Ver proyectos</a>
              </div>
            </div>

            <aside className="hero-panel min-w-0">
              <h3 className="text-sm font-medium uppercase tracking-[0.12em] text-slate-300">Perfil profesional</h3>
              <div className="skills-carousel mt-4" aria-label="Carrusel de habilidades profesionales">
                <div className="skills-carousel-track">
                  {PROFILE_SKILLS_LOOP.map((skill, idx) => (
                    <article key={`${skill.title}-${idx}`} className="skill-card">
                      <h4 className="skill-card-title">{skill.title}</h4>
                      <p className="skill-card-desc">{skill.description}</p>
                    </article>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-xs text-slate-300/90 sm:text-sm">
                Enfoque en requerimientos, comunicación, priorización, inglés C1 fluido y entregables con impacto real.
              </p>
            </aside>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <Stat icon={<Users size={18} />} title="Liderazgo" desc="Coordinación de equipos, comunicación y toma de decisiones." />
            <Stat icon={<ClipboardList size={18} />} title="Gestión de proyectos" desc="Priorización, seguimiento, documentación y entregables." />
            <Stat icon={<BriefcaseBusiness size={18} />} title="Operación comercial" desc="Ventas, procesos, atención, clientes y control operativo." />
            <Stat icon={<Wrench size={18} />} title="Tecnología aplicada" desc="Sistemas web, bases de datos, automatización y despliegue." />
          </div>
        </header>

        <section className="reveal-section glass-panel mt-8 rounded-[1.6rem] p-5 sm:p-7">
          <h2 className="text-2xl font-semibold tracking-tight">Experiencia en gestión y dirección de proyectos</h2>
          <p className="mt-2 max-w-4xl text-slate-200">Perfil orientado a la gestión y dirección de proyectos de software, combinando liderazgo, operación comercial y criterio técnico para transformar necesidades reales en soluciones digitales funcionales.</p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <Panel title="Liderazgo y coordinación" items={["Coordinación de actividades, pendientes y responsabilidades.","Comunicación con involucrados para mantener claridad en los avances.","Organización de prioridades según impacto y urgencia.","Toma de decisiones con enfoque práctico para mantener el avance del proyecto.","Experiencia coordinando operación en Croplink."]} />
            <Panel title="Gestión de proyectos de software" items={["Levantamiento de requerimientos desde necesidades reales.","Priorización de funcionalidades según valor para el usuario y el negocio.","Seguimiento de entregables, validación de avances y mejora continua.","Conexión entre visión de negocio, operación y desarrollo técnico."]} />
            <Panel title="Operación comercial y ventas" items={["Experiencia en procesos de venta, atención y operación diaria.","Comprensión de flujos comerciales: cliente, pedido, seguimiento, entrega y control.","Capacidad para diseñar soluciones pensando en usuarios reales y operación práctica."]} />
          </div>
        </section>

        <section id="proyectos" className="reveal-section mt-8">
          <h2 className="text-2xl font-semibold tracking-tight">Proyectos recientes y liderazgo aplicado</h2>
          <p className="mt-2 text-slate-200">Selección de proyectos enfocados en liderazgo, dirección de software, trabajo en equipo y operación comercial.</p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">{PROJECTS.map((p, idx) => <ProjectCard key={p.title} p={p} priority={idx < 2} />)}</div>
          <h3 className="mt-10 text-xl font-semibold tracking-tight text-slate-100">Otros proyectos</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">{OTHER_PROJECTS.map((p) => <ProjectCard key={p.title} p={p} compact />)}</div>
        </section>
      </div>
    </main>
  );
}

function Stat({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) { return <div className="glass-card p-5"><div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">{icon} {title}</div><div className="mt-2 text-sm text-slate-200">{desc}</div></div>; }
function Panel({ title, items }: { title: string; items: string[] }) { return <div className="glass-card p-5"><h3 className="text-lg font-semibold">{title}</h3><ul className="mt-4 space-y-2 text-sm text-slate-200">{items.map((i)=><li key={i} className="flex gap-2"><span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" /><span>{i}</span></li>)}</ul></div>; }
