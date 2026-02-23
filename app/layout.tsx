import type { Metadata } from "next";
import { Suspense } from "react";
import Script from "next/script";
import { Nunito_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import MetaPixelPageView from "@/components/analytics/MetaPixelPageView";
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
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1233236775540937');
          `}
        </Script>
        <Suspense fallback={null}>
          <MetaPixelPageView />
        </Suspense>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element -- Meta Pixel 1x1 tracking beacon, next/image not applicable */}
          <img
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1233236775540937&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
