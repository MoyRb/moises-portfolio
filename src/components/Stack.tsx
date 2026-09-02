import { STACK } from "@/lib/data";
import RevealSection from "./RevealSection";

export default function Stack() {
  return (
    <section id="stack" className="section" aria-labelledby="stack-heading">
      <div className="container">
        <RevealSection>
          <div className="section-label">Capacidades</div>
          <h2 id="stack-heading" className="section-title" style={{ marginBottom: "0.75rem" }}>
            Stack técnico
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
            Herramientas y metodologías organizadas por contexto de uso — sin porcentajes arbitrarios ni barras decorativas.
          </p>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="stack-grid" role="list" aria-label="Capacidades técnicas">
            {STACK.map((category) => (
              <div key={category.category} className="stack-category-card" role="listitem">
                <div className="stack-category-name" aria-label={`Categoría: ${category.category}`}>
                  {category.category}
                </div>
                <ul className="stack-items" aria-label={`Elementos de ${category.category}`}>
                  {category.items.map((item) => (
                    <li key={item} className="stack-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
