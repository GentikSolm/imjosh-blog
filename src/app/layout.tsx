import "~/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
import { AxiomWebVitals } from "next-axiom";

export const metadata = {
  title: 'imjosh.dev',
  description: "",
};

/*
import { Inter, Bricolage_Grotesque } from "next/font/google";
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});
*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx("h-full")}>
      <body className="h-full">
        {children}
        <Analytics />
        <AxiomWebVitals />
      </body>
    </html>
  );
}
