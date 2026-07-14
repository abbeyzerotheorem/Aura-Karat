"use client";

import Image from "next/image";
import Link from "next/link";
import { jewelryConfig } from "@/data/jewelry";
import { StaggerContainer, StaggerItem } from "@/components/shared/MotionWrapper";
import { cn } from "@/lib/utils";

export function CollectionsGrid() {
  const { collections } = jewelryConfig;

  return (
    <section
      className="py-20 md:py-28"
      aria-labelledby="collections-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-champagne">
            Curated for You
          </p>
          <h2
            id="collections-heading"
            className="mt-3 font-serif text-3xl font-light tracking-wide text-charcoal md:text-4xl"
          >
            Our Collections
          </h2>
        </div>

        <StaggerContainer className="mt-14 grid auto-rows-[280px] grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[320px] lg:grid-cols-4">
          {collections.map((collection) => (
            <StaggerItem
              key={collection.id}
              className={cn(
                "group relative overflow-hidden border border-whisper shadow-luxury",
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
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/70 via-onyx/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl font-light tracking-wide text-cream">
                  {collection.title}
                </h3>
                <p className="mt-1 text-sm text-cream/70">{collection.subtitle}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
