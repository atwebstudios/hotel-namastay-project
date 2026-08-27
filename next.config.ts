import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow local network IP for testing on devices
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  allowedDevOrigins: ['192.168.1.25'],
};

export default nextConfig;
