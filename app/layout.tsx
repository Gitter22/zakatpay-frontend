import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZakatPay - Zakat Calculation and Payment App",
  description:
    "Accurately calculate, record, and pay your Zakat – all in one place.",
  keywords: [
    "ZakatPay",
    "Zakat Calculation App",
    "Zakat Calculator",
    "Zakat Payment App",
    "Calculate Zakat",
    "Pay Zakat",
    "How to calculate Zakat",
    "Zakat Management App",
    "Nisab",
    "How to pay Zakat",
    "Zakat Donation",
    "Who is eligible for Zakat",
    "How to calculate Zakat on gold",
    "How to calculate Zakat on cash",
    "How to calculate Zakat on savings",
    "How to calculate Zakat on investments",
    "How to calculate Zakat on property",
    "How to calculate Zakat on business",
    "How to calculate Zakat on income",
    "How to calculate Zakat on salary",
    "How to calculate Zakat on shares",
    "How to calculate Zakat on stocks",
    "How to calculate Zakat on mutual funds",
    "How to calculate Zakat on real estate",
    "How to calculate Zakat on rental income",
    "How to calculate Zakat on gold jewelry",
  ],
  openGraph: {
    type: "website",
    siteName: "ZakatPay",
    locale: "en_US",
    url: "https://shadcn-landing-page.vercel.app",
    title: "ZakatPay - Zakat Calculation and Payment App",
    description:
      "Accurately calculate, record, and pay your Zakat – all in one place.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ZakatPay - Zakat Calculation and Payment App",
      },
    ],
  },
  authors: [
    {
      name: "Aadil Shaikh",
      url: "https://shadcnui-blocks.com",
    },
  ],
  creator: "Aadil Shaikh",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
