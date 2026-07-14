"use client";

import Image from "next/image";
import Link from "next/link";
import { jewelryConfig } from "@/data/jewelry";
import { StaggerContainer, StaggerItem, HoverLift } from "@/components/shared/MotionWrapper";
import { cn } from "@/lib/utils";

export function CollectionsGrid() {
  const { collections, sections } = jewelryConfig;

  return (
    <section
      className="py-24 md:py-32"
      aria-labelledby="collections-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-champagne">
            {sections.collections.eyebrow}
          </p>
          <h2
            id="collections-heading"
            className="mt-4 font-serif text-4xl font-light tracking-wide text-charcoal md:text-5xl"
          >
            {sections.collections.title}
          </h2>
        </div>

        <StaggerContainer className="mt-16 grid auto-rows-[300px] grid-cols-1 gap-3 sm:grid-cols-2 lg:auto-rows-[360px] lg:grid-cols-4">
          {collections.map((collection) => (
            <StaggerItem
              key={collection.id}
              className={cn(
                "group relative overflow-hidden border border-whisper shadow-luxury transition-shadow duration-500 hover:shadow-luxury-lg",
                collection.span === "wide" && "sm:col-span-2",
                collection.span === "tall" && "lg:row-span-2 lg:auto-rows-auto"
              )}
            >
              <Link
                href={collection.href}
                className="absolute inset-0 z-10"
                aria-label={`Explore ${collection.title}`}
              />
              <Image
                src={collection.imagePath}
                alt={collection.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 via-onyx/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-serif text-2xl font-light tracking-wide text-cream md:text-3xl">
                  {collection.title}
                </h3>
                <p className="mt-2 text-sm text-cream/70">{collection.subtitle}</p>
              </div>
              <div className="absolute bottom-8 right-8 h-8 w-8 rounded-full border border-cream/30 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:border-cream/60">
                <span className="flex h-full items-center justify-center text-cream/60 text-sm">→</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}