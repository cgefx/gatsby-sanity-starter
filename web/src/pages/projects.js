import React from 'react'
import { graphql } from 'gatsby'
import GatsbyImage from 'gatsby-image'

export default function ProjectsPage({ data }) {
  const projects = data.projects.nodes

  return (
    <div>
      {projects.map(project => (
        <div>
          <h1>{project.name}</h1>
          {project.image && <GatsbyImage fluid={project.image.asset.fluid} />}
          <div style={{ display: 'flex' }}>
            {project.techTags.map(tag => (
              <div style={{ display: 'flex' }}>
                <div>{tag.name}</div>
                <GatsbyImage fixed={tag.image.asset.fixed} />
              </div>
            ))}
          </div>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  query MyQuery {
    projects: allSanityProject {
      nodes {
        name
        description
        featured
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        repoLink
        liveLink
        slug {
          current
        }
        techTags {
          name
          image {
            asset {
              fixed(width: 32) {
                ...GatsbySanityImageFixed
              }
            }
          }
        }
      }
    }
  }
`
