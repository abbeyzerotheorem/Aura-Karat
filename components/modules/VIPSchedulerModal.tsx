"use client";

import { useState } from "react";
import { Calendar, Clock, Mail, Phone, User } from "lucide-react";
import { jewelryConfig } from "@/data/jewelry";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface VIPSchedulerModalProps {
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function VIPSchedulerModal({
  trigger,
  open,
  onOpenChange,
}: VIPSchedulerModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const { contact, brand } = jewelryConfig;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const formContent = submitted ? (
    <div className="py-8 text-center">
      <p className="font-serif text-xl text-charcoal">Your Request Has Been Received</p>
      <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
        A member of our concierge team will contact you within 24 hours to confirm
        your private viewing at our Madison Avenue atelier.
      </p>
      <p className="mt-4 text-xs tracking-widest text-champagne">
        {contact.phone}
      </p>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="vip-first-name">First Name</Label>
          <Input id="vip-first-name" name="firstName" required placeholder="Eleanor" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="vip-last-name">Last Name</Label>
          <Input id="vip-last-name" name="lastName" required placeholder="Whitmore" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="vip-email">Email Address</Label>
        <Input
          id="vip-email"
          name="email"
          type="email"
          required
          placeholder="eleanor@example.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="vip-phone">Phone Number</Label>
        <Input
          id="vip-phone"
          name="phone"
          type="tel"
          required
          placeholder="+1 (212) 555-0000"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="vip-date">Preferred Date</Label>
          <Input id="vip-date" name="date" type="date" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="vip-time">Preferred Time</Label>
          <Input id="vip-time" name="time" type="time" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="vip-interest">Piece or Collection of Interest</Label>
        <Input
          id="vip-interest"
          name="interest"
          placeholder="Elara Solitaire, Bespoke Commission..."
        />
      </div>

      <Button type="submit" variant="champagne" className="w-full">
        Request Private Viewing
      </Button>

      <p className="text-center text-[10px] leading-relaxed tracking-wide text-charcoal/50">
        Private viewings include champagne service and access to our full vault
        collection. By appointment only.
      </p>
    </form>
  );

  const defaultTrigger = (
    <Button variant="outline" size="sm">
      Book a Private Viewing
    </Button>
  );

  if (open !== undefined && onOpenChange) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Private Viewing & Consultation</DialogTitle>
            <DialogDescription>
              Reserve an intimate appointment at the {brand.name} flagship atelier.
              Our concierge will prepare your selections in advance.
            </DialogDescription>
          </DialogHeader>
          {formContent}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger ?? defaultTrigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Private Viewing & Consultation</DialogTitle>
          <DialogDescription>
            Reserve an intimate appointment at the {brand.name} flagship atelier.
            Our concierge will prepare your selections in advance.
          </DialogDescription>
        </DialogHeader>
        {formContent}
      </DialogContent>
    </Dialog>
  );
}

export function VIPSchedulerContactBar() {
  const { contact } = jewelryConfig;

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 text-xs tracking-widest text-charcoal/60">
      <span className="flex items-center gap-2">
        <Phone className="h-3.5 w-3.5 text-champagne" aria-hidden="true" />
        {contact.phone}
      </span>
      <span className="flex items-center gap-2">
        <Mail className="h-3.5 w-3.5 text-champagne" aria-hidden="true" />
        {contact.email}
      </span>
      <span className="flex items-center gap-2">
        <Clock className="h-3.5 w-3.5 text-champagne" aria-hidden="true" />
        By Appointment
      </span>
    </div>
  );
}

export function VIPSchedulerIcons() {
  return (
    <div className="flex gap-3 text-champagne" aria-hidden="true">
      <User className="h-5 w-5" />
      <Calendar className="h-5 w-5" />
    </div>
  );
}
