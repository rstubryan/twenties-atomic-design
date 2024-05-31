import { cn } from "@/lib/utils.js";

export default function Input({
  type,
  id,
  name,
  placeholder,
  className,
  ...props
}) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className={cn(`px-5 py-1.5 shadow-sm border rounded-full ${className}`)}
      {...props}
    />
  );
}
