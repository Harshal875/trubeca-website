import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import EnquiryForm from "@/components/shared/EnquiryForm";
import company from "@/data/company.json";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Trubeca Life Sciences for PCD Pharma Franchise, Third Party Manufacturing, or product enquiries. Call, email, or visit us.",
};

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    detail: company.phone[0],
    action: `tel:${company.phone[0].replace(/[^+\d]/g, "")}`,
    actionLabel: "Call Now",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    detail: company.whatsapp,
    action: `https://wa.me/${company.whatsapp.replace(/[^+\d]/g, "")}`,
    actionLabel: "Chat Now",
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: company.email,
    action: `mailto:${company.email}`,
    actionLabel: "Send Email",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: company.address.full,
    action: `https://maps.google.com/?q=${encodeURIComponent(company.address.full)}`,
    actionLabel: "Get Directions",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out for enquiries, partnerships, or any questions."
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* ─── Contact Methods ─── */}
      <section className="bg-white">
        <div className="container-main section-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.action}
                target={method.title === "Visit Us" || method.title === "WhatsApp" ? "_blank" : undefined}
                rel={method.title === "Visit Us" || method.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                className="card p-4 sm:p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-colors">
                  <method.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-semibold text-navy-900 mb-1">{method.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{method.detail}</p>
                <span className="text-xs font-semibold text-brand-500 group-hover:underline">
                  {method.actionLabel} →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Form + Map ─── */}
      <section className="bg-gray-50">
        <div className="container-main section-padding">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Form */}
            <div>
              <SectionHeading
                badge="Send a Message"
                title="Enquiry Form"
                subtitle="Fill out the form and our team will respond within 24 hours."
                align="left"
              />
              <div className="bg-white rounded-xl p-5 sm:p-6 md:p-8 border border-gray-200">
                <EnquiryForm />
              </div>
            </div>

            {/* Map + Info */}
            <div>
              <SectionHeading
                badge="Find Us"
                title="Our Location"
                subtitle="Visit our office or manufacturing facility."
                align="left"
              />
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                  <iframe
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(company.address.full)}&output=embed`}
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Trubeca Life Sciences Location"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
                    <p className="text-sm text-gray-600">{company.address.full}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-brand-500 shrink-0" />
                    <p className="text-sm text-gray-600">
                      Monday – Saturday, 9:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
