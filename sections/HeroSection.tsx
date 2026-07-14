"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { jewelryConfig } from "@/data/jewelry";

function SocialProofCard() {
  const { hero } = jewelryConfig;
  const avatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&q=80",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="glass rounded-full px-5 py-3 flex items-center gap-3"
    >
      <div className="flex -space-x-2">
        {avatars.map((src, i) => (
          <div
            key={i}
            className="relative h-8 w-8 overflow-full rounded-full border-2 border-white/50"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="32px"
              className="object-cover"
            />
          </div>
        ))}
        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/50 bg-champagne text-[10px] font-medium text-white">
          +
        </div>
      </div>
      <div>
        <span className="block text-sm font-semibold text-white">{hero.socialProofCount}</span>
        <span className="block text-[10px] text-white/70">{hero.socialProofText}</span>
      </div>
    </motion.div>
  );
}

function FeaturedProductCard() {
  const { hero } = jewelryConfig;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className="glass-dark rounded-3xl p-3 flex items-center gap-4 max-w-[320px]"
    >
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl">
        <Image
          src={hero.featuredProductImage}
          alt="Featured jewelry piece"
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>
      <div className="pr-3">
        <p className="text-sm font-medium text-white leading-tight">{hero.featuredProductTitle}</p>
        <Link
          href="#collection"
          className="mt-1.5 inline-flex items-center gap-1 text-xs text-champagne transition-colors hover:text-champagne-light"
        >
          Read More
          <ArrowRight className="h-3 w-3" aria-hidden="true" />
        </Link>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  const { hero, brand } = jewelryConfig;
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
      className="relative overflow-hidden min-h-[85vh]"
      aria-labelledby="hero-heading"
    >
      <div className="flex min-h-[85vh]">
        {/* Left Column - Solid beige background */}
        <div className="relative z-10 flex w-full flex-col justify-center bg-[#C4AE89] px-6 py-20 sm:px-10 lg:w-[45%] lg:px-14 xl:w-[42%] xl:px-20">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-[10px] uppercase tracking-[0.35em] text-white/70"
          >
            {brand.name}
          </motion.p>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-serif text-5xl font-light leading-[1.1] tracking-wide text-white sm:text-6xl lg:text-6xl xl:text-7xl"
          >
            {hero.headline}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex items-center gap-3"
          >
            <Link
              href="#collection"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-medium text-charcoal transition-all duration-300 hover:shadow-luxury-lg hover:scale-[1.02]"
            >
              {hero.primaryCta}
            </Link>
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-300 hover:bg-white/10 hover:border-white/60">
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 max-w-sm"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">
              {hero.subtextLabel}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              {hero.subtextDescription}
            </p>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-16 flex flex-wrap gap-6 text-[10px] uppercase tracking-[0.2em] text-white/40"
          >
            <span>GIA Certified</span>
            <span className="h-3 w-px bg-white/20" aria-hidden="true" />
            <span>Assay Verified</span>
            <span className="h-3 w-px bg-white/20" aria-hidden="true" />
            <span>Lifetime Warranty</span>
          </motion.div>
        </div>

        {/* Right Column - Full-bleed hero image with overlays */}
        <div className="relative hidden lg:block lg:w-[55%] xl:w-[58%]">
          <motion.div
            className="absolute inset-0"
            style={{ y: imageParallax, opacity }}
          >
            <Image
              src={hero.imagePath}
              alt={`${brand.name} model wearing elegant jewelry`}
              fill
              sizes="60vw"
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#C4AE89]/40 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

          {/* Overlay Cards */}
          <div className="absolute inset-0 flex flex-col justify-between p-8 xl:p-12">
            <div className="flex justify-end">
              <SocialProofCard />
            </div>
            <div className="flex justify-end">
              <FeaturedProductCard />
            </div>
          </div>
        </div>

        {/* Mobile fallback - show image behind text */}
        <div className="absolute inset-0 lg:hidden">
          <Image
            src={hero.imagePath}
            alt={`${brand.name} model wearing elegant jewelry`}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#C4AE89]/85" />
        </div>
      </div>
    </section>
  );
}
