import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Pill, ArrowLeft, Package, Tag, ArrowRight, MessageCircle } from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import EnquiryForm from "@/components/shared/EnquiryForm";
import ProductCard from "@/components/shared/ProductCard";
import { getAllProducts, getProductBySlug, getRelatedProducts } from "@/lib/products";

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.brandName,
    description: `${product.brandName} – ${product.composition}. Available in ${product.packing}. Contact Trubeca Lifesciences for PCD Pharma Franchise and Third Party Manufacturing.`,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.category, product.slug);

  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-24 lg:pt-28 bg-gray-50/50 border-b border-gray-100">
        <div className="container-main py-4">
          <Breadcrumb items={[{ label: "Products", href: "/products" }, { label: product.brandName }]} />
        </div>
      </div>

      {/* Product Detail */}
      <section className="container-main py-10 md:py-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image */}
          <div className="aspect-square bg-gradient-to-br from-gray-50 to-brand-50/30 rounded-3xl flex items-center justify-center lg:sticky lg:top-28 border border-gray-100 shadow-card">
            <Pill className="w-20 h-20 sm:w-28 sm:h-28 text-brand-200" />
          </div>

          {/* Info */}
          <div>
            <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-wider font-semibold bg-navy-900 text-white rounded-full">
              {product.category.replace(/-/g, " ")}
            </span>
            <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold text-navy-900 font-display">
              {product.brandName}
            </h1>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100">
                <Tag className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Composition</p>
                  <p className="mt-1 text-gray-700 font-medium">{product.composition}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100">
                <Package className="w-5 h-5 text-brand-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Packing</p>
                  <p className="mt-1 text-gray-700 font-medium">{product.packing}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/918699826998?text=I%20am%20interested%20in%20${encodeURIComponent(product.brandName)}.%20Please%20share%20details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#25D366] rounded-full hover:bg-[#20bd5a] transition-all duration-300 shadow-lg shadow-green-500/20"
              >
                <MessageCircle className="w-4 h-4" />
                Enquire on WhatsApp
              </a>
              <Link href="/contact" className="btn-secondary">Contact Us</Link>
            </div>

            {/* Enquiry Form */}
            <div className="mt-10 bg-gray-50/80 rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-100">
              <h3 className="text-lg font-bold text-navy-900 font-display mb-5">Quick Enquiry</h3>
              <EnquiryForm productName={product.brandName} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="section-padding bg-gray-50/50">
          <div className="container-main">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-navy-900 font-display">Related Products</h2>
              <Link href="/products" className="text-sm text-brand-500 font-semibold hover:text-brand-600 inline-flex items-center gap-1 group">
                View All <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back */}
      <div className="border-t border-gray-100">
        <div className="container-main py-6">
          <Link href="/products" className="text-sm text-brand-500 font-semibold hover:text-brand-600 inline-flex items-center gap-1.5 group">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            Back to All Products
          </Link>
        </div>
      </div>
    </>
  );
}
