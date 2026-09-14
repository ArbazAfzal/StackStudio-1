export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  tech: string[];
  gradient: string;
  tags: string[];
  /** Placeholder — replace with your own project image later */
  image: string;
}

export const projects: Project[] = [
  {
    slug: "atlas-saas-dashboard",
    title: "Atlas SaaS Dashboard",
    category: "SaaS",
    year: "2025",
    description:
      "A multi-tenant analytics dashboard that turns raw product events into clear, actionable insights for non-technical operators.",
    challenge:
      "The client needed a scalable SaaS frontend with role-based access, real-time charts, and a billing flow — without a large in-house engineering team.",
    solution:
      "We built a Next.js + PostgreSQL platform with Stripe subscriptions, an admin panel, and a clean analytics UI, shipped in under three weeks.",
    tech: ["Next.js", "PostgreSQL", "Stripe", "Tailwind"],
    tags: ["Next.js", "SaaS", "Stripe"],
    gradient: "from-[#1b1740] via-[#120f2e] to-[#0a0a0f]",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80",
  },
  {
    slug: "helix-ai-agent",
    title: "Helix AI Agent",
    category: "AI",
    year: "2025",
    description:
      "An autonomous support agent that triages tickets, drafts replies, and triggers workflows across the client's helpdesk and CRM.",
    challenge:
      "Support volume was overwhelming the team, and existing chatbots gave generic, unhelpful answers that hurt customer trust.",
    solution:
      "We built a retrieval-augmented agent on OpenAI and LangChain with human-approval checkpoints, integrated via the client's APIs and Slack.",
    tech: ["Next.js", "OpenAI", "LangChain", "Python"],
    tags: ["AI Agent", "LangChain", "RAG"],
    gradient: "from-[#0c2a3a] via-[#0f1f33] to-[#0a0a0f]",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=800&fit=crop&q=80",
  },
  {
    slug: "lumen-shopify-store",
    title: "Lumen Shopify Store",
    category: "E-Commerce",
    year: "2024",
    description:
      "A conversion-focused Shopify storefront for a D2C skincare brand, with custom theme sections and a streamlined checkout.",
    challenge:
      "The legacy store had a high bounce rate on mobile and a confusing checkout that was costing the brand sales.",
    solution:
      "We rebuilt the theme in Liquid with a mobile-first layout, added reviews and upsell apps, and optimized Core Web Vitals above 95.",
    tech: ["Shopify", "Liquid", "Klaviyo"],
    tags: ["Shopify", "D2C", "CRO"],
    gradient: "from-[#241a4a] via-[#161232] to-[#0a0a0f]",
    image:
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1200&h=800&fit=crop&q=80",
  },
  {
    slug: "forge-mern-marketplace",
    title: "Forge MERN Marketplace",
    category: "Marketplace",
    year: "2024",
    description:
      "A two-sided MERN marketplace connecting local service providers with customers, with real-time messaging and payments.",
    challenge:
      "The founder needed a working marketplace MVP quickly to validate demand before raising a seed round.",
    solution:
      "We delivered a MongoDB, Express, React, and Node.js app with Socket.io chat, Stripe Connect payouts, and an admin moderation panel.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    tags: ["MERN", "Marketplace", "Realtime"],
    gradient: "from-[#1a1740] via-[#131133] to-[#0a0a0f]",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop&q=80",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project | undefined {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return undefined;
  return projects[(index + 1) % projects.length];
}
