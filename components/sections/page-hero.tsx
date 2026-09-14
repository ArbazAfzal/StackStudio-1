import Image from "next/image";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  className?: string;
}) {
  return (
    <header className={cn("relative overflow-hidden border-b border-border", className)}>
      {image && (
        <Image
          src={image}
          alt={imageAlt ?? ""}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/85 to-background/60" />
      <div className="pointer-events-none absolute inset-0 accent-radial" />
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 md:px-8 lg:px-12 lg:pb-24 lg:pt-32">
        {eyebrow && <p className="section-label mb-3">{eyebrow}</p>}
        <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base text-muted lg:text-lg">{description}</p>
        )}
      </div>
    </header>
  );
}
