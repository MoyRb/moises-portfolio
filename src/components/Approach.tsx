import { APPROACH } from "@/lib/data";
import RevealSection from "./RevealSection";

export default function Approach() {
  return (
    <section aria-labelledby="approach-heading" className="section">
      <div className="container">
        <RevealSection>
          <div className="section-label">Cómo trabajo</div>
          <h2 id="approach-heading" className="section-title" style={{ marginBottom: "0.75rem" }}>
            Del requerimiento al despliegue
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text-2)",
              maxWidth: "38rem",
              lineHeight: 1.75,
              marginBottom: "3.5rem",
            }}
          >
            Mi flujo de trabajo es iterativo y estructurado — empiezo por el problema, defino el
            alcance, construyo en incrementos y mantengo al cliente informado en cada etapa.
          </p>
        </RevealSection>

        <RevealSection delay={80}>
          <div className="approach-grid" role="list" aria-label="Metodología de trabajo">
            {APPROACH.map((step) => (
              <div key={step.step} className="approach-step" role="listitem">
                <div className="approach-step-num" aria-label={`Paso ${step.step}`}>
                  {step.step}
                </div>
                <div className="approach-step-title">{step.title}</div>
                <p className="approach-step-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
