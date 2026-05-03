"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "PCD Franchise", href: "/pcd-pharma-franchise" },
  { label: "Third Party Mfg", href: "/third-party-manufacturing" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl font-bold text-navy-900">
              tru<span className="text-brand-500">beca</span>
            </span>
            <span className="hidden sm:block text-[10px] uppercase tracking-widest text-gray-400 leading-tight">
              Life<br />Sciences
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.href)
                    ? "text-brand-500 bg-brand-50"
                    : "text-gray-600 hover:text-brand-500 hover:bg-brand-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+918699836998"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-brand-500"
            >
              <Phone className="w-4 h-4" />
              <span>+91-8699836998</span>
            </a>
            <Link href="/contact" className="btn-primary text-sm">
              Enquire Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-brand-500"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white animate-slide-in-right">
          <nav className="container-main py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 text-sm font-medium rounded-lg ${
                  isActive(link.href)
                    ? "text-brand-500 bg-brand-50"
                    : "text-gray-700 hover:bg-brand-50 hover:text-brand-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 space-y-2">
              <a
                href="tel:+918699836998"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium text-gray-700 hover:text-brand-500"
              >
                <Phone className="w-4 h-4" />
                +91-8699836998
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center btn-primary"
              >
                Enquire Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
