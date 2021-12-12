module.exports = {
  siteMetadata: {
    siteUrl: "https://www.obenair.de",
    title: "Oben Air",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: "./src/cms/cms.js",
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "uploads",
        path: "./content/uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./content/pages",
        name: "pages",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Oben Air Festival",
        short_name: "Oben Air",
        start_url: "/",
        background_color: "#fefce8",
        theme_color: "#fefce8",
        icon: "src/images/favicon.png",
      }
    }
  ],
};
