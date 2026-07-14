"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { jewelryConfig } from "@/data/jewelry";
import { Button } from "@/components/ui/button";
import { VIPSchedulerModal } from "@/components/modules/VIPSchedulerModal";

export function HeroSection() {
  const { hero, brand, sections } = jewelryConfig;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageParallax = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.3]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="relative z-10 flex flex-col justify-center px-4 py-20 sm:px-6 lg:px-8 lg:py-28 xl:py-36">
          {/* Background pattern */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.015]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 25%, var(--champagne) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
            aria-hidden="true"
          />

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-[10px] uppercase tracking-[0.35em] text-champagne"
          >
            {brand.name}
          </motion.p>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-serif text-5xl font-light leading-tight tracking-wide text-charcoal sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 max-w-md text-base leading-relaxed text-charcoal/70 sm:text-lg"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 flex flex-col gap-4 sm:flex-row"
          >
            <Button variant="default" size="lg" asChild>
              <Link href="#collection" className="group gap-3">
                {hero.primaryCta}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </Button>
            <VIPSchedulerModal
              trigger={
                <Button variant="outline" size="lg">
                  {hero.secondaryCta}
                </Button>
              }
            />
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex flex-wrap gap-6 text-[10px] uppercase tracking-[0.2em] text-charcoal/40"
          >
            <span>GIA Certified</span>
            <span className="h-3 w-px bg-whisper" aria-hidden="true" />
            <span>Assay Verified</span>
            <span className="h-3 w-px bg-whisper" aria-hidden="true" />
            <span>Lifetime Warranty</span>
          </motion.div>
        </div>

        <div className="relative overflow-hidden lg:min-h-[700px]">
          <motion.div
            className="absolute inset-0"
            style={{ y: imageParallax, opacity }}
          >
            <div className="relative flex h-full flex-col gap-1 lg:flex-row">
              <div className="relative flex-1">
                <Image
                  src={hero.imagePath}
                  alt={`${brand.name} macro jewelry photography`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative flex-1 lg:mt-20">
                <div className="relative aspect-[3/4] lg:aspect-auto lg:h-[80%]">
                  <Image
                    src={hero.lifestyleImagePath}
                    alt={`${brand.name} lifestyle jewelry imagery`}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cream/30 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Gradient overlays for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/60 to-transparent lg:from-cream/90 lg:via-cream/40 lg:to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent pointer-events-none lg:hidden" />
        </div>
      </div>
    </section>
  );
}