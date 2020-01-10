const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});
module.exports = withMDX({
  experimental: {
    css: true
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"]
});
