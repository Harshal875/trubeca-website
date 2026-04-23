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
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by product name or composition..."
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
              className="sm:hidden btn-secondary inline-flex items-center justify-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>

          <div className="flex gap-8">
            {/* Sidebar Filters */}
            <aside
              className={`shrink-0 ${
                showFilters ? "block" : "hidden"
              } sm:block w-full sm:w-56`}
            >
              <div className="bg-white rounded-xl border border-gray-200 p-4 sticky top-24">
                <h3 className="text-sm font-semibold text-navy-900 mb-3">Categories</h3>
                <ul className="space-y-1">
                  <li>
                    <button
                      onClick={() => setSelectedCategory("all")}
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
                        onClick={() => setSelectedCategory(cat.slug)}
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
            <div className="flex-1">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
