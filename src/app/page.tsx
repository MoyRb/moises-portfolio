import { Github, Mail, MessageCircle, FolderOpen, Users, ClipboardList, BriefcaseBusiness, Wrench, Sparkles } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { OTHER_PROJECTS, PROJECTS } from "@/lib/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-950 to-violet-950">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <header className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/5 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
          <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet-400/15 blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200">
              <Sparkles size={14} />
              Gestión de proyectos • Liderazgo • Operación comercial • Software
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">Moisés Medina Moreno</h1>

            <h2 className="mt-3 text-xl font-medium text-emerald-200 md:text-2xl">Gestión y Dirección de Proyectos de Software</h2>

            <p className="mt-3 max-w-3xl text-base text-slate-200 md:text-lg">
              Estudiante de Ingeniería en Sistemas Computacionales con enfoque en liderazgo, operación comercial y desarrollo de soluciones digitales. He coordinado operación en Croplink y he trabajado en proyectos recientes como UCES, CachuProject, Flor del Volcán y RackHouse, conectando necesidades reales de negocio con sistemas funcionales, claros y orientados a resultados.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400/25 to-violet-400/25 px-5 py-2.5 text-sm font-medium text-white ring-1 ring-white/10 transition hover:from-emerald-400/35 hover:to-violet-400/35 sm:w-auto" href="https://github.com/MoyRb" target="_blank" rel="noreferrer"><Github size={18} />GitHub</a>
              <a className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-400/15 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-400/25 sm:w-auto" href="mailto:moisesmed2482@gmail.com"><Mail size={18} />Contacto</a>
              <a className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-400/15 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-400/25 sm:w-auto" href="https://wa.me/523511345108?text=Hola%20Mois%C3%A9s,%20vi%20tu%20portafolio%20y%20me%20interesa%20tu%20perfil%20de%20gesti%C3%B3n%20de%20proyectos." target="_blank" rel="noreferrer"><MessageCircle size={18} />WhatsApp</a>
              <a className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-violet-300/30 bg-violet-400/15 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-400/25 sm:w-auto" href="#proyectos"><FolderOpen size={18} />Ver proyectos</a>
            </div>

            <div className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              <Stat icon={<Users size={18} />} title="Liderazgo" desc="Coordinación de equipos, comunicación y toma de decisiones." />
              <Stat icon={<ClipboardList size={18} />} title="Gestión de proyectos" desc="Priorización, seguimiento, documentación y entregables." />
              <Stat icon={<BriefcaseBusiness size={18} />} title="Operación comercial" desc="Ventas, procesos, atención, clientes y control operativo." />
              <Stat icon={<Wrench size={18} />} title="Tecnología aplicada" desc="Sistemas web, bases de datos, automatización y despliegue." />
            </div>
          </div>
        </header>

        <section className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Experiencia en gestión y dirección de proyectos</h2>
          <p className="mt-2 max-w-4xl text-slate-200">Perfil orientado a la gestión y dirección de proyectos de software, combinando liderazgo, operación comercial y criterio técnico para transformar necesidades reales en soluciones digitales funcionales. Mi enfoque está en organizar prioridades, comunicar avances, coordinar trabajo y asegurar que cada proyecto tenga claridad, propósito y utilidad para sus usuarios.</p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <Panel title="Liderazgo y coordinación" items={["Coordinación de actividades, pendientes y responsabilidades.","Comunicación con involucrados para mantener claridad en los avances.","Organización de prioridades según impacto y urgencia.","Toma de decisiones con enfoque práctico para mantener el avance del proyecto.","Experiencia coordinando operación en Croplink."]} />
            <Panel title="Gestión de proyectos de software" items={["Levantamiento de requerimientos desde necesidades reales.","Priorización de funcionalidades según valor para el usuario y el negocio.","Seguimiento de entregables, validación de avances y mejora continua.","Conexión entre visión de negocio, operación y desarrollo técnico."]} />
            <Panel title="Operación comercial y ventas" items={["Experiencia en procesos de venta, atención y operación diaria.","Comprensión de flujos comerciales: cliente, pedido, seguimiento, entrega y control.","Capacidad para diseñar soluciones pensando en usuarios reales y operación práctica."]} />
          </div>
        </section>

        <section id="proyectos" className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight">Proyectos recientes y liderazgo aplicado</h2>
          <p className="mt-2 text-slate-200">Selección de proyectos recientes enfocados en liderazgo, dirección de software, trabajo en equipo, operación comercial y desarrollo de soluciones digitales para necesidades reales.</p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">{PROJECTS.map((p) => <ProjectCard key={p.title} p={p} />)}</div>

          <h3 className="mt-10 text-xl font-semibold tracking-tight text-slate-100">Otros proyectos</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">{OTHER_PROJECTS.map((p) => <ProjectCard key={p.title} p={p} compact />)}</div>
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-2">
          <Panel title="Competencias clave" items={["Dirección y seguimiento de proyectos de software.","Liderazgo, comunicación y coordinación operativa.","Trabajo en equipo y organización de responsabilidades.","Levantamiento de requerimientos con usuarios reales.","Priorización de funcionalidades según impacto de negocio.","Ventas, operación comercial y procesos de atención.","Diseño de soluciones para pedidos, rutas, clientes, puntos de venta y operación.","Documentación, reporteo y mejora continua.","Uso de GitHub, despliegue en Vercel y bases de datos.","Comunicación entre necesidades de negocio y desarrollo técnico."]} />
          <Panel title="Stack técnico" items={["Frontend: Next.js, React, TypeScript, HTML, CSS.","Backend / Datos: Supabase, PostgreSQL, SQL, Python.","Operación y despliegue: GitHub, Vercel, documentación técnica.","Análisis y soporte: Excel, reportes, validación de información."]} />
        </section>
      </div>
    </main>
  );
}

function Stat({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) { return <div className="rounded-3xl border border-white/10 bg-white/5 p-5"><div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">{icon} {title}</div><div className="mt-2 text-sm text-slate-200">{desc}</div></div>; }
function Panel({ title, items }: { title: string; items: string[] }) { return <div className="rounded-3xl border border-white/10 bg-white/5 p-6"><h3 className="text-lg font-semibold">{title}</h3><ul className="mt-4 space-y-2 text-sm text-slate-200">{items.map((i)=><li key={i} className="flex gap-2"><span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-emerald-300 to-violet-300" /><span>{i}</span></li>)}</ul></div>; }
