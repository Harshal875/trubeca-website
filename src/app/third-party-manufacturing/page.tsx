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
} from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
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
      <PageHeader
        title="Third Party Manufacturing"
        subtitle="Leverage our WHO-GMP certified facility for your brand. Quality manufacturing at competitive pricing."
        breadcrumbs={[{ label: "Third Party Manufacturing" }]}
      />

      {/* ─── Overview ─── */}
      <section className="bg-white">
        <div className="container-main section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                badge="Contract Manufacturing"
                title="Your Brand, Our Expertise"
                align="left"
              />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Trubeca Life Sciences offers comprehensive Third Party Manufacturing (Contract
                  Manufacturing) services for pharmaceutical companies looking to expand their
                  product portfolio without investing in manufacturing infrastructure.
                </p>
                <p>
                  With our WHO-GMP certified facility, experienced R&D team, and rigorous quality
                  control processes, we ensure that every product manufactured under your brand
                  meets the highest standards of quality and efficacy.
                </p>
              </div>
              <div className="mt-6 flex gap-3">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/certifications" className="btn-secondary inline-flex items-center gap-2">
                  Our Certifications
                </Link>
              </div>
            </div>
            <div className="aspect-[4/3] bg-gradient-to-br from-navy-50 to-brand-50 rounded-2xl flex items-center justify-center">
              <Factory className="w-24 h-24 text-navy-200" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Capabilities ─── */}
      <section className="bg-gray-50">
        <div className="container-main section-padding">
          <SectionHeading
            badge="Our Capabilities"
            title="Manufacturing Excellence"
            subtitle="We bring world-class manufacturing capabilities to your brand."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="card p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <cap.icon className="w-8 h-8 text-brand-500 mb-4" />
                <h3 className="font-semibold text-navy-900 mb-2">{cap.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Dosage Forms ─── */}
      <section className="bg-navy-900 text-white">
        <div className="container-main section-padding">
          <SectionHeading
            badge="Dosage Forms"
            title="What We Manufacture"
            subtitle="We offer manufacturing across all major pharmaceutical dosage forms."
            light
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {dosageForms.map((form) => (
              <div
                key={form}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-4"
              >
                <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0" />
                <span className="font-medium">{form}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="bg-white">
        <div className="container-main section-padding">
          <SectionHeading
            badge="Our Process"
            title="How It Works"
            subtitle="A streamlined process from enquiry to delivery."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Enquiry & Discussion", desc: "Share your requirements — products, quantity, packaging preferences." },
              { step: "02", title: "Quotation & Agreement", desc: "We provide competitive pricing and terms. Sign the manufacturing agreement." },
              { step: "03", title: "Manufacturing", desc: "Production begins in our GMP-certified facility with strict quality checks." },
              { step: "04", title: "QC & Delivery", desc: "Rigorous quality testing followed by packaging and dispatch to your location." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-navy-800 text-brand-400 flex items-center justify-center text-xl font-bold">
                  {s.step}
                </div>
                <h3 className="font-semibold text-navy-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Enquiry ─── */}
      <section className="bg-gray-50">
        <div className="container-main section-padding">
          <div className="max-w-2xl mx-auto">
            <SectionHeading
              badge="Get a Quote"
              title="Request Third Party Manufacturing"
              subtitle="Tell us your requirements and we'll get back to you with a competitive quote."
            />
            <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
