import { Settings2 } from "lucide-react";

const items = [
  "ISO 9001:2015 Certified Manufacturing",
  "200+ WHO-GMP Pharmaceutical Products",
  "500+ Distribution Partners Nationwide",
  "10+ Years of Pharmaceutical Excellence",
  "FSSAI & DCGI Approved Products",
  "PCD Pharma Franchise Available",
  "Third-Party Manufacturing Experts",
  "Pan India Distribution Network",
];

export default function TrustBar() {
  // Duplicate items for seamless infinite loop
  const repeated = [...items, ...items];

  return (
    <div className="bg-navy-900 border-b border-white/5 text-white py-2 overflow-hidden">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-2 px-6 text-[11px] sm:text-xs font-medium tracking-wide whitespace-nowrap">
            <Settings2 className="w-3 h-3 text-brand-400 shrink-0" />
            <span className="text-gray-300">{item}</span>
            <span className="text-gray-600 ml-4">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
