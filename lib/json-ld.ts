import { jewelryConfig } from "@/data/jewelry";
import { calculateProductPrice } from "@/lib/utils";

export function generateJewelryStoreJsonLd() {
  const { brand, contact, products } = jewelryConfig;

  return {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    name: brand.name,
    description: brand.description,
    url: "https://auraandkarat.com",
    telephone: contact.phone,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.boutiqueAddress,
      addressLocality: contact.city,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: contact.mapCoordinates.lat,
      longitude: contact.mapCoordinates.lng,
    },
    openingHoursSpecification: contact.storeHours.map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: entry.day,
      opens: entry.hours.split("–")[0]?.trim() || "10:00",
      closes: entry.hours.split("–")[1]?.trim() || "18:00",
    })),
    priceRange: "$$$$",
    image: jewelryConfig.seo.ogImage,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${brand.name} Collection`,
      itemListElement: products.map((product, index) => {
        const defaultMetal = product.metalOptions[0];
        const defaultStone = product.stoneOptions[0];
        const price = calculateProductPrice(
          product.basePrice,
          defaultMetal?.priceModifier ?? 0,
          defaultStone?.priceModifier ?? 0
        );

        return {
          "@type": "Offer",
          position: index + 1,
          itemOffered: {
            "@type": "Product",
            name: product.title,
            description: product.description,
            image: product.imagePaths.primary,
            sku: product.id,
            brand: {
              "@type": "Brand",
              name: brand.name,
            },
            material: defaultMetal?.label,
            category: product.category,
            offers: {
              "@type": "Offer",
              price: price,
              priceCurrency: "USD",
              availability:
                product.stockCount > 0
                  ? "https://schema.org/InStock"
                  : "https://schema.org/PreOrder",
              seller: {
                "@type": "Organization",
                name: brand.name,
              },
            },
            additionalProperty: [
              ...product.metalOptions.map((metal) => ({
                "@type": "PropertyValue",
                name: "Metal Option",
                value: metal.label,
              })),
              ...product.stoneOptions.map((stone) => ({
                "@type": "PropertyValue",
                name: "Stone Option",
                value: stone.label,
              })),
            ],
          },
        };
      }),
    },
  };
}
