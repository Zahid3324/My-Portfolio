"use client";

import { useState } from "react";
import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";

const skillDetails = [
  {
    name: "HTML5",
    icon: "HTML",
    color: "#e34f26",
    category: "Frontend Core",
    proficiency: "95%",
    tagline: "Semantic Structure & Modern Web Standards",
    description:
      "I use semantic HTML5 elements (<header>, <nav>, <main>, <article>, <section>, <aside>, <footer>) to build clean, accessible, and SEO-optimized document outlines. Every form, input, and interactive component includes proper ARIA roles, labels, and tabindex attributes to ensure complete screen reader accessibility and standard-compliant DOM trees.",
    highlights: ["Semantic Structure", "SEO Optimization", "ARIA & Accessibility (a11y)", "Clean DOM Trees"],
  },
  {
    name: "CSS3",
    icon: "CSS",
    color: "#2965f1",
    category: "Styling & Layout",
    proficiency: "92%",
    tagline: "Responsive Design, CSS Grid & Fluid Layouts",
    description:
      "I craft responsive, pixel-perfect user interfaces using modern CSS3 capabilities. I utilize CSS Grid for complex two-dimensional page compositions, Flexbox for fluid alignment, custom properties (CSS variables) for seamless dual dark/light theming, and @media print queries to render clean, professional printable documents.",
    highlights: ["CSS Grid & Flexbox", "CSS Custom Properties (Variables)", "Print Media Query Optimization", "Smooth Transitions & Keyframes"],
  },
  {
    name: "JavaScript",
    icon: "JS",
    color: "#f7df1e",
    category: "Frontend Core",
    proficiency: "90%",
    tagline: "ES6+ Logic, Asynchronous Workflows & DOM Manipulation",
    description:
      "Modern JavaScript is the core engine of my frontends and backends. I write clean ES6+ code leveraging modern syntax: arrow functions, destructuring, spread/rest operators, optional chaining, and modular imports. I have strong mastery of the JavaScript Event Loop, Promises, Async/Await pipelines, Closures, and functional array transformations (map, filter, reduce).",
    highlights: ["Async/Await & Promises", "ES6+ Syntactic Sugar", "Closures & Scope Chain", "DOM Event Handling"],
  },
  {
    name: "React",
    icon: "⚛",
    color: "#61dafb",
    category: "Frontend Framework",
    proficiency: "92%",
    tagline: "Component Composition & Declarative UI State",
    description:
      "I build reusable, modular component architectures using React. I manage local and global component state effectively using native hooks (useState, useEffect, useMemo, useCallback, useRef) and React Context. I ensure components follow unidirectional data flow, minimize unnecessary re-renders, and cleanly separate UI presentation from business logic.",
    highlights: ["Custom Hooks & Native Hooks", "Component Composition", "Context API State Management", "Render Performance Optimization"],
  },
  {
    name: "Next.js",
    icon: "N",
    color: "#ffffff",
    category: "Full Stack Framework",
    proficiency: "94%",
    tagline: "App Router, Server Components & High-Speed Web Apps",
    description:
      "Next.js is my primary production framework. I build full-stack web applications using the Next.js App Router, leveraging React Server Components (RSC) for lightning-fast initial page loads and reduced client bundle sizes. I build custom API route handlers, handle server-side rendering (SSR), static site generation (SSG), and configure automatic image optimization.",
    highlights: ["App Router Architecture", "Server & Client Components", "Route Handlers & REST APIs", "Turbopack & Image Optimization"],
  },
  {
    name: "Tailwind",
    icon: "≈",
    color: "#38bdf8",
    category: "Styling & Layout",
    proficiency: "94%",
    tagline: "Utility-First CSS & Rapid Design Systems",
    description:
      "I leverage Tailwind CSS to build maintainable design systems with zero stylesheet bloat. By utilizing responsive breakpoints (sm, md, lg, xl), dark: modifier variants, and custom Tailwind configuration files, I build bespoke interfaces that stay responsive and consistent across all screens without writing thousands of lines of redundant CSS.",
    highlights: ["Utility-First Workflow", "Responsive Breakpoints", "Dark Mode Class Variants", "Tailwind Config Customization"],
  },
  {
    name: "Bootstrap",
    icon: "BS",
    color: "#9333ea",
    category: "Styling & Layout",
    proficiency: "88%",
    tagline: "12-Column Grid & Rapid Component Prototyping",
    description:
      "Proficient in Bootstrap's responsive 12-column grid system, utility classes, and pre-built interactive components. I use Bootstrap when clients require rapid wireframing, enterprise internal dashboards, or cross-browser legacy support with strict compliance to standard form controls.",
    highlights: ["12-Column Grid System", "Modal & Dropdown Interactions", "Form Validation Styling", "Cross-Browser Testing"],
  },
  {
    name: "Node.js",
    icon: "Node",
    color: "#68a063",
    category: "Backend & Runtime",
    proficiency: "88%",
    tagline: "Asynchronous JavaScript Runtime & Server Development",
    description:
      "I build scalable backend services utilizing Node.js. Leveraging its non-blocking, event-driven I/O model, I build high-throughput servers capable of handling asynchronous file streaming, JSON payload processing, environmental security configurations, and secure inter-service communication.",
    highlights: ["Event Loop & Async I/O", "File System & Buffer APIs", "Environment Variables & Security", "npm/pnpm Package Management"],
  },
  {
    name: "Express",
    icon: "EX",
    color: "#9ca3af",
    category: "Backend & APIs",
    proficiency: "89%",
    tagline: "Robust RESTful APIs & Middleware Pipelines",
    description:
      "I architect backend APIs with Express.js. I design modular route controllers, write custom middleware for request validation and authentication (JWT/cookies), implement comprehensive global error-handling pipelines, and enforce CORS and security headers for protected resources.",
    highlights: ["RESTful API Architecture", "Custom Middleware Chaining", "Input Sanitization & Validation", "Global Error Handling"],
  },
  {
    name: "MongoDB",
    icon: "M",
    color: "#4db33d",
    category: "Database & Storage",
    proficiency: "91%",
    tagline: "NoSQL Document Modeling & Mongoose Schemas",
    description:
      "My primary database for flexible data persistence. I design efficient NoSQL document schemas using Mongoose with strict schema validation, type constraints, and virtuals. I write fast aggregation pipelines, configure compound indexes to optimize query latency, and manage connection pooling with timeout protection.",
    highlights: ["Mongoose Schema Modeling", "Aggregation Pipelines", "Indexing & Query Optimization", "Connection Pool Management"],
  },
  {
    name: "Prisma",
    icon: "PR",
    color: "#5a67d8",
    category: "Database & Storage",
    proficiency: "85%",
    tagline: "Type-Safe Database ORM & Declarative Modeling",
    description:
      "I use Prisma ORM to bridge backend application logic with relational and document databases with complete end-to-end TypeScript safety. Prisma's schema modeling, automated database migrations, and auto-generated query clients eliminate runtime database errors and provide predictable data access.",
    highlights: ["Declarative Schema Modeling", "Automated DB Migrations", "Strict End-to-End Type Safety", "Relational Filtering & Joins"],
  },
  {
    name: "Firebase",
    icon: "FB",
    color: "#ffcb2e",
    category: "Cloud & Realtime",
    proficiency: "86%",
    tagline: "Authentication, Firestore & Realtime Cloud Services",
    description:
      "I use Firebase for rapid cloud features: user authentication (Google OAuth & Email/Password), Firestore realtime database sync for live chat or notifications, and Cloud Storage for media assets. Firebase allows me to deploy serverless backend features quickly with minimal infrastructure overhead.",
    highlights: ["User Authentication (OAuth/Email)", "Firestore Realtime Listeners", "Cloud Storage for Uploads", "Security Rules Configuration"],
  },
];

const workExperience = [
  {
    role: "Full Stack Web Developer",
    company: "Nisha Tech Solution & Academy",
    location: "Faisalabad",
    period: "Feb 2026 - Present",
    desc: "Building production web applications with Next.js, Node.js, and MongoDB. Designing REST APIs and leading frontend engineering.",
  },
  {
    role: "Frontend Web Developer (Intern)",
    company: "Manzoor Ahmad Law Associates",
    location: "Faisalabad",
    period: "2025 - 2026",
    desc: "Developed responsive legal portals, client appointment booking interfaces, and optimized page speed across all screen sizes.",
  },
  {
    role: "Web Development Course",
    company: "MZ Innovations Pvt Ltd",
    location: "Faisalabad",
    period: "2025",
    desc: "Completed rigorous practical training in HTML5, CSS3, JavaScript ES6+, responsive grid systems, and API integration.",
  },
];

const performanceMetrics = [
  { label: "Skills", value: 95, color: "#eab308" },
  { label: "Projects", value: 90, color: "#06b6d4" },
  { label: "Dedication", value: 92, color: "#10b981" },
  { label: "Problem Solving", value: 88, color: "#f97316" },
];

type SkillsProps = {
  detailed?: boolean;
};

export default function Skills({ detailed = false }: SkillsProps) {
  const [activeSkillName, setActiveSkillName] = useState<string | null>(null);

  const activeSkill = activeSkillName
    ? skillDetails.find((s) => s.name === activeSkillName)
    : null;

  // Home Page compact layout (Exactly as original!)
  if (!detailed) {
    return (
      <section aria-labelledby="skills-heading" className="container section skills-section" id="skills">
        <SectionTitle
          description="Technologies I work with"
          eyebrow="THE TOOLKIT"
          id="skills-heading"
          title="My Skills"
        />

        {/* Tech Icon Bar with Labels */}
        <div className="tech-icon-bar">
          {skillDetails.map((tech) => (
            <div
              className="tech-item"
              key={tech.name}
              style={{ "--accent-color": tech.color } as React.CSSProperties}
            >
              <div className="tech-icon-box">
                <span
                  className={`tech-glyph ${tech.name === "Next.js" ? "tech-glyph-next" : ""}`}
                  style={tech.name === "Next.js" ? undefined : { color: tech.color }}
                >
                  {tech.icon}
                </span>
              </div>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Work Experience & Performance Metrics Grid */}
        <div className="skills-main-grid">
          <GlassCard className="experience-panel animated-card">
            <div className="panel-heading">
              <span aria-hidden="true" className="panel-icon red-glow flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </span>
              <div>
                <h3>Work Experience</h3>
                <p>My Professional Journey</p>
              </div>
            </div>
            <div className="timeline-container">
              <div className="timeline-line"></div>
              {workExperience.map((item, index) => (
                <div className="timeline-row" key={index}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-details">
                    <h4>{item.role}</h4>
                    <p className="company-name">{item.company}</p>
                    <p className="location-date">{item.location} • {item.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="performance-panel animated-card">
            <div className="panel-heading">
              <span aria-hidden="true" className="panel-icon red-glow flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </span>
              <div>
                <h3>Performance</h3>
                <p>My Achievements</p>
              </div>
            </div>

            <div className="performance-rings-row">
              {performanceMetrics.map((metric) => (
                <div className="ring-wrapper" key={metric.label}>
                  <div
                    className="circular-progress"
                    style={
                      {
                        "--progress": `${metric.value * 3.6}deg`,
                        "--ring-color": metric.color,
                      } as React.CSSProperties
                    }
                  >
                    <div className="inner-circle">
                      <span>{metric.value}%</span>
                    </div>
                  </div>
                  <span className="ring-label">{metric.label}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Clean link to full skills breakdown page */}
        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <Link href="/skills" className="view-full-link inline-flex items-center gap-2" style={{ display: "inline-flex" }}>
            <span>Explore All 12 Skills &amp; Deep Technical Breakdown</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>
    );
  }

  // Subpage layout (/skills): Full deep dive with every skill explained one by one!
  return (
    <div className="skills-deep-dive-page animate-fade-in">
      {/* Top Interactive Icon Bar */}
      <div className="tech-icon-bar">
        {skillDetails.map((tech) => (
          <button
            type="button"
            className={`tech-item ${activeSkillName === tech.name ? "active-tech-pill" : ""}`}
            key={tech.name}
            onClick={() =>
              setActiveSkillName(activeSkillName === tech.name ? null : tech.name)
            }
            style={{ "--accent-color": tech.color } as React.CSSProperties}
            title={`Click to inspect ${tech.name} details`}
          >
            <div className="tech-icon-box">
              <span
                className={`tech-glyph ${tech.name === "Next.js" ? "tech-glyph-next" : ""}`}
                style={tech.name === "Next.js" ? undefined : { color: tech.color }}
              >
                {tech.icon}
              </span>
            </div>
            <span className="tech-name">{tech.name}</span>
          </button>
        ))}
      </div>

      {/* Active Skill Highlight Spotlight (When user clicks an icon) */}
      {activeSkill && (
        <div className="skill-spotlight-box animate-fade-in">
          <div className="spotlight-header">
            <div className="spotlight-icon-wrap" style={{ borderColor: activeSkill.color }}>
              <span style={{ color: activeSkill.color }}>{activeSkill.icon}</span>
            </div>
            <div>
              <span className="spotlight-category">{activeSkill.category}</span>
              <h3>{activeSkill.name} — {activeSkill.tagline}</h3>
            </div>
            <button
              className="spotlight-close-btn"
              onClick={() => setActiveSkillName(null)}
              type="button"
            >
              ✕ Close
            </button>
          </div>
          <p className="spotlight-desc">{activeSkill.description}</p>
          <div className="spotlight-tags">
            {activeSkill.highlights.map((h) => (
              <span key={h} className="spotlight-tag inline-flex items-center gap-1.5">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{h}</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* One-by-One Detailed Skills Grid */}
      <div className="about-principles-heading" style={{ marginTop: "32px", marginBottom: "16px" }}>
        <h3>Every Skill Explained, One by One</h3>
        <p>In-depth technical breakdown of how I apply each technology in real-world web applications.</p>
      </div>

      <div className="skills-detailed-grid">
        {skillDetails.map((skill) => (
          <div
            className="skill-detail-card animated-card-yellow"
            key={skill.name}
            id={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, "")}`}
          >
            <div className="skill-card-top">
              <div
                className="skill-badge-circle"
                style={{
                  backgroundColor: `${skill.color}18`,
                  borderColor: `${skill.color}55`,
                }}
              >
                <span style={{ color: skill.color }}>{skill.icon}</span>
              </div>
              <div className="skill-card-meta">
                <span className="skill-category-label">{skill.category}</span>
                <h4>{skill.name}</h4>
              </div>
              <span className="skill-proficiency-badge">{skill.proficiency}</span>
            </div>

            {/* Visual Mastery Bar - Dynamic & engaging */}
            <div className="skill-proficiency-track" aria-hidden="true">
              <div 
                className="skill-proficiency-fill" 
                style={{ width: skill.proficiency, backgroundColor: skill.color }}
              />
            </div>

            <p className="skill-tagline-text">{skill.tagline}</p>
            <p className="skill-description-text">{skill.description}</p>

            <div className="skill-highlights-list">
              {skill.highlights.map((hl) => (
                <span className="skill-pill-item" key={hl}>
                  {hl}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Work Experience & Performance Metrics Panels */}
      <div className="skills-main-grid" style={{ marginTop: "48px" }}>
        {/* Work Experience Timeline */}
        <GlassCard className="experience-panel animated-card">
          <div className="panel-heading">
            <span aria-hidden="true" className="panel-icon red-glow flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </span>
            <div>
              <h3>Work Experience</h3>
              <p>My Professional Journey</p>
            </div>
          </div>
          <div className="timeline-container">
            <div className="timeline-line"></div>
            {workExperience.map((item, index) => (
              <div className="timeline-row" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-details">
                  <h4>{item.role}</h4>
                  <p className="company-name">{item.company}</p>
                  <p className="location-date">{item.location} • {item.period}</p>
                  <p className="experience-summary">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Performance Rings */}
        <GlassCard className="performance-panel animated-card">
          <div className="panel-heading">
            <span aria-hidden="true" className="panel-icon red-glow flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
            </span>
            <div>
              <h3>Performance &amp; Core Strengths</h3>
              <p>Engineering Metric Self-Assessment</p>
            </div>
          </div>

          <div className="performance-rings-row">
            {performanceMetrics.map((metric) => (
              <div className="ring-wrapper" key={metric.label}>
                <div
                  className="circular-progress"
                  style={
                    {
                      "--progress": `${metric.value * 3.6}deg`,
                      "--ring-color": metric.color,
                    } as React.CSSProperties
                  }
                >
                  <div className="inner-circle">
                    <span>{metric.value}%</span>
                  </div>
                </div>
                <span className="ring-label">{metric.label}</span>
              </div>
            ))}
          </div>

          <div className="performance-summary-box">
            <h4>Engineering Discipline</h4>
            <p>
              I emphasize writing readable code that is easy to debug, test, and expand. Every application
              I build is benchmarked for rapid load times, responsive behavior on touch devices, and clean
              database access patterns.
            </p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
