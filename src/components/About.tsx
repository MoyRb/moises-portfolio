import { ABOUT } from "@/lib/data";
import RevealSection from "./RevealSection";

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container">
        <RevealSection>
          <div className="section-label">About</div>
        </RevealSection>

        <div className="about-grid">
          {/* Left — text */}
          <RevealSection delay={80}>
            <div className="about-text">
              <h2 id="about-heading" className="section-title" style={{ marginBottom: "2rem" }}>
                {ABOUT.headline.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i === 0 && <br />}
                  </span>
                ))}
              </h2>

              {ABOUT.paragraphs.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}

              <div className="about-attrs" aria-label="Key competencies">
                {ABOUT.attributes.map((attr) => (
                  <span key={attr} className="attr-tag">
                    {attr}
                  </span>
                ))}
              </div>
            </div>
          </RevealSection>

          {/* Right — stats card */}
          <RevealSection delay={180}>
            <div className="about-card" aria-label="Experience highlights">
              <div className="about-stat">
                <div className="about-stat-value">~2 yrs</div>
                <div className="about-stat-label">Project management experience (own + Formex)</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-value">4+</div>
                <div className="about-stat-label">Digital products built end-to-end</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-value">Full-cycle</div>
                <div className="about-stat-label">Discovery → scope → code → deploy → iterate</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-value">Hybrid</div>
                <div className="about-stat-label">Developer + Technical Project Manager profile</div>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
