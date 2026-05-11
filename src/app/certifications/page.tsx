"use client";

import Link from "next/link";
import { ArrowRight, Shield, CheckCircle2, Award } from "lucide-react";
import { Reveal, StaggerChildren, StaggerItem, GradientText, TiltCard } from "@/components/ui/animations";
import company from "@/data/company.json";

export default function CertificationsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-navy-950">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-brand-900/80" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent-emerald/[0.07] rounded-full blur-[150px]" />
        <div className="container-main relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white/60 bg-white/[0.04] rounded-full border border-white/[0.08]">
              <Shield className="w-3.5 h-3.5" /> Quality Assurance
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.03em] leading-[1.05] font-display">
              Our <span className="text-gradient">Certifications</span>
            </h1>
            <p className="mt-5 text-lg text-white/40 max-w-xl">
              Internationally recognized quality certifications ensuring the highest standards in pharmaceutical manufacturing.
            </p>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ── Certifications Grid ── */}
      <section className="section-padding">
        <div className="container-main">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] font-display">
                Quality You Can <span className="text-gradient italic">Trust</span>
              </h2>
              <p className="mt-4 text-gray-500 text-lg">
                Every product we manufacture meets the highest quality and safety standards in the industry.
              </p>
            </div>
          </Reveal>
          <StaggerChildren className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto" staggerDelay={0.1}>
            {company.certifications.map((cert) => (
              <StaggerItem key={cert.shortName}>
                <TiltCard>
                  <div className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-500">
                    <div className="flex items-start gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/20 shrink-0">
                        <span className="text-white font-extrabold text-sm font-display">{cert.shortName}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-navy-900 font-display">{cert.name}</h3>
                        <p className="mt-2 text-sm text-gray-500 leading-relaxed">{cert.description}</p>
                      </div>
                    </div>
                    {/* Certificate image placeholder */}
                    <div className="mt-6 aspect-[16/9] bg-gradient-to-br from-gray-50 to-brand-50/30 rounded-xl flex items-center justify-center border border-gray-100">
                      <div className="text-center">
                        <Award className="w-8 h-8 text-brand-200 mx-auto" />
                        <p className="mt-2 text-xs text-gray-400">Certificate Image</p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Quality Commitment ── */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <div className="text-center">
                <h2 className="text-3xl font-extrabold tracking-[-0.02em] font-display">
                  Our Quality <span className="text-gradient italic">Commitment</span>
                </h2>
                <p className="mt-6 text-gray-500 leading-relaxed">
                  At Trubeca Lifesciences, quality is not just a standard — it is our foundation. Every product undergoes rigorous multi-stage testing, from raw material sourcing to final packaging.
                </p>
              </div>
            </Reveal>
            <StaggerChildren className="mt-10 grid sm:grid-cols-2 gap-4" staggerDelay={0.08}>
              {[
                "Raw material testing & verification",
                "In-process quality checks at every stage",
                "Finished product analysis & testing",
                "Stability testing for shelf life assurance",
                "Microbiology & sterility testing",
                "Compliance with pharmacopeia standards",
                "Regular facility audits & inspections",
                "Continuous process improvement",
              ].map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-accent-emerald shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 to-brand-900" />
        <div className="container-main relative z-10 text-center">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-white font-display">
              Partner with a Quality-First Company
            </h2>
            <p className="mt-3 text-white/50 max-w-md mx-auto">
              Experience the Trubeca difference in pharmaceutical manufacturing and distribution.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/products" className="btn-ghost">
                View Products
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
