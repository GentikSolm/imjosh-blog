import "~/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
import { AxiomWebVitals } from "next-axiom";
import { DM_Sans } from "next/font/google";

export const metadata = {
  title: 'imjosh.dev',
  description: "",
};

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx("h-full ", sans.variable)}>
      <body className="h-full bg-neutral-50 dark:bg-neutral-800 transition-colors">
        {children}
        <Analytics />
        <AxiomWebVitals />
      </body>
    </html>
  );
}
