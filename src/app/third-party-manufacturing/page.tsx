import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  FlaskConical,
  Factory,
  Package,
  Award,
  ClipboardCheck,
  Microscope,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Reveal, StaggerChildren, StaggerItem, GradientText } from "@/components/ui/animations";
import EnquiryForm from "@/components/shared/EnquiryForm";

export const metadata: Metadata = {
  title: "Third Party Manufacturing",
  description:
    "WHO-GMP certified Third Party Manufacturing / Contract Manufacturing services by Trubeca Life Sciences. Custom formulations, quality assurance, and competitive pricing.",
};

const capabilities = [
  {
    icon: Factory,
    title: "State-of-the-Art Facility",
    description:
      "Our manufacturing plant is equipped with modern machinery and automated production lines for consistent output.",
  },
  {
    icon: Shield,
    title: "WHO-GMP & ISO Certified",
    description:
      "Our facility adheres to WHO-GMP standards and is ISO 9001:2015 certified, ensuring the highest quality at every step.",
  },
  {
    icon: FlaskConical,
    title: "Custom Formulations",
    description:
      "We can develop and manufacture custom formulations tailored to your brand requirements and market needs.",
  },
  {
    icon: Microscope,
    title: "Quality Testing Lab",
    description:
      "In-house quality control laboratory with advanced analytical instruments for rigorous testing of raw materials and finished products.",
  },
  {
    icon: ClipboardCheck,
    title: "Regulatory Compliance",
    description:
      "Full documentation and regulatory support including DCGI approvals, stability studies, and batch records.",
  },
  {
    icon: Package,
    title: "Flexible Packaging",
    description:
      "Multiple packaging options available — blister packs, ALU-ALU, strip packing, bottles, and custom designs with your branding.",
  },
];

const dosageForms = [
  "Tablets",
  "Capsules",
  "Syrups",
  "Dry Syrups",
  "Injections (Liquid & Dry)",
  "Ointments & Creams",
  "Drops",
  "Sachets & Powders",
];

export default function ThirdPartyPage() {
  return (
    <>
      {/* ─── Page Header ─── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-navy-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-brand-900" />
          <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[120px]" />
        </div>
        <div className="container-main relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium uppercase tracking-wider bg-white/5 text-white/70 rounded-full border border-white/10">
              <Sparkles className="w-3.5 h-3.5" />
              Contract Manufacturing
            </span>
            <h1 className="mt-6 text-display-sm md:text-display-lg text-white text-balance">
              Third Party <GradientText>Manufacturing</GradientText>
            </h1>
            <p className="mt-4 text-lg text-white/50 max-w-2xl">
              Leverage our WHO-GMP certified facility for your brand. Quality manufacturing at competitive pricing.
            </p>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ─── Overview ─── */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal direction="left">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-600 bg-brand-50 rounded-full">
                  Contract Manufacturing
                </span>
                <h2 className="mt-5 text-display-sm md:text-display text-balance">
                  Your Brand, Our <GradientText>Expertise</GradientText>
                </h2>
                <div className="mt-6 space-y-4 text-gray-500 leading-relaxed">
                  <p>
                    Trubeca Life Sciences offers comprehensive Third Party Manufacturing services
                    for pharmaceutical companies looking to expand their product portfolio without
                    investing in manufacturing infrastructure.
                  </p>
                  <p>
                    With our WHO-GMP certified facility, experienced R&D team, and rigorous quality
                    control processes, we ensure that every product manufactured under your brand
                    meets the highest standards of quality and efficacy.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary">
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/certifications" className="btn-secondary">
                    Our Certifications
                  </Link>
                </div>
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-navy-50 to-brand-50 rounded-3xl rotate-2" />
                <div className="relative aspect-[4/3] bg-gradient-to-br from-navy-100 to-brand-50 rounded-2xl flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 gradient-mesh opacity-40" />
                  <Factory className="w-24 h-24 text-navy-300 relative z-10" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Capabilities ─── */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-main">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-600 bg-brand-50 rounded-full">
                Our Capabilities
              </span>
              <h2 className="mt-5 text-display-sm md:text-display text-balance">
                Manufacturing <GradientText>Excellence</GradientText>
              </h2>
              <p className="mt-4 text-gray-500 text-lg">
                We bring world-class manufacturing capabilities to your brand.
              </p>
            </div>
          </Reveal>
          <StaggerChildren className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {capabilities.map((cap) => (
              <StaggerItem key={cap.title}>
                <div className="group p-6 md:p-8 bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <cap.icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-5 font-semibold text-navy-900">{cap.title}</h3>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed">{cap.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ─── Dosage Forms ─── */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-cyan/10 rounded-full blur-[100px]" />
        </div>
        <div className="container-main relative z-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-300 bg-white/5 rounded-full border border-white/10">
                Dosage Forms
              </span>
              <h2 className="mt-5 text-display-sm md:text-display text-white text-balance">
                What We Manufacture
              </h2>
              <p className="mt-4 text-white/50 text-lg">
                We offer manufacturing across all major pharmaceutical dosage forms.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {dosageForms.map((form) => (
              <div
                key={form}
                className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 backdrop-blur-sm hover:bg-white/[0.08] transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0" />
                <span className="text-sm font-medium text-white/80">{form}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="section-padding">
        <div className="container-main">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-600 bg-brand-50 rounded-full">
                Our Process
              </span>
              <h2 className="mt-5 text-display-sm md:text-display text-balance">
                How It <GradientText>Works</GradientText>
              </h2>
              <p className="mt-4 text-gray-500 text-lg">
                A streamlined process from enquiry to delivery.
              </p>
            </div>
          </Reveal>
          <StaggerChildren className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {[
              { step: "01", title: "Enquiry & Discussion", desc: "Share your requirements — products, quantity, packaging preferences." },
              { step: "02", title: "Quotation & Agreement", desc: "We provide competitive pricing and terms. Sign the manufacturing agreement." },
              { step: "03", title: "Manufacturing", desc: "Production begins in our GMP-certified facility with strict quality checks." },
              { step: "04", title: "QC & Delivery", desc: "Rigorous quality testing followed by packaging and dispatch to your location." },
            ].map((s) => (
              <StaggerItem key={s.step}>
                <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-card">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 text-brand-400 flex items-center justify-center text-xl font-bold shadow-lg">
                    {s.step}
                  </div>
                  <h3 className="mt-5 font-semibold text-navy-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ─── Enquiry ─── */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-main">
          <div className="max-w-2xl mx-auto">
            <Reveal>
              <div className="text-center">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-600 bg-brand-50 rounded-full">
                  Get a Quote
                </span>
                <h2 className="mt-5 text-display-sm text-balance">
                  Request Third Party <GradientText>Manufacturing</GradientText>
                </h2>
                <p className="mt-4 text-gray-500">
                  Tell us your requirements and we&apos;ll get back to you with a competitive quote.
                </p>
              </div>
            </Reveal>
            <div className="mt-10 bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-card">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
