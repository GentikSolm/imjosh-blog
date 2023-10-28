import "~/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
import { AxiomWebVitals } from "next-axiom";
import { DM_Sans } from "next/font/google";
import ToggleTheme from "./ToggleTheme";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "imjosh.dev",
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
    <html lang="en" className={clsx("dark h-full", sans.variable)}>
      <body className="mx-auto h-full max-w-7xl bg-neutral-50 px-4 pt-10 text-gray-900 transition-colors dark:bg-neutral-800 sm:px-6 lg:px-8">
        <div className="pb-20">
          <div className="flex items-center justify-between pb-8">
            <div className='gap-10 flex items-center'>
            <Link href="/" className="rounded-full">
              <Image
                className="inline-block h-20 w-20 rounded-full"
                src="/me.jpg"
                alt=" "
                width={256}
                height={256}
              />
            </Link>
            <Link className="dark:text-white hover:underline font-medium text-lg" href="/">
              Home
            </Link>
            <Link className="dark:text-white hover:underline font-medium text-lg" href="/blog">
              Blog
            </Link>
            </div>
            <ToggleTheme />
          </div>
          {children}
          <Analytics />
          <AxiomWebVitals />
        </div>
      </body>
    </html>
  );
}
