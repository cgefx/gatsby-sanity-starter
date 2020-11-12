import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
// import { blogMenuLinks } from '../components/_config/menu-links';
import { StyledH1 } from '../components/_shared/styled-headings'
import { StyledSection } from '../components/_shared/styled-section'
import BlockContent from '../components/BlockContent'
import { StyledImageContainer } from '../components/_shared/styled-image-container'

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
  const coverImage = project.coverImage ? project.coverImage.asset.fluid : null
  return (
    <StyledProjectSection>
      <StyledImageContainer>
        {coverImage && <Img fluid={coverImage} />}
      </StyledImageContainer>
      <StyledProjectContent>
        <StyledProjectTitle>{project.title}</StyledProjectTitle>
        {project._rawBody && <BlockContent blocks={project._rawBody || []} />}
      </StyledProjectContent>
    </StyledProjectSection>
  )
}

export const query = graphql`
  query($slug: String!) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      id
      title
      type
      techStack {
        name
      }
      excerpt
      _rawBody
      repoLink
      demoLink
      coverImage {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      featured
      slug {
        current
      }
    }
  }
`
