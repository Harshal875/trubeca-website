"use client";

import Link from "next/link";
import {
  ArrowRight, Factory, Shield, Clock, Award, FlaskConical,
  CheckCircle2, Sparkles, Package, Settings,
} from "lucide-react";
import { Reveal, StaggerChildren, StaggerItem, GradientText, TiltCard, AnimatedCounter } from "@/components/ui/animations";
import EnquiryForm from "@/components/shared/EnquiryForm";

const capabilities = [
  { icon: Factory, title: "Custom Formulations", desc: "We develop and manufacture custom formulations based on your specifications and market requirements." },
  { icon: Shield, title: "WHO-GMP Certified", desc: "Our manufacturing facilities meet international WHO-GMP standards for quality and safety." },
  { icon: Clock, title: "Timely Delivery", desc: "We ensure on-time delivery with efficient production planning and logistics management." },
  { icon: Award, title: "Quality Assurance", desc: "Multi-stage quality checks — raw material testing, in-process checks, and finished product analysis." },
  { icon: Package, title: "Flexible Packaging", desc: "Multiple packaging options including blister, alu-alu, bottle, tube, and custom packaging solutions." },
  { icon: Settings, title: "Advanced Machinery", desc: "State-of-the-art manufacturing equipment for tablets, capsules, liquids, injectables, and topicals." },
];

const processSteps = [
  { num: "01", title: "Requirement Analysis", desc: "Share your formulation requirements and specifications." },
  { num: "02", title: "Formulation Development", desc: "Our R&D team develops and optimizes the formulation." },
  { num: "03", title: "Sample & Approval", desc: "We provide product samples for your testing and approval." },
  { num: "04", title: "Bulk Production", desc: "Full-scale manufacturing with quality checks at every stage." },
  { num: "05", title: "Packaging & Delivery", desc: "Custom packaging and timely delivery to your location." },
];

export default function ThirdPartyPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-navy-950">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-brand-900/80" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-cyan/[0.07] rounded-full blur-[150px]" />
        <div className="container-main relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white/60 bg-white/[0.04] rounded-full border border-white/[0.08]">
              <Factory className="w-3.5 h-3.5" /> Manufacturing Services
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.03em] leading-[1.05] font-display">
              Third-Party <span className="text-gradient">Manufacturing</span>
            </h1>
            <p className="mt-5 text-lg text-white/40 max-w-2xl">
              Reliable contract manufacturing with best price assurance, WHO-GMP certified facilities, and timely delivery.
            </p>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ── Capabilities ── */}
      <section className="section-padding">
        <div className="container-main">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-600 bg-brand-50 rounded-full">
                Our Capabilities
              </span>
              <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] font-display">
                Manufacturing <span className="text-gradient italic">Excellence</span>
              </h2>
              <p className="mt-4 text-gray-500 text-lg">
                End-to-end manufacturing services from formulation development to final packaging.
              </p>
            </div>
          </Reveal>
          <StaggerChildren className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {capabilities.map((c) => (
              <StaggerItem key={c.title}>
                <TiltCard>
                  <div className="group p-6 md:p-8 bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-500 h-full">
                    <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <c.icon className="w-6 h-6" />
                    </div>
                    <h3 className="mt-5 font-bold text-navy-900">{c.title}</h3>
                    <p className="mt-3 text-sm text-gray-500 leading-relaxed">{c.desc}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-main">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-600 bg-brand-50 rounded-full">
                Our Process
              </span>
              <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] font-display">
                How It <span className="text-gradient italic">Works</span>
              </h2>
            </div>
          </Reveal>
          <div className="max-w-3xl mx-auto">
            <StaggerChildren className="space-y-0" staggerDelay={0.1}>
              {processSteps.map((s, i) => (
                <StaggerItem key={s.num}>
                  <div className="flex gap-6 pb-8">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-brand-500/20 shrink-0 font-display">
                        {s.num}
                      </div>
                      {i < processSteps.length - 1 && <div className="w-px flex-1 bg-gray-200 mt-2" />}
                    </div>
                    <div className="pt-2 pb-4">
                      <h3 className="font-bold text-navy-900">{s.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">{s.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* ── Product Types ── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.06),transparent_70%)]" />
        <div className="container-main relative z-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-[-0.02em] font-display">
                What We Manufacture
              </h2>
              <p className="mt-4 text-white/50">Complete range of pharmaceutical dosage forms.</p>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Tablets", "Capsules (Hard/Soft)", "Liquid Syrups", "Dry Syrups", "Injectable Ampoules", "Injectable Vials", "Creams & Ointments", "Protein Powders"].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 hover:bg-white/[0.08] transition-colors">
                <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0" />
                <span className="text-sm text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enquiry Form ── */}
      <section className="section-padding">
        <div className="container-main max-w-2xl">
          <Reveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold tracking-[-0.02em] font-display">
                Get a <span className="text-gradient italic">Manufacturing Quote</span>
              </h2>
              <p className="mt-3 text-gray-500">Share your requirements and we will provide a competitive quote within 24 hours.</p>
            </div>
          </Reveal>
          <div className="bg-white rounded-2xl p-6 md:p-10 border border-gray-100 shadow-card">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
