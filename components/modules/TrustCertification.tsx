"use client";

import {
  Award,
  Diamond,
  Leaf,
  Shield,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { jewelryConfig } from "@/data/jewelry";
import { MotionWrapper, StaggerContainer, StaggerItem } from "@/components/shared/MotionWrapper";
import type { CertificationBadge } from "@/types/jewelry";

const iconMap = {
  assay: Award,
  gia: Diamond,
  warranty: ShieldCheck,
  ethical: Shield,
  insured: Truck,
  recycled: Leaf,
} as const;

function CertificationCard({ badge }: { badge: CertificationBadge }) {
  const Icon = iconMap[badge.icon];

  return (
    <StaggerItem>
      <div className="group flex h-full flex-col border border-cream/10 bg-onyx-light/50 p-6 transition-all duration-500 hover:border-champagne/30 hover:bg-onyx-light hover:shadow-luxury-lg">
        <div className="mb-4 flex h-12 w-12 items-center justify-center border border-champagne/20 bg-champagne/5 transition-all duration-300 group-hover:border-champagne/40 group-hover:bg-champagne/10">
          <Icon className="h-5 w-5 text-champagne" aria-hidden="true" />
        </div>
        <h3 className="font-serif text-lg font-light tracking-wide text-cream">
          {badge.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-cream/60">
          {badge.description}
        </p>
      </div>
    </StaggerItem>
  );
}

export function TrustCertification() {
  const { certifications, brand, sections } = jewelryConfig;

  return (
    <section
      id="trust"
      className="border-y border-whisper bg-onyx py-24 text-cream md:py-32"
      aria-labelledby="trust-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-champagne">
            {sections.trust.eyebrow}
          </p>
          <h2
            id="trust-heading"
            className="mt-4 font-serif text-4xl font-light tracking-wide md:text-5xl"
          >
            {sections.trust.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-cream/70">
            {sections.trust.description}
          </p>
        </MotionWrapper>

        <StaggerContainer className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((badge) => (
            <CertificationCard key={badge.id} badge={badge} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}