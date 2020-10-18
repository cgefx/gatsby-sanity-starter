import React from 'react'
import {graphql} from 'gatsby'
import GatsbyImage from 'gatsby-image';

export default function ProjectsPage({data}) {
	const projects = data.projects.nodes;

		return (
			<div>
				{
					projects.map((project) => (
						<div>
							<h1>{project.name}</h1>
							<div>
								{project.tools.map((tool) => (
									<div>

									<div>{tool.name}</div>
									<GatsbyImage fixed={tool.image.asset.fixed} />
									</div>
								))}
							</div>
							<p>{project.description}</p>
						</div>
					))
					}
			</div>
		)

}


export const query = graphql`
	query MyQuery {
  projects: allSanityProject {
    nodes {
      name
      description
      tools {
        name
        image {
          asset {
            fixed (width: 32) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
  }
}
`