"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

interface EnquiryFormProps {
  productName?: string;
  light?: boolean;
}

export default function EnquiryForm({ productName, light = false }: EnquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: productName ? `I am interested in ${productName}. Please share more details.` : "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_KEY",
          subject: productName
            ? `Product Enquiry: ${productName}`
            : "New Enquiry from Trubeca Website",
          ...formData,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={`text-center py-10 ${light ? "text-white" : "text-navy-900"}`}>
        <CheckCircle2 className="w-12 h-12 text-trust-green mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
        <p className={`${light ? "text-gray-300" : "text-gray-500"}`}>
          We have received your enquiry and will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-brand-500 hover:text-brand-600"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={`block text-sm font-medium mb-1 ${light ? "text-gray-300" : "text-gray-700"}`}>
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="input-field"
          />
        </div>
        <div>
          <label className={`block text-sm font-medium mb-1 ${light ? "text-gray-300" : "text-gray-700"}`}>
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="input-field"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={`block text-sm font-medium mb-1 ${light ? "text-gray-300" : "text-gray-700"}`}>
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className="input-field"
          />
        </div>
        <div>
          <label className={`block text-sm font-medium mb-1 ${light ? "text-gray-300" : "text-gray-700"}`}>
            Company Name
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company"
            className="input-field"
          />
        </div>
      </div>
      <div>
        <label className={`block text-sm font-medium mb-1 ${light ? "text-gray-300" : "text-gray-700"}`}>
          Message *
        </label>
        <textarea
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your requirements..."
          className="input-field resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full flex items-center justify-center gap-2"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Enquiry
          </>
        )}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-500 text-center">
          Something went wrong. Please try again or call us directly.
        </p>
      )}
    </form>
  );
}
