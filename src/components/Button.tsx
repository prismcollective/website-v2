import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/util";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "blue" | "purple" | "selected"| "contact-purple";
}

export default function Button({
  children,
  variant = "default",
  className = '',
  ...props
}: ButtonProps) {
  const variants = {
    default: "bg-[#FFF6ED] hover:bg-[#ffe3ce]",
    selected: "shadow-inner shadow-[inset_2px_2px_0px_0px_#000] bg-[#FDD6BF]",
    blue: "bg-blue-200 hover:bg-blue-300",
    purple: "bg-[#F1C5FE] hover:bg-[#E9A8FD] text-xs h-7 flex items-center rounded-md  justify-center",
    "contact-purple": "rounded-md bg-[#F1C5FE] hover:bg-[#E9A8FD] text-sm px-8 py-2", // New variant for contact page

  };

  const baseStyles = variant === 'purple' 
    ? "text-black border border-black shadow-[2px_2px_0px_0px_#000] px-6" 
    : variant === 'contact-purple'
    ? "text-black border-2 border-black shadow-[2px_2px_0px_0px_#000]"
    : "text-black border border-black shadow-[2px_2px_0px_0px_#000] rounded-full px-6 py-2";
  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}