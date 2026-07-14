"use client";

import { motion, type Variants, type HTMLMotionProps } from "framer-motion";
import { type ReactNode, useRef } from "react";
import { useInView } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0 },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92, filter: "blur(4px)" },
  visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0 },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0 },
};

const revealClip: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)", opacity: 0.4 },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    opacity: 1,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

const variantMap: Record<string, Variants> = {
  fadeUp,
  fadeDown,
  scaleIn,
  slideLeft,
  slideRight,
  revealClip,
};

type MotionElement = "div" | "section" | "article" | "span";

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variantMap;
  delay?: number;
  duration?: number;
  as?: MotionElement;
}

const motionTags: Record<MotionElement, typeof motion.div> = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  span: motion.span,
};

export function MotionWrapper({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  duration = 0.8,
  as = "div",
}: MotionWrapperProps) {
  const variants = variantMap[variant] ?? fadeUp;
  const MotionTag = motionTags[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: staggerDelay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24, scale: 0.97 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

interface PageRevealProps {
  children: ReactNode;
}

export function PageReveal({ children }: PageRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxTiltProps {
  children: ReactNode;
  className?: string;
  factor?: number;
}

export function ParallaxTilt({
  children,
  className,
  factor = 0.03,
}: ParallaxTiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={
        inView
          ? { opacity: 1, y: 0 }
          : { opacity: 0.4, y: 20 }
      }
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

interface HoverLiftProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
}

export function HoverLift({
  children,
  className,
  ...props
}: HoverLiftProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
      {...props}
    >
      {children}
    </motion.div>
  );
}