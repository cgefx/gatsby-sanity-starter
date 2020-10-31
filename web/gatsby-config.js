module.exports = {
  siteMetadata: {
    title: `Gibson.codes`,
    description: `The personal portfolio of software engineer, Colin Gibson`,
    author: `@cgefx`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'zj3d43kj',
        dataset: 'production',
        token: process.env.MY_SANITY_TOKEN,
      },
    },
  ],
}
