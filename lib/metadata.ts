import type { Metadata } from "next";
import { jewelryConfig } from "@/data/jewelry";

export function generateSiteMetadata(): Metadata {
  const { seo, brand } = jewelryConfig;

  return {
    title: {
      default: seo.title,
      template: `%s | ${brand.name}`,
    },
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: brand.name }],
    creator: brand.name,
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: brand.name,
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: seo.ogImage,
          width: 1200,
          height: 630,
          alt: `${brand.name} — ${brand.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [seo.ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
