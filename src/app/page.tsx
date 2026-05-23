"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  ArrowRight, Shield, Award, Users, FlaskConical, Pill,
  Stethoscope, Heart, Syringe, Droplets, Baby, CheckCircle2,
  TrendingUp, Factory, Handshake, MapPin, Star, Quote,
  Package, Sparkles, Play, ChevronRight, Microscope,
} from "lucide-react";
import {
  Reveal, StaggerChildren, StaggerItem, AnimatedCounter,
  GradientText, TiltCard, MagneticButton, Parallax,
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

const trustMessages = [
  "ISO 9001:2015 Certified Manufacturing",
  "200+ WHO-GMP Pharmaceutical Products",
  "500+ Distribution Partners Nationwide",
  "10+ Years of Pharmaceutical Excellence",
  "FSSAI & DCGI Approved Products",
  "Monopoly Rights PCD Franchise",
  "Pan-India Distribution Network",
  "Quality Assured Third-Party Manufacturing",
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "PCD Franchise Partner, Uttar Pradesh",
    text: "Trubeca Lifesciences delivers premium-quality PCD products and always ensures timely dispatch. Their team is cooperative and transparent — highly recommended!",
    rating: 5,
  },
  {
    name: "Dr. Priya Sharma",
    role: "Healthcare Provider, Rajasthan",
    text: "We have been sourcing pharmaceutical products from Trubeca for over 3 years. The quality is consistent and the range covers all our requirements.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    role: "Distribution Partner, Punjab",
    text: "The monopoly rights and marketing support from Trubeca have been instrumental in growing my business. Their products sell on trust.",
    rating: 4,
  },
  {
    name: "Sunita Devi",
    role: "Franchise Partner, Haryana",
    text: "Starting my pharma business with Trubeca was the best decision. Low investment, great margins, and a brand that customers trust.",
    rating: 5,
  },
];

const whyChooseUs = [
  {
    num: "01",
    title: "Your Trusted Partner for PCD Pharma Franchise",
    desc: "Monopoly-based distribution rights with complete marketing support, high-quality products, and a trusted pharmaceutical brand backing your growth.",
  },
  {
    num: "02",
    title: "Extensive Range of WHO-GMP Certified Products",
    desc: "200+ pharmaceutical formulations across 7 therapeutic categories — tablets, capsules, syrups, injections, and specialty products.",
  },
  {
    num: "03",
    title: "Transparent, Ethical & Customer-Focused Approach",
    desc: "We believe in building long-term partnerships through ethical business practices, transparent pricing, and dedicated support.",
  },
  {
    num: "04",
    title: "Reliable Third-Party Manufacturing with Timely Delivery",
    desc: "State-of-the-art manufacturing facilities ensuring quality, consistency, and on-time delivery for all contract manufacturing orders.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustMarquee />
      <AboutPreview />
      <StatsSection />
      <ServicesSection />
      <WhyChooseSection />
      <CategoriesSection />
      <TestimonialsSection />
      <ManufacturingSection />
      <CTASection />
    </>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. HERO — Cinematic, video-ready
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      {/* Video / Image background layer */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        {/* Hero video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-lab.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Gradient overlay for video readiness */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/50 to-navy-950/70" />

      {/* Content */}
      <motion.div className="container-main relative z-10 pt-48 pb-20 lg:pt-56 lg:pb-28" style={{ opacity }}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Certification badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="inline-flex items-center gap-2.5 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
              ISO 9001:2015 & WHO-GMP Certified
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-[-0.03em] leading-tight font-display"
          >
            Redefining <span className="text-gradient">Pharmaceutical Excellence</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 text-base sm:text-lg text-white/40 max-w-2xl mx-auto leading-relaxed"
          >
            Empowering healthcare with 200+ certified products. Your trusted partner
            for PCD Pharma Franchise & Third-Party Manufacturing across India.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton>
              <Link href="/products" className="btn-primary text-base px-8 py-4">
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link href="/contact" className="btn-ghost text-base px-8 py-4">
                <Play className="w-4 h-4" />
                Get In Touch
              </Link>
            </MagneticButton>
          </motion.div>

          {/* Floating stats at bottom of hero */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-8 lg:mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {[
              { value: 200, suffix: "+", label: "Products" },
              { value: 10, suffix: "+", label: "Years" },
              { value: 500, suffix: "+", label: "Partners" },
              { value: 7, suffix: "", label: "Categories" },
            ].map((stat) => (
              <div key={stat.label} className="glass-dark px-4 py-5 rounded-2xl text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white font-display">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs text-white/40 mt-1 uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20" />
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. TRUST MARQUEE — Infinite scrolling bar
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function TrustMarquee() {
  const items = [...trustMessages, ...trustMessages];
  return (
    <div className="relative bg-navy-950 py-4 overflow-hidden border-b border-white/[0.04]">
      <div className="mask-gradient-r">
        <div className="marquee-track" style={{ willChange: 'transform' }}>
          {items.map((msg, i) => (
            <div key={i} className="flex items-center gap-3 px-8 whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 text-brand-400 shrink-0" />
              <span className="text-sm text-white/60 font-medium">{msg}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. ABOUT PREVIEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function AboutPreview() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image area */}
          <Reveal direction="left">
            <div className="relative">
              <TiltCard>
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-premium">
                  <img
                    src="/images/building.png"
                    alt="Trubeca Lifesciences Office"
                    className="w-full h-full object-cover"
                  />
                </div>
              </TiltCard>
              {/* Floating experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 lg:bottom-8 lg:-right-8 bg-white rounded-2xl p-5 shadow-premium border border-gray-100"
              >
                <div className="text-4xl font-extrabold text-navy-900 font-display">
                  <AnimatedCounter end={10} suffix="+" />
                </div>
                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider mt-1">Years Experience</div>
                <div className="text-[11px] text-gray-400 mt-2 max-w-[160px]">
                  Trusted expertise in PCD pharma and third-party manufacturing
                </div>
              </motion.div>
            </div>
          </Reveal>

          {/* Right - Text */}
          <Reveal direction="right" delay={0.2}>
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-600 bg-brand-50 rounded-full">
                About Us
              </span>
              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.15] tracking-[-0.02em] font-display">
                Your Reliable Partner
                <br />
                <span className="text-gradient-dark italic">in Pharma Growth</span>
              </h2>
              <p className="mt-5 text-gray-500 leading-relaxed">
                {company.about.short}
              </p>

              {/* Service highlights */}
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                    <Handshake className="w-5 h-5 text-brand-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900">PCD Pharma Franchise</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Profitable monopoly-based franchise opportunities with complete marketing support and high-quality products.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                    <Factory className="w-5 h-5 text-brand-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900">Third-Party Manufacturing</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Reliable, quality-driven manufacturing services with WHO-GMP-certified facilities and timely delivery.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <MagneticButton>
                  <Link href="/about" className="btn-secondary">
                    More About Us
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. STATS SECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function StatsSection() {
  const stats = [
    { icon: Package, value: 200, suffix: "+", label: "Quality Products" },
    { icon: Award, value: 10, suffix: "+", label: "Years in Industry" },
    { icon: Users, value: 500, suffix: "+", label: "Distribution Partners" },
    { icon: MapPin, value: 20, suffix: "+", label: "States Covered" },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08),transparent_70%)]" />
      <div className="container-main relative z-10">
        <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12" staggerDelay={0.1}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="text-center group">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-4 group-hover:bg-brand-500/20 group-hover:border-brand-500/30 transition-all duration-500">
                  <stat.icon className="w-6 h-6 text-brand-400" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-white/40 mt-2 font-medium">{stat.label}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. SERVICES — Premium cards with 3D effect
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function ServicesSection() {
  const services = [
    {
      title: "PCD Pharma Franchise",
      desc: "Start your own pharma business with exclusive monopoly rights, complete product range, competitive pricing, and marketing support.",
      icon: Handshake,
      href: "/pcd-pharma-franchise",
      gradient: "from-blue-600 to-brand-500",
    },
    {
      title: "Monopoly Rights",
      desc: "Exclusive distribution rights in your territory — work freely with zero internal competition and maximum growth potential.",
      icon: Shield,
      gradient: "from-violet-600 to-purple-500",
    },
    {
      title: "Third-Party Manufacturing",
      desc: "Reliable and high-quality contract manufacturing with WHO-GMP certified production, advanced machinery, and timely delivery.",
      icon: Factory,
      href: "/third-party-manufacturing",
      gradient: "from-cyan-600 to-teal-500",
    },
    {
      title: "Marketing & Promotional Support",
      desc: "Complete promotional assistance including visual aids, gift articles, product brochures, and marketing strategies.",
      icon: TrendingUp,
      gradient: "from-amber-600 to-orange-500",
    },
  ];

  return (
    <section className="section-padding bg-gray-50/50">
      <div className="container-main">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <Reveal>
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-600 bg-brand-50 rounded-full">
                Our Services
              </span>
              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.15] tracking-[-0.02em] font-display">
                Comprehensive Pharma Services
                <br />
                <span className="text-gradient-dark italic">for PCD & Manufacturing Growth</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <Link href="/pcd-pharma-franchise" className="btn-secondary whitespace-nowrap">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        {/* Cards Grid */}
        <StaggerChildren className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <TiltCard>
                <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-card hover:shadow-premium transition-all duration-500">
                  {/* Gradient top accent */}
                  <div className={`h-1.5 bg-gradient-to-r ${service.gradient}`} />
                  <div className="p-8 lg:p-10">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg mb-6`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 font-display">{service.title}</h3>
                    <p className="mt-3 text-gray-500 leading-relaxed">{service.desc}</p>
                    {service.href && (
                      <Link
                        href={service.href}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-500 hover:text-brand-600 group-hover:gap-3 transition-all"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   6. WHY CHOOSE US — Interactive list + image
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function WhyChooseSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Left - Content */}
        <div className="section-padding bg-white">
          <div className="max-w-xl ml-auto pr-8 lg:pr-16">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-[1.15] tracking-[-0.02em] font-display">
                Why Choose{" "}
                <span className="text-gradient">Trubeca Lifesciences</span>
              </h2>
            </Reveal>
            <div className="mt-10 space-y-0">
              {whyChooseUs.map((item, i) => (
                <motion.div
                  key={item.num}
                  className={`group cursor-pointer border-b border-gray-100 transition-all duration-500 ${
                    activeIndex === i ? "py-6" : "py-5"
                  }`}
                  onClick={() => setActiveIndex(i)}
                  initial={false}
                >
                  <div className="flex items-start gap-4">
                    <span className={`text-sm font-bold font-display transition-colors duration-300 mt-0.5 ${
                      activeIndex === i ? "text-brand-500" : "text-gray-300"
                    }`}>
                      {item.num}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className={`font-bold transition-colors duration-300 ${
                          activeIndex === i ? "text-navy-900" : "text-gray-600"
                        }`}>
                          {item.title}
                        </h3>
                        <ChevronRight className={`w-5 h-5 transition-all duration-300 shrink-0 ${
                          activeIndex === i ? "text-brand-500 rotate-90" : "text-gray-300"
                        }`} />
                      </div>
                      <motion.div
                        initial={false}
                        animate={{
                          height: activeIndex === i ? "auto" : 0,
                          opacity: activeIndex === i ? 1 : 0,
                        }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 text-sm text-gray-500 leading-relaxed pr-4">
                          {item.desc}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative min-h-[400px] lg:min-h-0">
          <div className="absolute inset-0">
            <img
              src="/images/facility.png"
              alt="Trubeca Lifesciences Manufacturing Facility"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy-900/30" />
          </div>
        </div>
      </div>

      {/* CTA banner */}
      <div className="bg-navy-950">
        <div className="container-main py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60 text-center sm:text-left">
            Our expert team is ready to support you with trusted PCD franchise and manufacturing solutions.
          </p>
          <Link href="/contact" className="btn-ghost text-sm px-6 py-2.5 whitespace-nowrap">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   7. CATEGORIES — Product categories showcase
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function CategoriesSection() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-600 bg-brand-50 rounded-full">
              Product Range
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] font-display">
              New Range of <span className="text-gradient italic">Products</span>
            </h2>
            <p className="mt-4 text-gray-500 text-lg">
              Explore our comprehensive portfolio of WHO-GMP certified pharmaceutical formulations.
            </p>
          </div>
        </Reveal>

        <StaggerChildren className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5" staggerDelay={0.08}>
          {categoriesData.categories.map((cat) => (
            <StaggerItem key={cat.id}>
              <Link href={`/products?category=${cat.slug}`}>
                <TiltCard>
                  <div className="group relative p-6 bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-500">
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-500 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white group-hover:scale-110 transition-all duration-300 mb-4">
                      {categoryIcons[cat.slug] || <Pill className="w-6 h-6" />}
                    </div>
                    <h3 className="font-bold text-navy-900 text-sm group-hover:text-brand-600 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="mt-1 text-xs text-gray-400">
                      {cat.productCount} Products
                    </p>
                    <div className="mt-4 pt-3 border-t border-gray-50">
                      <span className="text-xs font-semibold text-brand-500 group-hover:text-brand-600 inline-flex items-center gap-1">
                        Browse
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <Reveal delay={0.3}>
          <div className="mt-10 text-center">
            <Link href="/products" className="btn-primary">
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   8. TESTIMONIALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function TestimonialsSection() {
  return (
    <section className="section-padding bg-gray-50/50">
      <div className="container-main">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left text */}
          <div className="lg:col-span-2">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-600 bg-brand-50 rounded-full">
                Happy Partners
              </span>
              <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] leading-tight font-display">
                Building Trust Through Client Satisfaction
              </h2>
              <p className="mt-4 text-sm uppercase tracking-wider font-semibold text-brand-500">
                What they say about Trubeca Lifesciences
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                We are dedicated to providing innovative healthcare solutions, professional service, and long-term partnerships. Our franchise and third-party clients appreciate our commitment to quality and transparency.
              </p>
            </Reveal>
          </div>

          {/* Right - testimonial cards */}
          <div className="lg:col-span-3">
            <StaggerChildren className="grid sm:grid-cols-2 gap-5" staggerDelay={0.1}>
              {testimonials.map((t) => (
                <StaggerItem key={t.name}>
                  <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-500">
                    {/* Stars */}
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < t.rating ? "text-amber-400 fill-amber-400" : "text-gray-200"}`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed italic">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="mt-5 pt-4 border-t border-gray-50">
                      <p className="font-bold text-navy-900 text-sm">{t.name}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{t.role}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   9. MANUFACTURING PLANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function ManufacturingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-main">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] font-display">
              Our Manufacturing <span className="text-gradient italic">Plant</span>
            </h2>
            <p className="mt-3 text-gray-500">
              WHO-GMP certified state-of-the-art pharmaceutical manufacturing facilities
            </p>
          </div>
        </Reveal>
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.1}>
          {[1, 2, 3].map((i) => (
            <StaggerItem key={i}>
              <TiltCard>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-card">
                  {/* Replace with actual manufacturing plant photos */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Factory className="w-10 h-10 text-gray-300 mx-auto" />
                      <p className="mt-2 text-xs text-gray-400">Plant Photo {i}</p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   10. CTA + CONTACT FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function CTASection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", location: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_KEY",
          subject: "New Enquiry from Trubeca Website",
          ...formData,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", location: "", message: "" });
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Left - CTA visual */}
        <div className="relative min-h-[500px] bg-gradient-to-br from-navy-950 via-navy-900 to-brand-900 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.15),transparent_60%)]" />
          <div className="relative z-10 flex flex-col justify-center h-full p-10 lg:p-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white/60 bg-white/[0.06] rounded-full border border-white/[0.08] w-fit">
              Join Hands With Us
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-white leading-tight font-display">
              Grow with Trubeca
              <br />
              Lifesciences
            </h2>
            <p className="mt-2 text-xl text-white/40 italic font-display">
              PCD & Third-Party Manufacturing
            </p>
            <p className="mt-6 text-white/50 leading-relaxed max-w-md">
              Partner with <strong className="text-white/80">Trubeca Lifesciences</strong>, a trusted pharma company offering high-quality formulations, monopoly-based PCD pharma franchise opportunities, and reliable third-party manufacturing services.
            </p>
            <div className="mt-8">
              <MagneticButton>
                <Link href="/pcd-pharma-franchise" className="btn-ghost">
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Right - Contact form */}
        <div className="bg-brand-50/30 p-8 lg:p-16 flex items-center">
          <div className="w-full max-w-lg mx-auto">
            {status === "success" ? (
              <div className="text-center py-16">
                <CheckCircle2 className="w-16 h-16 text-accent-emerald mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-navy-900 font-display">Thank You!</h3>
                <p className="mt-2 text-gray-500">We will get back to you within 24 hours.</p>
                <button onClick={() => setStatus("idle")} className="mt-4 text-sm font-semibold text-brand-500 hover:text-brand-600">
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-field"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-field"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Your Contact"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="input-field"
                  />
                  <input
                    type="text"
                    placeholder="Your Location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="input-field"
                  />
                </div>
                <textarea
                  placeholder="Write your message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="input-field resize-none"
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 text-sm font-semibold text-white bg-navy-900 rounded-xl hover:bg-navy-800 transition-all duration-300 shadow-lg shadow-navy-900/20 disabled:opacity-50"
                >
                  {status === "submitting" ? "Sending..." : "Submit"}
                </button>
                {status === "error" && (
                  <p className="text-sm text-red-500 text-center">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
