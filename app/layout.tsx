import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "DigiCompass — Find your direction",
  description:
    "DigiCompass helps you navigate digital growth with clarity and confidence. Join early access for tools built for calm, focused progress.",
  openGraph: {
    title: "DigiCompass — Find your direction",
    description:
      "DigiCompass helps you navigate digital growth with clarity and confidence. Join early access for tools built for calm, focused progress.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <SiteHeader />
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
