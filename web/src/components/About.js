import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import SkillsGrid from './SkillsGrid'
import { StyledSection } from './_shared/styled-section'
import { StyledH1 } from './_shared/styled-headings'
import { mq } from './_shared/media'

const StyledAboutContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 5rem;

  ${mq.gt.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`

const ImageContainer = styled.div`
  border-radius: 20px;
  width: 100%;
  box-shadow: 0 28px 60px rgba(80, 115, 184, 0.5);
  /* @media (max-width: 767px) {
    margin-bottom: 5rem;
  } */
`

const Image = styled.img``

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
