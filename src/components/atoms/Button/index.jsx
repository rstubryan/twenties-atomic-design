import { cn } from "@/lib/utils.js";

export default function Button({ children, className, type, onClick }) {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={cn(
          `bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white py-1 px-4 rounded-lg ${className}`,
        )}
      >
        {children}
      </button>
    </>
  );
}
