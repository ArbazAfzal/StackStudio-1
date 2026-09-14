"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { contactSchema, type ContactFormData } from "@/lib/schema";
import { socialLinks } from "@/lib/data";

const serviceOptions = [
  "Full Stack Development",
  "MERN Stack Development",
  "AI Model Integration",
  "AI Agent Creation",
  "SaaS-Based Project Development",
  "WordPress Development",
  "Shopify Development",
  "Wix Studio Development",
];

const budgetOptions = ["<$500", "$500–$2k", "$2k–$5k", "$5k+"];

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      setStatus("success");
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-sm text-foreground placeholder:text-muted outline-none transition focus:border-accent/40 focus:ring-1 focus:ring-accent/20";

  return (
    <section id="contact" className="bg-background px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-10 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <motion.p
          className="section-label mb-4"
          style={{ willChange: "transform" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          — GET IN TOUCH
        </motion.p>

        <div className="grid gap-16 flex flex-col lg:grid-cols-2">
          <motion.div
            style={{ willChange: "transform" }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
          >
              <h2 className="text-4xl font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Let&apos;s Build Something{" "}
                <span className="text-accent">Great</span>
              </h2>
              <p className="mt-6 max-w-md text-muted">
                Tell us about your project. We typically respond within 24 hours with a
                tailored proposal and timeline.
              </p>

              <div className="mt-10 space-y-3">
                <a
                  href="mailto:hello@stackstudio.org"
                  className="block text-foreground/80 hover:text-accent transition-colors"
                >
                  hello@stackstudio.org
                </a>
                <div className="flex gap-4 pt-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            style={{ willChange: "transform" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.div custom={0} variants={fieldVariants}>
              <input {...register("name")} placeholder="Full Name *" className={inputClass} />
              {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
            </motion.div>

            <motion.div custom={1} variants={fieldVariants}>
              <input {...register("email")} type="email" placeholder="Email *" className={inputClass} />
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
            </motion.div>

            <motion.div custom={2} variants={fieldVariants}>
              <input {...register("phone")} type="tel" placeholder="Phone (optional)" className={inputClass} />
            </motion.div>

            <motion.div custom={3} variants={fieldVariants} className="grid gap-4 sm:grid-cols-2">
              <div>
                <select {...register("service")} className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Service Interested In *
                  </option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-surface">
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.service && <p className="mt-1 text-xs text-red-400">{errors.service.message}</p>}
              </div>
              <div>
                <select {...register("budget")} className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Project Budget *
                  </option>
                  {budgetOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-surface">
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.budget && <p className="mt-1 text-xs text-red-400">{errors.budget.message}</p>}
              </div>
            </motion.div>

            <motion.div custom={4} variants={fieldVariants}>
              <textarea
                {...register("message")}
                rows={5}
                placeholder="Message / Project Details *"
                className={inputClass}
              />
              {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
            </motion.div>

            <motion.div custom={5} variants={fieldVariants}>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_var(--accent-glow)] disabled:opacity-60"
                >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message →"
                )}
              </button>
            </motion.div>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm text-accent"
              >
                ✓ Message sent! We&apos;ll reply within 24 hours.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm text-red-400"
              >
                Something went wrong. Please try again or email us directly.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
