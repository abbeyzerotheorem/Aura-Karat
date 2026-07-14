"use client";

import { useState } from "react";
import { jewelryConfig } from "@/data/jewelry";
import { ProductCard } from "@/components/product/ProductCard";
import { VIPSchedulerModal } from "@/components/modules/VIPSchedulerModal";
import { MotionWrapper } from "@/components/shared/MotionWrapper";

export function MasterCollection() {
  const { products, brand } = jewelryConfig;
  const [schedulerOpen, setSchedulerOpen] = useState(false);

  return (
    <section
      id="collection"
      className="border-t border-whisper bg-cream py-20 md:py-28"
      aria-labelledby="master-collection-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-champagne">
            The Master Collection
          </p>
          <h2
            id="master-collection-heading"
            className="mt-3 font-serif text-3xl font-light tracking-wide text-charcoal md:text-4xl"
          >
            Pieces Worth Passing Down
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-charcoal/65">
            Select your metal and stone to see live pricing. Each piece is
            hand-finished in our {brand.name} atelier.
          </p>
        </MotionWrapper>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onBookViewing={() => setSchedulerOpen(true)}
            />
          ))}
        </div>
      </div>

      <VIPSchedulerModal open={schedulerOpen} onOpenChange={setSchedulerOpen} />
    </section>
  );
}
