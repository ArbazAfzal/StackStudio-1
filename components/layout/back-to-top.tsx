"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-28 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-lg transition-colors hover:border-accent/50 hover:text-accent"
    >
      <ArrowUp size={20} />
    </button>
  );
}
