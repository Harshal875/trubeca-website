import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Trubeca Lifesciences | Premium PCD Pharma Franchise & Third Party Manufacturing",
    template: "%s | Trubeca Lifesciences",
  },
  description:
    "Trubeca Lifesciences — ISO 9001:2015 certified pharmaceutical company with 118+ WHO-GMP products. Leading PCD Pharma Franchise opportunities and Third Party Manufacturing across India.",
  keywords: [
    "pharma franchise",
    "PCD pharma",
    "third party manufacturing",
    "pharmaceutical company India",
    "Trubeca Lifesciences",
    "WHO-GMP certified pharma",
    "PCD pharma franchise Chandigarh",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Trubeca Lifesciences",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
