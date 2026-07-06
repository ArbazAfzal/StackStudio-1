"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { faqContent } from "@/lib/data";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-black px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2">
        {/* Left Side: Sticky Heading + CTA */}
        <div className="lg:sticky lg:top-24 lg:h-fit">
          <motion.p
            className="section-label mb-4"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            — FAQ
          </motion.p>
          <motion.h2
            className="mb-6 text-3xl font-bold lg:text-5xl"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Questions We Get Asked a Lot
          </motion.h2>
          <motion.p
            className="text-muted max-w-md"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Still have questions? Reach out to us directly for personalized answers.
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <MagneticButton>
              <Link
                href="#contact"
                data-cursor="hover"
                className="group rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(200,255,0,0.4)]"
              >
                Contact Us →
              </Link>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right Side: Accordion List */}
        <div>
          <ul className="divide-y divide-white/10">
            {faqContent.map((item, index) => (
              <motion.li
                key={index}
                className="py-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <button
                  className="flex w-full items-center justify-between text-left text-lg font-medium transition-colors hover:text-white"
                  onClick={() => toggleAccordion(index)}
                  data-cursor="hover"
                >
                  <span className={cn(openIndex === index ? "text-accent" : "text-muted")}>
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Plus size={24} className="text-white/70" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-sm leading-relaxed text-muted pb-4">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}