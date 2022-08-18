const url = process.env.NEXT_API_URL;

// module.exports = {
//   images: {
//     domains: ["localhost", "res.cloudinary.com", ""],
//     loader: "akamai",
//     path: "",
//   },
//   env: {
//     url: url,
//   },
//   compiler: {
//     // ssr and displayName are configured by default
//     styledComponents: true,
//   },
// };

module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
    images: {
      domains: ["localhost", "res.cloudinary.com"],
      loader: "akamai",
      path: "",
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
