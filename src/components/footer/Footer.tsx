"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { portfolio, navigation } from "@/data/portfolioData";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Zahid3324",
    icon: <FaGithub size={16} />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/zahidabbas",
    icon: <FaLinkedin size={16} />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/zahid_abbas_",
    icon: <FaInstagram size={16} />,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/Zahid Abbas",
    icon: <FaFacebook size={16} />,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/923281443858",
    icon: <FaWhatsapp size={16} />,
  },
];

export default function Footer() {
  const [year, setYear] = useState<string>("");

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        {/* Main 3-Column Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          
          {/* Brand & Handcrafted Developer Bio (col 1-5) */}
          <div className="md:col-span-5 flex flex-col items-center text-center md:items-start md:text-left">
            <Link
              aria-label={`${portfolio.name}, Home`}
              className="group inline-flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02]"
              href="/"
            >
              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface)] p-1 shadow-sm transition-shadow group-hover:shadow-md">
                <Image
                  src="/ZA logo.png"
                  alt="Zahid Abbas Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-[var(--foreground)]">
                  Zahid <span className="text-amber-500">Abbas</span>
                </span>
                <span className="text-xs font-semibold text-[var(--foreground)] opacity-70">
                  {portfolio.role}
                </span>
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--foreground)] opacity-80">
              Full-stack developer building bespoke web applications with Next.js, React, Node.js &amp; MongoDB. Every component, API, and stylesheet is handcrafted with clean code and care.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--foreground)] opacity-85">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for projects &amp; collaborations</span>
            </div>
          </div>

          {/* Quick Links (col 6-8) */}
          <div className="md:col-span-3 flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--foreground)]">
              Navigation
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[var(--foreground)] opacity-75 transition-colors duration-150 hover:opacity-100 hover:text-amber-500 font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/cv"
                  className="text-[var(--foreground)] opacity-75 transition-colors duration-150 hover:opacity-100 hover:text-amber-500 font-medium"
                >
                  CV / Resume
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Social (col 9-12) */}
          <div className="md:col-span-4 flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--foreground)]">
              Get in Touch
            </h3>
            <p className="mt-4 text-sm text-[var(--foreground)] opacity-80 leading-relaxed">
              Have a project in mind or want to collaborate? Feel free to reach out directly:
            </p>
            <a
              href="mailto:zahidabbas@gmail.com"
              className="mt-2 text-sm font-semibold text-amber-500 hover:underline"
            >
              zahidabbas1443858@gmail.com
            </a>

            <div className="mt-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] opacity-80">
                Connect with me
              </span>
              <div className="mt-2.5 flex flex-wrap justify-center gap-2 md:justify-start">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--surface)] text-[var(--foreground)] opacity-80 transition-all duration-200 hover:-translate-y-0.5 hover:opacity-100 hover:border-amber-500 hover:text-amber-500"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Human-Crafted Developer Attribution */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[var(--line)] pt-6 text-xs text-[var(--foreground)] opacity-75 sm:flex-row">
          <p className="flex items-center gap-1.5 font-medium">
            <span>Built by hand with passion &amp; precision by</span>
            <span className="font-semibold text-amber-500">Zahid Abbas</span>
          </p>
          <p className="font-medium">
            &copy; {year || "2026"} Zahid Abbas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
