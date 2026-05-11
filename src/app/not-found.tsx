import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-7xl sm:text-8xl font-extrabold text-navy-900/10 font-display">404</h1>
        <h2 className="mt-2 text-2xl font-bold text-navy-900 font-display">Page Not Found</h2>
        <p className="mt-3 text-gray-500 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="btn-primary mt-6">
          Go Home
        </Link>
      </div>
    </section>
  );
}
