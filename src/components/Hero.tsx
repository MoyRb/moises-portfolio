import { PROFILE } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="hero" aria-label="Hero">
      {/* Background elements */}
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-glow-2" aria-hidden="true" />

      <div className="container hero-inner">
        {/* Badge */}
        <div className="hero-badge" aria-label="Role">
          {PROFILE.role} · {PROFILE.roleAlt}
        </div>

        {/* Name */}
        <h1 className="hero-name">{PROFILE.name}</h1>

        {/* Tagline + summary */}
        <p className="hero-tagline">
          <strong>Building software. Coordinating projects. Shipping products</strong> that solve real
          problems — from the first requirement to the last deployment.
        </p>

        <p
          style={{
            fontSize: "0.9rem",
            color: "var(--text-2)",
            maxWidth: "38rem",
            lineHeight: 1.75,
            marginBottom: "2.25rem",
          }}
        >
          {PROFILE.summary}
        </p>

        {/* CTAs */}
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            Selected work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href={PROFILE.cvPath} target="_blank" rel="noreferrer" className="btn btn-secondary">
            Download CV
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get in touch
          </a>
        </div>

        {/* Meta strip */}
        <div className="hero-meta" aria-label="Profile overview">
          <div className="hero-meta-item">
            <span className="hero-meta-label">Education</span>
            <span className="hero-meta-value">{PROFILE.education.degree}</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-label">Institution</span>
            <span className="hero-meta-value">{PROFILE.education.institution}</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-label">Status</span>
            <span className="hero-meta-value">{PROFILE.education.status}</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-label">Based in</span>
            <span className="hero-meta-value">{PROFILE.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
