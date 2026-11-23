import type { Certificate, Project } from "@/types";

export const portfolio = {
  name: "Zahid Abbas",
  role: "Full Stack Web Developer",
  email: "zahidabbas@gmail.com",
  phone: "+92 300 1234567",
  location: "Faisalabad, Pakistan",
  github: "https://github.com/Zahid3324",
  linkedin: "https://linkedin.com",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Certificates", href: "/certificates" },
  { label: "Contact", href: "/contact" },
];

export const skills = [
  { name: "HTML5", glyph: "5", color: "#e34f26" },
  { name: "CSS3", glyph: "3", color: "#2965f1" },
  { name: "JavaScript", glyph: "JS", color: "#f7df1e" },
  { name: "React", glyph: "⚛", color: "#61dafb" },
  { name: "Next.js", glyph: "N", color: "#ffffff" },
  { name: "Tailwind", glyph: "≈", color: "#38bdf8" },
  { name: "Bootstrap", glyph: "BS", color: "#9333ea" },
  { name: "Node.js", glyph: "Node", color: "#68a063" },
  { name: "Express", glyph: "EX", color: "#9ca3af" },
  { name: "MongoDB", glyph: "M", color: "#4db33d" },
  { name: "Prisma", glyph: "PR", color: "#5a67d8" },
  { name: "Firebase", glyph: "FB", color: "#ffcb2e" },
];

export const sampleProjects: Project[] = [
  {
    id: "tourism-website",
    title: "Roamly — Tourism & Travel Expedition Platform",
    category: "Full Stack Web Application",
    description:
      "A complete travel and tourism exploration portal built for booking northern Pakistan expeditions, featuring dynamic destination filters, tour packages, inquiry management, and interactive itineraries.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB"],
    preview: "travel",
    image: "/images/projects/tourism.png",
    href: "https://turirm-app.vercel.app/",
    githubUrl: "https://github.com/Zahid3324",
    order: 1,
    featured: true,
    isPublished: true,
    overview:
      "I built this travel and adventure platform to give tourists an immersive way to discover destinations across northern Pakistan (Hunza, Skardu, Fairy Meadows, and Swat). The platform handles real-time package booking inquiries, interactive itinerary timelines, photo galleries, and seasonal expedition guides.",
    features: [
      "Dynamic Tour Package Directory with real-time price & duration filtering",
      "Interactive Expedition Itineraries with day-by-day stops and elevation charts",
      "Booking Inquiry & Lead Capture connected directly to database storage",
      "High-speed image delivery with responsive WebP layouts across mobile & desktop",
      "Customer Reviews & Ratings system for verified trekkers and travel groups",
    ],
    architecture:
      "Engineered with Next.js App Router for server-rendered SEO landing pages. Client components manage interactive filtering and booking state, while API routes handle form submissions and store reservations cleanly in MongoDB.",
    challengesSolved:
      "Balancing high-resolution photography with fast mobile load times on spotty network connections. Solved through Next.js Image optimization, blur-up placeholders, and CDN asset caching.",
  },
  {
    id: "bill-app",
    title: "Electricity & Utility Bill Calculator",
    category: "Utility & Calculation App",
    description:
      "A fast, accurate electricity bill estimator and utility tracking application built with tariff slab calculators, fuel adjustment surcharge computation, 14-digit reference number lookup, and instant PDF download.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    preview: "dashboard",
    image: "/images/projects/bill-app.svg",
    href: "https://github.com/Zahid3324",
    githubUrl: "https://github.com/Zahid3324",
    order: 2,
    featured: true,
    isPublished: true,
    overview:
      "Created to solve common confusion around utility bill calculations and fluctuating government tariff slabs. This web application allows Pakistani consumers to input consumed kilowatt-hours (kWh) and immediately calculate the accurate breakdown of base unit charges, GST, FPA (Fuel Price Adjustment), and TV fees according to official distribution company slabs (FESCO, LESCO, GEPCO).",
    features: [
      "Precise Multi-Slab Tariff Engine (Protected vs Unprotected consumer categories)",
      "Instant 14-digit bill reference number lookup and status verification",
      "Historical monthly consumption trend visualizer with peak vs off-peak hours analysis",
      "Downloadable print-ready PDF duplicate bill generator",
      "Energy conservation calculator that estimates monetary savings per switched appliance",
    ],
    architecture:
      "Crafted with pure TypeScript calculation logic isolated from presentation layers for strict unit testability. The UI is built using responsive Tailwind CSS cards and accessible inputs with zero external mathematical dependencies.",
    challengesSolved:
      "Managing complex nested slab calculations where marginal rates vary dynamically past 100, 200, 300, and 700 units. Handled through a pure functional calculation pipeline with zero rounding errors.",
  },
  {
    id: "portfolio",
    title: "Personal Developer Portfolio",
    category: "Portfolio & Personal Branding",
    description:
      "A bespoke, handcrafted full-stack portfolio built with Next.js 16, TypeScript, and adaptive theme styling. Features interactive project modals, single-page printable dark CV, and database-backed contact messaging.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MongoDB"],
    preview: "dashboard",
    image: "/images/projects/portfolio.svg",
    href: "https://github.com/Zahid3324",
    githubUrl: "https://github.com/Zahid3324",
    order: 3,
    featured: true,
    isPublished: true,
    overview:
      "My personal digital home crafted from scratch to showcase my journey as a Full Stack Web Developer. It is built without pre-packaged templates, highlighting clean semantic structure, custom CSS design systems, dual dark/light themes, and seamless interactive project and certificate detail viewers.",
    features: [
      "Adaptive dual-theme engine supporting system preference, manual toggle, and instant persistence",
      "Dedicated 1-Page Dark CV view with clean CSS print media styling and PDF export",
      "Interactive Modal Detail views for Projects and Certificates matching native app feel",
      "Dynamic MongoDB integration with graceful fallback to sample offline data",
      "Zero TypeScript compilation warnings with strict type-safety across all components",
    ],
    architecture:
      "Built on Next.js App Router with server-side rendering for speed and SEO. State management is handled through focused React hooks without unnecessary overhead. API routes connect to MongoDB via Mongoose with connection pooling and timeouts.",
    challengesSolved:
      "Achieving pixel-perfect dark theme printing where browsers normally strip background colors and force white paper defaults. Solved using exact print-color-adjust and isolated print layout rules.",
  },
  {
    id: "cloth-brand",
    title: "Modern Apparel & Clothing Brand Storefront",
    category: "E-Commerce & Retail",
    description:
      "An editorial apparel e-commerce web application featuring dynamic catalog navigation, size & color selectors, shopping cart state management, product filtering, and an optimized checkout experience.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB"],
    preview: "store",
    image: "/images/projects/cloth-brand.svg",
    href: "https://github.com/Zahid3324",
    githubUrl: "https://github.com/Zahid3324",
    order: 4,
    featured: true,
    isPublished: true,
    overview:
      "Developed as a high-end streetwear and apparel brand storefront. The application prioritizes visual storytelling, instant product discovery, and friction-free shopping cart interactions. Customers can browse collections, inspect product photography, choose sizes/colors with live inventory hints, and proceed to checkout seamlessly.",
    features: [
      "Dynamic Product Catalog with multi-attribute filtering (category, size, color, price range)",
      "Interactive Product Detail Page with image gallery zooming and size guides",
      "Persistent Shopping Bag powered by client state with local storage synchronization",
      "Discount voucher and coupon code calculation engine",
      "Mobile-first checkout workflow optimized for one-thumb smartphone navigation",
    ],
    architecture:
      "React context and modern hooks handle cart operations and modal drawer states. Product inventory is structured in MongoDB with flexible attributes. Server actions and REST endpoints handle order validation and inventory reservation.",
    challengesSolved:
      "Preventing layout shifts during image loading and maintaining real-time cart state synchronization across multiple open browser tabs. Solved using storage event listeners and optimistic UI updates.",
  },
  {
    id: "uni-site",
    title: "University Academic & Student Portal",
    category: "Educational Management System",
    description:
      "A comprehensive academic website and student information portal featuring department curriculum outlines, faculty directories, semester course registration, noticeboard alerts, and GPA tracking.",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Express", "MongoDB"],
    preview: "dashboard",
    image: "/images/projects/uni-site.svg",
    href: "https://github.com/Zahid3324",
    githubUrl: "https://github.com/Zahid3324",
    order: 5,
    featured: true,
    isPublished: true,
    overview:
      "Designed as a unified digital campus portal for university students, faculty, and prospective admissions. It centralizes course syllabi, academic calendars, fee challan generation, department announcements, and a secure student dashboard for reviewing credit hours, grades, and attendance metrics.",
    features: [
      "Centralized Academic Noticeboard with real-time categorised alerts (exams, holidays, events)",
      "Department & Degree Program Directory with downloadable curriculum course outlines",
      "Student Academic Dashboard tracking credit hours, semester GPA, and attendance percentages",
      "Faculty Profile Directory with research interests, office hours, and direct contact options",
      "Admissions Inquiry & Application Portal with multi-step validation and document upload guidance",
    ],
    architecture:
      "Built with Next.js App Router for public university pages and secure client-authenticated views for student dashboards. MongoDB models store course catalogs, student enrollment records, and announcements with indexed queries for sub-50ms response times.",
    challengesSolved:
      "Organizing large volumes of hierarchical academic data (Departments -> Degrees -> Semesters -> Courses) cleanly without overwhelming students. Solved through intuitive tabbed accordions and fast client-side fuzzy search.",
  },
];

export const certificates: Certificate[] = [];

export const experience = [
  {
    title: "Full Stack Web Developer",
    organization: "Nisha Tech Solution & Academy, Faisalabad",
    period: "Feb 2026 - Present",
    description:
      "Architecting and building production web applications using Next.js App Router, React, Node.js, and MongoDB. Leading frontend UI engineering, developing secure RESTful APIs, and mentoring students in hands-on full-stack development best practices.",
  },
  {
    title: "Frontend Web Developer (Intern)",
    organization: "Manzoor Ahmad Law Associates, Faisalabad",
    period: "2025 - 2026",
    description:
      "Designed and developed a responsive client legal portal and appointment booking interface. Focused on high-speed page loads, accessible UI layouts, and translating legal client requirements into functional digital workflows.",
  },
  {
    title: "Web Development Trainee",
    organization: "MZ Innovations Pvt Ltd, Faisalabad",
    period: "2025",
    description:
      "Completed rigorous practical training in HTML5, CSS3, modern JavaScript ES6+, responsive grid systems, and asynchronous API integration. Built practical portfolio components under mentor guidance.",
  },
  {
    title: "Freelance Full Stack Developer",
    organization: "Independent Client Engagements",
    period: "2024 - Present",
    description:
      "Delivering custom, end-to-end web applications for independent businesses: utility calculators, e-commerce storefronts, and tourism platforms. Responsible for wireframing, frontend engineering, database modeling, and deployment.",
  },
];
