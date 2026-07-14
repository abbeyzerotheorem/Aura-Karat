"use client";

import Image from "next/image";
import { jewelryConfig } from "@/data/jewelry";
import { MotionWrapper } from "@/components/shared/MotionWrapper";

export function CraftsmanshipStandard() {
  const { brand, heritage } = jewelryConfig;

  return (
    <section
      id="heritage"
      className="py-20 md:py-28"
      aria-labelledby="heritage-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <MotionWrapper variant="scaleIn">
            <div className="relative aspect-[4/5] overflow-hidden border border-whisper shadow-luxury-lg">
              <Image
                src={heritage.imagePath}
                alt={`Master jeweler hand-finishing a ring at the ${brand.name} atelier`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-champagne">
              {heritage.sectionSubtitle}
            </p>
            <h2
              id="heritage-heading"
              className="mt-3 font-serif text-3xl font-light tracking-wide text-charcoal md:text-4xl"
            >
              {heritage.sectionTitle}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-charcoal/70">
              {brand.description}
            </p>

            <ul className="mt-8 space-y-4">
              {brand.careInstructions.map((instruction, i) => (
                <li
                  key={i}
                  className="flex gap-4 border-l-2 border-champagne/40 pl-4 text-sm leading-relaxed text-charcoal/65"
                >
                  {instruction}
                </li>
              ))}
            </ul>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {brand.certifications.slice(0, 4).map((cert) => (
                <div
                  key={cert}
                  className="border border-whisper bg-cream p-4 text-center text-[10px] uppercase tracking-widest text-charcoal/60"
                >
                  {cert}
                </div>
              ))}
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
