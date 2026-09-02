import { ABOUT } from "@/lib/data";
import RevealSection from "./RevealSection";

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container">
        <RevealSection>
          <div className="section-label">Sobre mí</div>
        </RevealSection>

        <div className="about-grid">
          {/* Columna principal — texto */}
          <RevealSection delay={80}>
            <div className="about-text">
              <h2 id="about-heading" className="section-title" style={{ marginBottom: "2rem" }}>
                {ABOUT.headline.split("\n").map((line, i, arr) => (
                  <span key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </span>
                ))}
              </h2>

              {ABOUT.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              <div className="about-attrs" aria-label="Competencias clave">
                {ABOUT.attributes.map((attr) => (
                  <span key={attr} className="attr-tag">
                    {attr}
                  </span>
                ))}
              </div>
            </div>
          </RevealSection>

          {/* Columna secundaria — datos */}
          <RevealSection delay={180}>
            <div className="about-card" aria-label="Resumen de experiencia">
              <div className="about-stat">
                <div className="about-stat-value">~2 años</div>
                <div className="about-stat-label">
                  Gestión de proyectos (propios + Formex)
                </div>
              </div>
              <div className="about-stat">
                <div className="about-stat-value">4+</div>
                <div className="about-stat-label">
                  Productos digitales construidos de principio a fin
                </div>
              </div>
              <div className="about-stat">
                <div className="about-stat-value">Ciclo completo</div>
                <div className="about-stat-label">
                  Descubrimiento → alcance → código → despliegue → iteración
                </div>
              </div>
              <div className="about-stat">
                <div className="about-stat-value">Perfil híbrido</div>
                <div className="about-stat-label">
                  Desarrollador + Technical Project Manager
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
