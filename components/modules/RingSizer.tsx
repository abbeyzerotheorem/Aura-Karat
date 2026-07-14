"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Ruler, Circle, ArrowRight } from "lucide-react";
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
  const { ringSizeGuide, sections } = jewelryConfig;
  const [diameterInput, setDiameterInput] = useState("");
  const [circumferenceInput, setCircumferenceInput] = useState("");
  const [activeTab, setActiveTab] = useState<"diameter" | "circumference">("diameter");

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

  const diameterValue = parseFloat(diameterInput);
  const circumferenceValue = parseFloat(circumferenceInput);
  const diameterMatch = diameterInput && !isNaN(diameterValue)
    ? findByDiameter(diameterValue)
    : null;
  const circumferenceMatch = circumferenceInput && !isNaN(circumferenceValue)
    ? findByCircumference(circumferenceValue)
    : null;

  return (
    <section
      id="ring-sizer"
      className="py-28 md:py-36"
      aria-labelledby="ring-sizer-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-champagne">
            {sections.ringSizer.eyebrow}
          </p>
          <h2
            id="ring-sizer-heading"
            className="mt-4 font-serif text-4xl font-light tracking-wide text-charcoal md:text-5xl"
          >
            {sections.ringSizer.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-charcoal/65">
            {sections.ringSizer.description}
          </p>
        </MotionWrapper>

        <div className="mx-auto mt-16 max-w-3xl">
          {/* Method tabs */}
          <div className="mb-6 flex">
            <button
              type="button"
              onClick={() => setActiveTab("diameter")}
              className={`flex-1 min-h-12 text-xs uppercase tracking-[0.2em] transition-all duration-300 ${
                activeTab === "diameter"
                  ? "border-b-2 border-champagne text-charcoal"
                  : "border-b border-whisper text-charcoal/40 hover:text-charcoal/70"
              }`}
            >
              <Circle className="mx-auto mb-1 h-4 w-4" aria-hidden="true" />
              By Inner Diameter
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("circumference")}
              className={`flex-1 min-h-12 text-xs uppercase tracking-[0.2em] transition-all duration-300 ${
                activeTab === "circumference"
                  ? "border-b-2 border-champagne text-charcoal"
                  : "border-b border-whisper text-charcoal/40 hover:text-charcoal/70"
              }`}
            >
              <Ruler className="mx-auto mb-1 h-4 w-4" aria-hidden="true" />
              By Circumference
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "diameter" ? (
              <motion.div
                key="diameter"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="border border-whisper bg-cream p-8 shadow-luxury"
              >
                <Label htmlFor="diameter-mm" className="mb-3 block text-sm">
                  Enter the inner diameter of a ring that fits you well
                </Label>
                <div className="flex gap-3">
                  <Input
                    id="diameter-mm"
                    type="number"
                    step="0.1"
                    min="12"
                    max="24"
                    placeholder="mm, e.g. 16.5"
                    value={diameterInput}
                    onChange={(e) => setDiameterInput(e.target.value)}
                    aria-describedby="diameter-result"
                    className="flex-1"
                  />
                  <span className="flex items-center text-[10px] uppercase tracking-widest text-charcoal/40">
                    mm
                  </span>
                </div>

                <AnimatePresence>
                  {diameterMatch && diameterInput && !isNaN(diameterValue) && (
                    <motion.div
                      id="diameter-result"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 overflow-hidden"
                    >
                      <div className="border-l-2 border-champagne bg-champagne/5 p-5">
                        <p className="text-[10px] uppercase tracking-widest text-champagne">
                          Your Recommended Size
                        </p>
                        <div className="mt-3 grid grid-cols-3 gap-4">
                          <div>
                            <span className="block text-xs text-charcoal/50">US</span>
                            <span className="block font-serif text-2xl text-charcoal">
                              {diameterMatch.us}
                            </span>
                          </div>
                          <div>
                            <span className="block text-xs text-charcoal/50">UK</span>
                            <span className="block font-serif text-2xl text-charcoal">
                              {diameterMatch.uk}
                            </span>
                          </div>
                          <div>
                            <span className="block text-xs text-charcoal/50">EU</span>
                            <span className="block font-serif text-2xl text-charcoal">
                              {diameterMatch.eu}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                key="circumference"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="border border-whisper bg-cream p-8 shadow-luxury"
              >
                <Label htmlFor="circumference-mm" className="mb-3 block text-sm">
                  Enter the measurement of your finger circumference
                </Label>
                <div className="flex gap-3">
                  <Input
                    id="circumference-mm"
                    type="number"
                    step="0.1"
                    min="40"
                    max="75"
                    placeholder="mm, e.g. 52.0"
                    value={circumferenceInput}
                    onChange={(e) => setCircumferenceInput(e.target.value)}
                    aria-describedby="circumference-result"
                    className="flex-1"
                  />
                  <span className="flex items-center text-[10px] uppercase tracking-widest text-charcoal/40">
                    mm
                  </span>
                </div>

                <AnimatePresence>
                  {circumferenceMatch && circumferenceInput && !isNaN(circumferenceValue) && (
                    <motion.div
                      id="circumference-result"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 overflow-hidden"
                    >
                      <div className="border-l-2 border-champagne bg-champagne/5 p-5">
                        <p className="text-[10px] uppercase tracking-widest text-champagne">
                          Your Recommended Size
                        </p>
                        <div className="mt-3 grid grid-cols-3 gap-4">
                          <div>
                            <span className="block text-xs text-charcoal/50">US</span>
                            <span className="block font-serif text-2xl text-charcoal">
                              {circumferenceMatch.us}
                            </span>
                          </div>
                          <div>
                            <span className="block text-xs text-charcoal/50">UK</span>
                            <span className="block font-serif text-2xl text-charcoal">
                              {circumferenceMatch.uk}
                            </span>
                          </div>
                          <div>
                            <span className="block text-xs text-charcoal/50">EU</span>
                            <span className="block font-serif text-2xl text-charcoal">
                              {circumferenceMatch.eu}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>

          <Accordion type="single" collapsible className="mt-10">
            <AccordionItem value="size-chart">
              <AccordionTrigger>Complete International Size Chart</AccordionTrigger>
              <AccordionContent>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[480px] text-left text-sm">
                    <thead>
                      <tr className="border-b border-whisper text-[10px] uppercase tracking-widest text-charcoal/50">
                        <th className="py-3 pr-4" scope="col">US</th>
                        <th className="py-3 pr-4" scope="col">UK</th>
                        <th className="py-3 pr-4" scope="col">EU</th>
                        <th className="py-3 pr-4" scope="col">Diameter (mm)</th>
                        <th className="py-3" scope="col">Circumference (mm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ringSizeGuide.map((size) => (
                        <tr
                          key={size.us}
                          className="border-b border-whisper/50 text-charcoal/80 transition-colors hover:bg-champagne/5"
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
                <ol className="list-decimal space-y-4 pl-5">
                  {[
                    "Place a ring that fits well on a ruler. Measure the inner diameter at the widest point in millimeters.",
                    "Wrap a strip of paper around your finger at the base, mark the overlap, and measure the length in millimeters.",
                    "Measure at the end of the day when fingers are at their largest. Avoid measuring when hands are cold.",
                    "For orders over $3,000, we include a complimentary physical sizing kit with your purchase.",
                  ].map((instruction, i) => (
                    <li key={i} className="text-sm leading-relaxed text-charcoal/75">
                      <strong className="text-charcoal">Step {i + 1}:</strong>{" "}
                      {instruction}
                    </li>
                  ))}
                </ol>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}