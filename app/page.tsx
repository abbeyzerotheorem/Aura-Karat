import { LuxuryBanner } from "@/components/layout/LuxuryBanner";
import { Header } from "@/components/layout/Header";
import { Footer, MobileConciergeRibbon } from "@/components/layout/Footer";
import { PageReveal } from "@/components/shared/MotionWrapper";
import { HeroSection } from "@/sections/HeroSection";
import { CollectionsGrid } from "@/sections/CollectionsGrid";
import { MasterCollection } from "@/sections/MasterCollection";
import { BespokePipeline } from "@/sections/BespokePipeline";
import { CraftsmanshipStandard } from "@/sections/CraftsmanshipStandard";
import { TrustCertification } from "@/components/modules/TrustCertification";
import { Testimonials } from "@/sections/Testimonials";
import { RingSizer } from "@/components/modules/RingSizer";
import { FAQSection } from "@/sections/FAQSection";

export default function Home() {
  return (
    <PageReveal>
      <LuxuryBanner />
      <Header />
      <main id="main-content">
        <HeroSection />
        <CollectionsGrid />
        <MasterCollection />
        <BespokePipeline />
        <CraftsmanshipStandard />
        <TrustCertification />
        <Testimonials />
        <RingSizer />
        <FAQSection />
      </main>
      <Footer />
      <MobileConciergeRibbon />
    </PageReveal>
  );
}
