interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-8 md:mb-14 ${align === "center" ? "text-center" : "text-left"}`}>
      {badge && (
        <span
          className={`inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full mb-3 ${
            light
              ? "bg-white/10 text-brand-300"
              : "bg-brand-50 text-brand-600"
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-section md:text-section-md font-bold leading-tight ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-2 sm:mt-3 max-w-2xl text-body-lg md:text-body-lg-md ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-gray-300" : "text-gray-500"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
