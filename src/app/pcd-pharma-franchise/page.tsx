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
} from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
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
      <PageHeader
        title="PCD Pharma Franchise"
        subtitle="Start your own pharma business with exclusive monopoly rights, complete product portfolio, and full marketing support."
        breadcrumbs={[{ label: "PCD Pharma Franchise" }]}
      />

      {/* ─── Benefits ─── */}
      <section className="bg-white">
        <div className="container-main section-padding">
          <SectionHeading
            badge="Why Partner With Us"
            title="Benefits of Trubeca PCD Franchise"
            subtitle="We provide everything you need to build a successful pharmaceutical business."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="card p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <b.icon className="w-8 h-8 text-brand-500 mb-4" />
                <h3 className="font-semibold text-navy-900 mb-2">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="bg-gray-50">
        <div className="container-main section-padding">
          <SectionHeading
            badge="Process"
            title="How to Get Started"
            subtitle="4 simple steps to launch your pharma franchise business."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="relative text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-brand-500 text-white flex items-center justify-center text-xl font-bold">
                  {s.step}
                </div>
                <h3 className="font-semibold text-navy-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Product Range Summary ─── */}
      <section className="bg-navy-900 text-white">
        <div className="container-main section-padding">
          <SectionHeading
            badge="Product Range"
            title="Complete Pharma Product Portfolio"
            subtitle="Our franchise partners get access to 100+ products across all major therapeutic segments."
            light
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-3"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Enquiry Form ─── */}
      <section className="bg-white">
        <div className="container-main section-padding">
          <div className="max-w-2xl mx-auto">
            <SectionHeading
              badge="Get Started"
              title="Apply for PCD Pharma Franchise"
              subtitle="Fill the form below and our team will get back to you within 24 hours."
            />
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
