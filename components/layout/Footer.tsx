"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, ShoppingBag, Calendar } from "lucide-react";
import { jewelryConfig } from "@/data/jewelry";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { VIPSchedulerModal } from "@/components/modules/VIPSchedulerModal";

export function Footer() {
  const { brand, contact, footer, promotional } = jewelryConfig;
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="border-t border-whisper bg-onyx text-cream" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-serif text-2xl tracking-[0.15em] text-cream"
            >
              {brand.name}
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-cream/60">
              {brand.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-[0.25em] text-champagne">
              Flagship Atelier
            </h3>
            <address className="mt-4 not-italic text-sm leading-relaxed text-cream/70">
              {contact.boutiqueAddress}
              <br />
              {contact.city}
              <br />
              <a
                href={`tel:${contact.phone.replace(/\D/g, "")}`}
                className="mt-2 inline-block transition-colors hover:text-champagne"
              >
                {contact.phone}
              </a>
            </address>
            <ul className="mt-4 space-y-1 text-xs text-cream/50">
              {contact.storeHours.map((entry) => (
                <li key={entry.day}>
                  {entry.day}: {entry.hours}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-[0.25em] text-champagne">
              {footer.newsletterTitle}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              {footer.newsletterDescription}
            </p>
            <form onSubmit={handleNewsletter} className="mt-4 flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-cream/20 bg-onyx text-cream placeholder:text-cream/30"
                aria-label="Email for newsletter"
              />
              <Button type="submit" variant="champagne" size="sm">
                Join
              </Button>
            </form>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-[0.25em] text-champagne">
              Assurance
            </h3>
            <ul className="mt-4 space-y-2 text-xs leading-relaxed text-cream/60">
              {brand.certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 md:flex-row">
          <p className="text-[10px] tracking-widest text-cream/40">
            {footer.copyright}
          </p>
          <p className="text-[10px] tracking-widest text-cream/40">
            {promotional.securityDisclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}

export function MobileConciergeRibbon() {
  const { contact } = jewelryConfig;
  const [schedulerOpen, setSchedulerOpen] = useState(false);

  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 z-50 border-t border-whisper bg-cream/95 backdrop-blur-md lg:hidden"
        role="toolbar"
        aria-label="Mobile concierge actions"
      >
        <div className="flex items-stretch">
          <a
            href={`tel:${contact.phone.replace(/\D/g, "")}`}
            className="flex flex-1 flex-col items-center justify-center gap-1 py-3 min-h-12 text-[10px] uppercase tracking-widest text-charcoal transition-colors hover:text-champagne"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call Concierge
          </a>

          <button
            type="button"
            onClick={() => setSchedulerOpen(true)}
            className="flex flex-1 flex-col items-center justify-center gap-1 border-x border-whisper py-3 min-h-12 text-[10px] uppercase tracking-widest text-charcoal transition-colors hover:text-champagne"
          >
            <Calendar className="h-5 w-5" aria-hidden="true" />
            Book Viewing
          </button>

          <a
            href="#collection"
            className="flex flex-1 flex-col items-center justify-center gap-1 bg-onyx py-3 min-h-12 text-[10px] uppercase tracking-widest text-champagne transition-colors hover:bg-charcoal"
          >
            <ShoppingBag className="h-5 w-5" aria-hidden="true" />
            Quick Add
          </a>
        </div>
      </div>

      <VIPSchedulerModal open={schedulerOpen} onOpenChange={setSchedulerOpen} />

      <div className="h-16 lg:hidden" aria-hidden="true" />
    </>
  );
}
