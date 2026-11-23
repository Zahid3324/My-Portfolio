"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";

const homePrinciples = [
  {
    number: "01",
    title: "Clean, Handcrafted Code",
    description: "I write clean, readable, and maintainable code from scratch, avoiding bloated boilerplate.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "User-Centered Design",
    description: "Every layout, button, and interaction is designed to feel intuitive, fast, and accessible.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "End-to-End Reliability",
    description: "From database schemas to responsive frontends, I build full-stack systems that simply work.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const detailedPrinciples = [
  {
    number: "01",
    title: "Handcrafted, Clean Code",
    description:
      "I write every component, hook, and database query from the ground up with intention. No bloated templates or fragile shortcuts — just clean, maintainable architecture.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "User-Centered & Mobile First",
    description:
      "Every layout, typography scale, and interaction is designed to feel natural and responsive across all devices — from high-resolution desktop monitors to budget smartphones.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "End-to-End Reliability",
    description:
      "From database indexing in MongoDB to resilient REST APIs with Node.js and silky-smooth frontends in Next.js, I build complete systems that work reliably under load.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Continuous Learning & Rigor",
    description:
      "Technology moves fast. I continually refine my skills in modern web standards, algorithms, data structures, and state management to write better software every single day.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

const educationData = [
  {
    title: "Matriculation (Science)",
    institution: "Govt High School, Gudara",
    status: "Completed",
    detail: "Built foundational discipline in mathematics, computer basics, and analytical sciences.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19v-9l8-5 8 5v9" />
        <path d="M9 19v-4h6v4" />
      </svg>
    ),
  },
  {
    title: "Intermediate (FSc)",
    institution: "Muslim College, Multan",
    status: "Completed",
    detail: "Intensive focus on advanced mathematics, physics, and systematic problem-solving methods.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01" />
        <path d="M16 6h.01" />
        <path d="M12 6h.01" />
        <path d="M12 10h.01" />
        <path d="M12 14h.01" />
      </svg>
    ),
  },
  {
    title: "BS Software Engineering",
    institution: "Riphah International University, Faisalabad",
    status: "Current (Senior Year)",
    detail: "Specializing in web engineering, distributed systems, database management, and object-oriented architecture.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
];

type AboutProps = {
  detailed?: boolean;
};

export default function About({ detailed = false }: AboutProps) {
  // Home Page compact layout
  if (!detailed) {
    return (
      <section aria-labelledby="about-heading" className="container section about-section" id="about">
        <SectionTitle
          description="A look into my background, development philosophy, and what I build."
          eyebrow="ABOUT ME"
          id="about-heading"
          title="About Me"
        />
        <div className="about-grid">
          <div className="about-portrait">
            <Image
              alt="Portrait of Zahid Abbas"
              fill
              sizes="(max-width: 680px) 90vw, 460px"
              src="/profile.png"
              priority
            />
            <span>FULL-STACK WEB DEVELOPER</span>
          </div>
          <div className="about-copy">
            <p>
              I&apos;m Zahid Abbas, a passionate Full Stack Web Developer based in Faisalabad, Pakistan.
              I build modern, high-performance web applications from the ground up — turning real ideas
              into clean, production-ready code.
            </p>
            <p>
              My core stack is Next.js, React, Node.js, Express, and MongoDB. I handcraft every part of
              the product: from the responsive user interface and state management to secure REST APIs
              and database architecture.
            </p>
            <p>
              I believe great software is built with care, attention to detail, and a relentless focus on
              delivering a seamless experience for real users.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "16px" }}>
              <Button arrow href="/cv">
                View &amp; Print CV
              </Button>
              <Button arrow href="/about" variant="outline">
                Read Full Story
              </Button>
            </div>
          </div>
        </div>

        <div className="about-principles">
          {homePrinciples.map((principle) => (
            <article className="about-principle" key={principle.number}>
              <span className="principle-number">{principle.number}</span>
              <span aria-hidden="true" className="principle-icon">{principle.icon}</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>

        <div className="education-timeline">
          {educationData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-icon">
                {item.icon}
              </div>
              <div className="timeline-content">
                <h4>{item.title}</h4>
                <p style={{ whiteSpace: "pre-line" }}>{item.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Dedicated /about page
  return (
    <div className="about-deep-dive-page animate-fade-in">
      {/* Top Hero: Portrait Left, Story Right */}
      <div className="about-detail-hero-grid">
        <div className="about-portrait-showcase">
          <div className="portrait-image-frame">
            <Image
              alt="Portrait of Zahid Abbas"
              fill
              sizes="(max-width: 768px) 100vw, 380px"
              src="/profile.png"
              priority
              className="portrait-img-inner"
            />
            <div className="portrait-gradient-overlay" />
            <span className="portrait-caption-tag">FULL-STACK WEB DEVELOPER</span>
          </div>
        </div>

        <div className="about-story-content">
          <h2 className="about-story-title">
            Passionate Full-Stack Engineer Building Modern Digital Experiences
          </h2>
          <p>
            Hello! I&apos;m <strong>Zahid Abbas</strong>, a Full Stack Web Developer based in Faisalabad, Pakistan.
            I build modern, high-performance web applications with a focus on clean architecture, semantic markup,
            and intuitive user experiences.
          </p>
          <p>
            My journey into software engineering began with a curiosity about how the web operates beneath the surface.
            Today, I specialize in the <strong>Next.js &amp; MERN Stack</strong> (MongoDB, Express, React, Node.js),
            building end-to-end products ranging from interactive travel portals and complex utility bill engines
            to e-commerce storefronts and university academic systems.
          </p>
          <p>
            I take pride in writing handcrafted code from scratch. Instead of relying on bloated site-builders or generic
            AI shortcuts, I design every component, API route, and database schema to be purposeful, robust, and fast.
          </p>
          <div className="about-cta-row">
            <Button arrow href="/cv">
              View &amp; Print CV
            </Button>
            <Button arrow href="/projects" variant="outline">
              Explore My Projects
            </Button>
          </div>
        </div>
      </div>

      {/* Principles Section: Symmetrical 2x2 Grid with Proper SVG Icons */}
      <div className="about-section-block">
        <div className="about-block-header">
          <span className="about-block-badge">PHILOSOPHY</span>
          <h3>How I Approach Web Engineering</h3>
          <p>The core values that guide every line of code and architectural decision I make.</p>
        </div>

        <div className="detailed-principles-grid">
          {detailedPrinciples.map((principle) => (
            <article className="detailed-principle-card animated-card-yellow" key={principle.number}>
              <div className="principle-card-top-row">
                <span className="principle-number-highlight">{principle.number}</span>
                <span aria-hidden="true" className="principle-icon-glyph">{principle.icon}</span>
              </div>
              <h4>{principle.title}</h4>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Education & Academic Journey: Symmetrical 3-card Grid */}
      <div className="about-section-block">
        <div className="about-block-header">
          <span className="about-block-badge">EDUCATION</span>
          <h3>Academic &amp; Educational Journey</h3>
          <p>The academic milestones that built my engineering mindset and analytical foundation.</p>
        </div>

        <div className="detailed-education-grid">
          {educationData.map((item, index) => (
            <div className="detailed-education-card animated-card-yellow" key={index}>
              <div className="education-card-header">
                <div className="education-circle-icon">
                  {item.icon}
                </div>
                <span className="education-status-tag">{item.status}</span>
              </div>
              <h4>{item.title}</h4>
              <p className="education-institution-name">{item.institution}</p>
              <p className="education-detail-text">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
