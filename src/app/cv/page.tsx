"use client";

import Link from "next/link";

export default function CVPage() {
  return (
    <div className="cv-page-wrapper">
      <div className="cv-container">
        {/* Header */}
        <div className="cv-header">
          <div className="cv-header-left">
            <h1>Zahid Abbas</h1>
            <p className="cv-role">Full Stack Web Developer</p>
          </div>
          <div className="cv-header-right">
            <p>📧 zahidabbas@gmail.com</p>
            <p>📞 +92 328 1443858</p>
            <p>📍 Faisalabad, Pakistan</p>
            <p>🔗 github.com/zahidabbas</p>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="cv-section">
          <h2>Professional Summary</h2>
          <p>
            Passionate Full Stack Web Developer with hands-on experience building
            modern, responsive web applications. Proficient in the MERN stack
            (MongoDB, Express.js, React, Node.js) and Next.js. Strong foundation
            in frontend design, backend API development, and database management.
            Committed to writing clean, maintainable code and delivering
            exceptional user experiences.
          </p>
        </section>

        {/* Skills */}
        <section className="cv-section">
          <h2>Technical Skills</h2>
          <div className="cv-skills-grid">
            <div>
              <h3>Frontend</h3>
              <p>HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js, Tailwind CSS</p>
            </div>
            <div>
              <h3>Backend</h3>
              <p>Node.js, Express.js, REST APIs, MongoDB, Mongoose, Prisma ORM</p>
            </div>
            <div>
              <h3>Tools & Others</h3>
              <p>Git, GitHub, VS Code, Vercel, Postman, Figma, npm/pnpm</p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="cv-section">
          <h2>Education</h2>
          <div className="cv-entry">
            <div className="cv-entry-header">
              <strong>BS Software Engineering</strong>
              <span>Current</span>
            </div>
            <p>Riphah International University, Faisalabad</p>
          </div>
          <div className="cv-entry">
            <div className="cv-entry-header">
              <strong>Intermediate</strong>
              <span>Completed</span>
            </div>
            <p>Muslim College, Multan</p>
          </div>
          <div className="cv-entry">
            <div className="cv-entry-header">
              <strong>Matriculation</strong>
              <span>Completed</span>
            </div>
            <p>Govt High School, Gudara</p>
          </div>
        </section>

        {/* Experience */}
        <section className="cv-section">
          <h2>Experience</h2>
          <div className="cv-entry">
            <div className="cv-entry-header">
              <strong>Full Stack Web Developer — Freelance / Personal Projects</strong>
              <span>2024 – Present</span>
            </div>
            <ul>
              <li>Developed responsive portfolio websites and web applications using Next.js, React, and Tailwind CSS</li>
              <li>Built RESTful APIs with Node.js and Express.js connected to MongoDB databases</li>
              <li>Implemented authentication, form handling, and dynamic routing in production applications</li>
              <li>Deployed projects on Vercel with CI/CD pipelines from GitHub repositories</li>
            </ul>
          </div>
          <div className="cv-entry">
            <div className="cv-entry-header">
              <strong>Web Development Trainee — MZ Innovations Pvt Ltd</strong>
              <span>2025</span>
            </div>
            <ul>
              <li>Completed comprehensive hands-on training in HTML5, CSS3, JavaScript ES6+, and modern responsive web design</li>
              <li>Built multiple practice projects applying learned concepts under professional mentorship</li>
            </ul>
          </div>
        </section>

        {/* Certifications */}
        <section className="cv-section">
          <h2>Certifications</h2>
          <ul className="cv-certs-list">
            <li><strong>Web Development</strong> — MZ Innovations Pvt Ltd (2025)</li>
            <li><strong>Next.js Complete Course</strong> — Udemy (2025)</li>
            <li><strong>React Development</strong> — Udemy (2025)</li>
            <li><strong>MongoDB & Prisma</strong> — Udemy (2026)</li>
            <li><strong>JavaScript ES6+</strong> — Udemy (2025)</li>
            <li><strong>DSA & Algorithms</strong> — Coursera (2025)</li>
          </ul>
        </section>

        {/* Projects */}
        <section className="cv-section">
          <h2>Key Projects</h2>
          <div className="cv-entry">
            <strong>Personal Portfolio Website</strong>
            <p>Full-stack portfolio built with Next.js, TypeScript, MongoDB, and Tailwind CSS featuring contact form with database storage, dynamic project showcase, and responsive design.</p>
          </div>
          <div className="cv-entry">
            <strong>E-Commerce Storefront</strong>
            <p>Editorial storefront concept focused on product discovery and a clean checkout experience using Next.js, TypeScript, and MongoDB.</p>
          </div>
        </section>

        {/* Languages */}
        <section className="cv-section">
          <h2>Languages</h2>
          <p>Urdu (Native) · English (Professional) · Punjabi (Native)</p>
        </section>

        {/* Print / Navigation actions */}
        <div className="cv-print-actions">
          <button className="cv-print-btn" onClick={() => window.print()}>
            🖨️ Print / Save as PDF
          </button>
          <Link href="/" className="cv-back-link">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}