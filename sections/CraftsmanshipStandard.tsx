"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { jewelryConfig } from "@/data/jewelry";
import { MotionWrapper } from "@/components/shared/MotionWrapper";

export function CraftsmanshipStandard() {
  const { brand, heritage } = jewelryConfig;

  return (
    <section
      id="heritage"
      className="py-24 md:py-32"
      aria-labelledby="heritage-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <MotionWrapper variant="scaleIn">
            <div className="relative aspect-[4/5] overflow-hidden border border-whisper shadow-luxury-lg group">
              <Image
                src={heritage.imagePath}
                alt={`Master jeweler hand-finishing a ring at the ${brand.name} atelier`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.15}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-champagne">
              {heritage.sectionSubtitle}
            </p>
            <h2
              id="heritage-heading"
              className="mt-4 font-serif text-4xl font-light tracking-wide text-charcoal md:text-5xl"
            >
              {heritage.sectionTitle}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-charcoal/70">
              {brand.description}
            </p>

            <ul className="mt-10 space-y-5">
              {brand.careInstructions.map((instruction, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex gap-4 border-l-2 border-champagne/40 pl-5 text-sm leading-relaxed text-charcoal/65"
                >
                  {instruction}
                </motion.li>
              ))}
            </ul>

            <MotionWrapper delay={0.4}>
              <div className="mt-12 grid grid-cols-2 gap-3">
                {brand.certifications.slice(0, 4).map((cert) => (
                  <div
                    key={cert}
                    className="group border border-whisper bg-cream p-5 text-center transition-all duration-300 hover:border-champagne/40 hover:shadow-luxury"
                  >
                    <p className="text-[10px] uppercase tracking-widest text-charcoal/60 group-hover:text-charcoal transition-colors duration-300">
                      {cert}
                    </p>
                  </div>
                ))}
              </div>
            </MotionWrapper>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}