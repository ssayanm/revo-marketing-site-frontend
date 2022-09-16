const url = process.env.NEXT_API_URL;

module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
    images: {
      domains: ["localhost", "res.cloudinary.com", "cms.revovideo.com"],
      loader: "default",
      path: "/_next/image",
    },
    env: {
      url: url,
    },
    compiler: {
      // ssr and displayName are configured by default
      styledComponents: true,
    },
  };
  return nextConfig;
};
