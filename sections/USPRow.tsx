"use client";

import { Truck, Gem, Gift, Crown } from "lucide-react";
import { jewelryConfig } from "@/data/jewelry";
import { StaggerContainer, StaggerItem } from "@/components/shared/MotionWrapper";

const iconMap: Record<string, React.ElementType> = {
  truck: Truck,
  gem: Gem,
  gift: Gift,
  crown: Crown,
};

export function USPRow() {
  const { sections } = jewelryConfig;

  return (
    <section className="border-b border-whisper bg-cream py-16 md:py-20" aria-label="Features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {sections.usp.items.map((item) => {
            const Icon = iconMap[item.icon] || Gem;
            return (
              <StaggerItem key={item.label}>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-champagne/20 bg-champagne/5 transition-all duration-300 hover:border-champagne/40 hover:bg-champagne/10">
                    <Icon className="h-6 w-6 text-champagne" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-light tracking-wide text-charcoal">
                    {item.label}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-charcoal/55">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
