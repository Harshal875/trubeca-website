"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";
import { Reveal, StaggerChildren, StaggerItem, GradientText } from "@/components/ui/animations";
import EnquiryForm from "@/components/shared/EnquiryForm";
import company from "@/data/company.json";


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
    detail: company.phone[1],
    action: `https://wa.me/${company.whatsapp}`,
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
    detail: "SCF-431, 2nd Floor, Manimajra",
    action: `https://maps.google.com/?q=${encodeURIComponent(company.address.full)}`,
    actionLabel: "Get Directions",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-navy-950">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-brand-900/80" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-500/[0.07] rounded-full blur-[150px]" />
        <div className="container-main relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white/60 bg-white/[0.04] rounded-full border border-white/[0.08]">
              Contact Us
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.03em] leading-[1.05] font-display">
              Let&apos;s Start a <span className="text-gradient">Conversation</span>
            </h1>
            <p className="mt-5 text-lg text-white/40 max-w-xl">
              Reach out for franchise opportunities, manufacturing enquiries, or any questions about our products.
            </p>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ── Contact Methods ── */}
      <section className="section-padding">
        <div className="container-main">
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.08}>
            {contactMethods.map((m) => (
              <StaggerItem key={m.title}>
                <a
                  href={m.action}
                  target={m.title === "Visit Us" || m.title === "WhatsApp" ? "_blank" : undefined}
                  rel={m.title === "Visit Us" || m.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                  className="group block p-6 text-center bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-brand-50 text-brand-500 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <m.icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-4 font-bold text-navy-900">{m.title}</h3>
                  <p className="mt-1 text-sm text-gray-500 break-all">{m.detail}</p>
                  <span className="mt-3 inline-block text-xs font-semibold text-brand-500 group-hover:text-brand-600">
                    {m.actionLabel} →
                  </span>
                </a>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Form + Map ── */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
            <Reveal direction="left">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-600 bg-brand-50 rounded-full">
                  Send a Message
                </span>
                <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.02em] font-display">
                  Enquiry <span className="text-gradient italic">Form</span>
                </h2>
                <p className="mt-3 text-gray-500">
                  Fill out the form and our team will respond within 24 hours.
                </p>
                <div className="mt-8 bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-card">
                  <EnquiryForm />
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.2}>
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-600 bg-brand-50 rounded-full">
                  Find Us
                </span>
                <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.02em] font-display">
                  Our <span className="text-gradient italic">Location</span>
                </h2>
                <p className="mt-3 text-gray-500">Visit our office or manufacturing facility.</p>
                <div className="mt-8 bg-white rounded-2xl border border-gray-100 shadow-card overflow-hidden">
                  <div className="aspect-[4/3] bg-gray-200">
                    <iframe
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(company.address.full)}&output=embed`}
                      className="w-full h-full"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      title="Trubeca Lifesciences Location"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
                      <p className="text-sm text-gray-600">{company.address.full}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-brand-500 shrink-0" />
                      <p className="text-sm text-gray-600">Monday – Saturday, 9:00 AM – 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
