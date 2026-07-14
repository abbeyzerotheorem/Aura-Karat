"use client";

import { Star } from "lucide-react";
import { jewelryConfig } from "@/data/jewelry";
import { StaggerContainer, StaggerItem, MotionWrapper } from "@/components/shared/MotionWrapper";

export function Testimonials() {
  const { testimonials } = jewelryConfig;

  return (
    <section
      className="border-t border-whisper bg-cream py-20 md:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-champagne">
            Love Stories
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 font-serif text-3xl font-light tracking-wide text-charcoal md:text-4xl"
          >
            Written in Gold
          </h2>
        </MotionWrapper>

        <StaggerContainer className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <blockquote className="flex h-full flex-col border border-whisper bg-cream p-8 shadow-luxury">
                <div className="flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-champagne text-champagne"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="mt-5 flex-1 font-serif text-lg font-light italic leading-relaxed text-charcoal">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-whisper pt-5">
                  <cite className="not-italic">
                    <span className="block text-sm font-medium text-charcoal">
                      {testimonial.name}
                    </span>
                    <span className="mt-1 block text-xs text-charcoal/50">
                      {testimonial.location}
                    </span>
                    <span className="mt-2 block text-[10px] uppercase tracking-widest text-champagne">
                      {testimonial.piece}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
