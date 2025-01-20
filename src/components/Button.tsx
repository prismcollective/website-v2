import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/util";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "blue" | "purple" | "selected";
}

export default function Button({
  children,
  variant = "default",
  ...props
}: ButtonProps) {
  const variants = {
    default: "bg-[#FFF6ED] hover:bg-[#ffe3ce]",
    selected: "shadow-inner shadow-[inset_2px_2px_0px_0px_#000] bg-[#FDD6BF]",
    blue: "bg-blue-200 hover:bg-blue-300",
    purple:
      "rounded-md flex items-center h-7 bg-[#F1C5FE] hover:bg-[#E9A8FD] text-xs",
  };

  return (
    <button
      className={cn(
        "text-black border border-black shadow-[2px_2px_0px_0px_#000] rounded-full px-6 py-2 transition-colors",
        variants[variant]
      )}
      {...props}
    >
      {children}
    </button>
  );
}
