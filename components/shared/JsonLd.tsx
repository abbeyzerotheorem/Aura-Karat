import { generateJewelryStoreJsonLd } from "@/lib/json-ld";

export function JsonLd() {
  const schema = generateJewelryStoreJsonLd();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
