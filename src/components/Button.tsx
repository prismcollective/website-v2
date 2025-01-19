import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "blue";
}

export default function Button({
  children,
  variant = "default",
  ...props
}: ButtonProps) {
  const variants = {
    default: "bg-[#FFF6ED] hover:bg-[#ffe3ce]",
    blue: "bg-blue-200 hover:bg-blue-300",
  };

  return (
    <button
      className={
        "text-black border border-black shadow-[2px_2px_0px_0px_#000] rounded-full px-6 py-2  transition-colors " +
        variants[variant]
      }
      {...props}
    >
      {children}
    </button>
  );
}
