import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ p, compact = false, priority = false }: { p: Project; compact?: boolean; priority?: boolean }) {
  return (
    <div className={`group project-card relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 ${priority ? "priority-card" : ""} ${compact ? "p-4" : "p-6"}`}>
      <div className="pointer-events-none absolute -top-24 right-0 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl transition group-hover:bg-emerald-400/20" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-56 w-56 rounded-full bg-violet-400/10 blur-3xl transition group-hover:bg-violet-400/20" />
      <div className="relative">
        <h3 className={`${compact ? "text-lg" : "text-xl"} font-semibold tracking-tight`}>{p.title}</h3>
        <p className="mt-2 text-sm text-slate-300">{p.subtitle}</p>
        <ul className={`${compact ? "mt-3" : "mt-4"} space-y-2 text-sm text-slate-200`}>
          {p.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-emerald-300 to-violet-300" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.stack.map((s) => (<span key={s} className="tag-chip">{s}</span>))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {p.links.map((l) =>
            l.href ? (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="action-link">
                {l.label} <ExternalLink size={16} />
              </a>
            ) : (
              <span key={l.label} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-400" title={l.tooltip ?? "Pásame el link y lo conecto"}>{l.label}</span>
            ))}
        </div>
      </div>
    </div>
  );
}
