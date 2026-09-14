"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Clock, DollarSign } from "lucide-react";
import Link from "next/link";
import { services, servicesDetails } from "@/lib/data";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TechChip } from "@/components/ui/tech-logo";
import { cn } from "@/lib/utils";

export function ServicesDetailSection() {
  const [activeTab, setActiveTab] = useState(servicesDetails[0].title);

  return (
    <section id="services-detail" className="bg-background px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-10 lg:py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.p
          className="section-label mb-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          — WHAT&apos;S INCLUDED
        </motion.p>
        <motion.h2
          className="mb-8 text-3xl font-bold lg:text-5xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Every Service, Fully Explained
        </motion.h2>

        <motion.div
          className="hide-scrollbar flex gap-4 overflow-x-auto border-b border-border pb-3 md:justify-start lg:gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {servicesDetails.map((service) => (
            <button
              key={service.title}
              onClick={() => setActiveTab(service.title)}
              className={cn(
                "relative whitespace-nowrap px-3 py-2 text-base font-medium transition-colors",
                activeTab === service.title ? "text-foreground" : "text-muted hover:text-foreground",
              )}
              data-cursor="hover"
            >
              {service.title}
              {activeTab === service.title && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                />
              )}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {servicesDetails.map((service) => {
            const cover = services.find((s) => s.slug === service.slug)?.image;
            if (activeTab !== service.title) return null;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-8 grid gap-8 lg:grid-cols-[3fr_2fr]"
              >
                <div>
                  {cover && (
                    <div className="relative mb-5 aspect-[21/9] overflow-hidden rounded-2xl border border-border">
                      <Image
                        src={cover.src}
                        alt={cover.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <h3 className="text-2xl font-bold md:text-3xl">{service.title}</h3>
                  <p className="mt-2 text-lg italic text-muted">{service.tagline}</p>
                  <p className="mt-4 leading-relaxed text-foreground/80">{service.description}</p>

                  <p className="section-label mt-6">What you get</p>
                  <ul className="mt-3 space-y-2.5">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-foreground/80">
                        <Check size={18} className="shrink-0 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="section-label mt-6">Perfect for</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {service.useCases.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-sm text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="h-fit rounded-2xl border border-border bg-surface-2 p-5">
                  <p className="mb-3 text-sm uppercase tracking-widest text-muted">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {service.techStack.map((tech) => (
                      <TechChip key={tech.name} name={tech.name} />
                    ))}
                  </div>

                  <div className="gradient-line my-5" />

                  <div className="flex items-center justify-between text-foreground/80">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
                        <Clock size={18} />
                      </span>
                      <span>Delivery Time</span>
                    </div>
                    <span className="font-medium">{service.deliveryTime}</span>
                  </div>

                  <div className="gradient-line my-5" />

                  <div className="flex items-center justify-between text-foreground/80">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
                        <DollarSign size={18} />
                      </span>
                      <span>Typical Budget</span>
                    </div>
                    <span className="font-medium">{service.budget}</span>
                  </div>

                  <div className="mt-6">
                    <MagneticButton className="w-full">
                      <Link
                        href="/contact"
                        data-cursor="hover"
                        className="group flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] hover:shadow-[0_0_30px_var(--accent-glow)]"
                      >
                        Get a Quote →
                      </Link>
                    </MagneticButton>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
