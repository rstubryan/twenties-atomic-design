import { cn } from "@/lib/utils.js";

export default function IconPlaceholder({ className, children, ...props }) {
  return (
    <>
      <i className={cn(`${className}`)} {...props}>
        {children}
      </i>
    </>
  );
}
