"use client";
import { useState, useEffect } from "react";
import { PROFILE } from "@/lib/data";

const NAV_ITEMS = [
  { label: "Sobre mí", href: "#about" },
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contacto", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    document.addEventListener("scroll", close, { passive: true });
    return () => document.removeEventListener("scroll", close);
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <>
      <div className="nav-wrap">
        <nav className="nav" role="navigation" aria-label="Navegación principal">
          <a href="#top" className="nav-brand" aria-label="Inicio">
            {PROFILE.initials}<span>.</span>
          </a>

          <div className="nav-links" aria-label="Menú de navegación">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="nav-cta nav-cta-desktop"
              aria-label="Ver GitHub"
            >
              GitHub ↗
            </a>

            <button
              className="nav-toggle"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
            >
              {open ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      <div className={`nav-mobile${open ? " open" : ""}`} role="menu" aria-label="Menú móvil">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="nav-mobile-link"
            role="menuitem"
            onClick={handleLinkClick}
          >
            {item.label}
          </a>
        ))}
        <a
          href={PROFILE.github}
          target="_blank"
          rel="noreferrer"
          className="nav-mobile-link"
          style={{ color: "var(--accent)", fontWeight: 600 }}
          onClick={handleLinkClick}
        >
          GitHub ↗
        </a>
      </div>
    </>
  );
}
