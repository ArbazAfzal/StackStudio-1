"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Layers,
  Database,
  BrainCircuit,
  Bot,
  Cloud,
  LayoutTemplate,
  ShoppingBag,
  PenTool,
  Code,
  Server,
  Layout,
  Zap,
  Shield,
  Users,
  Lock,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  layers: Layers,
  database: Database,
  brainCircuit: BrainCircuit,
  bot: Bot,
  cloud: Cloud,
  layoutTemplate: LayoutTemplate,
  shoppingBag: ShoppingBag,
  penTool: PenTool,
  code: Code,
  server: Server,
  layout: Layout,
  check: Check,
  zap: Zap,
  shield: Shield,
  users: Users,
  lock: Lock,
  lifeBuoy: LifeBuoy,
};

export function Split({
  eyebrow,
  title,
  description,
  bullets,
  image,
  reverse = false,
  cta,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  bullets?: string[];
  image: { src: string; alt: string };
  reverse?: boolean;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="bg-background px-4 py-12 sm:px-6 md:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: reverse ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className={cn(reverse && "lg:order-2")}
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-accent-secondary/5" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: reverse ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className={cn(reverse && "lg:order-1")}
        >
          {eyebrow && <p className="section-label mb-4">{eyebrow}</p>}
          <h2 className="text-3xl font-bold lg:text-4xl">{title}</h2>
          <p className="mt-4 text-muted">{description}</p>
          {bullets && (
            <ul className="mt-6 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-foreground/80">
                  <Check size={18} className="mt-0.5 shrink-0 text-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
          {cta && (
            <Link
              href={cta.href}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] hover:shadow-[0_0_30px_var(--accent-glow)]"
            >
              {cta.label} <ArrowRight size={16} />
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export function FeatureGrid({
  items,
  columns = 3,
}: {
  items: { icon: string; title: string; description: string }[];
  columns?: 2 | 3;
}) {
  return (
    <section className="bg-bg-secondary px-4 py-12 sm:px-6 md:px-8 lg:px-12 lg:py-16">
      <div
        className={cn(
          "mx-auto grid max-w-7xl gap-6",
          columns === 3 ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 md:grid-cols-2",
        )}
      >
        {items.map((item, i) => {
          const Icon = iconMap[item.icon] ?? Layers;
          return (
            <motion.article
              key={item.title}
              className="rounded-2xl border border-border bg-surface p-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % columns) * 0.08 }}
            >
              <div className="mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Icon size={20} />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export function StatRow({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <section className="border-y border-border bg-bg-secondary px-4 py-12 sm:px-6 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-4xl font-bold text-gradient lg:text-5xl">{s.value}</p>
            <p className="mt-2 text-sm text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
