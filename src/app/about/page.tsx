import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Award,
  FlaskConical,
  Users,
  Target,
  Eye,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Reveal, StaggerChildren, StaggerItem, AnimatedCounter, GradientText } from "@/components/ui/animations";
import company from "@/data/company.json";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Trubeca Life Sciences – a trusted pharmaceutical company committed to quality healthcare products, ISO & GMP certified manufacturing, and pan-India distribution.",
};

export default function AboutPage() {
  return (
    <>
      {/* ─── Page Header ─── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-navy-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-brand-900" />
          <div className="absolute top-1/3 -right-1/4 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px]" />
        </div>
        <div className="container-main relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium uppercase tracking-wider bg-white/5 text-white/70 rounded-full border border-white/10">
              <Sparkles className="w-3.5 h-3.5" />
              About Us
            </span>
            <h1 className="mt-6 text-display-sm md:text-display-lg text-white text-balance">
              About <GradientText>Trubeca</GradientText> Life Sciences
            </h1>
            <p className="mt-4 text-lg text-white/50 max-w-2xl">
              A trusted name in pharmaceutical manufacturing and distribution since our inception.
            </p>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ─── Story ─── */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal direction="left">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-600 bg-brand-50 rounded-full">
                  Our Story
                </span>
                <h2 className="mt-5 text-display-sm md:text-display text-balance">
                  Building Trust Through <GradientText>Quality</GradientText>
                </h2>
                <div className="mt-6 space-y-4 text-gray-500 leading-relaxed">
                  <p>{company.about.full}</p>
                  <p>{company.about.portfolio}</p>
                </div>
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-brand-50 to-accent-cyan/10 rounded-3xl -rotate-2" />
                <div className="relative aspect-square bg-gradient-to-br from-brand-100 to-brand-50 rounded-2xl flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 gradient-mesh opacity-60" />
                  <FlaskConical className="w-32 h-32 text-brand-300 relative z-10" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-brand-500/10 rounded-full blur-[100px]" />
        </div>
        <div className="container-main relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: 118, suffix: "+", label: "Products" },
              { value: 500, suffix: "+", label: "Partners" },
              { value: 10, suffix: "+", label: "Years" },
              { value: 7, suffix: "", label: "Categories" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-white/40 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Vision & Mission ─── */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <div className="p-8 md:p-10 rounded-3xl bg-white border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-brand-500" />
                </div>
                <h3 className="text-xl font-bold text-navy-900">Our Mission</h3>
                <p className="mt-4 text-gray-500 leading-relaxed">
                  To make quality healthcare accessible and affordable across India by manufacturing
                  world-class pharmaceutical products and building strong distribution partnerships
                  through our PCD Franchise and Third Party Manufacturing models.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="p-8 md:p-10 rounded-3xl bg-white border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-trust-green/10 flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-trust-green" />
                </div>
                <h3 className="text-xl font-bold text-navy-900">Our Vision</h3>
                <p className="mt-4 text-gray-500 leading-relaxed">
                  To be among India&apos;s most trusted pharmaceutical companies, known for consistent
                  quality, innovative formulations, and empowering entrepreneurs to build successful
                  healthcare businesses in every corner of the nation.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section className="section-padding">
        <div className="container-main">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-600 bg-brand-50 rounded-full">
                Our Strengths
              </span>
              <h2 className="mt-5 text-display-sm md:text-display text-balance">
                Why Choose <GradientText>Trubeca</GradientText>
              </h2>
            </div>
          </Reveal>
          <StaggerChildren className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {company.whyChooseUs.map((item, i) => {
              const icons = [Shield, Award, Users, FlaskConical, Target, Eye];
              const Icon = icons[i % icons.length];
              return (
                <StaggerItem key={i}>
                  <div className="p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500">
                    <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-brand-500" />
                    </div>
                    <h3 className="mt-5 font-semibold text-navy-900">{item.title}</h3>
                    <p className="mt-3 text-sm text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* ─── R&D ─── */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal direction="left">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-navy-50 to-brand-50 rounded-3xl rotate-2" />
                <div className="relative aspect-[4/3] bg-gradient-to-br from-navy-100 to-brand-50 rounded-2xl flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 gradient-mesh opacity-40" />
                  <FlaskConical className="w-24 h-24 text-navy-300 relative z-10" />
                </div>
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.2}>
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-600 bg-brand-50 rounded-full">
                  Research & Development
                </span>
                <h2 className="mt-5 text-display-sm md:text-display text-balance">
                  Innovation at Our <GradientText>Core</GradientText>
                </h2>
                <p className="mt-6 text-gray-500 leading-relaxed">{company.about.rnd}</p>
                <Link
                  href="/products"
                  className="mt-8 btn-primary"
                >
                  Explore Our Products <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-500 to-accent-cyan" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: "40px 40px" }} />
        <div className="container-main relative z-10 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className="text-display-sm md:text-display text-white text-balance">Partner with Trubeca</h2>
            <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto">
              Ready to start your pharma business or need contract manufacturing? Let&apos;s build something great together.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-600 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 shadow-xl"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
