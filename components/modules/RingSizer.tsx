"use client";

import { useState } from "react";
import { Ruler, Circle } from "lucide-react";
import { jewelryConfig } from "@/data/jewelry";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MotionWrapper } from "@/components/shared/MotionWrapper";

export function RingSizer() {
  const { ringSizeGuide } = jewelryConfig;
  const [diameterInput, setDiameterInput] = useState("");
  const [circumferenceInput, setCircumferenceInput] = useState("");

  const findByDiameter = (mm: number) => {
    return ringSizeGuide.reduce((closest, size) => {
      const diff = Math.abs(size.diameterMm - mm);
      const closestDiff = Math.abs(closest.diameterMm - mm);
      return diff < closestDiff ? size : closest;
    });
  };

  const findByCircumference = (mm: number) => {
    return ringSizeGuide.reduce((closest, size) => {
      const diff = Math.abs(size.circumferenceMm - mm);
      const closestDiff = Math.abs(closest.circumferenceMm - mm);
      return diff < closestDiff ? size : closest;
    });
  };

  const diameterMatch = diameterInput
    ? findByDiameter(parseFloat(diameterInput))
    : null;
  const circumferenceMatch = circumferenceInput
    ? findByCircumference(parseFloat(circumferenceInput))
    : null;

  return (
    <section
      id="ring-sizer"
      className="py-20 md:py-28"
      aria-labelledby="ring-sizer-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-champagne">
            Fit With Confidence
          </p>
          <h2
            id="ring-sizer-heading"
            className="mt-3 font-serif text-3xl font-light tracking-wide text-charcoal md:text-4xl"
          >
            Virtual Ring Sizer
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-charcoal/65">
            Measure an existing ring or your finger at home. Enter dimensions in
            millimeters for an instant size recommendation.
          </p>
        </MotionWrapper>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-whisper bg-cream p-6 shadow-luxury">
              <div className="mb-4 flex items-center gap-3">
                <Circle className="h-5 w-5 text-champagne" aria-hidden="true" />
                <h3 className="font-serif text-lg text-charcoal">By Inner Diameter</h3>
              </div>
              <Label htmlFor="diameter-mm" className="mb-2 block">
                Inner diameter (mm)
              </Label>
              <Input
                id="diameter-mm"
                type="number"
                step="0.1"
                min="14"
                max="22"
                placeholder="e.g. 16.5"
                value={diameterInput}
                onChange={(e) => setDiameterInput(e.target.value)}
                aria-describedby="diameter-result"
              />
              {diameterMatch && diameterInput && (
                <p
                  id="diameter-result"
                  className="mt-4 rounded-none border border-champagne/30 bg-champagne/5 p-4 text-sm text-charcoal"
                  role="status"
                >
                  Recommended size: <strong>US {diameterMatch.us}</strong> · UK{" "}
                  {diameterMatch.uk} · EU {diameterMatch.eu}
                </p>
              )}
            </div>

            <div className="border border-whisper bg-cream p-6 shadow-luxury">
              <div className="mb-4 flex items-center gap-3">
                <Ruler className="h-5 w-5 text-champagne" aria-hidden="true" />
                <h3 className="font-serif text-lg text-charcoal">By Circumference</h3>
              </div>
              <Label htmlFor="circumference-mm" className="mb-2 block">
                Finger circumference (mm)
              </Label>
              <Input
                id="circumference-mm"
                type="number"
                step="0.1"
                min="44"
                max="65"
                placeholder="e.g. 52.0"
                value={circumferenceInput}
                onChange={(e) => setCircumferenceInput(e.target.value)}
                aria-describedby="circumference-result"
              />
              {circumferenceMatch && circumferenceInput && (
                <p
                  id="circumference-result"
                  className="mt-4 rounded-none border border-champagne/30 bg-champagne/5 p-4 text-sm text-charcoal"
                  role="status"
                >
                  Recommended size: <strong>US {circumferenceMatch.us}</strong> · UK{" "}
                  {circumferenceMatch.uk} · EU {circumferenceMatch.eu}
                </p>
              )}
            </div>
          </div>

          <Accordion type="single" collapsible className="mt-10">
            <AccordionItem value="size-chart">
              <AccordionTrigger>Complete International Size Chart</AccordionTrigger>
              <AccordionContent>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[480px] text-left text-sm">
                    <thead>
                      <tr className="border-b border-whisper text-[10px] uppercase tracking-widest text-charcoal/50">
                        <th className="py-3 pr-4" scope="col">
                          US
                        </th>
                        <th className="py-3 pr-4" scope="col">
                          UK
                        </th>
                        <th className="py-3 pr-4" scope="col">
                          EU
                        </th>
                        <th className="py-3 pr-4" scope="col">
                          Diameter (mm)
                        </th>
                        <th className="py-3" scope="col">
                          Circumference (mm)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {ringSizeGuide.map((size) => (
                        <tr
                          key={size.us}
                          className="border-b border-whisper/50 text-charcoal/80"
                        >
                          <td className="py-2.5 pr-4 font-medium">{size.us}</td>
                          <td className="py-2.5 pr-4">{size.uk}</td>
                          <td className="py-2.5 pr-4">{size.eu}</td>
                          <td className="py-2.5 pr-4">{size.diameterMm}</td>
                          <td className="py-2.5">{size.circumferenceMm}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="how-to-measure">
              <AccordionTrigger>How to Measure at Home</AccordionTrigger>
              <AccordionContent>
                <ol className="list-decimal space-y-3 pl-5">
                  <li>
                    <strong>Diameter method:</strong> Place a ring that fits well on
                    a ruler. Measure the inner diameter at the widest point in
                    millimeters.
                  </li>
                  <li>
                    <strong>Circumference method:</strong> Wrap a strip of paper
                    around your finger at the base, mark the overlap, and measure
                    the length in millimeters.
                  </li>
                  <li>
                    Measure at the end of the day when fingers are at their
                    largest. Avoid measuring when hands are cold.
                  </li>
                  <li>
                    For orders over $3,000, we include a complimentary physical
                    sizing kit with your purchase.
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
