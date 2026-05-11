"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "PCD Pharma Franchise", href: "/pcd-pharma-franchise", desc: "Start your own pharma business" },
      { label: "Third Party Manufacturing", href: "/third-party-manufacturing", desc: "Contract manufacturing services" },
    ],
  },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04)] border-b border-gray-100/50"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-container px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="relative">
              <span
                className={`text-2xl font-extrabold tracking-tight font-display transition-colors duration-300 ${
                  scrolled ? "text-navy-900" : "text-white"
                }`}
              >
                tru<span className="text-brand-500">beca</span>
              </span>
              <span
                className={`block text-[9px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${
                  scrolled ? "text-gray-400" : "text-white/60"
                }`}
              >
                Lifesciences
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 px-3.5 py-2 text-[13px] font-medium rounded-full transition-all duration-300 ${
                      isActive("/pcd-pharma-franchise") || isActive("/third-party-manufacturing")
                        ? scrolled
                          ? "text-brand-600 bg-brand-50"
                          : "text-white bg-white/15"
                        : scrolled
                        ? "text-gray-600 hover:text-navy-900 hover:bg-gray-50"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-premium border border-gray-100/80 overflow-hidden"
                      >
                        <div className="p-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-brand-50 transition-colors group"
                            >
                              <span className="text-sm font-semibold text-navy-900 group-hover:text-brand-600 transition-colors">
                                {child.label}
                              </span>
                              <span className="text-xs text-gray-400">{child.desc}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-[13px] font-medium rounded-full transition-all duration-300 ${
                    isActive(link.href)
                      ? scrolled
                        ? "text-brand-600 bg-brand-50"
                        : "text-white bg-white/15"
                      : scrolled
                      ? "text-gray-600 hover:text-navy-900 hover:bg-gray-50"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className={`group inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                scrolled
                  ? "bg-navy-900 text-white hover:bg-navy-800 shadow-lg shadow-navy-900/20"
                  : "bg-white text-navy-900 hover:bg-white/90 shadow-lg shadow-black/10"
              }`}
            >
              Get In Touch
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2.5 rounded-full transition-colors ${
              scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-white/98 backdrop-blur-2xl border-t border-gray-100/50 overflow-hidden"
          >
            <nav className="mx-auto max-w-container px-4 sm:px-6 py-6 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  {link.children ? (
                    <div className="space-y-1">
                      <span className="block px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                        {link.label}
                      </span>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-3 pl-8 text-sm font-medium rounded-xl transition-all ${
                            isActive(child.href)
                              ? "text-brand-600 bg-brand-50"
                              : "text-gray-700 hover:bg-gray-50 hover:text-navy-900"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                        isActive(link.href)
                          ? "text-brand-600 bg-brand-50"
                          : "text-gray-700 hover:bg-gray-50 hover:text-navy-900"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-4 border-t border-gray-100"
              >
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 text-sm font-semibold bg-navy-900 text-white rounded-xl hover:bg-navy-800 transition-colors"
                >
                  Get In Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
