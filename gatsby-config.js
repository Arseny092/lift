module.exports = {
  siteMetadata: {
    title: 'ЭМ',
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      {
          resolve: 'gatsby-plugin-web-font-loader',
          options: {
              google: {
                  families: ['Fira Sans Condensed']
              }
          }

      },
  ],
}
