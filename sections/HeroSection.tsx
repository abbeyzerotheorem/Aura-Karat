"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { jewelryConfig } from "@/data/jewelry";
import { Button } from "@/components/ui/button";
import { VIPSchedulerModal } from "@/components/modules/VIPSchedulerModal";

export function HeroSection() {
  const { hero, brand } = jewelryConfig;

  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="flex flex-col justify-center px-4 py-16 sm:px-6 lg:px-8 lg:py-24 xl:py-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[10px] uppercase tracking-[0.35em] text-champagne"
          >
            {brand.name}
          </motion.p>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-4 font-serif text-4xl font-light leading-tight tracking-wide text-charcoal sm:text-5xl lg:text-6xl"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 max-w-md text-base leading-relaxed text-charcoal/70"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button variant="default" size="lg" asChild>
              <Link href="#collection">{hero.primaryCta}</Link>
            </Button>
            <VIPSchedulerModal
              trigger={
                <Button variant="outline" size="lg">
                  {hero.secondaryCta}
                </Button>
              }
            />
          </motion.div>
        </div>

        <div className="relative grid grid-cols-2 gap-1 lg:gap-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[3/4] overflow-hidden border border-whisper shadow-luxury lg:aspect-auto lg:min-h-[600px]"
          >
            <Image
              src={hero.imagePath}
              alt={`${brand.name} macro jewelry photography`}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[3/4] overflow-hidden border border-whisper shadow-luxury lg:aspect-auto lg:min-h-[600px]"
          >
            <Image
              src={hero.lifestyleImagePath}
              alt={`${brand.name} lifestyle jewelry imagery`}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
