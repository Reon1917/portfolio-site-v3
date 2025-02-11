import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://reon-site.vercel.app'),
  title: {
    default: "Lin Myat Phyo | Portfolio",
    template: "%s | Lin Myat Phyo"
  },
  description: "Personal portfolio website of Lin Myat Phyo, a software developer specializing in web development and currently pursuing IT at Assumption University.",
  keywords: ["Lin Myat Phyo", "web developer", "software engineer", "portfolio", "Next.js", "React", "frontend developer"],
  authors: [{ name: "Lin Myat Phyo" }],
  creator: "Lin Myat Phyo",
  publisher: "Lin Myat Phyo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://reon-site.vercel.app",
    siteName: "Lin Myat Phyo Portfolio",
    title: "Lin Myat Phyo | Software Developer",
    description: "Personal portfolio website of Lin Myat Phyo, a software developer specializing in web development and currently pursuing IT at Assumption University.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lin Myat Phyo Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Lin Myat Phyo | Software Developer",
    description: "Personal portfolio website of Lin Myat Phyo, a software developer specializing in web development.",
    images: ["/og-image.png"],
    creator: "@Reon1917"
  },
  verification: {
    google: "your-google-verification-code", // You'll need to add this from Google Search Console
  },
  alternates: {
    canonical: "https://reon-site.vercel.app"
  },
  icons: {
    icon: [
      {
        url: "/favicon/favicon.ico",
        sizes: "32x32",
      },
      {
        url: "/favicon/icon-192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        url: "/favicon/icon-512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/favicon/icon-512.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" sizes="180x180" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
