import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";

const homeExperience = [
  {
    title: "Full-stack web development",
    organization: "Nisha Tech Solution & Academy",
    period: "Feb 2026 - Present",
    description: "Building production Next.js web applications, scalable REST APIs, and database-backed services.",
  },
  {
    title: "Frontend & UI development",
    organization: "Manzoor Ahmad Law Associates",
    period: "2025 - 2026",
    description: "Turning complex legal workflow requirements into accessible, mobile-first responsive interfaces.",
  },
];

const detailedExperiences = [
  {
    role: "Full Stack Web Developer",
    organization: "Nisha Tech Solution & Academy",
    location: "Faisalabad, Pakistan",
    period: "Feb 2026 — Present",
    type: "Full-Time / Onsite",
    description:
      "Leading full-stack web application development and frontend engineering across client and internal products using Next.js, React, Node.js, and MongoDB.",
    responsibilities: [
      "Architect and build responsive, accessible web applications using the Next.js App Router and Tailwind CSS.",
      "Design and maintain scalable RESTful APIs with Node.js & Express, connected to secure MongoDB clusters.",
      "Conduct code reviews and mentor aspiring developers in JavaScript ES6+, React state management, and modern CSS layout techniques.",
      "Implement client-side and server-side validation to ensure zero input sanitization vulnerabilities.",
    ],
    tech: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    role: "Frontend Web Developer (Intern)",
    organization: "Manzoor Ahmad Law Associates",
    location: "Faisalabad, Pakistan",
    period: "2025 — 2026",
    type: "Internship",
    description:
      "Designed and developed a modern client portal and appointment booking system for a prominent legal practice, enhancing their digital presence and client intake workflow.",
    responsibilities: [
      "Developed an intuitive, mobile-friendly consultation booking interface that reduced intake friction for clients.",
      "Structured clean semantic HTML5 markup and responsive CSS stylesheets for lightning-fast page loading.",
      "Collaborated directly with legal staff to translate professional legal requirements into accessible, user-friendly UI flows.",
      "Ensured complete cross-browser compatibility across Chrome, Safari, Edge, and mobile browsers.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript ES6+", "Bootstrap", "Responsive UI"],
  },
  {
    role: "Web Development Trainee",
    organization: "MZ Innovations Pvt Ltd",
    location: "Faisalabad, Pakistan",
    period: "2025",
    type: "Professional Training",
    description:
      "Completed rigorous, project-oriented training in modern web development standards, responsive design principles, and collaborative software engineering.",
    responsibilities: [
      "Mastered core frontend concepts: CSS Grid, Flexbox, DOM manipulation, asynchronous JavaScript, and Fetch API.",
      "Built multiple real-world practice projects under professional mentorship, focusing on pixel-perfect fidelity.",
      "Adopted Git and GitHub version control best practices, including branch workflows and pull request reviews.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Git & GitHub", "REST APIs"],
  },
  {
    role: "Freelance Full Stack Developer",
    organization: "Independent Client Engagements",
    location: "Remote / Faisalabad",
    period: "2024 — Present",
    type: "Freelance",
    description:
      "Delivering end-to-end web applications for businesses and academic projects, managing every stage from initial wireframing to production deployment.",
    responsibilities: [
      "Engineered a high-performance Travel & Tourism portal with real-time expedition booking inquiries and photo galleries.",
      "Built an Electricity & Utility Bill Calculator that accurately estimates tariffs and fuel adjustment charges for Pakistani consumers.",
      "Developed an editorial clothing brand storefront with shopping bag persistence and mobile-first checkout.",
      "Designed a University Student Portal dashboard tracking academic credits, semester CGPA, and course notices.",
    ],
    tech: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "Vercel"],
  },
];

const developmentWorkflow = [
  {
    step: "01",
    title: "System Architecture & Planning",
    subtitle: "Understanding Needs Before Writing Code",
    desc: "I begin by mapping out user personas, wireframing responsive layouts, and designing clean database schemas. Planning API contracts and data flows early prevents technical debt and ensures clean, predictable execution.",
    points: ["Requirements gathering", "Database schema modeling", "REST API contract design"],
  },
  {
    step: "02",
    title: "Handcrafted Frontend Engineering",
    subtitle: "Precision, Accessibility & Performance",
    desc: "I write clean semantic HTML5, fluid CSS Grid and Flexbox layouts, and modular React components. I pay careful attention to color contrast, typography hierarchy, keyboard navigation, and fast rendering on mobile devices.",
    points: ["Component composition", "Custom React hooks", "Adaptive light/dark theming"],
  },
  {
    step: "03",
    title: "Resilient Backend & API Integration",
    subtitle: "Reliable Logic & Data Persistence",
    desc: "Backends are engineered with Node.js, Express, or Next.js route handlers. I implement strict input validation, connection pooling with timeout protection, and robust error handlers so servers never fail silently.",
    points: ["Route controllers", "Mongoose data validation", "Error boundary pipelines"],
  },
  {
    step: "04",
    title: "Testing, Auditing & Deployment",
    subtitle: "Production-Grade Quality Assurance",
    desc: "Before launching, I audit applications with zero TypeScript errors, test responsive behavior across real mobile screens, verify print media outputs, and deploy with continuous integration pipelines on Vercel.",
    points: ["Strict TypeScript audits", "Lighthouse optimization", "Continuous deployment (CI/CD)"],
  },
];

type ExperienceProps = {
  detailed?: boolean;
};

export default function Experience({ detailed = false }: ExperienceProps) {
  // Home Page compact layout
  if (!detailed) {
    return (
      <section
        aria-labelledby="experience-heading"
        className="experience section animate-fade-in"
        id="experience"
      >
        <div className="container">
          <SectionTitle
            description="A hands-on path through building for the web."
            eyebrow="WHAT I DO"
            id="experience-heading"
            title="Experience & practice"
          />
          <div className="experience-grid">
            {/* Card 1: Development Journey with Proper Compass / Roadmap SVG */}
            <GlassCard className="experience-card animated-card">
              <div className="panel-heading">
                <span aria-hidden="true" className="panel-icon yellow-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                  </svg>
                </span>
                <div>
                  <h3>Development journey</h3>
                  <p>Learning through building</p>
                </div>
              </div>
              {homeExperience.map((item) => (
                <div className="experience-item" key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <span>{item.organization} · {item.period}</span>
                </div>
              ))}
            </GlassCard>

            {/* Card 2: How I Build with Proper Layers / Architecture SVG */}
            <GlassCard className="experience-card animated-card">
              <div className="panel-heading">
                <span aria-hidden="true" className="panel-icon yellow-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </span>
                <div>
                  <h3>How I build</h3>
                  <p>Care at every step</p>
                </div>
              </div>
              <div className="experience-item">
                <h4>Think through the experience</h4>
                <p>Start with the people using the product and keep the interface clear.</p>
                <span>DESIGN · ACCESSIBILITY</span>
              </div>
              <div className="experience-item">
                <h4>Connect the whole product</h4>
                <p>Bring together the frontend, API, and data so everything works as one.</p>
                <span>REACT · API · DATABASE</span>
              </div>
            </GlassCard>
          </div>

          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link href="/experience" className="view-full-link inline-flex items-center gap-2" style={{ display: "inline-flex" }}>
              <span>View Complete Career Journey &amp; Engineering Workflow</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // Subpage layout (/experience)
  return (
    <div className="experience-deep-dive-page animate-fade-in">
      {/* Detailed Timeline of Professional Roles */}
      <div className="experience-roles-container">
        {detailedExperiences.map((exp, index) => (
          <GlassCard className="experience-role-card animated-card-yellow" key={index}>
            <div className="role-card-header">
              <div className="role-title-group">
                <span className="role-type-pill">{exp.type}</span>
                <h3>{exp.role}</h3>
                <p className="role-org">
                  <strong>{exp.organization}</strong> · <span>{exp.location}</span>
                </p>
              </div>
              <div className="role-period-badge">
                <span>{exp.period}</span>
              </div>
            </div>

            <p className="role-main-description">{exp.description}</p>

            <div className="role-responsibilities">
              <h4>Key Responsibilities &amp; Impact:</h4>
              <ul>
                {exp.responsibilities.map((resp, rIndex) => (
                  <li key={rIndex} className="flex items-start gap-2.5">
                    <span className="bullet-arrow mt-1 flex-shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="role-tech-stack">
              <span className="tech-stack-label">Stack:</span>
              {exp.tech.map((t) => (
                <span className="tech-micro-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>

      {/* How I Build Software */}
      <div className="workflow-section-wrap">
        <div className="workflow-header-center">
          <span className="workflow-badge">METHODOLOGY</span>
          <h3>How I Build Software From Scratch</h3>
          <p>A systematic 4-phase engineering discipline behind every web application I craft.</p>
        </div>

        <div className="workflow-grid">
          {developmentWorkflow.map((item) => (
            <div className="workflow-card animated-card-yellow" key={item.step}>
              <span className="workflow-step-num">{item.step}</span>
              <h4>{item.title}</h4>
              <p className="workflow-subtitle">{item.subtitle}</p>
              <p className="workflow-desc">{item.desc}</p>
              <ul className="workflow-points">
                {item.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
