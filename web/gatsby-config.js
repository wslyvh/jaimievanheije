module.exports = {
  siteMetadata: {
    title: `Jaimie van Heije Restaurant`,
    description: `Jaimie van Heije and his ambitious kitchen team welcome you to the dynamic ambience in our restaurant`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/menu`,
        name: `menu`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/openingstijden`,
        name: `openingstijden`,
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-73087618-3`,
      },
    }
  ],
}
