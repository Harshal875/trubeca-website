import company from "@/data/company.json";

interface StatsBarProps {
  light?: boolean;
}

export default function StatsBar({ light = false }: StatsBarProps) {
  const stats = company.stats;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
      {[
        { value: stats.totalProducts, label: "Products" },
        { value: stats.distributionPartners, label: "Distribution Partners" },
        { value: stats.categories, label: "Product Categories" },
        { value: stats.yearsInBusiness, label: "Years Experience" },
      ].map((stat) => (
        <div key={stat.label} className="text-center">
          <p
            className={`text-2xl sm:text-3xl md:text-4xl font-bold ${
              light ? "text-white" : "text-brand-500"
            }`}
          >
            {stat.value}
          </p>
          <p
            className={`mt-1 text-xs sm:text-sm font-medium ${
              light ? "text-gray-300" : "text-gray-500"
            }`}
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
