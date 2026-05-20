import type { Project } from "@/lib/projects";

export default function ProjectCard({ p, compact = false, priority = false }: { p: Project; compact?: boolean; priority?: boolean }) {
  return (
    <article className={`project-card relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] ${priority ? "priority-card" : ""} ${compact ? "p-4" : "p-6"}`}>
      <div className="relative min-w-0">
        <h3 className={`${compact ? "text-lg" : "text-xl"} font-semibold tracking-tight`}>{p.title}</h3>
        <p className="mt-2 text-sm text-slate-300">{p.subtitle}</p>
        <ul className={`${compact ? "mt-3" : "mt-4"} space-y-2 text-sm text-slate-200`}>
          {p.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span key={s} className="tag-chip">{s}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
