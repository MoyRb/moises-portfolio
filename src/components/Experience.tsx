import { EXPERIENCE } from "@/lib/data";
import RevealSection from "./RevealSection";

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-heading">
      <div className="container">
        <RevealSection>
          <div className="section-label">Experiencia</div>
          <h2 id="experience-heading" className="section-title" style={{ marginBottom: "2.5rem" }}>
            Dónde he trabajado
          </h2>
        </RevealSection>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {EXPERIENCE.map((exp, i) => (
            <RevealSection key={exp.company} delay={i * 80}>
              <article className="exp-card">
                <div className="exp-header">
                  <div>
                    <div className="exp-company">{exp.company}</div>
                    <div className="exp-type">{exp.companyType}</div>
                  </div>
                  <div className="exp-badge">
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "var(--accent)",
                        display: "inline-block",
                        animation: "pulse-dot 2.4s ease infinite",
                      }}
                      aria-hidden="true"
                    />
                    {exp.period} · {exp.duration}
                  </div>
                </div>

                <div className="exp-role">{exp.role}</div>
                <div className="exp-meta">{exp.location}</div>
                <p className="exp-description">{exp.description}</p>

                <ul className="exp-highlights" aria-label="Responsabilidades y logros">
                  {exp.highlights.map((h) => (
                    <li key={h} className="exp-highlight">
                      {h}
                    </li>
                  ))}
                </ul>
              </article>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
