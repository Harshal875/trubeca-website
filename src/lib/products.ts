import productsData from "@/data/products.json";
import categoriesData from "@/data/categories.json";

export interface Product {
  id: number;
  slug: string;
  brandName: string;
  composition: string;
  category: string;
  packing: string;
  style: string;
  image: string;
  hasImage: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  productCount: number;
  image: string;
  icon: string;
}

export function getAllProducts(): Product[] {
  return productsData.products;
}

export function getProductBySlug(slug: string): Product | null {
  return productsData.products.find((p) => p.slug === slug) || null;
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return productsData.products.filter((p) => p.category === categorySlug);
}

export function getRelatedProducts(
  category: string,
  excludeSlug: string,
  limit: number = 4
): Product[] {
  return productsData.products
    .filter((p) => p.category === category && p.slug !== excludeSlug)
    .slice(0, limit);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return productsData.products.filter(
    (p) =>
      p.brandName.toLowerCase().includes(q) ||
      p.composition.toLowerCase().includes(q)
  );
}

export function getAllCategories(): Category[] {
  return categoriesData.categories;
}

export function getCategoryBySlug(slug: string): Category | null {
  return categoriesData.categories.find((c) => c.slug === slug) || null;
}
