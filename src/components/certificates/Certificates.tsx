"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";

const certificateData = [
  {
    id: "web-development",
    title: "Web Development",
    issuer: "MZ Innovations Pvt Ltd",
    year: "2025",
    image: "/certificate1.png",
    description: "Completed comprehensive hands-on training covering HTML5, CSS3, JavaScript ES6+, and responsive modern web design principles.",
  },
  {
    id: "full-stack-internship",
    title: "Full-Stack Web Development Internship",
    issuer: "Nisha Tech Solutions, Faisalabad",
    year: "2026",
    image: "/certificate2.png",
    description: "Completed a hands-on full-stack web development internship, gaining professional experience building scalable web applications using Next.js App Router, React, Node.js, and MongoDB databases.",
  },
  {
    id: "web-development-internship",
    title: "Web Development Internship",
    issuer: "Remote Intern Grow",
    year: "2025",
    image: "/certificate3.png",
    description: "Completed hands-on remote internship focused on full-stack web development, building responsive interfaces, and integrating modern component workflows.",
  },
  {
    id: "mongodb-prisma",
    title: "MongoDB & Prisma",
    issuer: "Udemy",
    year: "2026",
    image: "/certificate4.png",
    description: "Built robust database architectures utilizing MongoDB, Mongoose, and Prisma ORM for secure backend data persistence.",
  },
  {
    id: "javascript-es6",
    title: "JavaScript ES6+",
    issuer: "Udemy",
    year: "2025",
    image: "/certificate5.png",
    description: "Deep dive into asynchronous JavaScript, closures, ES6+ features, DOM manipulation, and modern web application logic.",
  },
  {
    id: "dsa-algorithms",
    title: "DSA & Algorithms",
    issuer: "Coursera",
    year: "2025",
    image: "/certificate6.png",
    description: "Strengthened core computer science fundamentals including data structures, sorting algorithms, and complexity analysis.",
  },
];

type CertificatesProps = {
  detailed?: boolean;
};

export default function Certificates({ detailed = false }: CertificatesProps) {
  const [selectedCert, setSelectedCert] = useState<typeof certificateData[number] | null>(null);

  return (
    <section
      aria-labelledby="certificates-heading"
      className="certificates-section section animate-fade-in"
      id="certificates"
    >
      <div className="container">
        {selectedCert ? (
          /* Detail View when a Certificate is Clicked */
          <div className="certificate-detail-view animate-fade-in">
            <div className="detail-header-center">
              <h2 className="centered-view-heading">View Certificate</h2>
              <p>Detailed credential breakdown and verification</p>
            </div>

            <div className="certificate-detail-box animated-card-yellow">
              <div className="detail-image-container">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="cert-detail-img"
                />
              </div>
              <div className="detail-content">
                <h3>{selectedCert.title}</h3>
                <p className="issuer-tag">{selectedCert.issuer} · {selectedCert.year}</p>
                <p className="cert-description">{selectedCert.description}</p>
                
                <div className="detail-actions">
                  <button 
                    className="back-btn inline-flex items-center gap-2" 
                    onClick={() => setSelectedCert(null)}
                    type="button"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12" />
                      <polyline points="12 19 5 12 12 5" />
                    </svg>
                    <span>Back to Certificates</span>
                  </button>
                  <a 
                    href={selectedCert.image} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="view-full-link inline-flex items-center gap-1.5"
                  >
                    <span>Open Image in New Tab</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Default Grid View */
          <>
            <div className="certificates-header-row">
              <SectionTitle
                description="My Achievements &amp; Certifications"
                eyebrow="CONTINUOUS LEARNING"
                id="certificates-heading"
                title="My Certificates"
              />
              <div className="trophy-badge" aria-hidden="true">
                🏆
              </div>
            </div>

            <div className="certificate-grid">
              {certificateData.map((cert) => (
                <article 
                  className="certificate-card animated-card-yellow clickable-card" 
                  key={cert.id}
                  onClick={() => setSelectedCert(cert)}
                >
                  <div className="certificate-image-wrapper">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="cert-img"
                    />
                  </div>
                  <div className="certificate-info">
                    <h3>{cert.title}</h3>
                    <p>{cert.issuer} · {cert.year}</p>
                    <span className="click-hint inline-flex items-center gap-1">
                      <span>Click to view details</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </div>
                </article>
              ))}
            </div>

            {!detailed && (
              <div style={{ textAlign: "center", marginTop: "32px" }}>
                <Link href="/certificates" className="view-full-link inline-flex items-center gap-2" style={{ display: "inline-flex" }}>
                  <span>View All Certificates &amp; Credentials</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
