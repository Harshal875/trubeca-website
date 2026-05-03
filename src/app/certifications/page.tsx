import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Award,
  CheckCircle2,
  FileCheck,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
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
      <PageHeader
        title="Certifications & Quality"
        subtitle="Our commitment to quality is backed by internationally recognized certifications and rigorous quality processes."
        breadcrumbs={[{ label: "Certifications" }]}
      />

      {/* ─── Certification Cards ─── */}
      <section className="bg-white">
        <div className="container-main section-padding">
          <SectionHeading
            badge="Our Certifications"
            title="Internationally Certified Quality"
            subtitle="We hold multiple certifications that validate our commitment to pharmaceutical excellence."
          />
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="card p-5 sm:p-6 md:p-8 border-l-4 border-brand-500 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <cert.icon className="w-8 h-8 text-brand-500" />
                  <h3 className="text-xl font-bold text-navy-900">{cert.name}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>
                <ul className="space-y-2">
                  {cert.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-trust-green shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Quality Pillars ─── */}
      <section className="bg-gray-50">
        <div className="container-main section-padding">
          <SectionHeading
            badge="Quality Assurance"
            title="Our Quality Process"
            subtitle="Quality is not just a certification — it's embedded in every step of our operations."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {qualityPillars.map((pillar, i) => (
              <div
                key={i}
                className="card p-5 sm:p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-navy-800 text-brand-400 flex items-center justify-center text-sm font-bold mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-semibold text-navy-900 mb-2">{pillar.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-gradient-to-r from-brand-500 to-brand-600 text-white">
        <div className="container-main py-10 sm:py-14 text-center">
          <h2 className="text-section md:text-section-md font-bold mb-3 sm:mb-4">
            Quality You Can Trust
          </h2>
          <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Partner with a certified pharmaceutical company that puts quality and safety above everything else.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-brand-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Explore Products <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
