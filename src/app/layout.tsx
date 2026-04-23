import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import TrustBar from "@/components/layout/TrustBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Trubeca Life Sciences | PCD Pharma Franchise & Third Party Manufacturing",
    template: "%s | Trubeca Life Sciences",
  },
  description:
    "Trubeca Life Sciences is a leading pharmaceutical company offering 100+ WHO-GMP certified products, PCD Pharma Franchise opportunities, and Third Party Manufacturing across India.",
  keywords: [
    "pharma franchise",
    "PCD pharma",
    "third party manufacturing",
    "pharmaceutical company India",
    "Trubeca Life Sciences",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Trubeca Life Sciences",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <TrustBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
