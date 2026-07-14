"use client";

import Image from "next/image";
import { jewelryConfig } from "@/data/jewelry";
import { StaggerContainer, StaggerItem, MotionWrapper } from "@/components/shared/MotionWrapper";
import { VIPSchedulerModal } from "@/components/modules/VIPSchedulerModal";
import { Button } from "@/components/ui/button";

export function BespokePipeline() {
  const { bespokeSteps, brand } = jewelryConfig;

  return (
    <section
      id="bespoke"
      className="border-y border-whisper py-20 md:py-28"
      aria-labelledby="bespoke-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-champagne">
            Bespoke Commissions
          </p>
          <h2
            id="bespoke-heading"
            className="mt-3 font-serif text-3xl font-light tracking-wide text-charcoal md:text-4xl"
          >
            Your Vision, Rendered in Light
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-charcoal/65">
            From first sketch to final polish, every bespoke piece at {brand.name}{" "}
            follows a meticulous four-stage journey.
          </p>
        </MotionWrapper>

        <StaggerContainer className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {bespokeSteps.map((step) => (
            <StaggerItem key={step.step}>
              <article className="group flex h-full flex-col">
                <div className="relative aspect-[3/2] overflow-hidden border border-whisper shadow-luxury">
                  <Image
                    src={step.imagePath}
                    alt={step.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center bg-onyx font-serif text-lg text-champagne">
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-xl font-light tracking-wide text-charcoal">
                  {step.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/65">
                  {step.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <MotionWrapper className="mt-12 text-center" delay={0.2}>
          <VIPSchedulerModal
            trigger={
              <Button variant="champagne" size="lg">
                Begin Your Commission
              </Button>
            }
          />
        </MotionWrapper>
      </div>
    </section>
  );
}
