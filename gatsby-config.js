require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ["category", "post"],
  queryLimit: 1000,
};

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "SIYUN'S PORTFOLIO",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
  ],
};
