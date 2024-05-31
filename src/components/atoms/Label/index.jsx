import { cn } from "@/lib/utils.js";

export default function Label({ htmlFor, children, className, ...props }) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(`text-base py-3 ${className}`)}
      {...props}
    >
      {children}
    </label>
  );
}
