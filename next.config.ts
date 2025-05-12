import type { NextConfig } from "next";
import withPWA from "next-pwa";

// Next.js PWA configuration
const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Additional Next.js config options can be added here
};

export default withPWA({
  ...nextConfig,
  dest: 'public',  // Output the service worker and other PWA-related assets to the public folder
  register: true,   // Enable automatic service worker registration
  skipWaiting: true,  // Skip waiting to activate the new service worker immediately
});
