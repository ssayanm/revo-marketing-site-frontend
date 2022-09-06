// module.exports = {
//   siteUrl: "https://www.revovideo.com",
//   generateRobotsTxt: true,
//   sitemapSize: 7000,
// };

// module.exports = {
//   siteUrl: "https://revovideo.com",
//   generateRobotsTxt: true, // (optional)
//   sitemapSize: 7000,
// };

const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;
module.exports = {
  siteUrl,
  exclude: ["/404"],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/404"],
      },
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [
      `${siteUrl}sitemap.xml`,
      `${siteUrl}server-sitemap.xml`,
    ],
  },
};
