import { cn } from "@/lib/utils.js";

export default function SubheadingText({ className, children, ...props }) {
  return (
    <h2 className={cn(`text-2xl font-semibold ${className}`)} {...props}>
      {children}
    </h2>
  );
}
