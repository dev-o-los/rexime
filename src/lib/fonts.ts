import { Inter, Playfair_Display, Roboto } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto",
});
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
});
export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-playfair",
});
