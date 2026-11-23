"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { sampleProjects } from "@/data/portfolioData";
import type { Project } from "@/types";
import SectionTitle from "@/components/ui/SectionTitle";

type ProjectsResponse = {
  projects?: Project[];
  source?: "database" | "sample";
  error?: string;
};

type ProjectsProps = {
  detailed?: boolean;
};

export default function Projects({ detailed = false }: ProjectsProps) {
  const [projects, setProjects] = useState<Project[]>(sampleProjects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [source, setSource] = useState<"sample" | "database">("sample");
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadProjects() {
      try {
        const response = await fetch("/api/projects", {
          signal: controller.signal,
        });
        const data = (await response.json()) as ProjectsResponse;

        if (!response.ok) {
          throw new Error(data.error || "Projects could not be loaded.");
        }

        if (Array.isArray(data.projects) && data.projects.length > 0) {
          const hasRealProjects = data.projects.some(
            (p) =>
              p.title.toLowerCase().includes("tourism") ||
              p.title.toLowerCase().includes("bill") ||
              p.title.toLowerCase().includes("cloth") ||
              p.title.toLowerCase().includes("university") ||
              p.title.toLowerCase().includes("portfolio"),
          );
          if (hasRealProjects) {
            setProjects(data.projects);
          } else {
            setProjects(sampleProjects);
          }
        } else {
          setProjects(sampleProjects);
        }
        setSource(data.source === "database" ? "database" : "sample");
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }
        setLoadError(
          error instanceof Error ? error.message : "Projects could not be loaded.",
        );
        setProjects(sampleProjects);
      }
    }

    void loadProjects();
    return () => controller.abort();
  }, []);

  return (
    <section
      aria-labelledby="projects-heading"
      className="container section projects-section animate-fade-in"
      id="projects"
    >
      {selectedProject ? (
        /* Detailed Project View (Matching Certificate UX) */
        <div className="project-detail-view animate-fade-in">
          <div className="detail-header-center">
            <span className="project-detail-category-badge">
              {selectedProject.category}
            </span>
            <h2 className="centered-view-heading">{selectedProject.title}</h2>
            <p>Full project architecture, problem breakdown, and implementation details</p>
          </div>

          <div className="project-detail-modal-card">
            {/* Visual Image Preview */}
            <div className="project-detail-image-wrapper">
              {selectedProject.image ? (
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 900px"
                  className="project-detail-image"
                  priority
                />
              ) : (
                <div className="project-detail-image-placeholder">
                  <span>{selectedProject.title}</span>
                </div>
              )}
            </div>

            {/* Action Bar */}
            <div className="project-detail-action-bar">
              <button
                className="back-btn inline-flex items-center gap-2"
                onClick={() => setSelectedProject(null)}
                type="button"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                <span>Back to all projects</span>
              </button>

              <div className="project-links-group">
                {selectedProject.href && (
                  <a
                    href={selectedProject.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-full-link inline-flex items-center gap-1.5"
                  >
                    <span>Live Demo</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-code-link inline-flex items-center gap-1.5"
                  >
                    <span>View Source Code</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* In-depth details */}
            <div className="project-detail-body">
              {/* Overview */}
              <div className="project-detail-section">
                <h3>About This Project</h3>
                <p className="project-detail-text">
                  {selectedProject.overview || selectedProject.description}
                </p>
              </div>

              {/* Key Features */}
              {selectedProject.features && selectedProject.features.length > 0 && (
                <div className="project-detail-section">
                  <h3>Key Features &amp; Capabilities</h3>
                  <ul className="project-features-list">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="feature-bullet-icon mt-0.5 flex-shrink-0">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Architecture & Tech Stack */}
              <div className="project-detail-grid-two">
                {selectedProject.architecture && (
                  <div className="project-detail-subbox">
                    <h4>Technical Architecture</h4>
                    <p>{selectedProject.architecture}</p>
                  </div>
                )}

                {selectedProject.challengesSolved && (
                  <div className="project-detail-subbox">
                    <h4>Engineering Challenges Solved</h4>
                    <p>{selectedProject.challengesSolved}</p>
                  </div>
                )}
              </div>

              {/* Tech Badges */}
              <div className="project-detail-section">
                <h3>Technologies &amp; Tools Used</h3>
                <div className="project-detail-tags">
                  {selectedProject.technologies.map((tech) => (
                    <span className="project-tech-pill" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Default Grid View */
        <>
          <SectionTitle
            description="Real-world web applications I have designed, engineered, and built from scratch."
            eyebrow="SELECTED WORK"
            id="projects-heading"
            title="Projects"
          />

          <div className="project-showcase-grid">
            {projects.map((project) => (
              <article
                className="project-showcase-card animated-card-yellow"
                key={project.id || project._id || project.title}
                onClick={() => setSelectedProject(project)}
              >
                {/* Visual Image Preview */}
                <div className="project-card-image-box">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="project-card-img"
                    />
                  ) : (
                    <div className="project-card-placeholder">
                      <span>{project.category}</span>
                    </div>
                  )}
                  <span className="project-card-badge">{project.category}</span>
                </div>

                {/* Card Content */}
                <div className="project-card-info">
                  <div className="project-card-header">
                    <h3>{project.title}</h3>
                  </div>

                  <p className="project-card-description">{project.description}</p>

                  <ul aria-label="Technologies" className="project-tags">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                    {project.technologies.length > 4 && (
                      <li className="more-tag">+{project.technologies.length - 4} more</li>
                    )}
                  </ul>

                  <div className="project-card-footer">
                    <div className="project-card-action-row">
                      {project.href && (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="project-live-btn"
                          title="Open live website in new tab"
                        >
                          <span>Visit Site</span>
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                          </svg>
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="project-details-btn"
                        title="View Architecture & Engineering Details"
                      >
                        <span>Details</span>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="16" x2="12" y2="12" />
                          <line x1="12" y1="8" x2="12.01" y2="8" />
                        </svg>
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="project-github-btn"
                          title="View Source Code on GitHub"
                          aria-label="View Source Code on GitHub"
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {!detailed && (
            <div style={{ textAlign: "center", marginTop: "32px" }}>
              <Link href="/projects" className="view-full-link inline-flex items-center gap-2" style={{ display: "inline-flex" }}>
                <span>View All Projects with Deep Architecture Breakdown</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          )}

          <p aria-live="polite" className="project-notice">
            {loadError
              ? `${loadError} Displaying verified portfolio projects.`
              : source === "sample"
                ? "Showing 5 featured projects: Tourism Platform, Electricity Bill App, Developer Portfolio, Clothing Brand, and University Site."
                : "Showing verified projects."}
          </p>
        </>
      )}
    </section>
  );
}
