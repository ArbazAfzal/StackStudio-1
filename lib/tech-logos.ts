/** Official brand marks via Simple Icons CDN. */
export function techLogoSrc(name: string): string {
  const slug = TECH_SLUGS[name] ?? slugify(name);
  return `https://cdn.simpleicons.org/${slug}`;
}

/** Boxed brand icons like skillicons.dev (single image, colored box around icon). */
export function skilliconsUrl(name: string): string {
  const slug = TECH_SLUGS[name] ?? slugify(name);
  return `https://skillicons.dev/icons?i=${slug}&theme=dark`;
}

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export const TECH_SLUGS: Record<string, string> = {
  "Next.js": "nextdotjs",
  TypeScript: "typescript",
  "Node.js": "nodedotjs",
  PostgreSQL: "postgresql",
  Prisma: "prisma",
  Tailwind: "tailwindcss",
  "Tailwind CSS": "tailwindcss",
  Vercel: "vercel",
  "GitHub Actions": "githubactions",
  React: "react",
  MongoDB: "mongodb",
  Express: "express",
  "Socket.io": "socketdotio",
  JWT: "jsonwebtokens",
  OpenAI: "openai",
  LangChain: "langchain",
  Pinecone: "pinecone",
  Python: "python",
  FastAPI: "fastapi",
  pgvector: "postgresql",
  Redis: "redis",
  Zapier: "zapier",
  Twilio: "twilio",
  SendGrid: "sendgrid",
  Stripe: "stripe",
  NextAuth: "auth0",
  Resend: "resend",
  PostHog: "posthog",
  "AWS S3": "amazonwebservices",
  WordPress: "wordpress",
  Elementor: "elementor",
  WooCommerce: "woocommerce",
  "Yoast SEO": "yoast",
  PHP: "php",
  MySQL: "mysql",
  Cloudflare: "cloudflare",
  ACF: "wordpress",
  Shopify: "shopify",
  Liquid: "shopify",
  "Dawn Theme": "shopify",
  Klaviyo: "klaviyo",
  "Judge.me": "judgeme",
  Metafields: "shopify",
  "Shopify Apps": "shopify",
  GA4: "googleanalytics",
  "Wix Studio": "wix",
  "Wix CMS": "wix",
  Velo: "wix",
  Figma: "figma",
  GSAP: "gsap",
  "Custom Fonts": "googlefonts",
  Integrations: "webhooks",
  SEO: "googlesearchconsole",
  "Framer Motion": "framer",
  "HTML/CSS": "html5",
  GraphQL: "graphql",
  "REST APIs": "openapiinitiative",
  WebSockets: "socketdotio",
  Anthropic: "anthropic",
  Supabase: "supabase",
  AWS: "amazonwebservices",
  Railway: "railway",
  Docker: "docker",
  Sanity: "sanity",
  Contentful: "contentful",
  JavaScript: "javascript",
  HTML: "html5",
  CSS: "css3",
  Git: "git",
  GitHub: "github",
};

/** Boxed skill icons for the hero marquee (skillicons.dev). */
const SK = (i: string) =>
  `https://skillicons.dev/icons?i=${i}&theme=dark&perline=1`;

export const marqueeTech = [
  { id: "ts", name: "TypeScript", boxedUrl: SK("ts") },
  { id: "js", name: "JavaScript", boxedUrl: SK("js") },
  { id: "react", name: "React", boxedUrl: SK("react") },
  { id: "nextjs", name: "Next.js", boxedUrl: SK("nextjs") },
  { id: "nodejs", name: "Node.js", boxedUrl: SK("nodejs") },
  { id: "python", name: "Python", boxedUrl: SK("python") },
  { id: "mongodb", name: "MongoDB", boxedUrl: SK("mongodb") },
  { id: "postgres", name: "PostgreSQL", boxedUrl: SK("postgres") },
  { id: "mysql", name: "MySQL", boxedUrl: SK("mysql") },
  { id: "redis", name: "Redis", boxedUrl: SK("redis") },
  { id: "express", name: "Express", boxedUrl: SK("express") },
  { id: "tailwind", name: "Tailwind CSS", boxedUrl: SK("tailwind") },
  { id: "prisma", name: "Prisma", boxedUrl: SK("prisma") },
  { id: "graphql", name: "GraphQL", boxedUrl: SK("graphql") },
  { id: "docker", name: "Docker", boxedUrl: SK("docker") },
  { id: "aws", name: "AWS", boxedUrl: SK("aws") },
  { id: "vercel", name: "Vercel", boxedUrl: SK("vercel") },
  { id: "github", name: "GitHub", boxedUrl: SK("github") },
  { id: "git", name: "Git", boxedUrl: SK("git") },
  { id: "wordpress", name: "WordPress", boxedUrl: SK("wordpress") },
  { id: "php", name: "PHP", boxedUrl: SK("php") },
  { id: "html", name: "HTML", boxedUrl: SK("html") },
  { id: "css", name: "CSS", boxedUrl: SK("css") },
  { id: "figma", name: "Figma", boxedUrl: SK("figma") },
  { id: "cloudflare", name: "Cloudflare", boxedUrl: SK("cloudflare") },
  { id: "supabase", name: "Supabase", boxedUrl: SK("supabase") },
] as const;
