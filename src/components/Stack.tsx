import { STACK } from "@/lib/data";
import RevealSection from "./RevealSection";

export default function Stack() {
  return (
    <section id="stack" className="section" aria-labelledby="stack-heading">
      <div className="container">
        <RevealSection>
          <div className="section-label">Capabilities</div>
          <h2 id="stack-heading" className="section-title" style={{ marginBottom: "0.75rem" }}>
            Technical stack
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
            Tools and methodologies I work with — organized by context, not ranked by arbitrary
            percentages.
          </p>
        </RevealSection>

        <RevealSection delay={100}>
          <div className="stack-grid" role="list" aria-label="Technical capabilities">
            {STACK.map((category) => (
              <div key={category.category} className="stack-category-card" role="listitem">
                <div className="stack-category-name" aria-label={`Category: ${category.category}`}>
                  {category.category}
                </div>
                <ul className="stack-items" aria-label={`${category.category} items`}>
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
