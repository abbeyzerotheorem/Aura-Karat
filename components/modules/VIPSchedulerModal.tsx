"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Mail, Phone, User, CheckCircle, ArrowRight } from "lucide-react";
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

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  interest: string;
}

const STORAGE_KEY = "ak-vip-submissions";

export function VIPSchedulerModal({
  trigger,
  open,
  onOpenChange,
}: VIPSchedulerModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    interest: "",
  });
  const { contact, brand } = jewelryConfig;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call then store in localStorage
    setTimeout(() => {
      try {
        const existing = JSON.parse(
          localStorage.getItem(STORAGE_KEY) || "[]"
        );
        existing.push({
          ...formData,
          id: `vip-${Date.now()}`,
          createdAt: new Date().toISOString(),
        });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
      } catch {
        // Silently handle storage errors
      }
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      interest: "",
    });
  };

  const formContent = submitted ? (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="py-8 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", damping: 15, stiffness: 200, delay: 0.2 }}
        className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-champagne/10"
      >
        <CheckCircle className="h-8 w-8 text-champagne" aria-hidden="true" />
      </motion.div>
      <p className="font-serif text-2xl text-charcoal">Your Request Has Been Received</p>
      <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
        A member of our concierge team will contact you within 24 hours to confirm
        your private viewing at our Madison Avenue atelier.
      </p>
      <div className="mt-8 border-t border-whisper pt-6">
        <p className="text-xs uppercase tracking-widest text-champagne">
          {contact.phone}
        </p>
        <p className="mt-1 text-xs text-charcoal/50">{contact.email}</p>
      </div>
      <Button
        variant="outline"
        size="sm"
        className="mt-6"
        onClick={resetForm}
      >
        Book Another Viewing
      </Button>
    </motion.div>
  ) : (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="vip-first-name">First Name</Label>
          <Input
            id="vip-first-name"
            name="firstName"
            required
            placeholder="Eleanor"
            value={formData.firstName}
            onChange={handleChange("firstName")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="vip-last-name">Last Name</Label>
          <Input
            id="vip-last-name"
            name="lastName"
            required
            placeholder="Whitmore"
            value={formData.lastName}
            onChange={handleChange("lastName")}
          />
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
          value={formData.email}
          onChange={handleChange("email")}
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
          value={formData.phone}
          onChange={handleChange("phone")}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="vip-date">Preferred Date</Label>
          <Input
            id="vip-date"
            name="date"
            type="date"
            required
            value={formData.date}
            onChange={handleChange("date")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="vip-time">Preferred Time</Label>
          <Input
            id="vip-time"
            name="time"
            type="time"
            required
            value={formData.time}
            onChange={handleChange("time")}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="vip-interest">Piece or Collection of Interest</Label>
        <Input
          id="vip-interest"
          name="interest"
          placeholder="Elara Solitaire, Bespoke Commission..."
          value={formData.interest}
          onChange={handleChange("interest")}
        />
      </div>

      <Button
        type="submit"
        variant="champagne"
        className="w-full gap-2"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="inline-block h-4 w-4 rounded-full border-2 border-onyx/30 border-t-onyx"
            />
            Submitting...
          </span>
        ) : (
          <>
            Request Private Viewing
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </Button>

      <p className="text-center text-[10px] leading-relaxed tracking-wide text-charcoal/50">
        Private viewings include champagne service and access to our full vault
        collection. By appointment only.
      </p>
    </motion.form>
  );

  const defaultTrigger = mounted ? (
    <Button variant="outline" size="sm">
      Book a Private Viewing
    </Button>
  ) : (
    <span className="sr-only">Loading booking button</span>
  );

  const dialogContent = (
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
  );

  if (open !== undefined && onOpenChange) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        {dialogContent}
      </Dialog>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger ?? defaultTrigger}</DialogTrigger>
      {dialogContent}
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