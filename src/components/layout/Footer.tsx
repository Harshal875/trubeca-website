import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import company from "@/data/company.json";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Products", href: "/products" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact Us", href: "/contact" },
];

const businessLinks = [
  { label: "PCD Pharma Franchise", href: "/pcd-pharma-franchise" },
  { label: "Third Party Manufacturing", href: "/third-party-manufacturing" },
  { label: "Tablets & Capsules", href: "/products?category=tablets-capsules" },
  { label: "Syrups & Suspensions", href: "/products?category=syrups" },
  { label: "Injections", href: "/products?category=injections" },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 text-white overflow-hidden">
      {/* Subtle gradient accents */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-brand-500/[0.03] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-accent-violet/[0.03] rounded-full blur-[100px]" />

      <div className="relative">
        {/* Main Footer */}
        <div className="container-main pt-20 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand - spans 4 cols */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-block">
                <span className="text-2xl font-extrabold tracking-tight font-display">
                  tru<span className="text-brand-400">beca</span>
                </span>
                <span className="block text-[9px] uppercase tracking-[0.2em] text-gray-500 mt-0.5">
                  Lifesciences
                </span>
              </Link>
              <p className="mt-5 text-sm text-gray-400 leading-relaxed max-w-xs">
                ISO 9001:2015 certified pharmaceutical company delivering 118+ quality healthcare products through PCD Franchise & Contract Manufacturing.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {company.certifications.map((cert) => (
                  <span
                    key={cert.shortName}
                    className="px-3 py-1.5 text-[10px] uppercase tracking-wider font-semibold bg-white/[0.04] text-brand-300 rounded-full border border-white/[0.06]"
                  >
                    {cert.shortName}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Links - spans 2 cols */}
            <div className="lg:col-span-2 lg:col-start-6">
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-500 mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business - spans 3 cols */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-500 mb-6">
                Our Business
              </h4>
              <ul className="space-y-3.5">
                {businessLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact - spans 3 cols */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-500 mb-6">
                Get in Touch
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 shrink-0 text-brand-400 mt-0.5" />
                  <span>{company.address.full}</span>
                </li>
                <li>
                  <a
                    href={`tel:${company.phone[0].replace(/[^+\d]/g, "")}`}
                    className="flex gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 shrink-0 text-brand-400 mt-0.5" />
                    <span>{company.phone[0]}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${company.email}`}
                    className="flex gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 shrink-0 text-brand-400 mt-0.5" />
                    <span>{company.email}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05]">
          <div className="container-main py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Trubeca Lifesciences Pvt. Ltd. All rights reserved.
            </p>
            <p className="text-xs text-gray-600">
              Trusted Pharmaceutical Excellence Across India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
