"use client";

import { marqueeTech } from "@/lib/tech-logos";

export function MarqueeSection() {
  // Duplicate so the CSS keyframe (translateX -50%) produces a seamless loop.
  const items = [...marqueeTech, ...marqueeTech];

  return (
    <section
      className="overflow-hidden border-y border-border bg-bg-secondary py-3"
      aria-label="Technologies we work with"
    >
      <div className="flex w-max animate-marquee will-change-transform">
        {items.map((item, i) => (
          <div
            key={`${item.id}-${i}`}
            className="mx-1 inline-flex shrink-0 items-center"
            title={item.name}
            aria-label={item.name}
          >
            {/* Boxed icon (skillicons.dev style). Native img = avoids Next SVG
                optimizer config; width fixed to prevent layout reflow. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.boxedUrl}
              alt={item.name}
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
