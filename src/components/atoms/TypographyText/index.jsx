import { cn } from "@/lib/utils.js";

export default function TypographyText({ className, children, ...props }) {
  return (
    <p className={cn(`text-base ${className}`)} {...props}>
      {children}
    </p>
  );
}
