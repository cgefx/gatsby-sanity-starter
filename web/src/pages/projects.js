import React from 'react'

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
