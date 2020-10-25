var spaceId;
var accessToken;

const environment = process.env.NODE_ENV;

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

if (environment !== "production") {
  spaceId = process.env.APP_SPACE_ID;
  accessToken = process.env.APP_ACCESS_TOKEN;
  trackingId = process.env.APP_TRACKING_ID;
} else {
  spaceId = process.env.GATSBY_SPACE_ID;
  accessToken = process.env.GATSBY_ACCESS_TOKEN;
  trackingId = process.env.GATSBY_TRACKING_ID;
}

module.exports = {
  siteMetadata: {
    title: `Cesar Melchor`,
    greeting: `Hello 👋, I'm Cesar!`,
    description: `This is my portfolio site.`,
    author: `@zeecnla`,
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/zeecnla"
      },
      {
        name: "twitch",
        url: "https://www.twitch.tv/zeecnla"
      },
      {
        name: "github",
        url: "https://www.github.com/zeecnla"
      }
    ]
  },
  plugins: [
    // Add support for *.mdx files in gatsby

    "gatsby-plugin-mdx",

    // Add a collection called "posts" that looks
    // for files in content/posts/
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/content/images`
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: trackingId
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "footer",
        path: `${__dirname}/src/images/assets/footer`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: spaceId,
        accessToken: accessToken
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
