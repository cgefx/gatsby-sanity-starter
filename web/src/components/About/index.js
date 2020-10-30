import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Row, Col } from 'react-bootstrap'
import {
  Section,
  AboutContainer,
  LeftCol,
  ImageContainer,
  Image,
  Separator,
  Heading,
  Text,
} from './styles'
import SkillsGrid from '../SkillsGrid'

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
        <Row>
          <LeftCol md={6}>
            <ImageContainer>
              <Image src={image.childImageSharp.fluid.src} alt="about" />
            </ImageContainer>
          </LeftCol>
          <Col md={6}>
            <Heading>About Me</Heading>
            <Separator />
            <Text>
              Los Angeles, CA based engineer currently focused on building
              exceptional websites, applications, and everything in between.
            </Text>
            <Text>
              Los Angeles, CA based engineer currently focused on building
              exceptional websites, applications, and everything in between.
            </Text>
            <SkillsGrid />
          </Col>
        </Row>
      </AboutContainer>
    </Section>
  )
}
