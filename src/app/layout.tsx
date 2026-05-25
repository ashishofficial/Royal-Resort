import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTAs } from "@/components/layout/MobileCTAs";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Best Wedding & Banquet Resort in Soraon`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "wedding resort prayagraj",
    "banquet hall prayagraj",
    "wedding venue prayagraj",
    "marriage hall allahabad",
    "destination wedding prayagraj",
    "resort in soraon",
    "royal resort prayagraj",
    "AC banquet hall prayagraj",
    "wedding hall narayanpur",
    "haldi mehndi venue prayagraj",
    "birthday venue prayagraj",
  ],
  authors: [{ name: SITE.legalName }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  category: "Wedding Venue",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Best Wedding & Banquet Resort in Soraon`,
    description: SITE.description,
    images: [
      {
        // TODO: Replace with a real JPG export at /public/og-image.jpg before launch
        // (some social platforms still prefer raster OG images).
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — Decorated Wedding Banquet Hall`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Best Wedding & Banquet Resort in Soraon`,
    description:
      "AC banquet hall for 500 guests at ₹2.5L. Book Prayagraj's top wedding venue today.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // TODO: Replace with real verification code from Search Console once domain is added
  verification: {
    google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_CODE",
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
};

export const viewport: Viewport = {
  themeColor: SITE.themeColor,
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <head>
        <JsonLd data={organizationSchema()} />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCTAs />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
