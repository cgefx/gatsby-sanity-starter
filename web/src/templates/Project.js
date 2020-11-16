import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
// import { blogMenuLinks } from '../components/_config/menu-links';
import { StyledH1 } from '../components/_shared/styled-headings'
import { StyledSection } from '../components/_shared/styled-section'
import { contentBox } from '../components/_shared/styled-mixins'
import BlockContent from '../components/BlockContent'

const StyledProjectSection = styled(StyledSection)`
  padding-top: 0;
  max-width: 825px;
`
const StyledProjectContent = styled.div`
  ${contentBox}
`
const ProjectTitle = styled(StyledH1)`
  margin-bottom: 2rem;
`

const ProjectMetaContainer = styled.div`
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--border-color);
`

const ProjectDetails = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 800px) {
    max-width: 75%;
  }
`

const StyledDetailHeading = styled.h4`
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
`

const StyledDetailText = styled.p`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6rem;
`

const StyledLinkContainer = styled.section`
  display: flex;
  margin: 10px 0;
  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--body-color);
    &:hover {
      color: var(--primary-color);
    }
  }
  & svg {
    margin: 0 0.5rem;
  }
`

export default function ProjectPage({ data: { project } }) {
  console.log(project)
  const demoLinkLabel = `featured project ${project.title} demo`
  const repoLinkLabel = `featured project ${project.title} repo`

  return (
    <StyledProjectSection>
      <StyledProjectContent>
        <ProjectMetaContainer>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDetails>
            <Column>
              <StyledDetailHeading>Stack</StyledDetailHeading>
              {project.techStack.map((tech, i) => (
                <StyledDetailText key={tech + i}>{tech.name}</StyledDetailText>
              ))}
            </Column>
            <Column>
              <StyledDetailHeading>Type</StyledDetailHeading>
              <StyledDetailText>{project.type}</StyledDetailText>
            </Column>
            <Column>
              <StyledDetailHeading>Links</StyledDetailHeading>
              <StyledLinkContainer>
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Repository Link"
                    aria-label={repoLinkLabel}
                  >
                    <FaGithub />
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Demo Link"
                    aria-label={demoLinkLabel}
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </StyledLinkContainer>
            </Column>
          </ProjectDetails>
        </ProjectMetaContainer>
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
