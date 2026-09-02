import { PROFILE } from "@/lib/data";
import RevealSection from "./RevealSection";

const LINKS = [
  {
    label: "Email",
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <path d="M1.5 4.5h15v10a1 1 0 01-1 1h-13a1 1 0 01-1-1v-10z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M1.5 4.5L9 10.5l7.5-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: `github.com/${PROFILE.githubHandle}`,
    href: PROFILE.github,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <path d="M9 1.5a7.5 7.5 0 00-2.372 14.613c.375.068.512-.163.512-.361 0-.178-.006-.65-.01-1.276-2.087.453-2.528-1.006-2.528-1.006-.34-.866-.832-1.097-.832-1.097-.68-.465.051-.455.051-.455.752.053 1.148.773 1.148.773.668 1.144 1.754.814 2.181.622.068-.483.262-.814.476-1.001-1.666-.19-3.418-.833-3.418-3.708 0-.82.292-1.49.772-2.015-.077-.19-.334-.953.073-1.987 0 0 .63-.201 2.062.77A7.175 7.175 0 019 5.912a7.18 7.18 0 011.879.253c1.432-.971 2.06-.77 2.06-.77.409 1.034.152 1.797.075 1.987.48.524.772 1.195.772 2.015 0 2.883-1.755 3.517-3.426 3.703.27.232.51.69.51 1.39 0 1.004-.009 1.814-.009 2.06 0 .2.135.433.516.36A7.502 7.502 0 009 1.5z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "+52 351 134 5108",
    href: PROFILE.whatsapp,
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
        <path d="M9 1.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" stroke="currentColor" strokeWidth="1.3" />
        <path d="M6.75 6.75c0-.414.336-.75.75-.75h.375c.207 0 .375.168.375.375v.75c0 .207-.168.375-.375.375h-.375v.75a3 3 0 003 3h.75v-.375a.375.375 0 01.375-.375h.75c.207 0 .375.168.375.375V12a.75.75 0 01-.75.75c-3.107 0-5.25-2.143-5.25-5.25z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="container">
        <RevealSection>
          <div className="section-label">Contact</div>
        </RevealSection>

        <RevealSection delay={80}>
          <div className="contact-wrap">
            {/* Left — copy */}
            <div>
              <h2 id="contact-heading" className="contact-headline">
                Let&apos;s build something together.
              </h2>
              <p className="contact-sub">
                I&apos;m open to full-time positions, freelance projects, and conversations about interesting
                technical challenges. If you have a project that needs someone who can{" "}
                <strong style={{ color: "var(--text)", fontWeight: 600 }}>
                  own the full cycle from requirements to deployment
                </strong>
                , reach out.
              </p>

              <div style={{ marginTop: "2rem" }}>
                <a href={`mailto:${PROFILE.email}`} className="btn btn-primary">
                  Send an email
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right — links */}
            <div>
              <div className="contact-links" aria-label="Contact channels">
                {LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto") ? undefined : "noreferrer"}
                    className="contact-link"
                    aria-label={`${link.label}: ${link.value}`}
                  >
                    <span className="contact-link-icon">{link.icon}</span>
                    <div>
                      <div className="contact-link-label">{link.label}</div>
                      <div className="contact-link-value">{link.value}</div>
                    </div>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden
                      style={{ marginLeft: "auto", color: "var(--text-3)" }}
                    >
                      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
