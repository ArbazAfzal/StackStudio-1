"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { pricingPlans } from "@/lib/data";
import { cn } from "@/lib/utils";

const PriceDisplay = ({ price, isMonthly }: { price: number; isMonthly: boolean }) => (
  <AnimatePresence mode="wait">
    <motion.span
      key={price}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="inline-block"
    >
      ${price}
      {isMonthly && <span className="text-3xl text-muted">/mo</span>}
    </motion.span>
  </AnimatePresence>
);

export function PricingPlansSection() {
  const [isMonthly, setIsMonthly] = useState(false);
  const currentPlans = isMonthly ? pricingPlans.monthly : pricingPlans.oneTime;

  return (
    <section id="pricing" className="bg-black px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 lg:py-32 overflow-hidden">
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
          className="text-muted text-lg mb-12"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          No hidden fees. No hourly billing. Pick a plan and let&apos;s build.
        </motion.p>

        {/* Toggle */}
        <motion.div
          className="relative mx-auto mb-16 flex w-max rounded-full border border-white/10 p-1"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={() => setIsMonthly(false)}
            className={cn(
              "relative z-10 rounded-full px-5 py-2 text-sm font-medium transition-colors",
              !isMonthly ? "text-black" : "text-white/70 hover:text-white",
            )}
            data-cursor="hover"
          >
            One-Time Projects
          </button>
          <button
            onClick={() => setIsMonthly(true)}
            className={cn(
              "relative z-10 rounded-full px-5 py-2 text-sm font-medium transition-colors",
              isMonthly ? "text-black" : "text-white/70 hover:text-white",
            )}
            data-cursor="hover"
          >
            Monthly Retainer
          </button>
          <motion.div
            layout
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
            className={cn(
              "absolute inset-y-1 w-[calc(50%-4px)] rounded-full bg-accent",
              isMonthly ? "left-1/2 ml-0.5" : "left-1",
            )}
          />
        </motion.div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-none grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={cn(
                "relative rounded-2xl border border-white/5 bg-surface p-8 text-left transition-all duration-300 hover:-translate-y-2 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(180,244,0,0.08)]",
                plan.popular && "border-accent/40 shadow-[0_0_40px_rgba(180,244,0,0.08)] lg:scale-[1.02]",
              )}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              {plan.popular && (
                <span className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase text-black">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted">{plan.tagline}</p>
              <div className="mt-6">
                <p className="text-xs text-muted">Starting from</p>
                <div className="text-5xl font-bold text-white mt-1">
                  <PriceDisplay price={plan.price} isMonthly={isMonthly} />
                </div>
              </div>

              <div className="gradient-line my-8" />

              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-white/80">
                    <Check size={18} className="shrink-0 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <MagneticButton className="w-full">
                  <Link
                    href="#contact"
                    data-cursor="hover"
                    className={cn(
                      "group flex w-full items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.02]",
                      plan.buttonVariant === "ghost"
                        ? "border border-white/20 text-white hover:border-accent/50 hover:text-accent"
                        : "bg-accent text-black hover:shadow-[0_0_30px_rgba(200,255,0,0.4)]",
                    )}
                  >
                    {plan.buttonText}
                  </Link>
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </div>

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
                href="#contact"
                data-cursor="hover"
                className="group rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(200,255,0,0.4)]"
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