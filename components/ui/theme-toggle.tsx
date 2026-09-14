"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground/80 transition-colors hover:text-accent hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50",
        className,
      )}
    >
      {/* Avoid hydration mismatch: render a neutral icon until mounted */}
      {!mounted ? (
        <span className="h-4 w-4" />
      ) : isDark ? (
        <Sun size={16} className="transition-transform duration-300" />
      ) : (
        <Moon size={16} className="transition-transform duration-300" />
      )}
    </button>
  );
}
