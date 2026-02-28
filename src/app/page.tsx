import { Github, Mail, MessageCircle, Phone, Download, BarChart3, Boxes, Sparkles } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-950 to-violet-950">
      <div className="mx-auto max-w-6xl px-5 py-10">
        {/* HERO */}
        <header className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/5 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
          <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet-400/15 blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200">
              <Sparkles size={14} />
              Portafolio orientado a datos, control y reporteo
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Moisés Medina Moreno
            </h1>

            <p className="mt-3 max-w-2xl text-base text-slate-200 md:text-lg">
              Ing. en Sistemas Computacionales (ITESZ). Me enfoco en{" "}
              <span className="font-medium text-white">análisis de datos</span>,{" "}
              <span className="font-medium text-white">ERP / inventarios</span> y{" "}
              <span className="font-medium text-white">automatización de reportes</span>.
              Ideal para roles donde importan COGS, control operativo y decisiones con datos.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400/25 to-violet-400/25 px-5 py-2.5 text-sm font-medium text-white ring-1 ring-white/10 transition hover:from-emerald-400/35 hover:to-violet-400/35 sm:w-auto"
                href="https://github.com/MoyRb"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} />
                GitHub
              </a>

              <a
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-400/15 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-400/25 sm:w-auto"
                href="mailto:moisesmed2482@gmail.com"
              >
                <Mail size={18} />
                Contacto
              </a>

              <a
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-400/15 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-400/25 sm:w-auto"
                href="https://wa.me/523511345108?text=Hola%20Mois%C3%A9s,%20vi%20tu%20portafolio%20y%20me%20interesa%20tu%20perfil%20para%20Analista%20de%20Costos."
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>

              <a
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-violet-300/30 bg-violet-400/15 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-400/25 sm:w-auto"
                href="tel:+523511345108"
              >
                <Phone size={18} />
                Teléfono
              </a>

              <a
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-violet-300/30 bg-violet-400/15 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-400/25 sm:w-auto"
                href="/cv.pdf"
              >
                <Download size={18} />
                Descargar CV
              </a>
            </div>

            <div className="mt-7 grid gap-3 md:grid-cols-3">
              <Stat icon={<BarChart3 size={18} />} title="Analítica" desc="KPIs, reportes, tableros" />
              <Stat icon={<Boxes size={18} />} title="Operación" desc="Inventarios, control, conciliación" />
              <Stat icon={<Sparkles size={18} />} title="Mejora" desc="Optimización + automatización" />
            </div>
          </div>
        </header>

        {/* EXPERIENCIA EN ANÁLISIS DE DATOS */}
        <section className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Experiencia en análisis de datos</h2>
          <p className="mt-2 max-w-3xl text-slate-200">
            Perfil orientado a Analista de Costos en industria, combinando operación, control y reporteo para
            decisiones con información confiable.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <Panel
              title="Gestión operativa y control"
              items={[
                "Elaboración de KPIs y reportes operativos para control y toma de decisiones.",
                "Limpieza, validación y conciliación de información entre múltiples fuentes.",
                "Enfoque en inventarios, operación y variaciones para fortalecer controles.",
              ]}
            />
            <Panel
              title="Reporteo y seguimiento"
              items={[
                "Generación de reportes exportables (Excel/CSV) para análisis y comunicación.",
                "Construcción de tableros para seguimiento de indicadores clave.",
                "Monitoreo de variaciones de COGS y soporte a acciones de mejora operativa.",
              ]}
            />
          </div>
        </section>

        {/* PROYECTOS */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight">Proyectos destacados</h2>
          <p className="mt-2 text-slate-200">
            Selección enfocada en sistemas y casos donde se generan datos para control, reporteo y mejora.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="mt-12 grid gap-5 md:grid-cols-2">
          <Panel
            title="Lo que domino (en modo negocio)"
            items={[
              "Excel avanzado (tablas dinámicas, Power Query, fórmulas, reportes)",
              "ERP / Inventarios (entradas-salidas, control y consistencia de datos)",
              "Conciliación y auditoría de datos (detectar diferencias y errores)",
              "Reporteo para decisión (márgenes, rotación, consumo, variaciones)",
            ]}
          />
          <Panel
            title="Tech stack"
            items={[
              "SQL + Postgres / Supabase",
              "Python (Pandas) + Streamlit",
              "TypeScript + Next.js/React",
              "Git/GitHub + despliegue (Vercel)",
            ]}
          />
        </section>

        {/* FOOTER */}
        <footer className="mt-12 pb-10 text-sm text-slate-300">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-slate-200">
              Si quieres, lo dejamos todavía más “contratable”:
              le metemos screenshots, sección “Logros medibles”, y lo enfocamos 100% a Analista de Costos.
            </p>
            <p className="mt-2 text-slate-300">
              Tip rápido: mete tu CV en <code className="rounded bg-black/30 px-1.5 py-0.5">/public/cv.pdf</code> y tu foto en{" "}
              <code className="rounded bg-black/30 px-1.5 py-0.5">/public/profile.jpg</code>.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}

function Stat({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
        {icon} {title}
      </div>
      <div className="mt-2 text-sm text-slate-200">{desc}</div>
    </div>
  );
}

function Panel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-slate-200">
        {items.map((i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-emerald-300 to-violet-300" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
