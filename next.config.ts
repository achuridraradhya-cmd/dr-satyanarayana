import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["pdfkit"],
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"blogs.drsatyanarayanagarre.in"
      }
    ]
  }
};

export default nextConfig;
