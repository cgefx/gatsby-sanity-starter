import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import SkillsGrid from './SkillsGrid'
import { StyledSection } from './_shared/styled-section'
import { StyledH1 } from './_shared/styled-headings'
import { AnimatedShadow } from './_shared/animation'
import { mq } from './_shared/media'

const StyledAboutContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 5rem;
  padding: 5rem 0;

  ${mq.gt.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`

const ImageContainer = styled.div`
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 28px 60px rgba(80, 115, 184, 0.5);
  /* animation: ${AnimatedShadow} 10s infinite alternate; */
  @media (max-width: 767px) {
    margin-bottom: 5rem;
  }
`

const Image = styled.img`
  max-width: 400px;
  @media (max-width: 767px) {
    max-width: 20rem;
  }
  @media (max-width: 1400px) {
    max-width: 28rem;
  }
`

const Text = styled.p``

export default function About() {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "about-me.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 2000) {
            src
          }
        }
      }
    }
  `)

  return (
    <StyledSection id="about">
      <StyledAboutContainer>
        <ImageContainer>
          <Image src={image.childImageSharp.fluid.src} alt="about" />
        </ImageContainer>
        <div>
          <StyledH1>About Me</StyledH1>
          <Text>
            Los Angeles, CA based engineer currently focused on building
            exceptional websites, applications, and everything in between.
          </Text>
          <Text>
            Los Angeles, CA based engineer currently focused on building
            exceptional websites, applications, and everything in between.
          </Text>
          <SkillsGrid />
        </div>
      </StyledAboutContainer>
    </StyledSection>
  )
}
