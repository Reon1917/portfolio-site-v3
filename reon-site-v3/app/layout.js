import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lin Myat Phyo | Portfolio",
  description: "Personal portfolio website of Lin Myat Phyo, a software developer specializing in web development.",
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
