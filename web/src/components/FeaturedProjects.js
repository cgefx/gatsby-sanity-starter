/* eslint-disable no-nested-ternary */
import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import TechList from './TechList'
import TextLink from './Links/text-link'
import ButtonLink from './Links/button-link'
import { StyledSection } from './_shared/styled-section'
import { StyledImageContainer } from './_shared/styled-image-container'
import { StyledH1, StyledH2 } from './_shared/styled-headings'
import { StyledContentLink } from './_shared/styled-content-link'
import { contentBox, flexCenter } from './_shared/styled-mixins'

const StyledFeaturedProject = styled.article`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 7rem;
  padding: 4rem 0;

  @media screen and (min-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  &:nth-of-type(even) {
    direction: rtl;
  }
  &:nth-of-type(even) * {
    direction: ltr;
  }
`

const StyledProjectInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
`

const StyledLinkContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0;

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primary-color);

    &:hover {
      color: var(--body-color);
    }
  }

  & svg {
    margin: 0 0.5rem;
  }
`

const StyledDescription = styled.section`
  ${contentBox}
  position: relative;
  padding: 1.6rem;

  p {
    font-size: 1.6rem;
  }
`

const StyledArchiveContainer = styled.div`
  ${flexCenter};
  width: 100%;
  margin-top: 2.5rem;
`

export default function FeaturedProjects({ projects }) {
  const Projects = projects.map((project, index) => {
    const coverImage = project.coverImage
      ? project.coverImage.asset.fluid
      : null
    const projectUrl = `/project/${project.slug.current}`

    return (
      <StyledFeaturedProject key={project.title + index}>
        <Link to={projectUrl}>
          {coverImage && (
            <StyledImageContainer hasHover>
              <Img fluid={coverImage} />
            </StyledImageContainer>
          )}
        </Link>
        <StyledProjectInfoContainer>
          <StyledContentLink to={projectUrl}>
            <StyledH2>{project.title}</StyledH2>
          </StyledContentLink>
          <StyledDescription>
            <p>{project.excerpt}</p>
            <StyledLinkContainer>
              <TextLink label="View Project" link={projectUrl} />
            </StyledLinkContainer>
          </StyledDescription>
          <TechList techs={project.techStack} />
        </StyledProjectInfoContainer>
      </StyledFeaturedProject>
    )
  })
  return (
    <StyledSection id="projects">
      <StyledH1>Featured Projects</StyledH1>
      {Projects}
      <StyledArchiveContainer>
        <ButtonLink label="View all projects" link="/projects" />
      </StyledArchiveContainer>
    </StyledSection>
  )
}
