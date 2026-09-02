import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import { PROFILE } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        <Hero />

        <hr className="divider" />
        <About />

        <hr className="divider" />
        <Experience />

        <hr className="divider" />
        <Projects />

        <hr className="divider" />
        <Stack />

        <hr className="divider" />
        <Approach />

        <hr className="divider" />
        <Contact />
      </main>

      <footer className="footer container" role="contentinfo">
        <p className="footer-copy">
          © {new Date().getFullYear()} {PROFILE.name} · {PROFILE.location}
        </p>
        <nav className="footer-links" aria-label="Enlaces del pie de página">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="footer-link">
            GitHub
          </a>
          <a href={`mailto:${PROFILE.email}`} className="footer-link">
            Correo
          </a>
          <a href="#projects" className="footer-link">
            Proyectos
          </a>
        </nav>
      </footer>
    </>
  );
}
