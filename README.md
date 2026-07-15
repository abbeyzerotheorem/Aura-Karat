# Aura & Karat — Luxury Fine Jewelry Website

A premium Next.js website for **Aura & Karat**, a flagship atelier crafting bespoke and ready-to-wear fine jewelry from ethically recycled precious metals and GIA-certified conflict-free diamonds.

![Next.js](https://img.shields.io/badge/Next.js-16.2.10-black)
![React](https://img.shields.io/badge/React-19.2.4-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)

## ✨ Features

- **Bespoke Custom Design** — Interactive 4-stage commission pipeline with 3D CAD visualization
- **Product Customization** — Live metal and stone selection with dynamic pricing
- **Virtual Ring Sizer** — Interactive tool for accurate ring size measurement
- **VIP Scheduler** — Private viewing appointment booking system
- **Trust & Certifications** — GIA certification display and authenticity verification
- **Responsive Design** — Mobile-first with luxury desktop experience
- **SEO Optimized** — JSON-LD structured data, Open Graph, and Twitter Cards
- **Smooth Animations** — Framer Motion-powered page reveals and interactions
- **Accessibility** — Skip navigation, ARIA labels, and keyboard-friendly UI

## 🛠 Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4 |
| **UI Components** | Radix UI (Accordion, Dialog, Label, Slot) |
| **Animations** | Framer Motion 12 |
| **Icons** | Lucide React |
| **Utilities** | clsx, class-variance-authority, tailwind-merge |
| **Fonts** | Cormorant Garamond (serif), DM Sans (sans-serif) |

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
aura-and-karat/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Homepage composition
│   ├── globals.css         # Global styles and CSS variables
│   └── favicon.ico
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Site footer with newsletter
│   ├── modules/
│   │   ├── RingSizer.tsx   # Virtual ring sizing tool
│   │   ├── TrustCertification.tsx  # Certification display
│   │   └── VIPSchedulerModal.tsx   # Appointment booking
│   ├── product/
│   │   ├── MaterialSelector.tsx    # Metal/stone selection
│   │   └── ProductCard.tsx         # Product display component
│   ├── shared/
│   │   ├── JsonLd.tsx      # SEO structured data
│   │   └── MotionWrapper.tsx # Animation wrapper
│   └── ui/                 # Reusable UI primitives (Radix-based)
├── data/
│   └── jewelry.ts          # Central configuration (products, content, SEO)
├── lib/
│   ├── metadata.ts         # SEO metadata generation
│   ├── json-ld.ts          # JSON-LD schema builders
│   └── utils.ts            # Utility functions
├── sections/
│   ├── HeroSection.tsx     # Hero banner with social proof
│   ├── USPRow.tsx          # Value propositions
│   ├── CollectionsGrid.tsx # Product category grid
│   ├── ChooseTypeSection.tsx # Category exploration
│   ├── MasterCollection.tsx # Featured products with customization
│   ├── BespokePipeline.tsx # 4-step bespoke process
│   ├── CraftsmanshipStandard.tsx # Quality standards
│   ├── Testimonials.tsx    # Client testimonials
│   └── FAQSection.tsx      # Frequently asked questions
├── types/
│   └── jewelry.ts          # TypeScript type definitions
└── public/                 # Static assets (images, icons)
```

## 🎨 Design System

### Typography
- **Display/Headings**: Cormorant Garamond (300-600 weights)
- **Body/UI**: DM Sans (400-600 weights)

### Color Palette
- **Cream** (`bg-cream`) — Primary background
- **Charcoal** (`text-charcoal`) — Primary text
- **Onyx** (`bg-onyx`) — Dark accents
- Custom CSS variables for brand colors

### Key Components

#### Product Customization
The `MaterialSelector` component enables real-time metal and stone selection with:
- Dynamic price calculation
- Color swatches for metals
- Certification display for stones
- Stock availability tracking

#### Bespoke Pipeline
4-stage interactive journey:
1. **Inspiration** — Concept sketches and consultation
2. **3D CAD Render** — Photorealistic previews
3. **Master Crafting** — Hand-finished production
4. **White-Glove Delivery** — Insured shipping with documentation

#### Virtual Ring Sizer
Interactive tool supporting:
- Existing ring measurement
- Finger measurement
- Multi-size system conversion (US, UK, EU)

## 🔧 Configuration

All site content is centralized in `data/jewelry.ts`:

- **Brand identity** — Name, tagline, certifications
- **Contact info** — Address, phone, email, store hours
- **Products** — Pricing, options, descriptions, images
- **Collections** — Category organization
- **Bespoke process** — Step-by-step pipeline
- **Testimonials** — Client reviews and ratings
- **FAQs** — Common questions and answers
- **SEO** — Meta tags, Open Graph, keywords

### Adding New Products

```typescript
{
  id: "unique-product-id",
  title: "Product Name",
  basePrice: 2500,
  metalOptions: [
    {
      id: "metal-id",
      label: "14k Yellow Gold",
      priceModifier: 0,
      colorHex: "#CBB281",
      imageKey: "primary"
    }
  ],
  stoneOptions: [
    {
      id: "stone-id",
      label: "Diamond",
      priceModifier: 500,
      certification: "GIA #123456789"
    }
  ],
  description: "Product description...",
  category: "Category Name",
  sizeArray: [5, 6, 7, 8],
  stockCount: 3,
  isBespokeOnly: false,
  imagePaths: {
    primary: "/image.jpeg",
    hover: "/image-hover.jpeg",
    alt: "Descriptive alt text"
  }
}
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Manual Build
```bash
npm run build
npm run start
```

## 🌐 SEO & Metadata

The site includes comprehensive SEO optimization:

- **Dynamic metadata** — Generated from `data/jewelry.ts`
- **JSON-LD schemas** — Product, organization, and FAQ schemas
- **Open Graph** — Social media sharing optimization
- **Twitter Cards** — Enhanced Twitter previews
- **Semantic HTML** — Proper heading hierarchy and landmarks

## ♿ Accessibility

- Skip-to-content navigation link
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus management in modals
- Alt text for all images
- Semantic HTML structure

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (localhost:3000) |
| `npm run build` | Create production build |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint |

## 🤝 Contributing

This is a private project for Aura & Karat. For inquiries, contact:

**Email**: concierge@auraandkarat.com  
**Phone**: +1 (212) 555-0147  
**Address**: 742 Madison Avenue, Suite 12, New York, NY 10065

## 📄 License

© 2026 Aura & Karat. All rights reserved.

---

**Built with precision. Designed for heirlooms.**