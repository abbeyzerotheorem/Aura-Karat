import { jewelryConfig } from "@/data/jewelry";

export function LuxuryBanner() {
  const { promotional } = jewelryConfig;

  if (!promotional.bannerEnabled) return null;

  return (
    <div
      className="bg-onyx py-2.5 text-center text-xs tracking-[0.15em] text-cream"
      role="banner"
    >
      <p className="px-4">{promotional.bannerText}</p>
    </div>
  );
}
