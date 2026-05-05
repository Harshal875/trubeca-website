import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-50">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent-cyan/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative text-center px-4">
        <p className="text-[120px] md:text-[160px] font-extrabold text-gradient leading-none tracking-tighter">
          404
        </p>
        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-navy-900">
          Page Not Found
        </h1>
        <p className="mt-3 text-gray-500 max-w-md mx-auto">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            <Home className="w-4 h-4" />
            Go to Homepage
          </Link>
          <Link href="/products" className="btn-secondary">
            <Search className="w-4 h-4" />
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
