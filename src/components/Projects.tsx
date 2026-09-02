import { PROJECTS, type Project } from "@/lib/data";
import RevealSection from "./RevealSection";

function ProjectCard({ project, full = false }: { project: Project; full?: boolean }) {
  return (
    <article
      className={`project-card ${project.featured ? "project-card-featured" : ""} ${full ? "project-card-full" : ""}`}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
        <span className="project-index" aria-label={`Project ${project.index}`}>{project.index}</span>
        <span className="project-type">{project.type}</span>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-subtitle">{project.subtitle}</p>

      <div className="project-problem">
        <strong>Problem: </strong>
        {project.problem}
      </div>

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
        My role
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

      <ul className="project-highlights" aria-label="Project highlights">
        {project.highlights.map((h) => (
          <li key={h} className="project-highlight">
            {h}
          </li>
        ))}
      </ul>

      <div className="project-stack" aria-label="Technologies used">
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
          <div className="section-label">Selected projects</div>
          <h2 id="projects-heading" className="section-title" style={{ marginBottom: "0.75rem" }}>
            Products I&apos;ve built
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text-2)",
              maxWidth: "36rem",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
            }}
          >
            Real-world projects where I owned the full cycle — from problem definition and
            architecture through development and deployment.
          </p>
        </RevealSection>

        {/* Featured — full width */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "1.25rem" }}>
          {featured.map((p, i) => (
            <RevealSection key={p.title} delay={i * 100}>
              <ProjectCard project={p} full />
            </RevealSection>
          ))}
        </div>

        {/* Standard — grid */}
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
