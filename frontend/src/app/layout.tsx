import { NextIntlClientProvider, useMessages } from "next-intl";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Providers } from "./providers";
import { getLocale } from "next-intl/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#07131e" },
    { media: "(prefers-color-scheme: light)", color: "#f9fbfa" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  minimumScale: 1,
  interactiveWidget: "resizes-content",
  colorScheme: "normal",
  height: "device-height",
};

export const metadata: Metadata = {
  title: "Lian Aguirre - Software Engineer",
  description: "Portfolio of Lian Aguirre",
  authors: [
    {
      name: "Lian Aguirre",
      url: "https://mx.linkedin.com/in/lian-erick-aguirre-sierra-628bb3261",
    },
  ],
  keywords: ["Software Engineer", "Lian Aguirre", "Portfolio"],
  creator: "Lian Aguirre",
  openGraph: {
    title: "Lian Aguirre - Software Engineer",
    description: "Portfolio of Lian Aguirre",
    siteName: "Lian Aguirre - Software Engineer",
    countryName: "Mexico",
    locale: "es-MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lian Aguirre - Software Engineer",
    description: "Portfolio of Lian Aguirre",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification=YOUR_VERIFICATION_TOKEN",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  return (
    <html suppressHydrationWarning lang={locale} className="bg-background">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        <NextIntlClientProvider>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
