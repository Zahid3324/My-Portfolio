"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const highlights = [
  {
    type: "image",
    src: "/ZA logo.png",
    alt: "ZA Brand Logo",
    title: "Full Stack Developer",
    detail: "Zahid Abbas · End-to-End Apps",
  },
  {
    type: "icon",
    color: "#61dafb",
    bg: "rgba(97, 218, 251, 0.12)",
    border: "rgba(97, 218, 251, 0.3)",
    title: "React",
    detail: "Component Architecture & Hooks",
    icon: (
      <svg width="24" height="24" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    type: "icon",
    color: "#ffffff",
    bg: "rgba(255, 255, 255, 0.1)",
    border: "rgba(255, 255, 255, 0.25)",
    title: "Next.js 16",
    detail: "App Router & Server Components",
    icon: (
      <svg width="22" height="22" viewBox="0 0 180 180" fill="none">
        <circle cx="90" cy="90" r="88" fill="#000000" stroke="rgba(255,255,255,0.4)" strokeWidth="4" />
        <path
          d="M149.5 157.5L69.1 54H54v72h12.1V69.4l73.9 95.4c3.3-2.2 6.5-4.6 9.5-7.3z"
          fill="#ffffff"
        />
        <rect x="115" y="54" width="12" height="72" fill="#ffffff" />
      </svg>
    ),
  },
  {
    type: "icon",
    color: "#68a063",
    bg: "rgba(104, 160, 99, 0.12)",
    border: "rgba(104, 160, 99, 0.3)",
    title: "Node.js & Express",
    detail: "Scalable REST APIs & Logic",
    icon: (
      <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
        <path d="M16 2.5L3.5 9.7v14.6L16 31.5l12.5-7.2V9.7L16 2.5z" fill="#539e43" />
        <path
          d="M16 11.2c-3.1 0-5.6 1.8-5.6 4.6 0 2.4 1.8 3.6 4.3 4.2l1.6.4c1.6.4 2.3.9 2.3 1.8 0 1.1-1.1 1.8-2.6 1.8-1.8 0-2.8-.7-3.4-1.8l-2.2 1.5c1 1.8 2.8 2.8 5.6 2.8 3.5 0 5.6-2 5.6-4.6 0-2.4-1.6-3.6-4.2-4.2l-1.6-.4c-1.6-.4-2.4-.8-2.4-1.7 0-1 1-1.6 2.4-1.6 1.5 0 2.4.6 3 1.5l2.2-1.5c-.9-1.5-2.6-2.3-5-2.3z"
          fill="#ffffff"
        />
      </svg>
    ),
  },
  {
    type: "icon",
    color: "#4db33d",
    bg: "rgba(77, 179, 61, 0.12)",
    border: "rgba(77, 179, 61, 0.3)",
    title: "MongoDB",
    detail: "Mongoose Schemas & Queries",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C12 2 6 8.5 6 14.5C6 17.8 8.7 20.5 12 22C15.3 20.5 18 17.8 18 14.5C18 8.5 12 2 12 2Z"
          fill="#47A248"
        />
        <path
          d="M12 2V22C12.3 21.9 12.6 21.7 12.9 21.6C15.9 20.1 18 17.5 18 14.5C18 8.5 12 2 12 2Z"
          fill="#499D4A"
        />
        <path
          d="M11.9 21.8C11.8 21.8 11.8 21.7 11.7 21.6L11.5 17.5L11.9 12L12.3 17.5L12.1 21.6C12 21.7 12 21.8 11.9 21.8Z"
          fill="#FFFFFF"
          opacity="0.6"
        />
      </svg>
    ),
  },
  {
    type: "icon",
    color: "#38bdf8",
    bg: "rgba(56, 189, 248, 0.12)",
    border: "rgba(56, 189, 248, 0.3)",
    title: "Tailwind CSS",
    detail: "Fluid & Responsive Layouts",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6C13.7 10.6 15 12 18 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C16.3 6.2 15 4.8 12 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6C7.7 17.8 9 19.2 12 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C10.3 13.4 9 12 6 12z"
          fill="#38BDF8"
        />
      </svg>
    ),
  },
  {
    type: "icon",
    color: "#3178C6",
    bg: "rgba(49, 120, 198, 0.12)",
    border: "rgba(49, 120, 198, 0.3)",
    title: "TypeScript",
    detail: "Strict Type Safety & Clean Code",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path
          d="M12.3 8.7h-7v2.3h2.3v7.3h2.4v-7.3h2.3V8.7zm6.7 3.3c-.6-.4-1.3-.7-2.1-.7-1.1 0-1.8.6-1.8 1.4 0 .9.6 1.3 2 1.7 1.9.6 2.8 1.4 2.8 2.8 0 1.7-1.3 2.8-3.4 2.8-1.3 0-2.4-.4-3.1-1l.7-1.8c.7.6 1.6.9 2.4.9 1.1 0 1.7-.5 1.7-1.3 0-.8-.5-1.2-1.9-1.7-1.9-.6-2.8-1.5-2.8-2.8 0-1.7 1.3-2.7 3.2-2.7 1.1 0 2.1.3 2.7.7l-.6 1.7z"
          fill="#ffffff"
        />
      </svg>
    ),
  },
];

export default function Stats() {
  // Duplicated array to create an unbroken seamless infinite loop
  const marqueeItems = [...highlights, ...highlights, ...highlights];

  return (
    <section 
      aria-label="Development strengths and technical stack" 
      className="container stats-ticker-section"
    >
      {/* Complete One Border Container Track */}
      <div className="stats-ticker-track">
        {/* Animated Sliding Stream (Moves smoothly from Right to Left) */}
        <motion.div
          className="stats-ticker-stream"
          animate={{ x: ["0%", "-33.333%"] }} 
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {marqueeItems.map((item, index) => (
            <div key={index} className="ticker-item">
              {/* Proper Brand / Tech Logo Container */}
              <div 
                className="ticker-proper-logo-box"
                style={item.bg ? { backgroundColor: item.bg, borderColor: item.border } : undefined}
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src!}
                    alt={item.alt!}
                    width={32}
                    height={32}
                    className="ticker-img-logo"
                  />
                ) : (
                  item.icon
                )}
              </div>
              
              {/* Text: Title and Detail */}
              <div className="ticker-text-group">
                <strong className="ticker-title">{item.title}</strong>
                <span className="ticker-detail">{item.detail}</span>
              </div>

              {/* Decorative Separator Star */}
              <span className="ticker-separator" aria-hidden="true">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
