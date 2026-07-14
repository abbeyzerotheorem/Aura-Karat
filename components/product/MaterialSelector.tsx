"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn, formatPrice, calculateProductPrice } from "@/lib/utils";
import type { MetalOption, StoneOption } from "@/types/jewelry";

interface MaterialSelectorProps {
  metalOptions: MetalOption[];
  stoneOptions: StoneOption[];
  basePrice: number;
  onMetalChange?: (metalId: string) => void;
  onStoneChange?: (stoneId: string) => void;
  compact?: boolean;
}

export function MaterialSelector({
  metalOptions,
  stoneOptions,
  basePrice,
  onMetalChange,
  onStoneChange,
  compact = false,
}: MaterialSelectorProps) {
  const [selectedMetal, setSelectedMetal] = useState(metalOptions[0]?.id ?? "");
  const [selectedStone, setSelectedStone] = useState(stoneOptions[0]?.id ?? "");

  const activeMetal = metalOptions.find((m) => m.id === selectedMetal);
  const activeStone = stoneOptions.find((s) => s.id === selectedStone);
  const totalPrice = calculateProductPrice(
    basePrice,
    activeMetal?.priceModifier ?? 0,
    activeStone?.priceModifier ?? 0
  );

  const handleMetalSelect = (id: string) => {
    setSelectedMetal(id);
    onMetalChange?.(id);
  };

  const handleStoneSelect = (id: string) => {
    setSelectedStone(id);
    onStoneChange?.(id);
  };

  return (
    <div className={cn("space-y-4", compact && "space-y-3")}>
      <div>
        <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-charcoal/60">
          Metal
        </p>
        <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Select metal">
          {metalOptions.map((metal) => (
            <button
              key={metal.id}
              type="button"
              role="radio"
              aria-checked={selectedMetal === metal.id}
              onClick={() => handleMetalSelect(metal.id)}
              className={cn(
                "group relative flex min-h-12 min-w-12 items-center gap-2 border px-3 py-2 transition-all duration-300",
                selectedMetal === metal.id
                  ? "border-champagne bg-champagne/10 shadow-luxury"
                  : "border-whisper hover:border-champagne/50"
              )}
            >
              <span
                className="h-4 w-4 shrink-0 rounded-full border border-whisper shadow-inner"
                style={{ backgroundColor: metal.colorHex }}
                aria-hidden="true"
              />
              {!compact && (
                <span className="text-xs tracking-wide text-charcoal">
                  {metal.label}
                </span>
              )}
              {metal.priceModifier > 0 && !compact && (
                <span className="text-[10px] text-charcoal/50">
                  +{formatPrice(metal.priceModifier)}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {stoneOptions.length > 1 && (
        <div>
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-charcoal/60">
            Stone
          </p>
          <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Select stone">
            {stoneOptions.map((stone) => (
              <button
                key={stone.id}
                type="button"
                role="radio"
                aria-checked={selectedStone === stone.id}
                onClick={() => handleStoneSelect(stone.id)}
                className={cn(
                  "min-h-12 border px-4 py-2 text-xs tracking-wide transition-all duration-300",
                  selectedStone === stone.id
                    ? "border-champagne bg-champagne/10 text-charcoal shadow-luxury"
                    : "border-whisper text-charcoal/70 hover:border-champagne/50"
                )}
              >
                {stone.label}
                {stone.priceModifier > 0 && (
                  <span className="ml-1 text-charcoal/50">
                    +{formatPrice(stone.priceModifier)}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      <motion.div
        key={totalPrice}
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 1 }}
        className="flex items-baseline justify-between border-t border-whisper pt-3"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-charcoal/60">
          Your Selection
        </span>
        <span className="font-serif text-xl text-charcoal">
          {formatPrice(totalPrice)}
        </span>
      </motion.div>
    </div>
  );
}
