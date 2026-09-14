"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollDown, setScrollDown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setScrollDown(y > lastY && y > 80);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          "backdrop-blur-md bg-background/70 border-b border-border",
          scrolled ? "py-1.5" : "py-2.5",
          scrollDown && !mobileOpen && "-translate-y-full",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12">
          <Link href="/" className="flex items-center gap-3" aria-label="Stack Studio home">
            <Image
              src="/logo.png"
              alt="Stack Studio"
              width={240}
              height={120}
              className="h-14 w-auto object-contain dark:invert"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
            <Link
              href="/contact"
              className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 hover:shadow-[0_0_20px_var(--accent-glow)]"
            >
              Get a Quote
            </Link>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="p-2 text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ delay: 0.1 }}
              className="flex h-full flex-col items-center justify-center gap-8"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-3xl font-semibold text-foreground/90 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.05 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full bg-accent px-8 py-3 text-lg font-semibold text-white"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
