import React from 'react'
import {
  Section,
  Overlay,
  StyledContainer,
  Heading,
  Grid,
  Card,
  Icon,
  Title,
  Separator,
  Description,
  StyledButton,
} from './styles'

export default function FeaturedProjects() {
  return (
    <Section id="services">
      <Overlay>
        <StyledContainer>
          <Heading>Recent Work</Heading>
          <Separator />
          <Grid>
            <Card>
              <Title>Mobile App Development</Title>
              <Icon />
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae reiciendis assumenda molestiae ad dolor esse
                pariatur.
              </Description>
              <StyledButton>
                <span>View Project</span>
              </StyledButton>
            </Card>
            <Card>
              <Title>Web Development</Title>
              <Icon />
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae reiciendis assumenda molestiae ad dolor esse
                pariatur.
              </Description>
              <StyledButton>
                <span>View Project</span>
              </StyledButton>
            </Card>
            <Card>
              <Title>Email Marketing</Title>
              <Icon />
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae reiciendis assumenda molestiae ad dolor esse
                pariatur.
              </Description>
              <StyledButton>
                <span>View Project</span>
              </StyledButton>
            </Card>
          </Grid>
        </StyledContainer>
      </Overlay>
    </Section>
  )
}
