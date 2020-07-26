module.exports = {
  siteMetadata: {
    title: `React Countries with GraphQl`,
    description: `React Countries List with GraphQl`,
    author: `@SzymonNowicki`,
    siteUrl  : `localhost:8000`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-routes`,
      options: {
        // this is the path to your routes configuration file
        path: `${__dirname}/src/routes.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: 'https://countries.trevorblades.com/'
      }
    },
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },  
      {
        resolve: "gatsby-source-graphql",
        options: {
          // Arbitrary name for the remote schema Query type
          typeName: "COUNTRIES",
          // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
          fieldName: "countries",
          // Url to query from
          url: "https://countries.trevorblades.com/",
        },
      },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `React GraphQL Countries`,
        short_name: `React Countries`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
