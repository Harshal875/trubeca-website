import Breadcrumb from "@/components/layout/Breadcrumb";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export default function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white">
      <div className="container-main pt-4 pb-8 sm:pb-12 md:pb-16">
        <div className="mb-3 sm:mb-4">
          <Breadcrumb items={breadcrumbs} />
        </div>
        <h1 className="text-page-title md:text-page-title-md font-bold leading-tight text-white drop-shadow-lg">{title}</h1>
        {subtitle && (
          <p className="mt-2 sm:mt-3 text-body-lg md:text-body-lg-md text-gray-200 max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
