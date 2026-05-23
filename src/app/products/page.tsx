"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Filter, ArrowRight, Pill, Package } from "lucide-react";
import { Reveal, StaggerChildren, StaggerItem, TiltCard, GradientText } from "@/components/ui/animations";
import ProductCard from "@/components/shared/ProductCard";
import { getAllProducts, getAllCategories } from "@/lib/products";

export default function ProductsPage() {
  const allProducts = getAllProducts();
  const categories = getAllCategories();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = useMemo(() => {
    let list = allProducts;
    if (activeCategory !== "all") list = list.filter((p) => p.category === activeCategory);
    if (search) {
      const q = search.toLowerCase();
      list = list.filter((p) => p.brandName.toLowerCase().includes(q) || p.composition.toLowerCase().includes(q));
    }
    return list;
  }, [allProducts, activeCategory, search]);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-navy-950">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-brand-900/80" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-500/[0.07] rounded-full blur-[150px]" />
        <div className="container-main relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white/60 bg-white/[0.04] rounded-full border border-white/[0.08]">
              <Package className="w-3.5 h-3.5" />
              Product Range
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.03em] leading-[1.05] font-display">
              Our <span className="text-gradient">Products</span>
            </h1>
            <p className="mt-5 text-lg text-white/40 max-w-xl">
              Explore 200+ WHO-GMP certified pharmaceutical products across 7 therapeutic categories.
            </p>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ── Filters ── */}
      <section className="sticky top-16 lg:top-20 z-30 bg-white/90 backdrop-blur-2xl border-b border-gray-100">
        <div className="container-main py-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or composition..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-400 transition-all"
              />
            </div>
            {/* Category pills */}
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-4 py-2 text-xs font-semibold rounded-full whitespace-nowrap transition-all ${
                  activeCategory === "all"
                    ? "bg-navy-900 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                All ({allProducts.length})
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full whitespace-nowrap transition-all ${
                    activeCategory === cat.slug
                      ? "bg-navy-900 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat.name} ({cat.productCount})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Products Grid ── */}
      <section className="section-padding">
        <div className="container-main">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <Pill className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-navy-900">No products found</h3>
              <p className="mt-2 text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <>
              <p className="text-sm text-gray-400 mb-6">{filtered.length} products found</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 to-brand-900" />
        <div className="container-main relative z-10 text-center">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-white font-display">
              Need a Custom Formulation?
            </h2>
            <p className="mt-3 text-white/50 max-w-md mx-auto">
              We offer third-party manufacturing for custom formulations. Contact us for details.
            </p>
            <Link href="/contact" className="btn-primary mt-6">
              Get In Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
