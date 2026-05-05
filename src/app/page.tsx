"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Truck,
  Award,
  Users,
  FlaskConical,
  Pill,
  Stethoscope,
  Heart,
  Syringe,
  Droplets,
  Baby,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Globe,
} from "lucide-react";
import {
  Reveal,
  StaggerChildren,
  StaggerItem,
  AnimatedCounter,
  GradientText,
  MagneticButton,
} from "@/components/ui/animations";
import company from "@/data/company.json";
import categoriesData from "@/data/categories.json";

const categoryIcons: Record<string, React.ReactNode> = {
  "tablets-capsules": <Pill className="w-6 h-6" />,
  syrups: <Droplets className="w-6 h-6" />,
  "dry-syrups": <FlaskConical className="w-6 h-6" />,
  "pediatric-drops": <Baby className="w-6 h-6" />,
  injections: <Syringe className="w-6 h-6" />,
  "creams-ointments": <Heart className="w-6 h-6" />,
  supplements: <Stethoscope className="w-6 h-6" />,
};

export default function HomePage() {
  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0f1a]">
        {/* Subtle background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-[#0d1424] to-[#0a1628]" />
          {/* Very subtle radial glow */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[700px] h-[700px] bg-white/[0.015] rounded-full blur-[120px]" />
          {/* Dot grid */}
          <div 
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Content */}
        <div className="container-main relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Text Content */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 text-[11px] font-medium uppercase tracking-wider text-white/50 rounded-full border border-white/[0.08]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  ISO 9001:2015 & WHO-GMP Certified
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] leading-[1.15] font-semibold text-white/95 tracking-[-0.02em]"
              >
                Redefining{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Pharmaceutical</span>{" "}
                Excellence
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="mt-5 text-[15px] md:text-base text-white/40 max-w-md leading-[1.7] font-normal tracking-wide"
              >
                Empowering healthcare with 118+ certified pharmaceutical products. 
                Your trusted partner for PCD Franchise & Contract Manufacturing across India.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-10 flex flex-col sm:flex-row gap-3"
              >
                <Link
                  href="/products"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium bg-white text-[#0a0f1a] rounded-full hover:bg-white/90 transition-all duration-300"
                >
                  Explore Products
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/pcd-pharma-franchise"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-white/70 rounded-full border border-white/[0.12] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
                >
                  Become a Partner
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mt-14 flex flex-wrap items-center gap-5"
              >
                {["ISO 9001:2015", "WHO-GMP", "FSSAI", "DCGI"].map((cert) => (
                  <div key={cert} className="flex items-center gap-1.5 text-white/25">
                    <Shield className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-medium tracking-wide">{cert}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right - Refined Lab Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex items-center justify-center relative"
            >
              <div className="relative w-full max-w-[480px] aspect-square">
                {/* Subtle glow */}
                <div className="absolute inset-[15%] bg-blue-500/[0.06] rounded-full blur-[60px]" />
                
                <svg viewBox="0 0 500 500" className="w-full h-full relative z-10" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
                    </linearGradient>
                    <linearGradient id="fill-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(147,197,253,0.3)" />
                      <stop offset="100%" stopColor="rgba(147,197,253,0.08)" />
                    </linearGradient>
                    <linearGradient id="fill-grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(167,139,250,0.25)" />
                      <stop offset="100%" stopColor="rgba(167,139,250,0.05)" />
                    </linearGradient>
                  </defs>

                  {/* === ERLENMEYER FLASK (main, left-center) === */}
                  <g>
                    <path d="M155,120 L155,220 L105,330 C100,342 108,355 122,355 L228,355 C242,355 250,342 245,330 L195,220 L195,120" 
                      fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="148" y1="120" x2="202" y2="120" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8" strokeLinecap="round" />
                    {/* Liquid */}
                    <path d="M120,300 Q150,293 175,298 Q200,303 230,296 L228,355 C242,355 250,342 245,330 L230,296 L120,300 L105,330 C100,342 108,355 122,355 L228,355" 
                      fill="url(#fill-grad)" />
                    {/* Subtle bubbles */}
                    <circle cx="155" cy="330" r="2.5" fill="rgba(255,255,255,0.25)">
                      <animate attributeName="cy" values="335;305;280" dur="4s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.3;0.15;0" dur="4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="180" cy="340" r="2" fill="rgba(255,255,255,0.2)">
                      <animate attributeName="cy" values="340;310;285" dur="3.5s" repeatCount="indefinite" begin="1.2s" />
                      <animate attributeName="opacity" values="0.25;0.12;0" dur="3.5s" repeatCount="indefinite" begin="1.2s" />
                    </circle>
                    {/* Vapor */}
                    <circle cx="168" cy="110" r="3" fill="rgba(255,255,255,0)">
                      <animate attributeName="cy" values="115;95;75" dur="5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0;0.08;0" dur="5s" repeatCount="indefinite" />
                      <animate attributeName="r" values="2;4;6" dur="5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="182" cy="110" r="2" fill="rgba(255,255,255,0)">
                      <animate attributeName="cy" values="115;90;65" dur="4.5s" repeatCount="indefinite" begin="1.5s" />
                      <animate attributeName="opacity" values="0;0.06;0" dur="4.5s" repeatCount="indefinite" begin="1.5s" />
                      <animate attributeName="r" values="1.5;3;5" dur="4.5s" repeatCount="indefinite" begin="1.5s" />
                    </circle>
                  </g>

                  {/* === BEAKER (right) === */}
                  <g>
                    <rect x="310" y="175" width="100" height="140" rx="4" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.4" />
                    <path d="M310,180 L298,168" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" strokeLinecap="round" />
                    {/* Measurement lines */}
                    <line x1="315" y1="210" x2="328" y2="210" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
                    <line x1="315" y1="240" x2="328" y2="240" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
                    <line x1="315" y1="270" x2="328" y2="270" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
                    {/* Liquid */}
                    <rect x="312" y="258" width="96" height="55" rx="2" fill="url(#fill-grad2)" />
                    {/* Bubble */}
                    <circle cx="350" cy="295" r="1.5" fill="rgba(255,255,255,0.1)">
                      <animate attributeName="cy" values="300;278;260" dur="3.2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.12;0.06;0" dur="3.2s" repeatCount="indefinite" />
                    </circle>
                  </g>

                  {/* === TEST TUBES (upper center-right) === */}
                  <g>
                    <rect x="280" y="60" width="14" height="72" rx="7" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
                    <rect x="282" y="90" width="10" height="40" rx="5" fill="url(#fill-grad)" />
                    
                    <rect x="302" y="68" width="14" height="68" rx="7" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" />
                    <rect x="304" y="95" width="10" height="39" rx="5" fill="url(#fill-grad2)" />
                    
                    <rect x="324" y="63" width="14" height="70" rx="7" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" />
                    <rect x="326" y="92" width="10" height="39" rx="5" fill="url(#fill-grad)" opacity="0.8" />
                    {/* Rack */}
                    <line x1="272" y1="60" x2="346" y2="60" stroke="rgba(255,255,255,0.2)" strokeWidth="1.8" strokeLinecap="round" />
                  </g>

                  {/* === CONVEYOR / PRODUCTION LINE === */}
                  <g>
                    <line x1="50" y1="400" x2="450" y2="400" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" />
                    <line x1="50" y1="410" x2="450" y2="410" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    {/* Moving dashes */}
                    <line x1="50" y1="405" x2="450" y2="405" stroke="rgba(255,255,255,0.1)" strokeWidth="0.6" strokeDasharray="6 4">
                      <animate attributeName="stroke-dashoffset" values="0;-10" dur="0.8s" repeatCount="indefinite" />
                    </line>
                    
                    {/* Capsules moving */}
                    <rect y="390" width="28" height="10" rx="5" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1">
                      <animate attributeName="x" values="-30;480" dur="10s" repeatCount="indefinite" />
                    </rect>
                    <rect y="390" width="28" height="10" rx="5" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1">
                      <animate attributeName="x" values="-30;480" dur="10s" repeatCount="indefinite" begin="2.5s" />
                    </rect>
                    <rect y="390" width="28" height="10" rx="5" fill="none" stroke="rgba(255,255,255,0.32)" strokeWidth="1">
                      <animate attributeName="x" values="-30;480" dur="10s" repeatCount="indefinite" begin="5s" />
                    </rect>
                    <rect y="390" width="28" height="10" rx="5" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1">
                      <animate attributeName="x" values="-30;480" dur="10s" repeatCount="indefinite" begin="7.5s" />
                    </rect>
                  </g>

                  {/* === MOLECULAR STRUCTURE (center, slow spin) === */}
                  <g className="animate-[spin_50s_linear_infinite]" style={{ transformOrigin: "260px 250px" }}>
                    <polygon points="260,210 290,225 290,255 260,270 230,255 230,225" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                    {/* Bonds */}
                    <line x1="260" y1="210" x2="260" y2="195" stroke="rgba(255,255,255,0.14)" strokeWidth="0.8" />
                    <line x1="290" y1="225" x2="303" y2="218" stroke="rgba(255,255,255,0.14)" strokeWidth="0.8" />
                    <line x1="290" y1="255" x2="303" y2="262" stroke="rgba(255,255,255,0.14)" strokeWidth="0.8" />
                    <line x1="260" y1="270" x2="260" y2="285" stroke="rgba(255,255,255,0.14)" strokeWidth="0.8" />
                    <line x1="230" y1="255" x2="217" y2="262" stroke="rgba(255,255,255,0.14)" strokeWidth="0.8" />
                    <line x1="230" y1="225" x2="217" y2="218" stroke="rgba(255,255,255,0.14)" strokeWidth="0.8" />
                    {/* Nodes */}
                    <circle cx="260" cy="210" r="3" fill="rgba(255,255,255,0.25)" />
                    <circle cx="290" cy="225" r="3" fill="rgba(255,255,255,0.2)" />
                    <circle cx="290" cy="255" r="3" fill="rgba(255,255,255,0.2)" />
                    <circle cx="260" cy="270" r="3" fill="rgba(255,255,255,0.25)" />
                    <circle cx="230" cy="255" r="3" fill="rgba(255,255,255,0.2)" />
                    <circle cx="230" cy="225" r="3" fill="rgba(255,255,255,0.2)" />
                    <circle cx="260" cy="195" r="2" fill="rgba(255,255,255,0.15)" />
                    <circle cx="303" cy="218" r="2" fill="rgba(255,255,255,0.15)" />
                    <circle cx="303" cy="262" r="2" fill="rgba(255,255,255,0.15)" />
                  </g>

                  {/* === PIPETTE (top right) === */}
                  <g>
                    <rect x="400" y="80" width="10" height="45" rx="2" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
                    <path d="M403,125 L403,140 Q405,148 407,140 L407,125" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                    <rect x="397" y="75" width="16" height="8" rx="2" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />
                    {/* Liquid */}
                    <rect x="402" y="100" width="6" height="20" rx="1" fill="url(#fill-grad)" opacity="0.5" />
                    {/* Drop */}
                    <circle cx="405" cy="150" r="2" fill="rgba(255,255,255,0)">
                      <animate attributeName="cy" values="148;168;188" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.2;0.12;0" dur="3s" repeatCount="indefinite" />
                    </circle>
                  </g>

                  {/* === MICROSCOPE (bottom right, minimal) === */}
                  <g opacity="0.8">
                    <rect x="400" y="420" width="50" height="5" rx="2.5" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
                    <rect x="418" y="380" width="14" height="40" rx="2" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
                    <circle cx="425" cy="375" r="8" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
                    <line x1="425" y1="367" x2="425" y2="352" stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeLinecap="round" />
                    <circle cx="425" cy="348" r="3.5" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
                  </g>

                  {/* === SUBTLE FLOATING PARTICLES === */}
                  <circle cx="100" cy="80" r="1.5" fill="rgba(255,255,255,0.08)">
                    <animate attributeName="cy" values="80;65;80" dur="6s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="430" cy="150" r="1" fill="rgba(255,255,255,0.06)">
                    <animate attributeName="cy" values="150;135;150" dur="5s" repeatCount="indefinite" begin="1s" />
                  </circle>
                  <circle cx="80" cy="440" r="1" fill="rgba(255,255,255,0.06)">
                    <animate attributeName="cy" values="440;428;440" dur="4.5s" repeatCount="indefinite" begin="2s" />
                  </circle>

                  {/* === CONNECTING LINES (circuit-like) === */}
                  <g opacity="0.12">
                    <path d="M175,355 L175,400" stroke="white" strokeWidth="0.5" />
                    <path d="M245,330 L245,355 L310,355 L310,315" stroke="white" strokeWidth="0.5" fill="none" />
                    <path d="M340,60 L340,175" stroke="white" strokeWidth="0.5" strokeDasharray="3 5" />
                    <circle cx="175" cy="400" r="2" fill="white" />
                    <circle cx="310" cy="315" r="2" fill="white" />
                  </g>
                </svg>

                {/* Single subtle orbit ring */}
                <div className="absolute inset-[-30px] border border-white/[0.025] rounded-full animate-[spin_60s_linear_infinite]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white/20 rounded-full" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ─── Stats Section ─── */}
      <section className="relative -mt-16 z-20">
        <div className="container-main">
          <Reveal>
            <div className="glass-card p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {[
                  { value: 118, suffix: "+", label: "Products", icon: <Pill className="w-5 h-5" /> },
                  { value: 500, suffix: "+", label: "Distribution Partners", icon: <Users className="w-5 h-5" /> },
                  { value: 10, suffix: "+", label: "Years Experience", icon: <Award className="w-5 h-5" /> },
                  { value: 7, suffix: "", label: "Product Categories", icon: <FlaskConical className="w-5 h-5" /> },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-50 text-brand-500 mb-3">
                      {stat.icon}
                    </div>
                    <p className="text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-1 text-sm text-gray-500 font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── About Snapshot ─── */}
      <section className="section-padding overflow-hidden">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-600 bg-brand-50 rounded-full">
                  <Sparkles className="w-3.5 h-3.5" />
                  About Us
                </span>
                <h2 className="mt-5 text-display-sm md:text-display text-balance">
                  Committed to Quality{" "}
                  <GradientText>Healthcare</GradientText>
                </h2>
                <p className="mt-6 text-lg text-gray-500 leading-relaxed">
                  Founded in Chandigarh over a decade ago, Trubeca Lifesciences set out with a clear mission: 
                  make quality pharmaceutical products accessible across India.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {company.certifications.map((cert) => (
                    <div key={cert.shortName} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                      <CheckCircle2 className="w-5 h-5 text-trust-green shrink-0" />
                      <span className="text-sm font-medium text-navy-900">{cert.shortName} Certified</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/about"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 group"
                >
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.2}>
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute -inset-4 bg-gradient-to-br from-brand-50 to-accent-cyan/10 rounded-3xl -rotate-2" />
                <div className="relative aspect-[4/3] bg-gradient-to-br from-brand-100 to-brand-50 rounded-2xl flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 gradient-mesh opacity-60" />
                  <FlaskConical className="w-24 h-24 text-brand-300 relative z-10" />
                  {/* Corner accent */}
                  <div className="absolute -bottom-2 -right-2 bg-white p-4 rounded-xl shadow-card-hover border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-trust-green/10 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-trust-green" />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-navy-900">10+</p>
                        <p className="text-xs text-gray-500">Years Growing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Product Categories ─── */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-main">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-600 bg-brand-50 rounded-full">
                Our Products
              </span>
              <h2 className="mt-5 text-display-sm md:text-display text-balance">
                Wide Range of{" "}
                <GradientText>Pharmaceutical</GradientText>{" "}Products
              </h2>
              <p className="mt-4 text-gray-500 text-lg">
                Explore our comprehensive portfolio of WHO-GMP certified healthcare products across multiple therapeutic segments.
              </p>
            </div>
          </Reveal>

          <StaggerChildren className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6" staggerDelay={0.08}>
            {categoriesData.categories.map((cat) => (
              <StaggerItem key={cat.slug}>
                <Link
                  href={`/products?category=${cat.slug}`}
                  className="group block p-6 bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500 text-center"
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-brand-50 text-brand-500 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    {categoryIcons[cat.slug] || <Pill className="w-6 h-6" />}
                  </div>
                  <h3 className="mt-4 font-semibold text-sm text-navy-900 group-hover:text-brand-600 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="mt-1 text-xs text-gray-400">{cat.productCount} Products</p>
                </Link>
              </StaggerItem>
            ))}
            <StaggerItem>
              <Link
                href="/products"
                className="group block p-6 bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl shadow-card hover:shadow-glow hover:-translate-y-1 transition-all duration-500 text-center h-full flex flex-col items-center justify-center"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-white/20 text-white flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <ArrowRight className="w-6 h-6" />
                </div>
                <h3 className="mt-4 font-semibold text-sm text-white">View All Products</h3>
                <p className="mt-1 text-xs text-white/60">{company.stats.totalProducts} Products</p>
              </Link>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* ─── Why Trubeca ─── */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-cyan/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="container-main relative z-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-300 bg-white/5 rounded-full border border-white/10">
                Why Choose Us
              </span>
              <h2 className="mt-5 text-display-sm md:text-display text-white text-balance">
                The Trubeca Advantage
              </h2>
              <p className="mt-4 text-white/50 text-lg">
                We stand apart with our unwavering commitment to quality, innovation, and customer success.
              </p>
            </div>
          </Reveal>

          <StaggerChildren className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {company.whyChooseUs.map((item, i) => {
              const icons = [Shield, Award, Truck, FlaskConical, Users, Heart];
              const Icon = icons[i % icons.length];
              return (
                <StaggerItem key={i}>
                  <div className="group p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.07] hover:border-white/[0.15] transition-all duration-500">
                    <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-500/20 transition-all duration-300">
                      <Icon className="w-6 h-6 text-brand-400" />
                    </div>
                    <h3 className="mt-5 font-semibold text-lg text-white">{item.title}</h3>
                    <p className="mt-3 text-sm text-white/50 leading-relaxed">{item.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* ─── Services Overview ─── */}
      <section className="section-padding">
        <div className="container-main">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-600 bg-brand-50 rounded-full">
                Our Services
              </span>
              <h2 className="mt-5 text-display-sm md:text-display text-balance">
                Complete Pharma{" "}
                <GradientText>Business Solutions</GradientText>
              </h2>
              <p className="mt-4 text-gray-500 text-lg">
                Whether you want to start your own pharma franchise or need contract manufacturing, we have you covered.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <div className="group relative p-8 md:p-10 rounded-3xl border-2 border-brand-100 bg-gradient-to-br from-brand-50/50 to-white hover:shadow-glow transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-brand-500 text-white flex items-center justify-center shadow-lg shadow-brand-500/30">
                    <Users className="w-7 h-7" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-navy-900">PCD Pharma Franchise</h3>
                  <p className="mt-3 text-gray-500 leading-relaxed">
                    Start your own pharma business with exclusive distribution rights, marketing support, and our complete product portfolio. Low investment, high returns.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {["Monopoly rights available", "Free promotional materials", "Low investment required", "Complete product range"].map(
                      (item) => (
                        <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-trust-green shrink-0" />
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                  <Link href="/pcd-pharma-franchise" className="mt-8 btn-primary">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="group relative p-8 md:p-10 rounded-3xl border-2 border-navy-100 bg-gradient-to-br from-navy-50/50 to-white hover:shadow-card-hover transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-navy-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-navy-900 text-white flex items-center justify-center shadow-lg shadow-navy-900/30">
                    <FlaskConical className="w-7 h-7" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-navy-900">Third Party Manufacturing</h3>
                  <p className="mt-3 text-gray-500 leading-relaxed">
                    Leverage our WHO-GMP certified manufacturing facility for your brand. State-of-the-art production with strict quality control at competitive pricing.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {["WHO-GMP certified facility", "Custom formulations", "Quality assurance", "Competitive pricing"].map(
                      (item) => (
                        <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-trust-green shrink-0" />
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                  <Link href="/third-party-manufacturing" className="mt-8 btn-secondary">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-500 to-accent-cyan" />
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        
        <div className="container-main relative z-10 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className="text-display-sm md:text-display text-white text-balance">
              Ready to Start Your Pharma Business?
            </h2>
            <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto">
              Join hands with Trubeca Life Sciences and build a successful pharmaceutical business with our proven PCD Franchise model.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 px-8 py-4 bg-white text-brand-600 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 shadow-xl shadow-black/10"
                >
                  Get Started Today
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <a
                  href="https://wa.me/918699826998"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 border-2 border-white/25 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                >
                  WhatsApp Us
                </a>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
