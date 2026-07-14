"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { jewelryConfig } from "@/data/jewelry";
import { Button } from "@/components/ui/button";
import { VIPSchedulerModal } from "@/components/modules/VIPSchedulerModal";

export function Header() {
  const { brand, navigation } = jewelryConfig;
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "#collection", label: navigation.shopLabel },
    { href: "#bespoke", label: navigation.bespokeLabel },
    { href: "#heritage", label: navigation.heritageLabel },
    { href: "#trust", label: "Authenticity" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-whisper bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-serif text-xl tracking-[0.15em] text-charcoal transition-colors hover:text-champagne md:text-2xl"
          aria-label={`${brand.name} home`}
        >
          {brand.name}
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-charcoal/70 transition-colors hover:text-champagne"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <VIPSchedulerModal
            trigger={
              <Button variant="outline" size="sm">
                {navigation.conciergeLabel}
              </Button>
            }
          />
        </div>

        <button
          type="button"
          className="flex min-h-12 min-w-12 items-center justify-center lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-charcoal" />
          ) : (
            <Menu className="h-6 w-6 text-charcoal" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-whisper bg-cream px-4 py-6 lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block min-h-12 py-3 text-sm uppercase tracking-[0.2em] text-charcoal"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <VIPSchedulerModal
                trigger={
                  <Button variant="champagne" className="w-full">
                    {navigation.conciergeLabel}
                  </Button>
                }
              />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
