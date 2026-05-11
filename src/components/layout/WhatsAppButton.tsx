"use client";

import { useState } from "react";
import { MessageCircle, Phone, Mail, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const actions = [
  {
    icon: Mail,
    label: "Email Us",
    href: "mailto:care@trubeca.com",
    bg: "bg-brand-500",
    shadow: "shadow-brand-500/30",
  },
  {
    icon: Phone,
    label: "Call Us",
    href: "tel:+918699836998",
    bg: "bg-blue-500",
    shadow: "shadow-blue-500/30",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/918699826998?text=Hi%20Trubeca%20Lifesciences%2C%20I%20am%20interested%20in%20your%20products.%20Please%20share%20details.",
    bg: "bg-[#25D366]",
    shadow: "shadow-green-500/30",
  },
];

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open &&
          actions.map((action, i) => (
            <motion.a
              key={action.label}
              href={action.href}
              target={action.label === "WhatsApp" ? "_blank" : undefined}
              rel={action.label === "WhatsApp" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              transition={{ delay: i * 0.05, duration: 0.2 }}
              className={`flex items-center gap-3 pl-4 pr-2 py-2 rounded-full ${action.bg} text-white shadow-lg ${action.shadow} hover:scale-105 transition-transform`}
            >
              <span className="text-xs font-semibold whitespace-nowrap">{action.label}</span>
              <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <action.icon className="w-5 h-5" />
              </span>
            </motion.a>
          ))}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${
          open
            ? "bg-gray-800 shadow-gray-800/30 rotate-90"
            : "bg-[#25D366] shadow-green-500/30 hover:scale-110"
        }`}
        aria-label="Contact options"
      >
        {open ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-6 h-6 text-white" />}
      </button>
    </div>
  );
}
