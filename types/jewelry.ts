export type MetalOption = {
  id: string;
  label: string;
  priceModifier: number;
  colorHex: string;
  imageKey: string;
};

export type StoneOption = {
  id: string;
  label: string;
  priceModifier: number;
  certification: string;
};

export type ProductImagePaths = {
  primary: string;
  hover: string;
  alt: string;
};

export type Product = {
  id: string;
  title: string;
  basePrice: number;
  metalOptions: MetalOption[];
  stoneOptions: StoneOption[];
  description: string;
  category: string;
  sizeArray: number[];
  stockCount: number;
  isBespokeOnly: boolean;
  imagePaths: ProductImagePaths;
};

export type CollectionCategory = {
  id: string;
  title: string;
  subtitle: string;
  imagePath: string;
  href: string;
  span: "default" | "wide" | "tall";
};

export type CertificationBadge = {
  id: string;
  title: string;
  description: string;
  icon: "assay" | "gia" | "warranty" | "ethical" | "insured" | "recycled";
};

export type BespokeStep = {
  step: number;
  title: string;
  description: string;
  imagePath: string;
};

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  quote: string;
  piece: string;
  rating: number;
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type RingSizeGuide = {
  us: number;
  uk: string;
  eu: number;
  circumferenceMm: number;
  diameterMm: number;
};

export type StoreHours = {
  day: string;
  hours: string;
};

export type JewelryConfig = {
  brand: {
    name: string;
    tagline: string;
    description: string;
    certifications: string[];
    careInstructions: string[];
  };
  contact: {
    boutiqueAddress: string;
    city: string;
    phone: string;
    email: string;
    storeHours: StoreHours[];
  };
  hero: {
    headline: string;
    primaryCta: string;
    imagePath: string;
    subtextLabel: string;
    subtextDescription: string;
    socialProofText: string;
    socialProofCount: string;
    featuredProductTitle: string;
    featuredProductImage: string;
  };
  heritage: {
    imagePath: string;
    sectionTitle: string;
    sectionSubtitle: string;
  };
  collections: CollectionCategory[];
  products: Product[];
  bespokeSteps: BespokeStep[];
  certifications: CertificationBadge[];
  testimonials: Testimonial[];
  faqs: FAQItem[];
  ringSizeGuide: RingSizeGuide[];
  promotional: {
    shippingDisclaimer: string;
    securityDisclaimer: string;
  };
  navigation: {
    shopLabel: string;
    bespokeLabel: string;
    heritageLabel: string;
    conciergeLabel: string;
    homeLabel: string;
    aboutLabel: string;
    collectionsLabel: string;
    pagesLabel: string;
    contactLabel: string;
  };
  footer: {
    newsletterTitle: string;
    newsletterDescription: string;
    copyright: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
  };
  sections: {
    collections: { eyebrow: string; title: string };
    masterCollection: { eyebrow: string; title: string; description: string };
    bespoke: { eyebrow: string; title: string; description: string; cta: string };
    testimonials: { eyebrow: string; title: string };
    ringSizer: { eyebrow: string; title: string; description: string };
    faq: { eyebrow: string; title: string };
    trust: { eyebrow: string; title: string; description: string };
    usp: { items: { icon: string; label: string; description: string }[] };
    chooseType: {
      eyebrow: string;
      title: string;
      subtitle: string;
      imagePath: string;
      categories: { label: string; href: string }[];
    };
  };
};
