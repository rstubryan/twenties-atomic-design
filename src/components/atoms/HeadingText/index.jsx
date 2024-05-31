import { cn } from "@/lib/utils.js";

export default function HeadingText({ children, className, ...props }) {
  return (
    <h1 className={cn(`text-3xl font-semibold ${className}`)} {...props}>
      {children}
    </h1>
  );
}
