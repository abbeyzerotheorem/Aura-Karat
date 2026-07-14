"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { jewelryConfig } from "@/data/jewelry";
import { MotionWrapper } from "@/components/shared/MotionWrapper";

export function ChooseTypeSection() {
  const { sections } = jewelryConfig;
  const { chooseType } = sections;

  return (
    <section className="py-28 md:py-36" aria-labelledby="choose-type-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Image */}
          <MotionWrapper variant="scaleIn">
            <div className="relative aspect-[4/5] overflow-hidden bg-whisper shadow-luxury-lg">
              <Image
                src={chooseType.imagePath}
                alt="Hands adorned with elegant jewelry"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/15 via-transparent to-transparent" />
            </div>
          </MotionWrapper>

          {/* Right - Content */}
          <MotionWrapper delay={0.15}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-champagne">
              {chooseType.eyebrow}
            </p>
            <h2
              id="choose-type-heading"
              className="mt-4 font-serif text-4xl font-light tracking-wide text-charcoal md:text-5xl"
            >
              {chooseType.title}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-charcoal/65">
              {chooseType.subtitle}
            </p>

            {/* Category circles */}
            <div className="mt-12 flex flex-wrap gap-8">
              {chooseType.categories.map((cat) => (
                <Link
                  key={cat.label}
                  href={cat.href}
                  className="group flex flex-col items-center gap-4"
                >
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border border-whisper bg-cream transition-all duration-500 hover:border-champagne/40 hover:shadow-luxury-lg hover:bg-champagne/5">
                    <span className="font-serif text-xl font-light text-charcoal transition-colors group-hover:text-champagne">
                      {cat.label}
                    </span>
                  </div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-champagne/30 text-champagne transition-all duration-300 group-hover:bg-champagne group-hover:text-white group-hover:border-champagne">
                    <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
