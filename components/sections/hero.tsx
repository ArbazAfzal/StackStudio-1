"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const headlineLines = [
  ["We Build & Scale", "Software That"],
  ["Moves Your", "Business Forward"],
];

export function HeroSection() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const onComplete = () => setReady(true);
    window.addEventListener("preloader-complete", onComplete);
    window.addEventListener("page-transition-complete", onComplete);

    if (document.documentElement.dataset.preloaderComplete === "true") {
      setReady(true);
    }

    return () => {
      window.removeEventListener("preloader-complete", onComplete);
      window.removeEventListener("page-transition-complete", onComplete);
    };
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!glowRef.current) return;
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      glowRef.current.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(108,75,255,0.10) 0%, transparent 50%)`;
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[78vh] flex-col items-center justify-center overflow-hidden bg-background py-20 bg-grid px-4 sm:px-6 md:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-0 accent-radial" />
      <div ref={glowRef} className="pointer-events-none absolute inset-0 transition-[background] duration-300" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          {headlineLines.map((line, lineIdx) => (
            <span key={lineIdx} className="block">
              {line.map((word, wordIdx) => (
                <motion.span
                  key={word}
                  className="inline-block mr-[0.25em] last:mr-0"
                  style={{ willChange: "transform" }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{
                    duration: 0.6,
                    delay: lineIdx * 0.15 + wordIdx * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <motion.p
          className="mx-auto mt-8 max-w-2xl text-base text-muted md:text-lg"
          style={{ willChange: "transform" }}
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          From <span className="text-foreground font-medium">Full Stack</span> and{" "}
          <span className="text-foreground font-medium">MERN</span> apps to{" "}
          <span className="text-foreground font-medium">AI Agents</span>,{" "}
          <span className="text-foreground font-medium">SaaS</span> platforms, and
          WordPress / Shopify / Wix builds — engineered to scale.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ willChange: "transform" }}
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <Link
            href="/contact"
            className="group rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-[0_0_30px_var(--accent-glow)]"
          >
            Get a Free Quote →
          </Link>
          <Link
            href="/work"
            className="rounded-full border border-border px-8 py-3.5 text-sm font-medium text-foreground transition-all hover:border-accent/50 hover:text-accent"
          >
            See Our Work
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        style={{ willChange: "transform" }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        aria-hidden
      >
        <ChevronDown className="h-6 w-6 text-foreground/40" />
      </motion.div>
    </section>
  );
}
