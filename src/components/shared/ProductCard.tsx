import Link from "next/link";
import { Product } from "@/lib/products";
import { Pill } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="card group flex flex-col h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image placeholder */}
      <div className="relative aspect-square bg-gradient-to-br from-brand-50 to-blue-50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
        <Pill className="w-12 h-12 text-brand-200 group-hover:text-brand-300 transition-colors" />
        <div className="absolute top-2 right-2">
          <span className="px-2 py-0.5 text-[10px] uppercase tracking-wide font-semibold bg-brand-500 text-white rounded">
            {product.category.replace(/-/g, " ")}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-card-title font-semibold text-navy-900 group-hover:text-brand-500 transition-colors leading-snug">
          {product.brandName}
        </h3>
        <p className="mt-1.5 text-sm text-gray-500 line-clamp-2 flex-1">
          {product.composition}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-gray-400 font-medium">{product.packing}</span>
          <span className="text-xs font-semibold text-brand-500 group-hover:underline">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}
