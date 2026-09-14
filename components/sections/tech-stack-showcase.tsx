"use client";

import { motion } from "framer-motion";
import { techStackCategories } from "@/lib/data";
import { TechChip } from "@/components/ui/tech-logo";

export function TechStackShowcaseSection() {
  return (
    <section id="tech-stack" className="bg-background px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-10 lg:py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.p
          className="section-label mb-3"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          — OUR ARSENAL
        </motion.p>
        <motion.h2
          className="mb-8 text-3xl font-bold lg:text-5xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Technologies We Master
        </motion.h2>

        <div className="space-y-8">
          {techStackCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <p className="mb-3 text-xs uppercase tracking-widest text-muted">
                {category.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    data-cursor="hover"
                    style={{ willChange: "transform" }}
                  >
                    <TechChip name={tech.name} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
