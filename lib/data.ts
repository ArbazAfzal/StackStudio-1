import { SITE_EMAIL, SOCIAL_LINKS } from "@/lib/site";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "Process", href: "/process" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const marqueeItems = [
  { text: "FULL STACK DEVELOPMENT", accent: true },
  { text: "MERN STACK", accent: false },
  { text: "AI MODEL INTEGRATION", accent: true },
  { text: "AI AGENT CREATION", accent: false },
  { text: "SAAS PLATFORMS", accent: true },
  { text: "WORDPRESS", accent: false },
  { text: "SHOPIFY", accent: true },
  { text: "WIX STUDIO", accent: false },
  { text: "NEXT.JS", accent: true },
  { text: "REACT & NODE", accent: false },
];

export const services = [
  {
    title: "Full Stack Development",
    slug: "full-stack-development",
    icon: "layers",
    description:
      "End-to-end web applications built with modern frameworks — frontend, backend, database, and deployment handled together.",
    image: {
      src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80&auto=format&fit=crop",
      alt: "Full-stack developer writing frontend and backend code on a laptop",
    },
  },
  {
    title: "MERN Stack Development",
    slug: "mern-stack-development",
    icon: "database",
    description:
      "MongoDB, Express, React, and Node.js apps engineered for speed, scalability, and clean architecture.",
    image: {
      src: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80&auto=format&fit=crop",
      alt: "React and Node.js MERN stack application code on a monitor",
    },
  },
  {
    title: "AI Model Integration",
    slug: "ai-model-integration",
    icon: "brainCircuit",
    description:
      "We plug LLMs, embeddings, and vision models into your product with reliable, production-grade pipelines.",
    image: {
      src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80&auto=format&fit=crop",
      alt: "Artificial intelligence model visualization representing LLM integration",
    },
  },
  {
    title: "AI Agent Creation",
    slug: "ai-agent-creation",
    icon: "bot",
    description:
      "Custom autonomous agents that orchestrate tools, APIs, and workflows to automate real business processes.",
    image: {
      src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80&auto=format&fit=crop",
      alt: "Humanoid robot illustrating custom AI agents that automate workflows",
    },
  },
  {
    title: "SaaS-Based Project Development",
    slug: "saas-development",
    icon: "cloud",
    description:
      "Multi-tenant SaaS products with auth, billing, dashboards, and admin panels — from MVP to scale.",
    image: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
      alt: "SaaS analytics dashboard with charts and subscription metrics",
    },
  },
  {
    title: "WordPress Development",
    slug: "wordpress-development",
    icon: "layoutTemplate",
    description:
      "Fast, SEO-ready WordPress sites and WooCommerce stores built on custom themes and optimized for Core Web Vitals.",
    image: {
      src: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=80&auto=format&fit=crop",
      alt: "Content editor working on a WordPress website and blog layout",
    },
  },
  {
    title: "Shopify Development",
    slug: "shopify-development",
    icon: "shoppingBag",
    description:
      "Conversion-focused Shopify stores with custom themes, app integrations, and optimized checkout flows.",
    image: {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80&auto=format&fit=crop",
      alt: "Online store checkout and shopping bags representing Shopify e-commerce",
    },
  },
  {
    title: "Wix Studio Development",
    slug: "wix-studio-development",
    icon: "penTool",
    description:
      "Design-led Wix Studio sites with custom interactions, CMS structure, and smooth responsive layouts.",
    image: {
      src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80&auto=format&fit=crop",
      alt: "Designer crafting a visual website layout in a studio workspace",
    },
  },
];

export const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 5, prefix: "3–", suffix: "", label: "Days Avg. Delivery" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description: "We learn your goals, scope, and success metrics.",
    icon: "search",
  },
  {
    step: "02",
    title: "Proposal & Planning",
    description: "Wireframes, tech blueprint, and a fixed timeline.",
    icon: "pen",
  },
  {
    step: "03",
    title: "Build & Iterate",
    description: "Development with daily updates and quick revisions.",
    icon: "code",
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "Deployment plus post-launch care and monitoring.",
    icon: "rocket",
  },
];

export const whyUsPoints = [
  "Fast delivery — typically 3 to 10 days",
  "Fixed, transparent pricing — no surprises",
  "Direct communication — talk to the builders",
  "Modern, scalable tech stack by default",
  "NDA-ready and privacy-first by default",
  "Post-launch support included with every build",
];

export const testimonials = [
  {
    quote:
      "Stack Studio delivered our MVP in 4 days. The quality exceeded what other agencies quoted us 6 weeks for.",
    name: "Sarah Chen",
    role: "Founder",
    company: "Placeholder Co.",
    initials: "SC",
  },
  {
    quote:
      "Incredible attention to detail. Our conversion rate jumped after the redesign and the handoff was seamless.",
    name: "Marcus Webb",
    role: "CEO",
    company: "Placeholder Inc.",
    initials: "MW",
  },
  {
    quote:
      "The AI integration they built saved our team 20 hours a week. Highly recommend working with them.",
    name: "Elena Rodriguez",
    role: "CTO",
    company: "Placeholder Labs",
    initials: "ER",
  },
  {
    quote:
      "Professional, fast, and transparent. The best development partner we have worked with to date.",
    name: "James Okonkwo",
    role: "Product Lead",
    company: "Placeholder SaaS",
    initials: "JO",
  },
];

export const footerNav = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Full Stack Development", href: "/services/full-stack-development" },
    { label: "MERN Stack Development", href: "/services/mern-stack-development" },
    { label: "AI Agent Creation", href: "/services/ai-agent-creation" },
    { label: "SaaS Development", href: "/services/saas-development" },
    { label: "Shopify Development", href: "/services/shopify-development" },
    { label: "WordPress Development", href: "/services/wordpress-development" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/work" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
  connect: [
    { label: SITE_EMAIL, href: `mailto:${SITE_EMAIL}` },
    { label: "LinkedIn", href: SOCIAL_LINKS.linkedin },
    { label: "GitHub", href: SOCIAL_LINKS.github },
    { label: "Twitter / X", href: SOCIAL_LINKS.twitter },
  ],
  resources: [
    { label: "Features", href: "/features" },
    { label: "Platform", href: "/platform" },
    { label: "Integrations", href: "/integrations" },
    { label: "Process", href: "/process" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
  ],
};

export const socialLinks = [
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin },
  { label: "GitHub", href: SOCIAL_LINKS.github },
  { label: "Twitter", href: SOCIAL_LINKS.twitter },
  { label: "Instagram", href: SOCIAL_LINKS.instagram },
];

export const servicesDetails = [
  {
    title: "Full Stack Development",
    slug: "full-stack-development",
    mainIcon: "Layers",
    tagline: "One team for frontend, backend & everything between",
    description:
      "We design and build complete web applications where the interface, API, database, and infrastructure are engineered as a single coherent system. You get a fast, reliable product without the overhead of coordinating multiple vendors — and a clean codebase your team can own and extend.",
    deliverables: [
      "Responsive frontend with a reusable component library",
      "REST or GraphQL API built on Node.js / Next.js",
      "Relational or NoSQL database design and indexing",
      "Authentication, roles, and secure session handling",
      "CI/CD pipeline with automated testing",
      "Cloud deployment (Vercel, AWS, or Railway)",
      "Full source code and documentation handoff",
      "30 days of post-launch support",
    ],
    useCases: ["Web Apps", "Internal Tools", "Customer Portals"],
    techStack: [
      { name: "Next.js", icon: "Code" },
      { name: "TypeScript", icon: "Code" },
      { name: "Node.js", icon: "Server" },
      { name: "PostgreSQL", icon: "Database" },
      { name: "Prisma", icon: "Database" },
      { name: "Tailwind", icon: "Brush" },
      { name: "Vercel", icon: "Cloud" },
      { name: "GitHub Actions", icon: "GitBranch" },
    ],
    deliveryTime: "7–14 Business Days",
    budget: "$1,000 – $6,000",
  },
  {
    title: "MERN Stack Development",
    slug: "mern-stack-development",
    mainIcon: "Database",
    tagline: "Full-stack JavaScript, end to end",
    description:
      "We build robust applications with MongoDB, Express, React, and Node.js. From REST APIs to real-time dashboards, MERN lets us move fast while keeping the architecture clean and easy to scale as your user base grows.",
    deliverables: [
      "React frontend with a reusable component library",
      "Node.js + Express REST API or GraphQL backend",
      "MongoDB schema design and performance tuning",
      "JWT authentication and role-based access control",
      "Real-time features with Socket.io where needed",
      "Deployment on Vercel, Railway, or AWS",
      "Full source code and documentation handoff",
      "30 days of post-launch support",
    ],
    useCases: ["SaaS MVPs", "Internal Tools", "Customer Portals"],
    techStack: [
      { name: "React", icon: "Code" },
      { name: "Node.js", icon: "Server" },
      { name: "MongoDB", icon: "Database" },
      { name: "Express", icon: "Cloud" },
      { name: "Socket.io", icon: "Network" },
      { name: "JWT", icon: "Shield" },
      { name: "Vercel", icon: "Cloud" },
      { name: "Tailwind", icon: "Brush" },
    ],
    deliveryTime: "7–14 Business Days",
    budget: "$1,000 – $6,000",
  },
  {
    title: "AI Model Integration",
    slug: "ai-model-integration",
    mainIcon: "BrainCircuit",
    tagline: "Bring LLMs and ML into your product",
    description:
      "We integrate large language models, embedding search, and vision models into your existing apps — with reliable prompt chains, retrieval (RAG), guardrails, and evaluation so the AI behaves predictably in production rather than hallucinating.",
    deliverables: [
      "LLM integration (OpenAI, Anthropic, or open-source)",
      "Retrieval-Augmented Generation (RAG) pipelines",
      "Vector database setup (Pinecone, pgvector, Qdrant)",
      "Prompt engineering and evaluation harness",
      "Streaming responses and function calling",
      "Usage monitoring, logging, and cost controls",
      "Fallback and moderation guardrails",
      "30 days of post-launch support",
    ],
    useCases: ["Chat Assistants", "Search & RAG", "Content Automation"],
    techStack: [
      { name: "OpenAI", icon: "Brain" },
      { name: "LangChain", icon: "Chain" },
      { name: "Pinecone", icon: "Database" },
      { name: "Python", icon: "Code" },
      { name: "FastAPI", icon: "Zap" },
      { name: "Next.js", icon: "Code" },
      { name: "pgvector", icon: "Database" },
      { name: "Redis", icon: "Database" },
    ],
    deliveryTime: "7–12 Business Days",
    budget: "$1,500 – $8,000",
  },
  {
    title: "AI Agent Creation",
    slug: "ai-agent-creation",
    mainIcon: "Bot",
    tagline: "Autonomous agents that get work done",
    description:
      "We design and build custom AI agents that orchestrate multiple tools, APIs, and data sources to complete multi-step tasks — from customer support automation to back-office workflows — with human-in-the-loop checkpoints where it matters.",
    deliverables: [
      "Custom workflow agents tailored to your process",
      "LLM / RAG integration for reasoning over your data",
      "Automation pipelines connecting your SaaS tools",
      "Multi-tool orchestration (email, CRM, DB, APIs)",
      "Human approval steps and audit logging",
      "Monitoring dashboards and error alerts",
      "Ongoing agent tuning and monitoring",
      "30 days of post-launch support",
    ],
    useCases: ["Support Automation", "Lead Qualification", "Ops Workflows"],
    techStack: [
      { name: "OpenAI", icon: "Brain" },
      { name: "LangChain", icon: "Chain" },
      { name: "Python", icon: "Code" },
      { name: "Zapier", icon: "Zap" },
      { name: "Twilio", icon: "MessageSquare" },
      { name: "SendGrid", icon: "Mail" },
      { name: "Node.js", icon: "Server" },
      { name: "Next.js", icon: "Code" },
    ],
    deliveryTime: "10–18 Business Days",
    budget: "$2,000 – $10,000",
  },
  {
    title: "SaaS-Based Project Development",
    slug: "saas-development",
    mainIcon: "Cloud",
    tagline: "From idea to paying customers",
    description:
      "We build complete Software-as-a-Service products — multi-tenant architecture, subscription billing, user and admin dashboards, and everything in between — so you can focus on growth while we handle the engineering.",
    deliverables: [
      "Multi-tenant SaaS architecture",
      "Stripe subscription billing integration",
      "Email, Google, and GitHub OAuth authentication",
      "Customer dashboard plus admin panel",
      "Plan-based feature gating and usage limits",
      "Email notifications (Resend or Nodemailer)",
      "Landing and pricing pages included",
      "Analytics dashboard (PostHog or custom)",
    ],
    useCases: ["B2B Tools", "Marketplaces", "Subscription Products"],
    techStack: [
      { name: "Next.js", icon: "Code" },
      { name: "Stripe", icon: "DollarSign" },
      { name: "Prisma", icon: "Database" },
      { name: "PostgreSQL", icon: "Database" },
      { name: "NextAuth", icon: "Shield" },
      { name: "Resend", icon: "Mail" },
      { name: "PostHog", icon: "BarChart2" },
      { name: "AWS S3", icon: "Cloud" },
    ],
    deliveryTime: "14–28 Business Days",
    budget: "$3,000 – $15,000",
  },
  {
    title: "WordPress Development",
    slug: "wordpress-development",
    mainIcon: "LayoutTemplate",
    tagline: "Websites that perform and are easy to manage",
    description:
      "Custom WordPress websites built with performance, SEO, and scalability in mind. We build from scratch using custom themes or premium page builders — no bloated templates — and optimize every site for Core Web Vitals.",
    deliverables: [
      "Custom WordPress theme or Elementor Pro build",
      "WooCommerce setup where needed",
      "On-page SEO (Yoast or RankMath)",
      "Page-speed optimization (90+ Lighthouse)",
      "Forms, newsletters, and third-party integrations",
      "Hosting setup and migration",
      "Content-management training video",
      "30 days of free maintenance",
    ],
    useCases: ["Business Sites", "Blogs", "WooCommerce Stores"],
    techStack: [
      { name: "WordPress", icon: "Layout" },
      { name: "Elementor", icon: "Palette" },
      { name: "WooCommerce", icon: "ShoppingCart" },
      { name: "Yoast SEO", icon: "TrendingUp" },
      { name: "PHP", icon: "Code" },
      { name: "MySQL", icon: "Database" },
      { name: "Cloudflare", icon: "Cloud" },
      { name: "ACF", icon: "SquareStack" },
    ],
    deliveryTime: "5–10 Business Days",
    budget: "$500 – $4,000",
  },
  {
    title: "Shopify Development",
    slug: "shopify-development",
    mainIcon: "ShoppingBag",
    tagline: "E-commerce stores built to convert",
    description:
      "Custom Shopify stores designed to maximize conversions and revenue. From custom theme development to complex app integrations, we build stores that look premium and sell — handling setup, payments, and shipping end to end.",
    deliverables: [
      "Custom theme or premium theme customization",
      "Product catalog and collections setup",
      "Payment gateway and shipping configuration",
      "Abandoned-cart recovery setup",
      "Reviews, upsells, and loyalty app integrations",
      "Checkout speed optimization",
      "SEO for product and collection pages",
      "Mobile-first responsive design",
    ],
    useCases: ["D2C Brands", "Dropshipping", "Physical Products"],
    techStack: [
      { name: "Shopify", icon: "ShoppingCart" },
      { name: "Liquid", icon: "Code" },
      { name: "Dawn Theme", icon: "Layout" },
      { name: "Klaviyo", icon: "Mail" },
      { name: "Judge.me", icon: "Star" },
      { name: "Metafields", icon: "Database" },
      { name: "Shopify Apps", icon: "Package" },
      { name: "GA4", icon: "BarChart2" },
    ],
    deliveryTime: "5–9 Business Days",
    budget: "$600 – $5,000",
  },
  {
    title: "Wix Studio Development",
    slug: "wix-studio-development",
    mainIcon: "PenTool",
    tagline: "Design-led sites with studio-grade motion",
    description:
      "We craft Wix Studio websites with custom interactions, structured CMS collections, and smooth responsive layouts. Ideal for brands that want a polished, design-forward presence without compromising on performance or editability.",
    deliverables: [
      "Custom Wix Studio design system and layout",
      "CMS collections for blogs, teams, and portfolios",
      "Scroll and hover interactions with smooth motion",
      "Responsive breakpoints for mobile and desktop",
      "Third-party embeds and form integrations",
      "On-page SEO and metadata configuration",
      "Accessibility and focus-state pass",
      "Editor training and 30 days support",
    ],
    useCases: ["Brand Sites", "Agencies", "Portfolios"],
    techStack: [
      { name: "Wix Studio", icon: "Layout" },
      { name: "Wix CMS", icon: "FileText" },
      { name: "Velo", icon: "Code" },
      { name: "Figma", icon: "Palette" },
      { name: "GSAP", icon: "Zap" },
      { name: "Custom Fonts", icon: "Brush" },
      { name: "Integrations", icon: "Network" },
      { name: "SEO", icon: "TrendingUp" },
    ],
    deliveryTime: "5–9 Business Days",
    budget: "$500 – $4,000",
  },
];

export const pricingTiers = [
  {
    name: "Starter",
    tagline: "For small businesses & MVPs",
    price: 499,
    priceNote: "one-time",
    popular: false,
    cta: { label: "Get Started", href: "/contact" },
    features: [
      "Up to 3 pages or a single landing page",
      "Responsive design (mobile + desktop)",
      "Contact form with email notification",
      "Basic on-page SEO setup",
      "3 rounds of revisions",
      "Delivery in 3–5 business days",
      "14 days post-launch support",
    ],
  },
  {
    name: "Growth",
    tagline: "For scaling businesses",
    price: 1499,
    priceNote: "one-time",
    popular: true,
    cta: { label: "Get Started", href: "/contact" },
    features: [
      "Up to 8 pages or a custom web app",
      "CMS (blog, portfolio, or listings)",
      "Custom animations & interactions",
      "Google Analytics + full SEO setup",
      "Admin dashboard or client portal",
      "5 rounds of revisions",
      "Delivery in 7–12 business days",
      "30 days post-launch support",
      "Source code ownership included",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For large or custom projects",
    price: "Custom" as const,
    priceNote: "contact sales",
    popular: false,
    cta: { label: "Contact Sales", href: "/contact" },
    features: [
      "Full SaaS or multi-product platform",
      "AI integration & agent automation",
      "Dedicated infrastructure & DevOps",
      "Unlimited revisions during build",
      "Priority support & SLA",
      "Custom security & compliance review",
      "Team training & handover",
      "60+ days post-launch support",
    ],
  },
];

export type PricingTier = (typeof pricingTiers)[number];

export const pricingComparison: {
  category: string;
  rows: { label: string; values: [string | boolean, string | boolean, string | boolean] }[];
}[] = [
  {
    category: "Development",
    rows: [
      { label: "Pages / scope", values: ["Up to 3", "Up to 8", "Unlimited"] },
      { label: "Custom web app", values: [false, true, true] },
      { label: "CMS integration", values: [false, true, true] },
      { label: "Admin dashboard", values: [false, true, true] },
      { label: "AI / agent features", values: [false, false, true] },
    ],
  },
  {
    category: "Design",
    rows: [
      { label: "Custom interactions", values: [false, true, true] },
      { label: "Brand design system", values: [false, true, true] },
      { label: "Animations (GSAP/Framer)", values: [false, true, true] },
      { label: "Revisions", values: ["3 rounds", "5 rounds", "Unlimited"] },
    ],
  },
  {
    category: "Support & Maintenance",
    rows: [
      { label: "Post-launch support", values: ["14 days", "30 days", "60+ days"] },
      { label: "Priority SLA", values: [false, false, true] },
      { label: "Source code ownership", values: [true, true, true] },
      { label: "Team training", values: [false, false, true] },
    ],
  },
  {
    category: "Ownership",
    rows: [
      { label: "Hosting / deployment help", values: [true, true, true] },
      { label: "SEO setup", values: ["Basic", "Full", "Full + strategy"] },
      { label: "NDA available", values: [true, true, true] },
      { label: "Dedicated account lead", values: [false, false, true] },
    ],
  },
];

export const faqContent = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most websites and landing pages ship in 3–5 business days. Larger builds like SaaS platforms or full web apps take 10–28 days. We give you a fixed timeline before any work begins, so there are no surprises.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. Every plan includes post-launch support (14–60+ days depending on tier), and we offer monthly retainer options for ongoing feature work, bug fixes, and monitoring.",
  },
  {
    question: "Can you work with our existing codebase?",
    answer:
      "Absolutely. We regularly join existing projects to fix bugs, add features, or redesign on top of your current code. Share the repo and we'll review it for free before quoting.",
  },
  {
    question: "Do I own the source code?",
    answer:
      "100%. Once a project is complete and paid for, you own everything — source code, design files, and assets. We don't retain any rights, and we hand over documentation.",
  },
  {
    question: "What's included in AI Agent development?",
    answer:
      "Custom workflow agents, LLM/RAG integration, automation pipelines connecting your tools, multi-tool orchestration, human approval checkpoints, and ongoing monitoring. We scope the exact agent to your process.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes — we sign NDAs on request for every project. Your idea, data, and business information stay completely confidential throughout the engagement.",
  },
  {
    question: "Which technologies do you build with?",
    answer:
      "Next.js, React, Node.js, and the MERN stack for web; OpenAI, Anthropic, and LangChain for AI; WordPress, Shopify, and Wix Studio for CMS/e-commerce. We choose the stack that fits your goals.",
  },
  {
    question: "How does pricing work?",
    answer:
      "We use fixed, transparent pricing per tier (see the pricing table). Enterprise and custom scopes are quoted after a short discovery call. You always see the full price before we start.",
  },
];

export const techStackCategories = [
  {
    category: "Frontend",
    techs: [
      { name: "Next.js", icon: "Code" },
      { name: "React", icon: "Code" },
      { name: "TypeScript", icon: "Code" },
      { name: "Tailwind CSS", icon: "Brush" },
      { name: "Framer Motion", icon: "Aperture" },
      { name: "GSAP", icon: "Zap" },
      { name: "HTML/CSS", icon: "Code" },
    ],
  },
  {
    category: "Backend",
    techs: [
      { name: "Node.js", icon: "Server" },
      { name: "Python", icon: "Code" },
      { name: "Express", icon: "Cloud" },
      { name: "FastAPI", icon: "Zap" },
      { name: "GraphQL", icon: "Network" },
      { name: "REST APIs", icon: "Network" },
      { name: "WebSockets", icon: "Network" },
    ],
  },
  {
    category: "Databases",
    techs: [
      { name: "PostgreSQL", icon: "Database" },
      { name: "MongoDB", icon: "Database" },
      { name: "MySQL", icon: "Database" },
      { name: "Redis", icon: "Database" },
      { name: "Prisma", icon: "Database" },
      { name: "Supabase", icon: "Database" },
      { name: "Pinecone", icon: "Database" },
    ],
  },
  {
    category: "AI & Integrations",
    techs: [
      { name: "OpenAI", icon: "Brain" },
      { name: "Anthropic", icon: "Brain" },
      { name: "LangChain", icon: "Chain" },
      { name: "Stripe", icon: "DollarSign" },
      { name: "Twilio", icon: "MessageSquare" },
      { name: "SendGrid", icon: "Mail" },
      { name: "Zapier", icon: "Zap" },
    ],
  },
  {
    category: "CMS & E-Commerce",
    techs: [
      { name: "WordPress", icon: "Layout" },
      { name: "Shopify", icon: "ShoppingCart" },
      { name: "WooCommerce", icon: "ShoppingCart" },
      { name: "Wix Studio", icon: "Layout" },
      { name: "Sanity", icon: "FileText" },
      { name: "Contentful", icon: "FileText" },
    ],
  },
  {
    category: "Cloud & DevOps",
    techs: [
      { name: "AWS", icon: "Cloud" },
      { name: "Vercel", icon: "Cloud" },
      { name: "Railway", icon: "Cloud" },
      { name: "Docker", icon: "Cloud" },
      { name: "GitHub Actions", icon: "GitBranch" },
      { name: "Cloudflare", icon: "Cloud" },
    ],
  },
];

export const platformBreakdown = [
  {
    title: "Client-Facing Website / App",
    description:
      "The experience your customers see — fast, accessible, and conversion-focused, built mobile-first with your brand front and center.",
    image: {
      src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80&auto=format&fit=crop",
      alt: "Person using a modern Stack Studio web application on a laptop",
    },
  },
  {
    title: "Admin Dashboard",
    description:
      "A secure control panel for your team: manage content, users, orders, and analytics from one clean interface.",
    image: {
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80&auto=format&fit=crop",
      alt: "Stack Studio admin dashboard showing project metrics on a screen",
    },
  },
  {
    title: "API & Backend",
    description:
      "The engine behind the product — authenticated APIs, databases, automation, and integrations wired for scale.",
    image: {
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80&auto=format&fit=crop",
      alt: "Backend server infrastructure powering Stack Studio APIs",
    },
  },
  {
    title: "Post-Launch Support Panel",
    description:
      "Monitoring, metrics, and update tooling so you can iterate confidently after launch with our team on standby.",
    image: {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80&auto=format&fit=crop",
      alt: "Support team monitoring software performance on screens",
    },
  },
];

export const capabilities = [
  {
    title: "Full-Stack Engineering",
    description:
      "One team owns the frontend, backend, database, and infrastructure — so nothing falls through the cracks.",
    image: {
      src: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1200&q=80&auto=format&fit=crop",
      alt: "Full-stack engineers building software on a workstation",
    },
  },
  {
    title: "AI & Automation",
    description:
      "Model integration, retrieval (RAG), and autonomous agents that remove repetitive work from your team.",
    image: {
      src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80&auto=format&fit=crop",
      alt: "AI network visualization representing intelligent automation",
    },
  },
  {
    title: "Cloud-Native Delivery",
    description:
      "We deploy on Vercel, AWS, and Railway with CI/CD, so releases are safe, fast, and reversible.",
    image: {
      src: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80&auto=format&fit=crop",
      alt: "Cloud infrastructure represented by a purple and blue gradient",
    },
  },
  {
    title: "Conversion-First Design",
    description:
      "Interfaces designed around outcomes — clarity, speed, and a flow that turns visitors into customers.",
    image: {
      src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80&auto=format&fit=crop",
      alt: "Conversion-focused web application interface on a laptop",
    },
  },
  {
    title: "E-Commerce & CMS",
    description:
      "Shopify, WordPress, and Wix Studio builds that are easy for your team to run day to day.",
    image: {
      src: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1200&q=80&auto=format&fit=crop",
      alt: "E-commerce storefront on a tablet representing CMS and Shopify work",
    },
  },
  {
    title: "Ongoing Partnership",
    description:
      "Post-launch support, monitoring, and iterative improvements — we stay invested after launch.",
    image: {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80&auto=format&fit=crop",
      alt: "Team collaborating on post-launch software support",
    },
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: { src: string; alt: string };
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-mern-stack-for-startups",
    title: "Why the MERN Stack Is Still a Smart Choice for Startups in 2026",
    excerpt:
      "A practical look at why MongoDB, Express, React, and Node.js remain one of the fastest ways to ship a scalable product.",
    date: "Aug 18, 2026",
    readTime: "8 min read",
    category: "Engineering",
    image: {
      src: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1200&q=80&auto=format&fit=crop",
      alt: "Developer working on a MERN stack application",
    },
    body: [
      "The MERN stack — MongoDB, Express, React, and Node.js — has been a go-to for startups for years, and for good reason. A single language (JavaScript/TypeScript) across the whole stack means smaller teams can move faster and onboard quicker.",
      "React handles a responsive, component-driven frontend; Node and Express serve a clean API; and MongoDB gives you a flexible schema that evolves with your product. When you need real-time features, Socket.io slots in without a rewrite.",
      "For most MVPs and mid-size products, MERN hits the sweet spot between speed, cost, and scalability. At Stack Studio we pair it with TypeScript, Prisma where helpful, and CI/CD so your first launch is production-grade.",
    ],
  },
  {
    slug: "building-ai-agents-that-work",
    title: "Building AI Agents That Actually Do the Work",
    excerpt:
      "Autonomous agents are more than chatbots. Here is how we design agents that complete multi-step business tasks reliably.",
    date: "Aug 12, 2026",
    readTime: "10 min read",
    category: "AI",
    image: {
      src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80&auto=format&fit=crop",
      alt: "Abstract visualization of an AI agent network",
    },
    body: [
      "An AI agent is a system that can reason, call tools, and take actions toward a goal — not just answer questions. The difference matters: a support agent that triages tickets and drafts replies is far more valuable than a FAQ bot.",
      "We build agents with retrieval (RAG) over your own data, tool calling for email, CRM, and database actions, and human-approval checkpoints for anything irreversible. Guardrails and logging keep behavior predictable.",
      "The result is automation your team trusts: faster response times, fewer manual handoffs, and a system that improves as it runs.",
    ],
  },
  {
    slug: "saas-mvp-to-scale",
    title: "From MVP to Scale: Architecting a SaaS Product the Right Way",
    excerpt:
      "Multi-tenancy, billing, and dashboards from day one — a field guide to building SaaS that grows with you.",
    date: "Aug 5, 2026",
    readTime: "12 min read",
    category: "SaaS",
    image: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
      alt: "SaaS analytics dashboard on a laptop screen",
    },
    body: [
      "Shipping a SaaS MVP is easy; shipping one that scales is the hard part. We start with multi-tenant architecture, Stripe subscriptions, and role-based access so you are not rebuilding the foundation later.",
      "A clean customer dashboard plus an admin panel means you can operate the business from launch, and plan-based feature gating lets you monetize tiers without code changes.",
      "Stack Studio builds SaaS products end to end — from the first landing page to the analytics that tell you what to build next.",
    ],
  },
];

export type ServiceDetail = (typeof servicesDetails)[number];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesDetails.find((s) => s.slug === slug);
}
