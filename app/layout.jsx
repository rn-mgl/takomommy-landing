import "./globals.css";
import { Righteous, Montserrat } from "@next/font/google";

const righteous = Righteous({
  weight: ["400"],
  display: "auto",
  variable: "--font-righteous",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "auto",
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${righteous.variable} ${montserrat.variable} scroll-smooth`}>
      <head />
      <body>{children}</body>
    </html>
  );
}
