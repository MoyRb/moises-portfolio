import { APPROACH } from "@/lib/data";
import RevealSection from "./RevealSection";

export default function Approach() {
  return (
    <section aria-labelledby="approach-heading" className="section">
      <div className="container">
        <RevealSection>
          <div className="section-label">How I work</div>
          <h2 id="approach-heading" className="section-title" style={{ marginBottom: "0.75rem" }}>
            From requirement to deployment
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text-2)",
              maxWidth: "36rem",
              lineHeight: 1.7,
              marginBottom: "3.5rem",
            }}
          >
            My workflow is iterative and structured — I start with the problem, define the scope,
            build incrementally, and keep the client informed at every step.
          </p>
        </RevealSection>

        <RevealSection delay={80}>
          <div className="approach-grid" role="list" aria-label="Work methodology steps">
            {APPROACH.map((step) => (
              <div key={step.step} className="approach-step" role="listitem">
                <div className="approach-step-num" aria-label={`Step ${step.step}`}>
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
