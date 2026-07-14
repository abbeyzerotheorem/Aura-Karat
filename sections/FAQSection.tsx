"use client";

import { jewelryConfig } from "@/data/jewelry";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MotionWrapper } from "@/components/shared/MotionWrapper";

export function FAQSection() {
  const { faqs, sections } = jewelryConfig;

  return (
    <section
      id="faq"
      className="py-28 md:py-36"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper className="text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-champagne">
            {sections.faq.eyebrow}
          </p>
          <h2
            id="faq-heading"
            className="mt-4 font-serif text-4xl font-light tracking-wide text-charcoal md:text-5xl"
          >
            {sections.faq.title}
          </h2>
        </MotionWrapper>

        <MotionWrapper className="mt-14" delay={0.15}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </MotionWrapper>
      </div>
    </section>
  );
}