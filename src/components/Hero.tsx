import { PROFILE } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="hero" aria-label="Presentación">
      {/* Fondo */}
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-glow-2" aria-hidden="true" />

      <div className="container hero-inner">
        {/* Badge de rol */}
        <div className="hero-badge" aria-label="Rol profesional">
          {PROFILE.role} · {PROFILE.roleAlt}
        </div>

        {/* Nombre */}
        <h1 className="hero-name">{PROFILE.name}</h1>

        {/* Propuesta de valor */}
        <p className="hero-tagline">
          <strong>Desarrollo productos digitales</strong> y convierto necesidades de negocio en
          soluciones funcionales, combinando programación, visión de producto y gestión técnica de
          proyectos.
        </p>

        {/* CTAs */}
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            Ver proyectos
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path
                d="M1 7h12M7 1l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contactar
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
            aria-label="Ver perfil en GitHub"
          >
            GitHub ↗
          </a>
        </div>

        {/* Franja de metadatos */}
        <div className="hero-meta" aria-label="Datos del perfil">
          <div className="hero-meta-item">
            <span className="hero-meta-label">Formación</span>
            <span className="hero-meta-value">{PROFILE.education.degree}</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-label">Institución</span>
            <span className="hero-meta-value">{PROFILE.education.institution}</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-label">Estado</span>
            <span className="hero-meta-value">{PROFILE.education.status}</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-label">Ubicación</span>
            <span className="hero-meta-value">{PROFILE.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
