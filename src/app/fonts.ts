import localFont from "next/font/local";

export const customFont = localFont({
  src: "../../public/fonts/MetroPhotograph.otf",
  display: "swap",
  variable: "--font-metro", // This creates a CSS variable
});
