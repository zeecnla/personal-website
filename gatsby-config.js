const { spaceId, accessToken } = require('./keys');

module.exports = {
  siteMetadata: {
    title: `Cesar Melchor`,
    greeting: `Hello 👋 I'm Cesar!`,
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
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule:
          {
            include: /\.inline\.svg$/
          }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options : {
        name: 'footer',
        path: `${__dirname}/src/images/assets/footer`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId:spaceId,
        accessToken:accessToken
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
