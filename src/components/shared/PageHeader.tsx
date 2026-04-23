import Breadcrumb from "@/components/layout/Breadcrumb";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export default function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white">
      <div className="container-main pt-4 pb-12 md:pb-16">
        <div className="mb-4">
          <Breadcrumb items={breadcrumbs} />
        </div>
        <h1 className="text-page-title font-bold leading-tight text-white drop-shadow-lg">{title}</h1>
        {subtitle && (
          <p className="mt-3 text-body-lg text-gray-200 max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
