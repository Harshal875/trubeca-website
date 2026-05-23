"use client";

import Link from "next/link";
import {
  ArrowRight, Shield, Award, Users, Factory,
  Microscope, Heart, CheckCircle2, Target, Eye,
} from "lucide-react";
import {
  Reveal, StaggerChildren, StaggerItem, AnimatedCounter,
  GradientText, TiltCard,
} from "@/components/ui/animations";
import EnquiryForm from "@/components/shared/EnquiryForm";
import company from "@/data/company.json";

const milestones = [
  { year: "2015", title: "Founded", desc: "Trubeca Lifesciences established in Chandigarh" },
  { year: "2017", title: "100+ Partners", desc: "Expanded distribution network across North India" },
  { year: "2019", title: "ISO Certified", desc: "Achieved ISO 9001:2015 certification" },
  { year: "2021", title: "100+ Products", desc: "Portfolio grew to over 100 pharmaceutical products" },
  { year: "2023", title: "Pan-India", desc: "Distribution network spanning 20+ states" },
  { year: "2025", title: "500+ Partners", desc: "Crossed 500 active distribution partners" },
];

const values = [
  { icon: Shield, title: "Quality First", desc: "Every product manufactured under WHO-GMP standards with rigorous quality checks." },
  { icon: Heart, title: "Customer Focus", desc: "Building long-term partnerships through dedicated support and transparency." },
  { icon: Target, title: "Innovation", desc: "Continuous R&D for new formulations and improved drug delivery systems." },
  { icon: Eye, title: "Integrity", desc: "Ethical business practices, fair pricing, and honest partnerships." },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-navy-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-brand-900/80" />
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-500/[0.07] rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent-violet/[0.05] rounded-full blur-[120px]" />
        </div>
        <div className="container-main relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white/60 bg-white/[0.04] rounded-full border border-white/[0.08]">
              About Us
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.03em] leading-[1.05] font-display">
              A Decade of{" "}
              <span className="text-gradient">Pharmaceutical</span>
              <br />Excellence
            </h1>
            <p className="mt-5 text-lg text-white/40 max-w-2xl leading-relaxed">
              From a Chandigarh-based startup to a trusted pharmaceutical company serving 500+ partners across India.
            </p>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ── Company Story ── */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal direction="left">
              <TiltCard>
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-brand-50 shadow-premium">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Factory className="w-16 h-16 text-brand-200" />
                  </div>
                </div>
              </TiltCard>
            </Reveal>
            <Reveal direction="right" delay={0.2}>
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-600 bg-brand-50 rounded-full">
                  Our Story
                </span>
                <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] leading-tight font-display">
                  Building India&apos;s Trusted
                  <br /><span className="text-gradient-dark italic">Pharma Brand</span>
                </h2>
                <div className="mt-6 space-y-4 text-gray-500 leading-relaxed">
                  {company.about.full.split("\n\n").map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {company.certifications.map((cert) => (
                    <span key={cert.shortName} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-accent-emerald/10 text-accent-emerald rounded-full">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {cert.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-main">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] font-display">
                Our <span className="text-gradient italic">Values</span>
              </h2>
              <p className="mt-4 text-gray-500">
                The principles that guide every decision we make.
              </p>
            </div>
          </Reveal>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <TiltCard>
                  <div className="group p-6 bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-500 h-full">
                    <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 mb-5">
                      <v.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-navy-900">{v.title}</h3>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950" />
        <div className="container-main relative z-10">
          <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
            {[
              { value: 200, suffix: "+", label: "Products" },
              { value: 10, suffix: "+", label: "Years" },
              { value: 500, suffix: "+", label: "Partners" },
              { value: 7, suffix: "", label: "Categories" },
            ].map((s) => (
              <StaggerItem key={s.label}>
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-white font-display">
                    <AnimatedCounter end={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-sm text-white/40 mt-2">{s.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="section-padding">
        <div className="container-main">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] font-display">
                Our <span className="text-gradient italic">Journey</span>
              </h2>
            </div>
          </Reveal>
          <div className="max-w-3xl mx-auto">
            <StaggerChildren className="space-y-0" staggerDelay={0.1}>
              {milestones.map((m, i) => (
                <StaggerItem key={m.year}>
                  <div className="flex gap-6 pb-8">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-brand-500 text-white flex items-center justify-center text-xs font-bold shadow-lg shadow-brand-500/20 shrink-0">
                        {m.year}
                      </div>
                      {i < milestones.length - 1 && <div className="w-px flex-1 bg-gray-200 mt-2" />}
                    </div>
                    <div className="pt-2 pb-4">
                      <h3 className="font-bold text-navy-900">{m.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">{m.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* ── R&D & Manufacturing ── */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12">
            <Reveal>
              <div className="p-8 lg:p-10 bg-white rounded-2xl border border-gray-100 shadow-card h-full">
                <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-500 flex items-center justify-center mb-6">
                  <Microscope className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 font-display">Research & Development</h3>
                <p className="mt-4 text-gray-500 leading-relaxed">{company.about.rnd}</p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="p-8 lg:p-10 bg-white rounded-2xl border border-gray-100 shadow-card h-full">
                <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-500 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 font-display">Our Team</h3>
                <p className="mt-4 text-gray-500 leading-relaxed">{company.about.team}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 to-brand-900" />
        <div className="container-main relative z-10 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-[-0.02em] font-display">
              Ready to Partner With Us?
            </h2>
            <p className="mt-4 text-white/50 max-w-lg mx-auto">
              Join 500+ successful distribution partners across India. Start your pharma business today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/pcd-pharma-franchise" className="btn-ghost">
                PCD Franchise Details
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
