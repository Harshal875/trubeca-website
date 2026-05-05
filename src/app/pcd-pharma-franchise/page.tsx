import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  MapPin,
  Gift,
  TrendingUp,
  Handshake,
  Users,
  Package,
  Award,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Reveal, StaggerChildren, StaggerItem, GradientText } from "@/components/ui/animations";
import EnquiryForm from "@/components/shared/EnquiryForm";
import company from "@/data/company.json";

export const metadata: Metadata = {
  title: "PCD Pharma Franchise",
  description:
    "Start your own pharma business with Trubeca Life Sciences PCD Pharma Franchise. Get monopoly rights, free promotional materials, and 100+ quality products. Low investment, high returns.",
};

const benefits = [
  {
    icon: MapPin,
    title: "Monopoly Distribution Rights",
    description:
      "Get exclusive distribution rights in your territory. No competition from other franchisees in your area.",
  },
  {
    icon: Gift,
    title: "Free Promotional Materials",
    description:
      "We provide visual aids, product cards, brochures, MR bags, catch covers, and other marketing tools free of cost.",
  },
  {
    icon: Package,
    title: "100+ Quality Products",
    description:
      "Access our complete portfolio of WHO-GMP certified products across tablets, capsules, syrups, injections, and more.",
  },
  {
    icon: TrendingUp,
    title: "Low Investment, High Returns",
    description:
      "Start your pharma business with minimal investment. Enjoy high profit margins and quick ROI.",
  },
  {
    icon: Handshake,
    title: "Complete Business Support",
    description:
      "From marketing strategies to regulatory guidance, we support you at every step of your business journey.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "All products manufactured in WHO-GMP, ISO 9001:2015, and FSSAI certified facilities with strict quality control.",
  },
];

const steps = [
  { step: "01", title: "Contact Us", description: "Reach out via phone, WhatsApp, or fill the enquiry form." },
  { step: "02", title: "Discuss Requirements", description: "We understand your needs, preferred territory, and product interests." },
  { step: "03", title: "Agreement & Onboarding", description: "Sign the franchise agreement and complete documentation." },
  { step: "04", title: "Start Your Business", description: "Receive products, promotional materials, and begin operations." },
];

export default function PCDFranchisePage() {
  return (
    <>
      {/* ─── Page Header ─── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-navy-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-brand-900" />
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent-violet/10 rounded-full blur-[100px]" />
        </div>
        <div className="container-main relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium uppercase tracking-wider bg-white/5 text-white/70 rounded-full border border-white/10">
              <Sparkles className="w-3.5 h-3.5" />
              Business Opportunity
            </span>
            <h1 className="mt-6 text-display-sm md:text-display-lg text-white text-balance">
              PCD Pharma <GradientText>Franchise</GradientText>
            </h1>
            <p className="mt-4 text-lg text-white/50 max-w-2xl">
              Start your own pharma business with exclusive monopoly rights, complete product portfolio, and full marketing support.
            </p>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ─── Benefits ─── */}
      <section className="section-padding">
        <div className="container-main">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-600 bg-brand-50 rounded-full">
                Why Partner With Us
              </span>
              <h2 className="mt-5 text-display-sm md:text-display text-balance">
                Benefits of Trubeca <GradientText>PCD Franchise</GradientText>
              </h2>
              <p className="mt-4 text-gray-500 text-lg">
                We provide everything you need to build a successful pharmaceutical business.
              </p>
            </div>
          </Reveal>
          <StaggerChildren className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {benefits.map((b) => (
              <StaggerItem key={b.title}>
                <div className="group p-6 md:p-8 bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <b.icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-5 font-semibold text-navy-900">{b.title}</h3>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed">{b.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-main">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-600 bg-brand-50 rounded-full">
                Process
              </span>
              <h2 className="mt-5 text-display-sm md:text-display text-balance">
                How to <GradientText>Get Started</GradientText>
              </h2>
              <p className="mt-4 text-gray-500 text-lg">
                4 simple steps to launch your pharma franchise business.
              </p>
            </div>
          </Reveal>
          <StaggerChildren className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {steps.map((s) => (
              <StaggerItem key={s.step}>
                <div className="relative text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-card">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-brand-500/20">
                    {s.step}
                  </div>
                  <h3 className="mt-5 font-semibold text-navy-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{s.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ─── Product Range Summary ─── */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-500/10 rounded-full blur-[100px]" />
        </div>
        <div className="container-main relative z-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-300 bg-white/5 rounded-full border border-white/10">
                Product Range
              </span>
              <h2 className="mt-5 text-display-sm md:text-display text-white text-balance">
                Complete Pharma Product Portfolio
              </h2>
              <p className="mt-4 text-white/50 text-lg">
                Our franchise partners get access to 100+ products across all major therapeutic segments.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Tablets & Capsules",
              "Syrups & Suspensions",
              "Dry Syrups",
              "Pediatric Drops",
              "Injections",
              "Creams & Ointments",
              "Supplements",
              "And More...",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 backdrop-blur-sm hover:bg-white/[0.08] transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                <span className="text-sm text-white/80">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-navy-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl"
            >
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Enquiry Form ─── */}
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-2xl mx-auto">
            <Reveal>
              <div className="text-center">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-600 bg-brand-50 rounded-full">
                  Get Started
                </span>
                <h2 className="mt-5 text-display-sm text-balance">
                  Apply for PCD Pharma <GradientText>Franchise</GradientText>
                </h2>
                <p className="mt-4 text-gray-500">
                  Fill the form below and our team will get back to you within 24 hours.
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
