"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, ChevronDown, Phone, Diamond } from "lucide-react";
import { jewelryConfig } from "@/data/jewelry";
import { Button } from "@/components/ui/button";
import { VIPSchedulerModal } from "@/components/modules/VIPSchedulerModal";

export function Header() {
  const { brand, navigation, contact } = jewelryConfig;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeNav = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinks = [
    { href: "/", label: navigation.homeLabel },
    { href: "#heritage", label: navigation.aboutLabel },
    { href: "#collection", label: navigation.collectionsLabel },
  ];

  const pagesLinks = [
    { href: "#bespoke", label: navigation.bespokeLabel },
    { href: "#trust", label: "Authenticity" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-whisper/60 bg-cream/95 shadow-luxury-md backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group relative flex items-center gap-2 font-serif text-xl tracking-[0.15em] text-charcoal transition-colors hover:text-champagne md:text-2xl"
          aria-label={`${brand.name} home`}
        >
          <Diamond className="h-5 w-5 text-champagne" aria-hidden="true" />
          <span className="relative">
            {brand.name}
            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-champagne transition-all duration-500 group-hover:w-full" />
          </span>
        </Link>

        {/* Desktop Pill Navigation */}
        <nav
          className="nav-pill hidden items-center gap-1 px-3 py-2 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative rounded-full px-6 py-2.5 text-[13px] uppercase tracking-[0.15em] text-charcoal/70 transition-colors hover:bg-charcoal/5 hover:text-charcoal"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {link.label}
            </Link>
          ))}

          {/* Pages dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setPagesOpen(true)}
            onMouseLeave={() => setPagesOpen(false)}
          >
            <button
              type="button"
              className="group flex items-center gap-1.5 rounded-full px-6 py-2.5 text-[13px] uppercase tracking-[0.15em] text-charcoal/70 transition-colors hover:bg-charcoal/5 hover:text-charcoal"
            >
              {navigation.pagesLabel}
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${pagesOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            <AnimatePresence>
              {pagesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full z-50 mt-1 w-48 overflow-hidden rounded-2xl border border-whisper bg-white shadow-luxury-lg"
                >
                  {pagesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-5 py-3 text-xs uppercase tracking-[0.15em] text-charcoal/70 transition-colors hover:bg-charcoal/5 hover:text-charcoal"
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mx-1 h-6 w-px bg-whisper" aria-hidden="true" />

          <VIPSchedulerModal
            trigger={
              <Button variant="default" size="sm" className="rounded-full bg-charcoal text-cream hover:bg-onyx px-6 py-2.5 text-[13px]">
                {navigation.contactLabel}
              </Button>
            }
          />
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${contact.phone.replace(/\D/g, "")}`}
            className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-charcoal/50 transition-colors hover:text-champagne"
            aria-label={`Call ${brand.name} concierge`}
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {contact.phone}
          </a>
        </div>

        <button
          type="button"
          className="relative z-50 flex min-h-12 min-w-12 items-center justify-center lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-drawer"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-charcoal" />
          ) : (
            <Menu className="h-6 w-6 text-charcoal" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-onyx/50 backdrop-blur-sm lg:hidden"
              onClick={closeNav}
              aria-hidden="true"
            />
            <motion.nav
              id="mobile-nav-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-40 w-[85vw] max-w-sm border-l border-whisper bg-cream shadow-luxury-drawer lg:hidden"
              aria-label="Mobile navigation"
            >
              <div className="flex h-full flex-col pt-24 pb-8">
                <div className="flex-1 overflow-y-auto px-6">
                  <ul className="space-y-1">
                    {navLinks.map((link, i) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <Link
                          href={link.href}
                          className="group flex items-center justify-between border-b border-whisper/50 py-5 text-lg uppercase tracking-[0.15em] text-charcoal transition-colors hover:text-champagne"
                          onClick={closeNav}
                        >
                          {link.label}
                          <ChevronRight className="h-4 w-4 text-charcoal/30 transition-all group-hover:translate-x-1 group-hover:text-champagne" />
                        </Link>
                      </motion.li>
                    ))}
                    {pagesLinks.map((link, i) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.25 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <Link
                          href={link.href}
                          className="group flex items-center justify-between border-b border-whisper/50 py-5 text-lg uppercase tracking-[0.15em] text-charcoal transition-colors hover:text-champagne"
                          onClick={closeNav}
                        >
                          {link.label}
                          <ChevronRight className="h-4 w-4 text-charcoal/30 transition-all group-hover:translate-x-1 group-hover:text-champagne" />
                        </Link>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-8 space-y-4">
                    <div className="h-px bg-gradient-to-r from-transparent via-whisper to-transparent" />
                    <a
                      href={`tel:${contact.phone.replace(/\D/g, "")}`}
                      className="flex items-center gap-3 py-3 text-sm text-charcoal/60 transition-colors hover:text-champagne"
                    >
                      <Phone className="h-4 w-4 text-champagne" aria-hidden="true" />
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <div className="border-t border-whisper px-6 pt-6">
                  <VIPSchedulerModal
                    trigger={
                      <Button variant="champagne" className="w-full rounded-full">
                        {navigation.contactLabel}
                      </Button>
                    }
                  />
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
