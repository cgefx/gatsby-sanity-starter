import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  Section,
  StyledRow,
  RightCol,
  AboutContainer,
  LeftCol,
  ImageContainer,
  Image,
  Text,
} from './styles'
import SkillsGrid from '../SkillsGrid'
import { StyledH1 } from '../_shared/styled-headings'

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
    <Section id="about">
      <AboutContainer>
        <StyledRow>
          <LeftCol md={6}>
            <ImageContainer>
              <Image src={image.childImageSharp.fluid.src} alt="about" />
            </ImageContainer>
          </LeftCol>
          <RightCol md={6}>
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
          </RightCol>
        </StyledRow>
      </AboutContainer>
    </Section>
  )
}
