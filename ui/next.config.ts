import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@teachback/contracts'],
  agentRules: false,
};

export default nextConfig;
