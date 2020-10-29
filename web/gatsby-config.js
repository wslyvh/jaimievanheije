module.exports = {
  siteMetadata: {
    title: `Jaimie van Heije Restaurant`,
    description: `Jaimie van Heije and his ambitious kitchen team welcome you to the dynamic ambience in our restaurant`
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-73087618-3`,
      },
    }
  ],
}
