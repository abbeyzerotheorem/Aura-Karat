"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { jewelryConfig } from "@/data/jewelry";
import { StaggerContainer, StaggerItem, MotionWrapper } from "@/components/shared/MotionWrapper";
import { VIPSchedulerModal } from "@/components/modules/VIPSchedulerModal";
import { Button } from "@/components/ui/button";

export function BespokePipeline() {
  const { bespokeSteps, brand, sections } = jewelryConfig;

  return (
    <section
      id="bespoke"
      className="border-y border-whisper py-24 md:py-32"
      aria-labelledby="bespoke-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-champagne">
            {sections.bespoke.eyebrow}
          </p>
          <h2
            id="bespoke-heading"
            className="mt-4 font-serif text-4xl font-light tracking-wide text-charcoal md:text-5xl"
          >
            {sections.bespoke.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-charcoal/65">
            {sections.bespoke.description}
          </p>
        </MotionWrapper>

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {bespokeSteps.map((step) => (
            <StaggerItem key={step.step}>
              <article className="group flex h-full flex-col">
                <div className="relative aspect-[4/3] overflow-hidden border border-whisper shadow-luxury transition-shadow duration-500 group-hover:shadow-luxury-lg">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={step.imagePath}
                      alt={step.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover"
                    />
                  </motion.div>
                  <span className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center bg-onyx font-serif text-xl text-champagne shadow-luxury">
                    {String(step.step).padStart(2, "0")}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <h3 className="mt-6 font-serif text-xl font-light tracking-wide text-charcoal">
                  {step.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/65">
                  {step.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <MotionWrapper className="mt-16 text-center" delay={0.2}>
          <VIPSchedulerModal
            trigger={
              <Button variant="champagne" size="lg" className="gap-3">
                {sections.bespoke.cta}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Button>
            }
          />
        </MotionWrapper>
      </div>
    </section>
  );
}