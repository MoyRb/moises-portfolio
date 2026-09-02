import { PROJECTS, type Project } from "@/lib/data";
import RevealSection from "./RevealSection";

function ProjectCard({ project, full = false }: { project: Project; full?: boolean }) {
  return (
    <article
      className={`project-card ${project.featured ? "project-card-featured" : ""} ${full ? "project-card-full" : ""}`}
    >
      {/* Cabecera: índice + tipo */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "1rem",
          flexWrap: "wrap",
          marginBottom: "0.75rem",
        }}
      >
        <span className="project-index" aria-label={`Proyecto ${project.index}`}>
          {project.index}
        </span>
        <span className="project-type">{project.type}</span>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-subtitle">{project.subtitle}</p>

      {/* Problema */}
      <div className="project-problem">
        <strong>Problema: </strong>
        {project.problem}
      </div>

      {/* Mi rol */}
      <p
        style={{
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--text-3)",
          marginBottom: "0.6rem",
        }}
      >
        Mi rol
      </p>
      <p
        style={{
          fontSize: "0.83rem",
          color: "var(--text-2)",
          marginBottom: "1rem",
          lineHeight: 1.6,
        }}
      >
        {project.role}
      </p>

      {/* Puntos clave */}
      <ul className="project-highlights" aria-label="Puntos destacados del proyecto">
        {project.highlights.map((h) => (
          <li key={h} className="project-highlight">
            {h}
          </li>
        ))}
      </ul>

      {/* Stack */}
      <div className="project-stack" aria-label="Tecnologías utilizadas">
        {project.stack.map((s) => (
          <span key={s} className="stack-tag">
            {s}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const standard = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="container">
        <RevealSection>
          <div className="section-label">Proyectos destacados</div>
          <h2 id="projects-heading" className="section-title" style={{ marginBottom: "0.75rem" }}>
            Lo que he construido
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text-2)",
              maxWidth: "38rem",
              lineHeight: 1.75,
              marginBottom: "2.5rem",
            }}
          >
            Proyectos reales donde gestioné el ciclo completo — desde la definición del problema y
            la arquitectura hasta el desarrollo y el despliegue.
          </p>
        </RevealSection>

        {/* Proyectos destacados — ancho completo */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "1.25rem" }}>
          {featured.map((p, i) => (
            <RevealSection key={p.title} delay={i * 100}>
              <ProjectCard project={p} full />
            </RevealSection>
          ))}
        </div>

        {/* Proyectos estándar — grid */}
        <div className="projects-grid">
          {standard.map((p, i) => (
            <RevealSection key={p.title} delay={i * 80}>
              <ProjectCard project={p} />
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
