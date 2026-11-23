export interface EmotionState {
  id: string;
  label: string;
  emoji: string;
  image: string;
  speech: string;
  subtitle: string;
  accentColor: string;
}

export const emotions: EmotionState[] = [
  {
    id: "confident",
    label: "Confident",
    emoji: "😎",
    image: "/avatar/neutral.webp",
    speech: "I build websites that convert visitors into paying customers.",
    subtitle: "Focus mode: Pixel-perfect frontends & bulletproof backends.",
    accentColor: "#38bdf8",
  },
  {
    id: "wink",
    label: "Wink",
    emoji: "😉",
    image: "/avatar/wink.webp",
    speech: "Got a web project in mind? Let's make it real.",
    subtitle: "Charismatic execution with zero fluff.",
    accentColor: "#a855f7",
  },
  {
    id: "inspired",
    label: "Inspired",
    emoji: "🚀",
    image: "/avatar/lookup.webp",
    speech: "Designing next-generation web experiences that users actually love.",
    subtitle: "Looking up: Architecting tomorrow's digital landscapes.",
    accentColor: "#ec4899",
  },
  {
    id: "zen",
    label: "Zen",
    emoji: "😌",
    image: "/avatar/zen.webp",
    speech: "Clean code, calm deployments, zero downtime.",
    subtitle: "High uptime, atomic transactions, peace of mind.",
    accentColor: "#10b981",
  },
  {
    id: "goofy",
    label: "Playful",
    emoji: "🤪",
    image: "/avatar/goofy.webp",
    speech: "Debugging at 3 AM with fresh Kenyan coffee. Living the dream!",
    subtitle: "Turning complex bugs into effortless victories.",
    accentColor: "#f59e0b",
  },
  {
    id: "surprised",
    label: "Impressed",
    emoji: "😲",
    image: "/avatar/surprised.webp",
    speech: "Whoa! Look at you checking out every detail. I like you!",
    subtitle: "Attention to detail is where true excellence lives.",
    accentColor: "#06b6d4",
  },
];

export const profileData = {
  name: "Reuben Kimani",
  displayHeroName: "REUBEN KIMANI",
  role: "Full-Stack Web Developer & Digital Solutions Architect",
  founderTitle: "Founder & Lead Developer at LQD Creative",
  phone: "0740396075",
  phoneFormatted: "+254 740 396 075",
  phoneHref: "tel:+254740396075",
  whatsappHref:
    "https://wa.me/254740396075?text=Hi%20Reuben,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project!",
  email: "wanjikudigitaldesignservices@gmail.com",
  emailHref: "mailto:wanjikudigitaldesignservices@gmail.com",
  location: "Nairobi, Kenya",
  availability: "Available for Projects & Consulting",
  heroTagline:
    "CRAFTING HIGH-IMPACT WEBSITES, WEB APPS & DIGITAL PLATFORMS THAT GROW BUSINESSES",
  bio: `Hey, I'm Reuben Kimani — a full-stack web developer and digital solutions architect based in Nairobi, Kenya.

I build high-performance websites and web applications that look incredible and actually convert. From sleek business landing pages to complex SaaS platforms, POS systems, booking engines, and e-commerce stores — I architect digital products that command authority, scale reliably, and turn visitors into revenue. Through LQD Creative, I've shipped 40+ production web projects for SMEs, startups, and enterprises across East Africa and beyond.`,
  experienceYears: "5+",
  projectsCompleted: "40+",
  uptimeRate: "99.98%",
  clientSatisfaction: "100%",
  socials: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/reuben-kimani-0870b6372/",
      username: "reuben-kimani",
    },
    {
      name: "GitHub",
      href: "https://github.com/wanjikudigitaldesignservices-cyber",
      username: "wanjikudigitaldesignservices-cyber",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@lqdcreatives",
      username: "@lqdcreatives",
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@lqdcreatives",
      username: "@lqdcreatives",
    },
  ],
};

export const serviceList = [
  {
    number: "01",
    title: "BUSINESS WEBSITES & LANDING PAGES",
    description:
      "High-converting, SEO-optimized business websites and landing pages that look premium and load in under 2 seconds. Mobile-first design, smooth animations, and clear CTAs that turn visitors into customers.",
    tags: ["Next.js", "React", "Tailwind CSS", "SEO", "Responsive Design", "Performance"],
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    number: "02",
    title: "WEB APPLICATIONS & SaaS PLATFORMS",
    description:
      "Full-stack web applications with real-time databases, authentication, role-based dashboards, and production-grade architecture. From POS systems to management portals — built to scale.",
    tags: ["TypeScript", "Supabase", "PostgreSQL", "REST APIs", "Auth", "Real-time"],
    gradient: "from-purple-400 to-pink-500",
  },
  {
    number: "03",
    title: "E-COMMERCE & BOOKING SYSTEMS",
    description:
      "Online stores, reservation engines, and ordering platforms with payment integration, inventory management, and automated customer flows that drive revenue 24/7.",
    tags: ["M-Pesa", "Stripe", "Cart Systems", "Inventory", "Booking Engines", "WhatsApp Orders"],
    gradient: "from-pink-400 to-rose-500",
  },
  {
    number: "04",
    title: "UI/UX DESIGN & BRAND WEBSITES",
    description:
      "Cinematic web experiences with 3D elements, micro-interactions, and design systems that command premium market value. Your brand deserves a digital home that stands out.",
    tags: ["Figma", "Design Systems", "Framer Motion", "3D Web", "Animations", "Conversion Design"],
    gradient: "from-emerald-400 to-cyan-500",
  },
];

export interface ProjectItem {
  id: string;
  number: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  outcomes: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  primaryImage: string;
  secondaryImages: string[];
  gradient: string;
}

export const featuredProjects: ProjectItem[] = [
  {
    id: "pour-play",
    number: "01",
    category: "E-COMMERCE // HOSPITALITY",
    title: "POUR & PLAY COFFEE ROASTERS",
    tagline: "Global Specialty Coffee Roasters & Franchise Platform",
    description:
      "A cinematic, immersive website for a global specialty coffee brand. Features rich parallax scrolling, an interactive coffee finder, franchise inquiry forms, and a premium visual identity that communicates luxury craftsmanship.",
    outcomes: [
      "Immersive parallax landing with sub-2s load time",
      "Interactive coffee discovery engine with flavor profiles",
      "Franchise lead capture with automated routing",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase"],
    liveUrl: "https://pour-play-coffee-roasters.vercel.app",
    githubUrl: "https://github.com/wanjikudigitaldesignservices-cyber",
    primaryImage: "/projects/pour-play.png",
    secondaryImages: [],
    gradient: "from-amber-500/20 via-orange-500/20 to-transparent",
  },
  {
    id: "omnipos",
    number: "02",
    category: "SaaS // BUSINESS MANAGEMENT",
    title: "OMNIPOS — UNIVERSAL SME POS & ERP",
    tagline: "Complete Point of Sale & Enterprise Resource Planning for SMEs",
    description:
      "A comprehensive cloud POS and ERP system serving multiple business verticals — retail, restaurants, services. Features real-time inventory, staff management, receipt printing, sales analytics, and M-Pesa settlement.",
    outcomes: [
      "Multi-vertical POS serving retail, food & service businesses",
      "Real-time inventory sync with low-stock alerts",
      "Integrated M-Pesa payment reconciliation & daily reports",
    ],
    techStack: ["React", "TypeScript", "Supabase", "PostgreSQL", "M-Pesa API", "Tailwind CSS"],
    liveUrl: "https://omnipos-rose.vercel.app",
    githubUrl: "https://github.com/wanjikudigitaldesignservices-cyber",
    primaryImage: "/projects/omnipos.png",
    secondaryImages: [],
    gradient: "from-cyan-500/20 via-blue-500/20 to-transparent",
  },
  {
    id: "cavemen-barbershop",
    number: "03",
    category: "BUSINESS WEBSITE // LIFESTYLE",
    title: "CAVEMEN BARBERSHOP & GROOMING LOUNGE",
    tagline: "Premium Modern Men's Barbershop Digital Experience",
    description:
      "A dark, masculine, premium website for a high-end barbershop and grooming lounge. Features online booking integration, service menus with pricing, gallery showcases, and a brand identity that exudes confidence and craftsmanship.",
    outcomes: [
      "Online appointment booking with 60% reduction in no-shows",
      "Mobile-first design with 95+ Lighthouse score",
      "Gallery & testimonials driving 3x walk-in increase",
    ],
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Booking API", "Vercel"],
    liveUrl: "https://cavemen-barbershop.vercel.app",
    githubUrl: "https://github.com/wanjikudigitaldesignservices-cyber",
    primaryImage: "/projects/cavemen.png",
    secondaryImages: [],
    gradient: "from-zinc-500/20 via-stone-500/20 to-transparent",
  },
  {
    id: "medcore-hospital",
    number: "04",
    category: "HEALTHCARE // ENTERPRISE",
    title: "MEDCORE HOSPITAL MANAGEMENT",
    tagline: "Premium Healthcare ERP System for Nairobi Hospitals",
    description:
      "A full-featured hospital management platform with patient records, appointment scheduling, billing & invoicing, pharmacy inventory, lab results tracking, and role-based staff dashboards. Built for healthcare compliance and speed.",
    outcomes: [
      "Complete patient lifecycle management from admission to discharge",
      "Pharmacy inventory with expiry tracking & auto-reorder",
      "Role-based access for doctors, nurses, pharmacists & admin",
    ],
    techStack: ["React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Chart.js"],
    liveUrl: "https://hospital-erp-gamma.vercel.app",
    githubUrl: "https://github.com/wanjikudigitaldesignservices-cyber",
    primaryImage: "/projects/medcore.png",
    secondaryImages: [],
    gradient: "from-emerald-500/20 via-teal-500/20 to-transparent",
  },
  {
    id: "quickbill",
    number: "05",
    category: "FINTECH // PRODUCTIVITY",
    title: "QUICKBILL INVOICE ENGINE",
    tagline: "Professional SME & Freelancer Invoice Generator",
    description:
      "A sleek invoicing platform for SMEs and freelancers. Auto-generates professional PDF invoices, tracks payment status, manages client databases, and provides revenue analytics — all in a beautiful, intuitive interface.",
    outcomes: [
      "One-click PDF invoice generation with custom branding",
      "Payment tracking with automated overdue reminders",
      "Client CRM with revenue analytics dashboard",
    ],
    techStack: ["Next.js", "TypeScript", "Supabase", "PDFKit", "Tailwind CSS", "Vercel"],
    liveUrl: "https://quickbill-invoice-generator.vercel.app",
    githubUrl: "https://github.com/wanjikudigitaldesignservices-cyber",
    primaryImage: "/projects/quickbill.png",
    secondaryImages: [],
    gradient: "from-green-500/20 via-emerald-500/20 to-transparent",
  },
  {
    id: "shambani-agrovet",
    number: "06",
    category: "AGRITECH // E-COMMERCE",
    title: "SHAMBANI AGROVET",
    tagline: "Everything Your Farm Needs — Advice You Can Trust",
    description:
      "A full e-commerce platform for an agricultural supplies retailer. Features product catalog with categories, cart system, farm advisory content, delivery tracking, and M-Pesa checkout — connecting rural farmers to quality inputs.",
    outcomes: [
      "Complete product catalog with 500+ agricultural supplies",
      "M-Pesa checkout with order confirmation via SMS",
      "Farm advisory blog driving organic traffic & trust",
    ],
    techStack: ["Next.js", "TypeScript", "Supabase", "M-Pesa", "Tailwind CSS", "Vercel"],
    liveUrl: "https://shambani-agrovet.vercel.app",
    githubUrl: "https://github.com/wanjikudigitaldesignservices-cyber",
    primaryImage: "/projects/shambani.png",
    secondaryImages: [],
    gradient: "from-lime-500/20 via-green-500/20 to-transparent",
  },
];

export const marqueeItems = [
  { title: "POUR & PLAY COFFEE", category: "E-COMMERCE", image: "/projects/pour-play.png" },
  { title: "OMNIPOS SYSTEM", category: "SaaS POS & ERP", image: "/projects/omnipos.png" },
  { title: "CAVEMEN BARBERSHOP", category: "BUSINESS WEBSITE", image: "/projects/cavemen.png" },
  { title: "MEDCORE HOSPITAL", category: "HEALTHCARE ERP", image: "/projects/medcore.png" },
  { title: "QUICKBILL INVOICES", category: "FINTECH TOOL", image: "/projects/quickbill.png" },
  { title: "SHAMBANI AGROVET", category: "AGRITECH E-COMMERCE", image: "/projects/shambani.png" },
  { title: "ROSABLU HOTEL", category: "HOSPITALITY", image: "/projects/rosablu.png" },
  { title: "EDUPULSE SCHOOL", category: "EDTECH PLATFORM", image: "/projects/edupulse.png" },
  { title: "RENTSYNC RMS", category: "PROPERTY MGMT", image: "/projects/rentsync.png" },
  { title: "SKILLFORGE LMS", category: "ONLINE COURSES", image: "/projects/skillforge.png" },
  { title: "ZAPORDER", category: "WHATSAPP ORDERING", image: "/projects/zaporder.png" },
  { title: "ESTATEFLOW", category: "REAL ESTATE", image: "/projects/estateflow.png" },
  { title: "BOOKEASY", category: "BOOKING ENGINE", image: "/projects/bookeasy.png" },
  { title: "ROCKPORT POLICE", category: "GOV TECH", image: "/projects/rockport.png" },
  { title: "PRIMEHAVEN", category: "LUXURY REAL ESTATE", image: "/projects/primehaven.png" },
  { title: "VERDELOOP", category: "WASTE MANAGEMENT", image: "/projects/verdeloop.png" },
];

export const techStackCategories = [
  {
    category: "Frontend & UI",
    skills: [
      "Next.js (App Router)",
      "React 19/18",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion",
      "HTML5 / CSS3",
    ],
  },
  {
    category: "Backend & Databases",
    skills: [
      "Node.js",
      "Express",
      "Supabase (PostgreSQL)",
      "REST APIs",
      "Prisma ORM",
      "Firebase",
    ],
  },
  {
    category: "Payments & Integration",
    skills: [
      "M-Pesa API",
      "Stripe",
      "WhatsApp Business API",
      "SMS Gateways",
      "Google Maps",
      "OAuth / JWT Auth",
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      "Vercel Hosting",
      "Git / GitHub",
      "Figma",
      "Docker",
      "CI/CD Pipelines",
      "Cloudflare",
    ],
  },
];
