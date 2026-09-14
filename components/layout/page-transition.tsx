"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    setShowOverlay(true);
    const timer = setTimeout(() => {
      setShowOverlay(false);
      window.dispatchEvent(new CustomEvent("page-transition-complete"));
    }, 900);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div key={pathname}>{children}</motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="fixed inset-0 z-[9998] flex flex-col items-center justify-center overflow-hidden bg-background"
            initial={{ y: "100%" }}
            animate={{ y: ["100%", "0%", "-100%"] }}
            transition={{ duration: 0.9, times: [0, 0.45, 1], ease: [0.76, 0, 0.24, 1] }}
            style={{ willChange: "transform" }}
          >
            <div className="pointer-events-none absolute inset-0 accent-radial opacity-70" />
            <motion.div
              className="relative z-10 flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 0.9, times: [0, 0.2, 0.7, 1] }}
            >
              <Image
                src="/logo.png"
                alt="Stack Studio"
                width={200}
                height={120}
                className="h-20 w-auto object-contain invert sm:h-24"
              />
              <div className="mt-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.32em] text-muted">
                <span className="h-px w-8 bg-accent" />
                Loading page
                <span className="h-px w-8 bg-accent" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
