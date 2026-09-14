"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Monitor, LayoutDashboard, Server, LifeBuoy, type LucideIcon } from "lucide-react";
import { platformBreakdown } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  "Client-Facing Website / App": Monitor,
  "Admin Dashboard": LayoutDashboard,
  "API & Backend": Server,
  "Post-Launch Support Panel": LifeBuoy,
};

export function PlatformsSection() {
  return (
    <section className="bg-bg-secondary px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-10 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <motion.p
          className="section-label mb-4"
          style={{ willChange: "transform" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          — WHAT YOU GET
        </motion.p>
        <motion.h2
          className="mb-4 max-w-3xl text-3xl font-bold lg:text-5xl"
          style={{ willChange: "transform" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          One product, every layer covered
        </motion.h2>
        <motion.p
          className="mb-8 max-w-2xl text-muted"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          When Stack Studio ships a build, you receive the full stack — not just a
          pretty front end. Here is what is included by default.
        </motion.p>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {platformBreakdown.map((item, i) => {
            const Icon = iconMap[item.title] ?? Monitor;
            return (
              <motion.article
                key={item.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface"
                style={{ willChange: "transform" }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                  <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-lg border border-accent/25 bg-accent/15 text-accent backdrop-blur">
                    <Icon size={22} />
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
