import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Pill, ArrowLeft, Package, Tag, ArrowRight, MessageCircle } from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import EnquiryForm from "@/components/shared/EnquiryForm";
import ProductCard from "@/components/shared/ProductCard";
import {
  getAllProducts,
  getProductBySlug,
  getRelatedProducts,
} from "@/lib/products";

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.brandName,
    description: `${product.brandName} – ${product.composition}. Available in ${product.packing}. Contact Trubeca Life Sciences for PCD Pharma Franchise and Third Party Manufacturing.`,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.category, product.slug);

  return (
    <>
      {/* Breadcrumb Header */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-main py-3">
          <Breadcrumb
            items={[
              { label: "Products", href: "/products" },
              { label: product.brandName },
            ]}
          />
        </div>
      </div>

      {/* Product Detail */}
      <section className="bg-white">
        <div className="container-main py-8 md:py-14">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image */}
            <div>
              <div className="aspect-square bg-gradient-to-br from-brand-50 to-blue-50 rounded-2xl flex items-center justify-center lg:sticky lg:top-24">
                <Pill className="w-16 h-16 sm:w-24 sm:h-24 text-brand-200" />
              </div>
            </div>

            {/* Info */}
            <div>
              <span className="inline-block px-2.5 py-1 text-xs uppercase tracking-wide font-semibold bg-brand-50 text-brand-600 rounded mb-3">
                {product.category.replace(/-/g, " ")}
              </span>
              <h1 className="text-page-title md:text-page-title-md font-bold text-navy-900 mb-4">
                {product.brandName}
              </h1>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Tag className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                      Composition
                    </p>
                    <p className="text-gray-700 font-medium">{product.composition}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Package className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                      Packing
                    </p>
                    <p className="text-gray-700 font-medium">{product.packing}</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <a
                  href={`https://wa.me/918699826998?text=I%20am%20interested%20in%20${encodeURIComponent(product.brandName)}.%20Please%20share%20details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Enquire on WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="btn-secondary inline-flex items-center justify-center gap-2"
                >
                  Contact Us
                </Link>
              </div>

              {/* Enquiry Form */}
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-navy-900 mb-4">
                  Quick Enquiry
                </h3>
                <EnquiryForm productName={product.brandName} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="bg-gray-50">
          <div className="container-main section-padding">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-navy-900">Related Products</h2>
              <Link
                href="/products"
                className="text-sm text-brand-500 font-medium hover:underline inline-flex items-center gap-1"
              >
                View All <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back link */}
      <div className="bg-white border-t border-gray-100">
        <div className="container-main py-6">
          <Link
            href="/products"
            className="text-sm text-brand-500 font-medium hover:underline inline-flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to All Products
          </Link>
        </div>
      </div>
    </>
  );
}
