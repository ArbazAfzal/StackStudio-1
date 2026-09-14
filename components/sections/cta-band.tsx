"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CtaBand() {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-12 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-16 text-center md:px-12 md:py-24"
        >
          <div className="pointer-events-none absolute inset-0 accent-radial" />
          <div className="relative z-10">
            <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Let&apos;s Build Something{" "}
              <span className="text-gradient">Great</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-muted">
              Tell us about your project and get a tailored proposal with a fixed price
              and timeline — usually within 24 hours.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105 hover:shadow-[0_0_30px_var(--accent-glow)]"
              >
                Get a Free Quote →
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-border px-8 py-3.5 text-sm font-medium text-foreground transition-all hover:border-accent/50 hover:text-accent"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
