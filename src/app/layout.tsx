import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/ui/theme-provider";

// Fix for Node.js 22+ broken localStorage on server (Next.js Dev Overlay bug)
if (
  typeof global !== "undefined" &&
  (global as unknown as Record<string, unknown>).localStorage &&
  typeof (global as unknown as { localStorage: Record<string, unknown> }).localStorage.getItem !== "function"
) {
  Object.defineProperty(global, "localStorage", {
    value: {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
      key: () => null,
      length: 0,
    },
    writable: true,
    configurable: true,
  });
}

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
    process.env.NEXT_PUBLIC_SITE_URL || "https://manii.space",
  ),
  title: "Mani Yadla — Software Engineer, Web2 & Web3 Developer",
  description:
    "Mani Yadla — Software Engineer building full-stack products, blockchain applications, and developer tools. Protocol Engineer at Fairblock, Ex-Google Intern, 10X Hackathon winner.",
  keywords: [
    "Mani Yadla",
    "Software Engineer",
    "Portfolio",
    "Web3",
    "Web2",
    "Full Stack Developer",
    "Blockchain",
    "Ethereum",
    "Solana",
    "Fairblock",
    "Google",
    "Hackathons",
    "Open Source",
  ],
  authors: [{ name: "Mani Yadla", url: "https://twitter.com/ManiYadla" }],
  creator: "Mani Yadla",
  publisher: "Mani Yadla",
  alternates: {
    canonical: "/",
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://manii.space",
    title: "Mani Yadla — Software Engineer, Web2 & Web3 Developer",
    description:
      "Mani Yadla — Software Engineer building full-stack products, blockchain applications, and developer tools. Protocol Engineer at Fairblock, Ex-Google Intern, 10X Hackathon winner.",
    siteName: "Mani Yadla",
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
    title: "Mani Yadla — Software Engineer, Web2 & Web3 Developer",
    description:
      "Mani Yadla — Software Engineer building full-stack products, blockchain applications, and developer tools. Protocol Engineer at Fairblock, Ex-Google Intern, 10X Hackathon winner.",
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
          content="width=device-width, initial-scale=1"
        />
        <meta name="theme-color" content="#0052FF" />
        <meta name="color-scheme" content="light dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mani Yadla",
              url: "https://manii.space",
              sameAs: [
                "https://github.com/YadlaMani",
                "https://twitter.com/ManiYadla",
                "https://linkedin.com/in/mani-yadla",
                "https://x.com/mani_yadla_",
              ],
              jobTitle: "Software Engineer",
              description:
                "Software Engineer building full-stack products, blockchain applications, and developer tools. Protocol Engineer at Fairblock, Ex-Google Intern.",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-cover bg-center bg-no-repeat`}
        style={{
          backgroundImage: `url('/background.png')`,
        }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <div>{children}</div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
