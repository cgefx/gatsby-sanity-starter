const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  // 1. Get a template for this page

  const projectTemplate = path.resolve('./src/templates/Project.js')

  // 2. Query all pizzas
  const { data } = await graphql(`
    query {
      projects: allSanityProject {
        nodes {
          title
          slug {
            current
          }
        }
      }
    }
  `)

  // 3. Loop over each pizza and create a page for it
  data.projects.nodes.forEach(project => {
    actions.createPage({
      path: `project/${project.slug.current}`,
      component: projectTemplate,
      context: {
        slug: project.slug.current,
      },
    })
  })
}
