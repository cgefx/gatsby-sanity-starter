/* eslint-disable no-nested-ternary */
import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { StyledSection } from '../_shared/styled-section'
import { StyledImageContainer } from '../_shared/styled-image-container'
import TechList from '../TechList'
import TextLink from '../Links/text-link'
import ButtonLink from '../Links/button-link'
import {
  StyledFeaturedProject,
  StyledProjectInfoContainer,
  StyledDescription,
  StyledLinkContainer,
  StyledArchiveContainer,
} from './styles'
import { StyledH1, StyledH2 } from '../_shared/styled-headings'
import { StyledContentLink } from '../_shared/styled-content-link'

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
