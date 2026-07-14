"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight, Check } from "lucide-react";
import type { Product } from "@/types/jewelry";
import { formatPrice, calculateProductPrice } from "@/lib/utils";
import { MaterialSelector } from "@/components/product/MaterialSelector";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
  index: number;
  onBookViewing?: () => void;
  onAddToCart?: (productId: string) => void;
  isJustAdded?: boolean;
}

export function ProductCard({
  product,
  index,
  onBookViewing,
  onAddToCart,
  isJustAdded,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedMetal, setSelectedMetal] = useState(product.metalOptions[0]?.id);
  const [selectedStone, setSelectedStone] = useState(product.stoneOptions[0]?.id);
  const [addingToCart, setAddingToCart] = useState(false);

  const activeMetal = product.metalOptions.find((m) => m.id === selectedMetal);
  const activeStone = product.stoneOptions.find((s) => s.id === selectedStone);
  const price = calculateProductPrice(
    product.basePrice,
    activeMetal?.priceModifier ?? 0,
    activeStone?.priceModifier ?? 0
  );

  const displayImage = isHovered
    ? product.imagePaths.hover
    : product.imagePaths.primary;

  const handleAddToCart = () => {
    setAddingToCart(true);
    onAddToCart?.(product.id);
    setTimeout(() => setAddingToCart(false), 1500);
  };

  return (
    <motion.article
      className="group flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="relative aspect-[4/5] overflow-hidden border border-whisper bg-cream shadow-luxury transition-shadow duration-500 group-hover:shadow-luxury-lg">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={displayImage}
            alt={product.imagePaths.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            priority={index < 2}
          />
        </motion.div>

        <div className="absolute left-3 top-3 flex flex-col gap-2">
          {product.stockCount > 0 && product.stockCount <= 3 && (
            <Badge variant="limited">
              Limited — {product.stockCount} Left
            </Badge>
          )}
          {product.isBespokeOnly && <Badge variant="bespoke">Bespoke Only</Badge>}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-onyx/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Quick actions overlay */}
        <div className="absolute right-3 top-3 opacity-0 transition-all duration-300 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0">
          {!product.isBespokeOnly && onAddToCart && (
            <button
              type="button"
              onClick={handleAddToCart}
              disabled={addingToCart}
              className="flex min-h-10 min-w-10 items-center justify-center bg-cream/95 backdrop-blur-sm text-charcoal transition-all hover:text-champagne shadow-luxury"
              aria-label="Quick add to cart"
            >
              {isJustAdded ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <ShoppingBag className="h-4 w-4" />
              )}
            </button>
          )}
        </div>
      </div>

      <div className="mt-5 flex flex-1 flex-col space-y-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-charcoal/50">
            {product.category}
          </p>
          <h3 className="mt-1 font-serif text-xl font-light tracking-wide text-charcoal">
            {product.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-charcoal/65">
            {product.description}
          </p>
        </div>

        <MaterialSelector
          metalOptions={product.metalOptions}
          stoneOptions={product.stoneOptions}
          basePrice={product.basePrice}
          onMetalChange={setSelectedMetal}
          onStoneChange={setSelectedStone}
          compact
        />

        <div className="mt-auto flex gap-3 pt-2">
          {product.isBespokeOnly ? (
            <Button
              variant="champagne"
              className="flex-1 gap-2"
              onClick={onBookViewing}
            >
              Book Consultation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          ) : (
            <>
              <Button
                variant="default"
                className="flex-1 gap-2 transition-all duration-300"
                onClick={handleAddToCart}
                disabled={addingToCart}
              >
                {isJustAdded ? (
                  <>
                    <Check className="h-4 w-4" aria-hidden="true" />
                    Added
                  </>
                ) : (
                  <>
                    <ShoppingBag className="h-4 w-4" aria-hidden="true" />
                    Add to Bag
                  </>
                )}
                <span className="text-cream/70">—</span>
                <span className="text-cream">{formatPrice(price)}</span>
              </Button>
            </>
          )}
        </div>
      </div>
    </motion.article>
  );
}