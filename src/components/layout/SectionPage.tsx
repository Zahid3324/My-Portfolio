import type { ReactNode } from "react";
import Link from "next/link";

type SectionPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export default function SectionPage({
  eyebrow,
  title,
  description,
  children,
}: SectionPageProps) {
  return (
    <div className="subpage-wrapper">
      <header className="container page-heading-compact">
        <div className="page-heading-nav-row">
          <Link className="page-breadcrumb-pill inline-flex items-center gap-1.5" href="/">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Back home</span>
          </Link>
          <span className="page-eyebrow-badge">{eyebrow}</span>
        </div>
        <p className="page-description-compact">{description}</p>
      </header>
      <main className="container subpage-content-compact">{children}</main>
    </div>
  );
}
