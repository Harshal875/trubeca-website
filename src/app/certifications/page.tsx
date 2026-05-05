import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Award,
  CheckCircle2,
  FileCheck,
  ArrowRight,
  BadgeCheck,
  Sparkles,
} from "lucide-react";
import { Reveal, StaggerChildren, StaggerItem, GradientText } from "@/components/ui/animations";
import company from "@/data/company.json";

export const metadata: Metadata = {
  title: "Certifications & Quality Assurance",
  description:
    "Trubeca Life Sciences holds ISO 9001:2015, WHO-GMP, FSSAI, and DCGI certifications. Learn about our commitment to pharmaceutical quality and safety.",
};

const certifications = [
  {
    name: "ISO 9001:2015",
    icon: Award,
    description:
      "International standard for Quality Management Systems, ensuring consistent quality in all our processes from manufacturing to delivery.",
    benefits: [
      "Standardized quality processes",
      "Continuous improvement framework",
      "Customer satisfaction focus",
      "Risk-based thinking approach",
    ],
  },
  {
    name: "WHO-GMP",
    icon: Shield,
    description:
      "World Health Organization Good Manufacturing Practice certification ensures our manufacturing facility meets international pharmaceutical production standards.",
    benefits: [
      "International manufacturing standards",
      "Controlled production environment",
      "Validated manufacturing processes",
      "Comprehensive documentation",
    ],
  },
  {
    name: "FSSAI",
    icon: FileCheck,
    description:
      "Food Safety and Standards Authority of India certification for our food supplement and nutraceutical product lines.",
    benefits: [
      "Food safety compliance",
      "Hygienic manufacturing",
      "Safe ingredient sourcing",
      "Regular safety audits",
    ],
  },
  {
    name: "DCGI Approved",
    icon: BadgeCheck,
    description:
      "All our products are approved by the Drug Controller General of India, the national regulatory body for pharmaceuticals.",
    benefits: [
      "Regulatory compliance",
      "Product safety assurance",
      "Legal manufacturing license",
      "Periodic regulatory inspections",
    ],
  },
];

const qualityPillars = [
  {
    title: "Raw Material Testing",
    description:
      "Every batch of raw materials undergoes rigorous testing in our QC lab before being approved for production.",
  },
  {
    title: "In-Process Quality Checks",
    description:
      "Multiple quality checkpoints during manufacturing ensure consistency and adherence to specifications.",
  },
  {
    title: "Finished Product Analysis",
    description:
      "Comprehensive analysis of finished products including assay, dissolution, disintegration, and stability testing.",
  },
  {
    title: "Stability Studies",
    description:
      "Long-term and accelerated stability studies ensure product efficacy throughout the shelf life.",
  },
  {
    title: "Clean Room Manufacturing",
    description:
      "Temperature and humidity-controlled clean rooms with HEPA filtration for contamination-free production.",
  },
  {
    title: "Batch Traceability",
    description:
      "Complete traceability for every batch — from raw material receipt to finished product dispatch.",
  },
];

export default function CertificationsPage() {
  return (
    <>
      {/* ─── Page Header ─── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-navy-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-brand-900" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-trust-green/10 rounded-full blur-[120px]" />
        </div>
        <div className="container-main relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium uppercase tracking-wider bg-white/5 text-white/70 rounded-full border border-white/10">
              <Sparkles className="w-3.5 h-3.5" />
              Quality & Trust
            </span>
            <h1 className="mt-6 text-display-sm md:text-display-lg text-white text-balance">
              Certifications & <GradientText>Quality</GradientText>
            </h1>
            <p className="mt-4 text-lg text-white/50 max-w-2xl">
              Our commitment to quality is backed by internationally recognized certifications and rigorous quality processes.
            </p>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ─── Certification Cards ─── */}
      <section className="section-padding">
        <div className="container-main">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-600 bg-brand-50 rounded-full">
                Our Certifications
              </span>
              <h2 className="mt-5 text-display-sm md:text-display text-balance">
                Internationally Certified <GradientText>Quality</GradientText>
              </h2>
              <p className="mt-4 text-gray-500 text-lg">
                We hold multiple certifications that validate our commitment to pharmaceutical excellence.
              </p>
            </div>
          </Reveal>
          <StaggerChildren className="mt-14 grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {certifications.map((cert) => (
              <StaggerItem key={cert.name}>
                <div className="p-6 md:p-8 bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-500">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center">
                      <cert.icon className="w-6 h-6 text-brand-500" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900">{cert.name}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {cert.description}
                  </p>
                  <ul className="space-y-2.5">
                    {cert.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-trust-green shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ─── Quality Pillars ─── */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-main">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-600 bg-brand-50 rounded-full">
                Quality Assurance
              </span>
              <h2 className="mt-5 text-display-sm md:text-display text-balance">
                Our Quality <GradientText>Process</GradientText>
              </h2>
              <p className="mt-4 text-gray-500 text-lg">
                Quality is not just a certification — it&apos;s embedded in every step of our operations.
              </p>
            </div>
          </Reveal>
          <StaggerChildren className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {qualityPillars.map((pillar, i) => (
              <StaggerItem key={i}>
                <div className="p-6 md:p-8 bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500">
                  <div className="w-10 h-10 rounded-xl bg-navy-900 text-brand-400 flex items-center justify-center text-sm font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-5 font-semibold text-navy-900">{pillar.title}</h3>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed">{pillar.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-500 to-accent-cyan" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: "40px 40px" }} />
        <div className="container-main relative z-10 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className="text-display-sm md:text-display text-white text-balance">
              Quality You Can Trust
            </h2>
            <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto">
              Partner with a certified pharmaceutical company that puts quality and safety above everything else.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-600 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 shadow-xl"
              >
                Explore Products <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/25 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
