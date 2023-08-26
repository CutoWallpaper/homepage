import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
import NextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: false,
  },
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/:locale/posts/:slug/",
        destination: "/:locale/:slug/",
        permanent: true,
      },
      {
        source: "/posts/:slug/",
        destination: "/:slug/",
        permanent: true,
      },
    ];
  },
};

const withNextIntl = NextIntlPlugin("./i18n.ts");

const withMDX = createMDX({
  options: {
    extension: /\.mdx?$/,
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

export default withNextIntl(withMDX(nextConfig));
