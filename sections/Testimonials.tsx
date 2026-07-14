"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { jewelryConfig } from "@/data/jewelry";
import { MotionWrapper } from "@/components/shared/MotionWrapper";

export function Testimonials() {
  const { testimonials, sections } = jewelryConfig;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<ReturnType<typeof setInterval>>(null);

  const goTo = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    autoPlayRef.current = setInterval(goNext, 5000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, goNext]);

  const handleInteraction = () => {
    setIsAutoPlaying(false);
    // Resume after 10s of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const variants = {
    enter: (d: number) => ({
      x: d > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (d: number) => ({
      x: d > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      className="border-t border-whisper bg-cream py-24 md:py-32"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-champagne">
            {sections.testimonials.eyebrow}
          </p>
          <h2
            id="testimonials-heading"
            className="mt-4 font-serif text-4xl font-light tracking-wide text-charcoal md:text-5xl"
          >
            {sections.testimonials.title}
          </h2>
        </MotionWrapper>

        <div
          className="relative mx-auto mt-16 max-w-3xl"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative min-h-[320px] overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.blockquote
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex h-full flex-col items-center border border-whisper bg-cream p-10 md:p-14 shadow-luxury text-center"
              >
                <div
                  className="flex gap-1"
                  aria-label={`${currentTestimonial.rating} out of 5 stars`}
                >
                  {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-champagne text-champagne"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="mt-8 flex-1 font-serif text-xl font-light italic leading-relaxed text-charcoal md:text-2xl">
                  &ldquo;{currentTestimonial.quote}&rdquo;
                </p>
                <footer className="mt-8">
                  <cite className="not-italic">
                    <span className="block text-sm font-medium text-charcoal">
                      {currentTestimonial.name}
                    </span>
                    <span className="mt-1 block text-xs text-charcoal/50">
                      {currentTestimonial.location}
                    </span>
                    <span className="mt-3 block text-[10px] uppercase tracking-widest text-champagne">
                      {currentTestimonial.piece}
                    </span>
                  </cite>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Navigation controls */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => { goPrev(); handleInteraction(); }}
              className="flex min-h-12 min-w-12 items-center justify-center border border-whisper bg-cream text-charcoal transition-all duration-300 hover:border-champagne hover:text-champagne hover:shadow-luxury"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={currentIndex === index}
                  aria-label={`Testimonial ${index + 1}`}
                  onClick={() => { goTo(index); handleInteraction(); }}
                  className={`h-2 transition-all duration-500 ${
                    currentIndex === index
                      ? "w-10 bg-champagne"
                      : "w-2 bg-whisper-dark hover:bg-champagne/50"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => { goNext(); handleInteraction(); }}
              className="flex min-h-12 min-w-12 items-center justify-center border border-whisper bg-cream text-charcoal transition-all duration-300 hover:border-champagne hover:text-champagne hover:shadow-luxury"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Auto-play indicator */}
          {isAutoPlaying && (
            <div className="mx-auto mt-6 h-px max-w-[200px] overflow-hidden bg-whisper">
              <motion.div
                key={currentIndex}
                className="h-full bg-champagne"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}