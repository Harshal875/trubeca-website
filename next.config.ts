import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async headers() {
    return [
      {
        // Cache all pages for 1 hour at CDN, stale-while-revalidate for 24h
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=3600, stale-while-revalidate=86400",
          },
        ],
      },
      {
        // Cache images for 1 year
        source: "/images/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Cache videos for 1 year
        source: "/videos/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
