"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data";

export function ServicesSection() {
  return (
    <section id="services" className="bg-background px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-10 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
        <motion.p
          className="section-label mb-4"
          style={{ willChange: "transform" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          — WHAT WE DO
        </motion.p>
        <motion.h2
          className="mb-10 max-w-4xl text-center text-4xl font-extrabold italic tracking-tight sm:text-5xl md:text-6xl"
          style={{ willChange: "transform" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          Software &amp; AI <span className="text-gradient not-italic">Services</span>, End to End
        </motion.h2>
        </div>

        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.article
              key={service.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-accent/30 hover-glow"
              style={{ willChange: "transform" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
            <div className="relative aspect-[16/10] overflow-hidden bg-bg-secondary">
              <Image
                src={service.image.src}
                alt={service.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="mb-1.5 text-base font-semibold leading-snug">{service.title}</h3>
              <p className="line-clamp-2 text-sm leading-relaxed text-muted">{service.description}</p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-3 inline-flex w-fit items-center gap-1 text-sm font-medium text-accent transition-transform hover:gap-2"
              >
                Learn more <span aria-hidden>→</span>
              </Link>
            </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
