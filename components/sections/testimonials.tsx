"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollBy = (dir: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "next" ? step : -step, behavior: "smooth" });
  };

  return (
    <section className="bg-bg-secondary px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-10 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <motion.p
              className="section-label mb-3"
              style={{ willChange: "transform" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              — TESTIMONIALS
            </motion.p>
            <motion.h2
              className="text-3xl font-bold sm:text-4xl md:text-5xl"
              style={{ willChange: "transform" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              What Our Clients Say
            </motion.h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollBy("prev")}
              disabled={!canPrev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground/80 transition-colors hover:border-accent/50 hover:text-accent disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy("next")}
              disabled={!canNext}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground/80 transition-colors hover:border-accent/50 hover:text-accent disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="hide-scrollbar flex gap-6 overflow-x-auto px-4 pb-4 sm:px-6 md:px-8 lg:px-12"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {testimonials.map((item) => (
          <article
            key={item.name}
            data-card
            className="w-[300px] shrink-0 snap-start rounded-2xl border border-border bg-surface p-7 sm:w-[380px] md:w-[420px]"
          >
            <Quote className="mb-4 text-accent" size={28} />
            <p className="text-sm leading-relaxed text-foreground/80">
              &ldquo;{item.quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent">
                {item.initials}
              </div>
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-xs text-muted">
                  {item.role}, {item.company}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-2 sm:hidden">
        <button
          type="button"
          onClick={() => scrollBy("prev")}
          disabled={!canPrev}
          aria-label="Previous testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground/80 transition-colors hover:text-accent disabled:opacity-30"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => scrollBy("next")}
          disabled={!canNext}
          aria-label="Next testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground/80 transition-colors hover:text-accent disabled:opacity-30"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
