"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, X, Sparkles } from "lucide-react";
import { Reveal, GradientText } from "@/components/ui/animations";
import ProductCard from "@/components/shared/ProductCard";
import { getAllProducts, getAllCategories } from "@/lib/products";

const products = getAllProducts();
const categories = getAllCategories();

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = products;

    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.brandName.toLowerCase().includes(q) ||
          p.composition.toLowerCase().includes(q)
      );
    }

    return result;
  }, [search, selectedCategory]);

  return (
    <>
      {/* ─── Page Header ─── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-navy-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-brand-900" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[120px]" />
        </div>
        <div className="container-main relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium uppercase tracking-wider bg-white/5 text-white/70 rounded-full border border-white/10">
              <Sparkles className="w-3.5 h-3.5" />
              Our Products
            </span>
            <h1 className="mt-6 text-display-sm md:text-display-lg text-white text-balance">
              Pharmaceutical <GradientText>Products</GradientText>
            </h1>
            <p className="mt-4 text-lg text-white/50 max-w-2xl">
              Browse our complete range of {products.length}+ pharmaceutical products across multiple therapeutic segments.
            </p>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>

      <section className="bg-gray-50/50 min-h-screen">
        <div className="container-main py-8 md:py-12">
          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or composition..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-field pl-11 w-full"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden btn-secondary"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Mobile Filter Overlay */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-40 bg-black/40 md:hidden"
                  onClick={() => setShowFilters(false)}
                />
              )}
            </AnimatePresence>

            {/* Sidebar Filters */}
            <aside
              className={`${
                showFilters
                  ? "fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-xl p-6 overflow-y-auto"
                  : "hidden"
              } md:block md:relative md:w-56 md:shrink-0 md:shadow-none md:p-0`}
            >
              <div className="md:bg-white md:rounded-2xl md:border md:border-gray-100 md:p-5 md:shadow-card md:sticky md:top-28">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-navy-900">Categories</h3>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="md:hidden p-1 text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <ul className="space-y-1">
                  <li>
                    <button
                      onClick={() => {
                        setSelectedCategory("all");
                        setShowFilters(false);
                      }}
                      className={`w-full text-left px-3 py-2.5 text-sm rounded-xl transition-all duration-300 ${
                        selectedCategory === "all"
                          ? "bg-brand-50 text-brand-600 font-medium shadow-sm"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      All Products ({products.length})
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.slug}>
                      <button
                        onClick={() => {
                          setSelectedCategory(cat.slug);
                          setShowFilters(false);
                        }}
                        className={`w-full text-left px-3 py-2.5 text-sm rounded-xl transition-all duration-300 ${
                          selectedCategory === cat.slug
                            ? "bg-brand-50 text-brand-600 font-medium shadow-sm"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        {cat.name} ({cat.productCount})
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-500 mb-5">
                Showing <span className="font-semibold text-navy-900">{filtered.length}</span> of {products.length} products
                {selectedCategory !== "all" && (
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className="ml-2 text-brand-500 hover:underline font-medium"
                  >
                    Clear filter
                  </button>
                )}
              </p>

              {filtered.length > 0 ? (
                <motion.div
                  layout
                  className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
                >
                  <AnimatePresence mode="popLayout">
                    {filtered.map((product) => (
                      <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ProductCard product={product} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-gray-500 mb-2">No products found.</p>
                  <button
                    onClick={() => {
                      setSearch("");
                      setSelectedCategory("all");
                    }}
                    className="text-sm text-brand-500 hover:underline font-medium"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
