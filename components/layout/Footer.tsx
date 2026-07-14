"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar, ShoppingBag, ArrowUp } from "lucide-react";
import { jewelryConfig } from "@/data/jewelry";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { VIPSchedulerModal } from "@/components/modules/VIPSchedulerModal";

export function Footer() {
  const { brand, contact, footer, promotional } = jewelryConfig;
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-whisper bg-onyx text-cream" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="group font-serif text-2xl tracking-[0.15em] text-cream transition-colors hover:text-champagne"
            >
              {brand.name}
              <span className="block h-px w-0 bg-champagne transition-all duration-500 group-hover:w-full" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              {brand.tagline}
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              className="mt-8 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-cream/40 transition-colors hover:text-champagne"
            >
              <ArrowUp className="h-3 w-3" aria-hidden="true" />
              Back to top
            </button>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-[0.25em] text-champagne">
              Flagship Atelier
            </h3>
            <address className="mt-5 not-italic text-sm leading-relaxed text-cream/70">
              {contact.boutiqueAddress}
              <br />
              {contact.city}
              <br />
              <a
                href={`tel:${contact.phone.replace(/\D/g, "")}`}
                className="mt-3 inline-block transition-colors hover:text-champagne"
              >
                {contact.phone}
              </a>
            </address>
            <ul className="mt-5 space-y-1.5 text-xs text-cream/50">
              {contact.storeHours.map((entry) => (
                <li key={entry.day}>
                  <span className="text-cream/40">{entry.day}:</span>{" "}
                  {entry.hours}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-[0.25em] text-champagne">
              {footer.newsletterTitle}
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-cream/60">
              {footer.newsletterDescription}
            </p>
            <form onSubmit={handleNewsletter} className="mt-5 flex gap-2">
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
                {subscribed ? "Joined" : "Join"}
              </Button>
            </form>
            <AnimatePresence>
              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mt-3 text-xs text-champagne"
                >
                  Welcome to the Inner Circle
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-[0.25em] text-champagne">
              Assurance
            </h3>
            <ul className="mt-5 space-y-3 text-xs leading-relaxed text-cream/60">
              {brand.certifications.map((cert) => (
                <li key={cert} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-champagne/40" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 md:flex-row">
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
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50 border-t border-whisper bg-cream/98 backdrop-blur-xl shadow-luxury-drawer lg:hidden"
        role="toolbar"
        aria-label="Mobile concierge actions"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-stretch">
          <a
            href={`tel:${contact.phone.replace(/\D/g, "")}`}
            className="group flex flex-1 flex-col items-center justify-center gap-1 py-3 min-h-14 text-[10px] uppercase tracking-widest text-charcoal transition-all hover:text-champagne"
          >
            <Phone className="h-5 w-5 transition-transform group-hover:scale-110" aria-hidden="true" />
            Call Concierge
          </a>

          <button
            type="button"
            onClick={() => setSchedulerOpen(true)}
            className="group flex flex-1 flex-col items-center justify-center gap-1 border-x border-whisper py-3 min-h-14 text-[10px] uppercase tracking-widest text-charcoal transition-all hover:text-champagne"
          >
            <Calendar className="h-5 w-5 transition-transform group-hover:scale-110" aria-hidden="true" />
            Book Viewing
          </button>

          <a
            href="#collection"
            className="group flex flex-1 flex-col items-center justify-center gap-1 bg-onyx py-3 min-h-14 text-[10px] uppercase tracking-widest text-champagne transition-all hover:bg-charcoal"
          >
            <ShoppingBag className="h-5 w-5 transition-transform group-hover:scale-110" aria-hidden="true" />
            Quick Add
          </a>
        </div>
      </motion.div>

      <VIPSchedulerModal open={schedulerOpen} onOpenChange={setSchedulerOpen} />

      <div className="h-16 lg:hidden" aria-hidden="true" />
    </>
  );
}