import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Truck,
  Award,
  Users,
  FlaskConical,
  Pill,
  Stethoscope,
  Heart,
  Syringe,
  Droplets,
  Baby,
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import StatsBar from "@/components/shared/StatsBar";
import company from "@/data/company.json";
import categoriesData from "@/data/categories.json";

const categoryIcons: Record<string, React.ReactNode> = {
  "tablets-capsules": <Pill className="w-8 h-8" />,
  syrups: <Droplets className="w-8 h-8" />,
  "dry-syrups": <FlaskConical className="w-8 h-8" />,
  "pediatric-drops": <Baby className="w-8 h-8" />,
  injections: <Syringe className="w-8 h-8" />,
  "creams-ointments": <Heart className="w-8 h-8" />,
  supplements: <Stethoscope className="w-8 h-8" />,
};

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-500/10 via-transparent to-transparent" />
        <div className="container-main relative py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-brand-500/20 text-brand-300 rounded-full mb-6">
              ISO 9001:2015 & WHO-GMP Certified
            </span>
            <h1 className="text-hero font-bold leading-[1.1] mb-6 text-white drop-shadow-lg">
              Your Trusted Partner in{" "}
              <span className="text-brand-300">Pharmaceutical</span> Excellence
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              {company.about.short}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="btn-cta inline-flex items-center justify-center gap-2">
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-secondary inline-flex items-center justify-center gap-2 border-white/20 text-white hover:bg-white/10">
                Partner with Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-main py-10 md:py-14">
          <StatsBar />
        </div>
      </section>

      {/* ─── About Snapshot ─── */}
      <section className="bg-gray-50">
        <div className="container-main section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                badge="About Us"
                title="Committed to Quality Healthcare"
                align="left"
              />
              <p className="text-gray-600 leading-relaxed mb-6">
                {company.about.full}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {company.certifications.map((cert) => (
                  <div key={cert.shortName} className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-trust-green shrink-0" />
                    <span className="font-medium text-gray-700">{cert.shortName} Certified</span>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="text-brand-500 font-semibold text-sm hover:text-brand-600 inline-flex items-center gap-1"
              >
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-brand-50 to-blue-50 rounded-2xl flex items-center justify-center">
                <FlaskConical className="w-24 h-24 text-brand-200" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                <p className="text-2xl font-bold text-brand-500">{company.stats.yearsInBusiness}</p>
                <p className="text-xs text-gray-500 font-medium">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Product Categories ─── */}
      <section className="bg-white">
        <div className="container-main section-padding">
          <SectionHeading
            badge="Our Products"
            title="Wide Range of Pharmaceutical Products"
            subtitle="Explore our comprehensive portfolio of WHO-GMP certified healthcare products across multiple therapeutic segments."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {categoriesData.categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products?category=${cat.slug}`}
                className="group card text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-colors">
                  {categoryIcons[cat.slug] || <Pill className="w-8 h-8" />}
                </div>
                <h3 className="font-semibold text-sm text-navy-900 group-hover:text-brand-500 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-gray-400 mt-1">{cat.productCount} Products</p>
              </Link>
            ))}
            {/* View All card */}
            <Link
              href="/products"
              className="group card text-center border-2 border-dashed border-gray-200 hover:border-brand-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center"
            >
              <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-gray-50 text-gray-400 flex items-center justify-center group-hover:bg-brand-50 group-hover:text-brand-500 transition-colors">
                <ArrowRight className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-sm text-gray-600 group-hover:text-brand-500 transition-colors">
                View All Products
              </h3>
              <p className="text-xs text-gray-400 mt-1">{company.stats.totalProducts}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Why Trubeca ─── */}
      <section className="bg-navy-900 text-white">
        <div className="container-main section-padding">
          <SectionHeading
            badge="Why Choose Us"
            title="The Trubeca Advantage"
            subtitle="We stand apart with our unwavering commitment to quality, innovation, and customer success."
            light
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {company.whyChooseUs.map((item, i) => {
              const icons = [Shield, Award, Truck, FlaskConical, Users, Heart];
              const Icon = icons[i % icons.length];
              return (
                <div
                  key={i}
                  className="bg-white/10 border border-white/15 rounded-xl p-6 hover:bg-white/15 transition-colors"
                >
                  <Icon className="w-8 h-8 text-brand-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-2 text-white">{item.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Services Overview ─── */}
      <section className="bg-white">
        <div className="container-main section-padding">
          <SectionHeading
            badge="Our Services"
            title="Complete Pharma Business Solutions"
            subtitle="Whether you want to start your own pharma franchise or need contract manufacturing, we have you covered."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {/* PCD Franchise Card */}
            <div className="card p-8 bg-gradient-to-br from-brand-50 to-white border-2 border-brand-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-brand-500 text-white flex items-center justify-center mb-5">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">PCD Pharma Franchise</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Start your own pharma business with exclusive distribution rights, marketing support, and our complete product portfolio. Low investment, high returns.
              </p>
              <ul className="space-y-2 mb-6">
                {["Monopoly rights available", "Free promotional materials", "Low investment required", "Complete product range"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <Shield className="w-3.5 h-3.5 text-trust-green shrink-0" />
                      {item}
                    </li>
                  )
                )}
              </ul>
              <Link href="/pcd-pharma-franchise" className="btn-primary inline-flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Third Party Mfg Card */}
            <div className="card p-8 bg-gradient-to-br from-navy-50 to-white border-2 border-navy-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-navy-800 text-white flex items-center justify-center mb-5">
                <FlaskConical className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Third Party Manufacturing</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Leverage our WHO-GMP certified manufacturing facility for your brand. State-of-the-art production with strict quality control at competitive pricing.
              </p>
              <ul className="space-y-2 mb-6">
                {["WHO-GMP certified facility", "Custom formulations", "Quality assurance", "Competitive pricing"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <Shield className="w-3.5 h-3.5 text-trust-green shrink-0" />
                      {item}
                    </li>
                  )
                )}
              </ul>
              <Link
                href="/third-party-manufacturing"
                className="btn-secondary inline-flex items-center gap-2 border-navy-200 text-navy-800 hover:bg-navy-50"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Franchise CTA ─── */}
      <section className="bg-gradient-to-r from-brand-500 to-brand-600 text-white">
        <div className="container-main py-14 md:py-20 text-center">
          <h2 className="text-section font-bold mb-4">
            Ready to Start Your Pharma Business?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join hands with Trubeca Life Sciences and build a successful pharmaceutical business with our proven PCD Franchise model.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-brand-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Started Today <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/918699826998"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
