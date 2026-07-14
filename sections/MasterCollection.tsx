"use client";

import { useState } from "react";
import { jewelryConfig } from "@/data/jewelry";
import { ProductCard } from "@/components/product/ProductCard";
import { VIPSchedulerModal } from "@/components/modules/VIPSchedulerModal";
import { MotionWrapper } from "@/components/shared/MotionWrapper";

export function MasterCollection() {
  const { products, brand, sections } = jewelryConfig;
  const [schedulerOpen, setSchedulerOpen] = useState(false);
  const [addedToCart, setAddedToCart] = useState<string | null>(null);

  const handleAddToCart = (productId: string) => {
    setAddedToCart(productId);
    setTimeout(() => setAddedToCart(null), 2000);
  };

  return (
    <section
      id="collection"
      className="border-t border-whisper bg-cream py-24 md:py-32"
      aria-labelledby="master-collection-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-champagne">
            {sections.masterCollection.eyebrow}
          </p>
          <h2
            id="master-collection-heading"
            className="mt-4 font-serif text-4xl font-light tracking-wide text-charcoal md:text-5xl"
          >
            {sections.masterCollection.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-charcoal/65">
            {sections.masterCollection.description}
          </p>
        </MotionWrapper>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onBookViewing={() => setSchedulerOpen(true)}
              onAddToCart={handleAddToCart}
              isJustAdded={addedToCart === product.id}
            />
          ))}
        </div>
      </div>

      {/* Toast notification */}
      <div
        className="fixed bottom-24 left-1/2 z-50 -translate-x-1/2 transition-all duration-500 lg:bottom-8"
        aria-live="polite"
      >
        {addedToCart && (
          <div className="rounded-none border border-champagne/30 bg-onyx px-6 py-3 text-sm tracking-wide text-cream shadow-luxury-lg">
            Added to your collection — concierge will follow up
          </div>
        )}
      </div>

      <VIPSchedulerModal open={schedulerOpen} onOpenChange={setSchedulerOpen} />
    </section>
  );
}