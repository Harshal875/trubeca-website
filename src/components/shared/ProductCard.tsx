import Link from "next/link";
import { Product } from "@/lib/products";
import { Pill, ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col h-full p-4 sm:p-5 bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500"
    >
      {/* Image placeholder */}
      <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-brand-50/50 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
        <Pill className="w-10 h-10 sm:w-12 sm:h-12 text-brand-200 group-hover:text-brand-400 group-hover:scale-110 transition-all duration-500" />
        <div className="absolute top-2.5 right-2.5">
          <span className="px-2 py-0.5 text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold bg-navy-900/80 text-white rounded-full backdrop-blur-sm">
            {product.category.replace(/-/g, " ")}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-sm sm:text-base font-semibold text-navy-900 group-hover:text-brand-600 transition-colors leading-snug">
          {product.brandName}
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-gray-400 line-clamp-2 flex-1 leading-relaxed">
          {product.composition}
        </p>
        <div className="mt-3 pt-3 border-t border-gray-50 flex items-center justify-between">
          <span className="text-xs text-gray-400 font-medium">{product.packing}</span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-500 group-hover:text-brand-600">
            Details
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}
