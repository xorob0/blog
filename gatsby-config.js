module.exports = {
  siteMetadata: {
    title: `Toum's Blog`,
    author: {
      name: `Toum`,
      summary: `Just a random dev`,
    },
    description: `Toum's blog about web and mobile development, open source and more`,
    siteUrl: `https://toum.me/`,
    social: {
      mastodon: `@tim@mastodon.social`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Toum's Blog`,
        short_name: `Toum's Blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0099cc`,
        display: `minimal-ui`,
        icon: `content/assets/Logo.svg`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
