"use client";

import Link from "next/link";
import { footerNav, socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-background pt-12 pb-8">
      <div className="gradient-line mb-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Eyebit-style big wordmark */}
        <h2
          aria-label="Stack Studio"
          className="select-none whitespace-nowrap text-center font-display font-extrabold tracking-tight leading-[0.85] text-foreground"
          style={{ fontSize: "clamp(64px, 16vw, 240px)" }}
        >
          Stack<span className="text-gradient">Studio</span>
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted">
          Building tomorrow&apos;s digital products today — full-stack, MERN, AI, and SaaS.
        </p>

        <div className="mt-12 grid gap-10 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-foreground/60">
              Navigation
            </h4>
            <ul className="space-y-2 text-center">
              {footerNav.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-foreground/60">
              Services
            </h4>
            <ul className="space-y-2 text-center">
              {footerNav.services.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-foreground/60">
              Resources
            </h4>
            <ul className="space-y-2 text-center">
              {footerNav.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-foreground/60">
              Connect
            </h4>
            <ul className="space-y-2 text-center">
              {footerNav.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 md:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Stack Studio. All rights reserved.
          </p>
          <div className="flex gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
