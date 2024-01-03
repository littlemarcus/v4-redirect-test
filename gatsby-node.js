/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

exports.createPages = async ({ graphql, actions }) => {
    const { createRedirect } = actions
  
    createRedirect({
      fromPath: `/test-path`,
      toPath: `https://www.gatsbyjs.com/`,
    }),
    createRedirect({
        fromPath: `/second-path`,
        toPath: `/`,
    })
  }