"use client";

import { useState } from "react";
import { techLogoSrc, skilliconsUrl } from "@/lib/tech-logos";
import { cn } from "@/lib/utils";

/**
 * Renders a brand mark. For the homepage marquee we want the "boxed" style
 * (the same as skillicons.dev) — a single image per logo with a colored box
 * around the icon. For inline chips we use the simple-icons CDN mark.
 */
export function TechLogo({
  name,
  size = 18,
  className,
  boxed = false,
}: {
  name: string;
  size?: number;
  className?: string;
  boxed?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className={cn(
          "inline-flex shrink-0 items-center justify-center rounded-md bg-accent/15 text-[10px] font-bold text-accent",
          className,
        )}
        style={{ width: size, height: size }}
        aria-hidden
      >
        {name.charAt(0)}
      </span>
    );
  }

  if (boxed) {
    return (
      // SkillIcons-style boxed image (single boxed icon, like the reference).
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={skilliconsUrl(name)}
        alt=""
        width={size}
        height={size}
        className={cn("shrink-0 object-contain", className)}
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    // Brand SVG from Simple Icons CDN.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={techLogoSrc(name)}
      alt=""
      width={size}
      height={size}
      className={cn("shrink-0 object-contain", className)}
      onError={() => setFailed(true)}
    />
  );
}

export function TechChip({ name }: { name: string }) {
  return (
    <span className="inline-flex w-fit max-w-full items-center gap-2 rounded-lg border border-border bg-surface px-2.5 py-1.5 text-sm text-foreground transition-colors hover:border-accent/30 hover:bg-accent/5">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white p-0.5">
        <TechLogo name={name} size={16} />
      </span>
      <span className="truncate">{name}</span>
    </span>
  );
}
