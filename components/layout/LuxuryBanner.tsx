"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { jewelryConfig } from "@/data/jewelry";

export function LuxuryBanner() {
  const { promotional } = jewelryConfig;
  const [dismissed, setDismissed] = useState(false);

  if (!promotional.bannerEnabled || dismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="relative bg-onyx overflow-hidden"
        role="banner"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-center px-12 py-2.5">
          <p className="text-center text-xs tracking-[0.15em] text-cream">
            {promotional.bannerText}
          </p>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="absolute right-4 flex min-h-8 min-w-8 items-center justify-center text-cream/50 transition-colors hover:text-cream"
            aria-label="Dismiss announcement"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}