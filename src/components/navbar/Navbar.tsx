import Image from "next/image";
import Link from "next/link";
import { navigation, portfolio } from "@/data/portfolioData";
import ThemeToggle from "@/components/ui/ThemeToggle";

function Logo() {
  return (
    <span className="brand-logo relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface)] p-1 shadow-sm transition-all duration-200 group-hover:shadow-md">
      <Image 
        src="/ZA logo.png"
        alt="Zahid Abbas Logo" 
        width={36}
        height={36}
        className="h-8 w-auto object-contain"
        priority
      />
    </span>
  );
}

export default function Navbar() {
  return (
    <header className="navbar w-full transition-colors duration-300">
      <div className="container navbar-inner flex items-center justify-between py-4">
        <Link aria-label={`${portfolio.name}, home`} className="brand flex items-center gap-2 text-decoration-none" href="/">
          <Logo />
          {/* Brand name matching the theme with an accent color for "Abbas" */}
          <span className="brand-name text-2xl font-extrabold tracking-wide text-black dark:text-white">
            Zahid <span className="text-amber-500">Abbas</span>
          </span>
        </Link>
        
        <nav aria-label="Main navigation" className="navbar-links hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <Link 
              href={item.href} 
              key={item.label}
              className="text-lg font-bold text-black hover:text-amber-500 dark:text-white dark:hover:text-amber-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link className="button button-yellow navbar-cta font-bold inline-flex items-center gap-1.5" href="/contact">
            <span>Let&apos;s talk</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>
        </div>

        <details className="mobile-nav md:hidden relative">
          <summary aria-label="Toggle navigation" className="cursor-pointer text-black dark:text-white">
            <div className="flex flex-col gap-1 mt-1">
              <span className="block w-6 h-0.5 bg-black dark:bg-white" />
              <span className="block w-6 h-0.5 bg-black dark:bg-white" />
              <span className="block w-6 h-0.5 bg-black dark:bg-white" />
            </div>
          </summary>
          <nav aria-label="Mobile navigation" className="mobile-nav-links absolute right-0 mt-4 flex flex-col gap-4 rounded-lg bg-white p-6 shadow-xl dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
            {navigation.map((item) => (
              <Link 
                href={item.href} 
                key={item.label}
                className="text-lg font-bold text-black dark:text-white hover:text-amber-500 dark:hover:text-amber-400"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
