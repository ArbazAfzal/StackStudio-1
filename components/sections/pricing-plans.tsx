"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import Link from "next/link";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { pricingTiers, pricingComparison, type PricingTier } from "@/lib/data";
import { cn } from "@/lib/utils";

function TierPrice({ tier }: { tier: PricingTier }) {
  if (tier.price === "Custom") {
    return (
      <div className="text-5xl font-bold text-foreground">
        Custom
      </div>
    );
  }
  return (
    <div className="text-5xl font-bold text-foreground">
      ${tier.price}
      <span className="ml-1 text-base font-medium text-muted">{tier.priceNote}</span>
    </div>
  );
}

function CompareCell({ value }: { value: string | boolean }) {
  if (value === true) {
    return <Check size={18} className="mx-auto text-accent" aria-label="Included" />;
  }
  if (value === false) {
    return <Minus size={18} className="mx-auto text-foreground/30" aria-label="Not included" />;
  }
  return <span className="text-sm text-foreground/80">{value}</span>;
}

export function PricingPlansSection() {
  return (
    <section id="pricing" className="bg-background px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-10 lg:py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl text-center">
        <motion.p
          className="section-label mb-4"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          — PRICING
        </motion.p>
        <motion.h2
          className="mb-5 text-3xl font-bold lg:text-5xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Simple, Transparent Pricing
        </motion.h2>
        <motion.p
          className="text-muted text-lg mb-4"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          No hidden fees. No hourly billing. Pick a plan and let&apos;s build.
        </motion.p>
        <p className="text-xs text-muted/80">
          Prices shown are indicative — final quote is confirmed after a short discovery call.
        </p>

        {/* Pricing Cards */}
        <div className="mx-auto mt-14 grid max-w-none grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pricingTiers.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-2xl border border-border bg-surface p-8 text-left transition-all duration-300 hover:-translate-y-2 hover:border-accent/30 hover:shadow-[0_0_30px_var(--accent-glow)]",
                plan.popular && "border-accent/40 shadow-[0_0_40px_var(--accent-glow)] lg:scale-[1.02]",
              )}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              {plan.popular && (
                <span className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted">{plan.tagline}</p>
              <div className="mt-6">
                <TierPrice tier={plan} />
              </div>

              <div className="gradient-line my-8" />

              <ul className="flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-foreground/80">
                    <Check size={18} className="mt-0.5 shrink-0 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <MagneticButton className="w-full">
                  <Link
                    href={plan.cta.href}
                    data-cursor="hover"
                    className={cn(
                      "group flex w-full items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.02]",
                      plan.popular
                        ? "bg-accent text-white hover:shadow-[0_0_30px_var(--accent-glow)]"
                        : "border border-border text-foreground hover:border-accent/50 hover:text-accent",
                    )}
                  >
                    {plan.cta.label} →
                  </Link>
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-24 max-w-5xl text-left"
        >
          <h3 className="mb-8 text-center text-2xl font-bold">Compare Plans</h3>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-surface">
                  <th className="p-4 text-left font-semibold">Feature</th>
                  {pricingTiers.map((t) => (
                    <th
                      key={t.name}
                      className={cn(
                        "p-4 text-center font-semibold",
                        t.popular && "text-accent",
                      )}
                    >
                      {t.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pricingComparison.map((group) => (
                  <Fragment key={group.category}>
                    <tr className="bg-surface/60">
                      <td
                        colSpan={pricingTiers.length + 1}
                        className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-muted"
                      >
                        {group.category}
                      </td>
                    </tr>
                    {group.rows.map((row) => (
                      <tr key={row.label} className="border-t border-border">
                        <td className="px-4 py-3 text-foreground/80">{row.label}</td>
                        {row.values.map((v, idx) => (
                          <td key={idx} className="px-4 py-3 text-center">
                            <CompareCell value={v} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Custom Quote Banner */}
        <motion.div
          className="mx-auto mt-20 rounded-2xl bg-surface p-8 text-center md:flex md:items-center md:justify-between md:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <p className="text-xl font-semibold">
              Need something custom? Let&apos;s talk about your project.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <MagneticButton>
              <Link
                href="/contact"
                data-cursor="hover"
                className="group rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] hover:shadow-[0_0_30px_var(--accent-glow)]"
              >
                Get Custom Quote →
              </Link>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
