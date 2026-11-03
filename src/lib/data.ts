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
    speech: "We build digital empires that scale effortlessly.",
    subtitle: "Focus mode: High-throughput architecture & clean code.",
    accentColor: "#38bdf8",
  },
  {
    id: "wink",
    label: "Wink",
    emoji: "😉",
    image: "/avatar/wink.webp",
    speech: "Got a bold digital product in mind? Let's make it real.",
    subtitle: "Charismatic execution with zero fluff.",
    accentColor: "#a855f7",
  },
  {
    id: "inspired",
    label: "Inspired",
    emoji: "🚀",
    image: "/avatar/lookup.webp",
    speech: "Designing next-generation AI workflows & immersive web systems.",
    subtitle: "Looking up: Architecting tomorrow's digital landscapes.",
    accentColor: "#ec4899",
  },
  {
    id: "zen",
    label: "Zen",
    emoji: "😌",
    image: "/avatar/zen.webp",
    speech: "Calm, resilient systems that never crash under load.",
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
  role: "Full-Stack Software Engineer & AI Systems Architect",
  founderTitle: "Founder & Lead Architect at LQD Creative",
  phone: "0740396075",
  phoneFormatted: "+254 740 396 075",
  phoneHref: "tel:+254740396075",
  whatsappHref: "https://wa.me/254740396075?text=Hi%20Reuben,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project!",
  email: "wanjikudigitaldesignservices@gmail.com",
  emailHref: "mailto:wanjikudigitaldesignservices@gmail.com",
  location: "Nairobi, Kenya",
  availability: "Available for Q4/Q1 Projects & Consulting",
  heroTagline: "CRAFTING HIGH-IMPACT DIGITAL EXPERIENCES, AI AUTOMATION & VISIONARY SOFTWARE ARCHITECTURES",
  bio: `Hey, I'm Reuben Kimani. A creative technologist, full-stack software engineer, and AI architect based in Nairobi, Kenya.

I bridge deep backend engineering (distributed systems, network infrastructure, real-time databases) with world-class interactive frontends and AI automation. Whether designing hardened command operating systems, automated captive hotspot networks, or luxury digital brand systems through LQD Creative, I build software that commands authority, scales reliably, and converts attention into revenue.`,
  experienceYears: "5+",
  projectsCompleted: "35+",
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
    title: "FULL-STACK & WEB ARCHITECTURE",
    description:
      "Enterprise-grade web applications engineered with Next.js, React, TypeScript, and modern distributed cloud backends. Blistering load speeds, atomic state, and fluid reactive UI.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "REST / GraphQL"],
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    number: "02",
    title: "AI AUTOMATIONS & AGENTIC WORKFLOWS",
    description:
      "Autonomous multi-agent pipelines, intelligent CRM synchronization, custom LLM bots, and end-to-end task automation that replace hundreds of manual operational hours.",
    tags: ["AI SDK", "OpenAI / Claude", "Supabase Vectors", "Make.com", "LangChain", "Autonomous Agents"],
    gradient: "from-purple-400 to-pink-500",
  },
  {
    number: "03",
    title: "BRAND ARCHITECTURE & CREATIVE TECH",
    description:
      "Digital empire systems for ambitious companies. 3D interactive web experiences, high-conversion landing journeys, visual identities, and design engineering that command premium market value.",
    tags: ["3D Web / Three.js", "Figma", "Design Systems", "Conversion Architecture", "Motion Design"],
    gradient: "from-pink-400 to-rose-500",
  },
  {
    number: "04",
    title: "CLOUD, NETWORKS & CYBER INFRASTRUCTURE",
    description:
      "Cisco routing & switching architectures, MikroTik captive hotspot billing networks, Supabase PostgreSQL with strict RLS policies, and bulletproof CI/CD deployments on Vercel.",
    tags: ["Supabase PostgreSQL", "Vercel", "MikroTik RouterOS", "Cisco Networking", "Security RLS", "Docker"],
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
    id: "safenet-os",
    number: "01",
    category: "COMMAND & SECURITY OS // FULL-STACK",
    title: "PROJECT SAFENET OS",
    tagline: "Distributed Cyber Threat Intelligence & Emergency Telemetry System",
    description:
      "A real-time command dashboard and field security operating platform. Features live geospatial Leaflet heatmaps, cluster telemetry, biometric authentication through Capacitor mobile bridge, and instant Supabase Postgres real-time synchronization.",
    outcomes: [
      "Sub-15ms telemetry synchronization via Supabase Realtime",
      "Interactive geospatial heatmaps clustering 1,400+ active edge nodes",
      "Unified desktop dashboard and mobile cross-platform Capacitor runtime",
    ],
    techStack: ["React 18", "TypeScript", "Vite", "Supabase", "Leaflet", "Capacitor", "Tailwind CSS"],
    liveUrl: "https://safenet-os.vercel.app",
    githubUrl: "https://github.com/wanjikudigitaldesignservices-cyber",
    primaryImage: "/projects/safenet-os.svg",
    secondaryImages: ["/projects/axis-projects.svg", "/projects/kilimo-ops.svg"],
    gradient: "from-cyan-500/20 via-blue-500/20 to-transparent",
  },
  {
    id: "vibefi",
    number: "02",
    category: "NETWORK INFRASTRUCTURE // CAPTIVE PORTAL",
    title: "VIBEFI HOTSPOT PORTAL",
    tagline: "High-Speed WiFi Billing & MikroTik Automated Captive Authentication",
    description:
      "A modern, lightning-fast captive portal system tailored for commercial WiFi hotspots, ISP deployments, and hospitality venues. Integrates MD5 credential hashing, dynamic MikroTik RouterOS redirection, automated M-Pesa voucher settlement, and cache optimization.",
    outcomes: [
      "Zero-latency captive redirection compatible with MikroTik RouterOS 7.x",
      "Automated voucher redemption engine with MD5 security tokens",
      "High-conversion mobile responsive authentication flow with zero drop-off",
    ],
    techStack: ["MikroTik RouterOS", "JavaScript", "Tailwind CSS", "M-Pesa API", "MD5 Security"],
    liveUrl: "https://vibefi-portal.vercel.app",
    githubUrl: "https://github.com/wanjikudigitaldesignservices-cyber",
    primaryImage: "/projects/vibefi-portal.svg",
    secondaryImages: ["/projects/atelier-stay.svg", "/projects/bahari-house.svg"],
    gradient: "from-indigo-500/20 via-purple-500/20 to-transparent",
  },
  {
    id: "cisco-trainer-portal",
    number: "03",
    category: "EDTECH ENTERPRISE // DATA PIPELINE",
    title: "CISCO ACADEMY PROGRESS PORTAL",
    tagline: "Enterprise Cohort Tracking, Automated Grading & CCNA Certification Pipeline",
    description:
      "Production enterprise training progress management platform built for Cisco Academy instructors. Handles complex student module tracking, Packet Tracer lab scoring audits, automated PDF certificate generation with PDFKit, and PostgreSQL reporting.",
    outcomes: [
      "Automated progress metrics across 480+ active cohort trainees",
      "Dynamic PDF certificate generation and secure verification hashing",
      "Comprehensive admin surveillance and curriculum mastery analytics",
    ],
    techStack: ["Node.js", "Express", "PostgreSQL", "JWT Auth", "PDFKit", "CSV Pipeline", "Docker"],
    liveUrl: "https://cisco-trainer-portal.vercel.app",
    githubUrl: "https://github.com/wanjikudigitaldesignservices-cyber",
    primaryImage: "/projects/cisco-trainer.svg",
    secondaryImages: ["/projects/summit-build.svg", "/projects/oakwell-advisory.svg"],
    gradient: "from-sky-500/20 via-teal-500/20 to-transparent",
  },
  {
    id: "lqd-creatives",
    number: "04",
    category: "STUDIO & BRAND ARCHITECTURE // AGENCY",
    title: "LQD CREATIVE AGENCY PLATFORM",
    tagline: "High-Converting Digital Empires for Ambitious African & Global Enterprises",
    description:
      "Flagship digital home of LQD Creative. Built to transform growing SMEs with cinematic web design, brand systems, and automated AI lead routing. Achieves 100/100 Lighthouse performance, ultra-smooth micro-interactions, and instant enquiry capture.",
    outcomes: [
      "100/100 Lighthouse performance with Core Web Vitals excellence",
      "Integrated Supabase lead CRM routing enquiries directly to WhatsApp & email",
      "+340% average lead conversion lift across client deployments",
    ],
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase", "Vercel"],
    liveUrl: "https://lqdcreative.co",
    githubUrl: "https://github.com/wanjikudigitaldesignservices-cyber",
    primaryImage: "/projects/lqd-empire.svg",
    secondaryImages: ["/projects/atelier-stay.svg", "/projects/axis-projects.svg"],
    gradient: "from-pink-500/20 via-rose-500/20 to-transparent",
  },
];

export const marqueeItems = [
  { title: "PROJECT SAFENET OS", category: "CYBER INFRASTRUCTURE", image: "/projects/safenet-os.svg" },
  { title: "VIBEFI HOTSPOT OS", category: "ISP & NETWORK TECH", image: "/projects/vibefi-portal.svg" },
  { title: "CISCO ACADEMY PORTAL", category: "ENTERPRISE EDTECH", image: "/projects/cisco-trainer.svg" },
  { title: "LQD CREATIVE EMPIRE", category: "BRAND & WEB DESIGN", image: "/projects/lqd-empire.svg" },
  { title: "ATELIER BOUTIQUE STAY", category: "HOSPITALITY UX", image: "/projects/atelier-stay.svg" },
  { title: "AXIS PROJECTS", category: "CONSTRUCTION TECH", image: "/projects/axis-projects.svg" },
  { title: "KILIMO OPS AI", category: "AGRITECH AUTOMATION", image: "/projects/kilimo-ops.svg" },
  { title: "BAHARI HOUSE", category: "LUXURY REAL ESTATE", image: "/projects/bahari-house.svg" },
];

export const techStackCategories = [
  {
    category: "Frontend & UI",
    skills: ["Next.js (App Router)", "React 19/18", "TypeScript", "Tailwind CSS v4", "Framer Motion", "HTML5 Canvas"],
  },
  {
    category: "Backend & Systems",
    skills: ["Node.js", "Express", "Supabase (PostgreSQL)", "REST & GraphQL", "Capacitor Mobile", "Python"],
  },
  {
    category: "Networks & Security",
    skills: ["Cisco CCNA Switching & Routing", "MikroTik RouterOS", "Captive WiFi Billing", "Supabase RLS", "JWT / Biometrics"],
  },
  {
    category: "AI & Automations",
    skills: ["Vercel AI SDK", "Autonomous Agent Workflows", "Prompt Engineering", "Make.com Integrations", "Vector Embeddings"],
  },
];
