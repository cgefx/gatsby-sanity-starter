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
    const coverImage = project.image ? project.image.asset.fluid : null
    const link = `/project/${project.slug.current}`

    return (
      <StyledFeaturedProject key={project.title + index}>
        <Link to={link}>
          {coverImage && (
            <StyledImageContainer hasHover>
              <Img fluid={coverImage} />
            </StyledImageContainer>
          )}
        </Link>
        <StyledProjectInfoContainer>
          <StyledContentLink to={link}>
            <StyledH2>{project.title}</StyledH2>
          </StyledContentLink>
          <StyledDescription>
            <p>{project.description}</p>
            <StyledLinkContainer>
              <TextLink label="View Project" link={link} />
            </StyledLinkContainer>
          </StyledDescription>
          <TechList techs={project.techTags} />
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
