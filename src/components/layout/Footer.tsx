import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
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
    <footer className="bg-navy-900 text-white">
      <div className="container-main section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                tru<span className="text-brand-400">beca</span>
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-gray-400 mt-0.5">
                Life Sciences
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {company.about.short}
            </p>
            <div className="flex flex-wrap gap-2">
              {company.certifications.map((cert) => (
                <span
                  key={cert.shortName}
                  className="px-2 py-1 text-[10px] uppercase tracking-wide font-semibold bg-navy-800 text-brand-300 rounded"
                >
                  {cert.shortName}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-brand-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Business */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Our Business
            </h4>
            <ul className="space-y-2">
              {businessLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-brand-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 shrink-0 text-brand-400 mt-0.5" />
                <span>{company.address.full}</span>
              </li>
              <li>
                <a
                  href={`tel:${company.phone[0].replace(/[^+\d]/g, "")}`}
                  className="flex gap-3 text-sm text-gray-400 hover:text-brand-300"
                >
                  <Phone className="w-4 h-4 shrink-0 text-brand-400 mt-0.5" />
                  <span>{company.phone[0]}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex gap-3 text-sm text-gray-400 hover:text-brand-300"
                >
                  <Mail className="w-4 h-4 shrink-0 text-brand-400 mt-0.5" />
                  <span>{company.email}</span>
                </a>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <Clock className="w-4 h-4 shrink-0 text-brand-400 mt-0.5" />
                <span>Mon – Sat, 9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-800">
        <div className="container-main py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Trubeca Life Sciences. All rights reserved.</p>
          <p>Quality Healthcare Products Across India</p>
        </div>
      </div>
    </footer>
  );
}
