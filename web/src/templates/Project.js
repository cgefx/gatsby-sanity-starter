import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
// import { blogMenuLinks } from '../components/_config/menu-links';
import { StyledH1 } from '../components/_shared/styled-headings'
import { StyledSection } from '../components/_shared/styled-section'

const StyledProjectSection = styled(StyledSection)`
  min-height: calc(100vh - var(--header-height));

  & > .gatsby-image-wrapper {
    width: 100%;
  }
`
const StyledProjectTitle = styled(StyledH1)`
  margin-top: 3rem;
`

const StyledProjectContent = styled.div`
  padding: 2rem;
  width: 100%;
  background: var(--bg-content-color);
  border-radius: var(--radius);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`

export default function ProjectPage({ data: { project } }) {
  console.log(project)
  const coverImage = project.image ? project.image.asset.fluid : null
  return (
    <StyledProjectSection>
      <StyledProjectTitle>{project.title}</StyledProjectTitle>
      {coverImage && <Img fluid={coverImage} />}
      <StyledProjectContent>
        <p>{project.description}</p>
      </StyledProjectContent>
    </StyledProjectSection>
  )
}

export const query = graphql`
  query($slug: String!) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      id
      title
      description
      techTags {
        name
      }
      repoLink
      liveLink
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`
