import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "limited" | "bespoke";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em]",
        variant === "default" && "bg-whisper text-charcoal",
        variant === "limited" && "bg-onyx text-champagne",
        variant === "bespoke" && "border border-champagne text-champagne bg-transparent",
        className
      )}
      {...props}
    />
  );
}
