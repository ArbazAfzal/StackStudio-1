"use client";

import { marqueeTech } from "@/lib/tech-logos";

export function TechMarquee() {
  const items = [...marqueeTech, ...marqueeTech];

  return (
    <section
      aria-label="Technology stack marquee"
      className="overflow-hidden border-y border-border bg-bg-secondary py-5"
    >
      <div className="flex w-max animate-marquee items-center">
        {items.map((tech, i) => (
          <div
            key={`${tech.id}-${i}`}
            className="mx-2 inline-flex h-[76px] w-[76px] shrink-0 flex-col items-center justify-center gap-1 rounded-lg border border-border bg-surface p-2"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={tech.boxedUrl}
              alt={`${tech.name} logo`}
              width={42}
              height={42}
              loading="lazy"
              className="h-10 w-10 shrink-0 object-contain"
            />
            <span className="max-w-full truncate text-[10px] font-medium text-foreground/70">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
