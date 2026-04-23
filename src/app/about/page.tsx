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
} from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import StatsBar from "@/components/shared/StatsBar";
import company from "@/data/company.json";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Trubeca Life Sciences – a trusted pharmaceutical company committed to quality healthcare products, ISO & GMP certified manufacturing, and pan-India distribution.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Trubeca Life Sciences"
        subtitle="A trusted name in pharmaceutical manufacturing and distribution since our inception."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* ─── Story ─── */}
      <section className="bg-white">
        <div className="container-main section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                badge="Our Story"
                title="Building Trust Through Quality"
                align="left"
              />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{company.about.full}</p>
                <p>{company.about.portfolio}</p>
                <p>{company.about.team}</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-brand-50 to-blue-50 rounded-2xl flex items-center justify-center">
                <FlaskConical className="w-32 h-32 text-brand-200" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="bg-navy-900 text-white">
        <div className="container-main py-12 md:py-16">
          <StatsBar light />
        </div>
      </section>

      {/* ─── Vision & Mission ─── */}
      <section className="bg-gray-50">
        <div className="container-main section-padding">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-8 border-l-4 border-brand-500">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-brand-500" />
                <h3 className="text-xl font-bold text-navy-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To make quality healthcare accessible and affordable across India by manufacturing
                world-class pharmaceutical products and building strong distribution partnerships
                through our PCD Franchise and Third Party Manufacturing models.
              </p>
            </div>
            <div className="card p-8 border-l-4 border-trust-green">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-8 h-8 text-trust-green" />
                <h3 className="text-xl font-bold text-navy-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be among India&apos;s most trusted pharmaceutical companies, known for consistent
                quality, innovative formulations, and empowering entrepreneurs to build successful
                healthcare businesses in every corner of the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section className="bg-white">
        <div className="container-main section-padding">
          <SectionHeading
            badge="Our Strengths"
            title="Why Choose Trubeca Life Sciences"
            subtitle="Here's what sets us apart in the pharmaceutical industry."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {company.whyChooseUs.map((item, i) => {
              const icons = [Shield, Award, Users, FlaskConical, Target, Eye];
              const Icon = icons[i % icons.length];
              return (
                <div
                  key={i}
                  className="card p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-brand-500 mb-4" />
                  <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── R&D ─── */}
      <section className="bg-gray-50">
        <div className="container-main section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-navy-50 to-brand-50 rounded-2xl flex items-center justify-center">
                <FlaskConical className="w-24 h-24 text-navy-200" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading
                badge="Research & Development"
                title="Innovation at Our Core"
                align="left"
              />
              <p className="text-gray-600 leading-relaxed mb-6">{company.about.rnd}</p>
              <Link
                href="/products"
                className="btn-primary inline-flex items-center gap-2"
              >
                Explore Our Products <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-gradient-to-r from-brand-500 to-brand-600 text-white">
        <div className="container-main py-14 text-center">
          <h2 className="text-section font-bold mb-4">Partner with Trubeca</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Ready to start your pharma business or need contract manufacturing? Let&apos;s build something great together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-brand-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
