import type { MetadataRoute } from "next";
import { servicesDetails } from "@/lib/data";
import { projects } from "@/lib/projects";
import { blogPosts } from "@/lib/data";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/services",
    "/work",
    "/features",
    "/platform",
    "/integrations",
    "/process",
    "/faq",
    "/blog",
    "/pricing",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const serviceRoutes = servicesDetails.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const workRoutes = projects.map((p) => ({
    url: `${SITE_URL}/work/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...workRoutes, ...blogRoutes];
}
