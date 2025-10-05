import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/ui/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://mani.works"
  ),
  title: "Mani Yadla",
  description:
    "Portfolio of Mani Yadla — SWE building cool things on Web2, Web3, and beyond. Open source contributor, hackathon winner, and builder.",
  keywords: [
    "Mani Yadla",
    "Portfolio",
    "SWE",
    "Web3",
    "Web2",
    "Hackathons",
    "Open Source",
    "Ethereum",
    "Solana",
  ],
  authors: [{ name: "Mani Yadla", url: "https://twitter.com/ManiYadla" }],
  creator: "Mani Yadla",
  publisher: "Mani Yadla",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://mani.works",
    title: "Mani Yadla Portfolio",
    description:
      "Portfolio of Mani Yadla — SWE building cool things on Web2, Web3, and beyond. Open source contributor, hackathon winner, and builder.",
    siteName: "Mani Yadla Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Mani Yadla Portfolio",
        type: "image/svg+xml",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Mani Yadla Portfolio",
    description:
      "Portfolio of Mani Yadla — SWE building cool things on Web2, Web3, and beyond. Open source contributor, hackathon winner, and builder.",
    images: ["/og-image.svg"],
    creator: "@ManiYadla",
    site: "@ManiYadla",
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.svg", sizes: "192x192", type: "image/svg+xml" },
      { url: "/icon-512.svg", sizes: "512x512", type: "image/svg+xml" },
    ],
    apple: [{ url: "/icon-192.svg", sizes: "192x192", type: "image/svg+xml" }],
  },

  // Manifest
  manifest: "/manifest.json",

  // Additional meta
  category: "portfolio",
  classification: "Personal Portfolio",
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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#0052FF" />
        <meta name="color-scheme" content="light dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div>{children}</div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
