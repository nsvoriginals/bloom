import type { NextConfig } from "next";

import "dotenv/config";

console.log("NEXT_PUBLIC_DEV_NET:", process.env.NEXT_PUBLIC_DEV_NET);
console.log("NEXT_PUBLIC_MAIN_NET:", process.env.NEXT_PUBLIC_MAIN_NET);

const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;

