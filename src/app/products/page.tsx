"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
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
      <PageHeader
        title="Our Products"
        subtitle={`Browse our complete range of ${products.length}+ pharmaceutical products across multiple therapeutic segments.`}
        breadcrumbs={[{ label: "Products" }]}
      />

      <section className="bg-gray-50 min-h-screen">
        <div className="container-main py-8 md:py-12">
          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6 sm:mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or composition..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-field pl-10 w-full"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden btn-secondary inline-flex items-center justify-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Mobile Filter Toggle */}
            {showFilters && (
              <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={() => setShowFilters(false)} />
            )}

            {/* Sidebar Filters */}
            <aside
              className={`${
                showFilters
                  ? "fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-xl p-4 pt-6 overflow-y-auto"
                  : "hidden"
              } md:block md:relative md:w-56 md:shrink-0 md:shadow-none md:p-0`}
            >
              <div className="md:bg-white md:rounded-xl md:border md:border-gray-200 md:p-4 md:sticky md:top-24">
                <div className="flex items-center justify-between mb-3 md:mb-3">
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
                      className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                        selectedCategory === "all"
                          ? "bg-brand-50 text-brand-600 font-medium"
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
                        className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                          selectedCategory === cat.slug
                            ? "bg-brand-50 text-brand-600 font-medium"
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
              <p className="text-sm text-gray-500 mb-4">
                Showing {filtered.length} of {products.length} products
                {selectedCategory !== "all" && (
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className="ml-2 text-brand-500 hover:underline"
                  >
                    Clear filter
                  </button>
                )}
              </p>

              {filtered.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
                  {filtered.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-gray-500 mb-2">No products found.</p>
                  <button
                    onClick={() => {
                      setSearch("");
                      setSelectedCategory("all");
                    }}
                    className="text-sm text-brand-500 hover:underline"
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
