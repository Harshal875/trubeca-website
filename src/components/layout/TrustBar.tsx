import { Shield } from "lucide-react";
import company from "@/data/company.json";

export default function TrustBar() {
  return (
    <div className="bg-navy-900 text-white py-1.5 sm:py-2">
      <div className="container-main flex items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-sm overflow-hidden">
        <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-400 shrink-0" />
        <p className="flex items-center gap-1 sm:gap-1.5 flex-wrap justify-center truncate">
          {company.certifications.map((cert, i) => (
            <span key={cert.shortName}>
              <span className="font-semibold text-brand-300">{cert.shortName}</span>
              {i < company.certifications.length - 1 && (
                <span className="text-gray-500 ml-1 sm:ml-1.5">•</span>
              )}
            </span>
          ))}
          <span className="text-gray-400 ml-1">Certified</span>
          <span className="hidden sm:inline text-gray-500">•</span>
          <span className="hidden sm:inline text-gray-400">Pan India Distribution</span>
        </p>
      </div>
    </div>
  );
}
