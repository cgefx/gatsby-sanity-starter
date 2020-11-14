import React from 'react'
import styled from 'styled-components'
import { FaReact } from 'react-icons/fa'
import {
  SiJavascript,
  SiGraphql,
  SiFirebase,
  SiGatsby,
  SiNodeDotJs,
  SiStyledComponents,
  SiGit,
} from 'react-icons/si'
import { Fade, ColorAnimation } from './_shared/animation'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin-top: 2rem;
  @media (max-width: 767px) {
    margin-top: 5rem;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(10rem, 15rem));
  gap: 0.5rem;
  justify-items: start;
  animation: ${Fade} 1s forwards;
`
const SkillContainer = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
  align-items: flex-end;
`

const IconWrapper = styled.div`
  height: 100%;
  transition: 2s;

  > svg {
    height: 100%;
    /* animation: ${ColorAnimation} 10s infinite alternate; */
    fill: var(--primary-color);
  }
`

const Text = styled.p`
  /* font-size: 16px; */
  text-transform: capitalize;
  font-weight: bold;
  margin-left: 0.8rem;
  margin-bottom: 0.2rem;
`

const skills = ['es6', 'firebase', 'gatsby', 'git', 'graphql', 'node', 'react']

function SkillIcon(props) {
  switch (props.skill) {
    case 'es6':
      return <SiJavascript />
    case 'firebase':
      return <SiFirebase />
    case 'gatsby':
      return <SiGatsby />
    case 'git':
      return <SiGit />
    case 'graphql':
      return <SiGraphql />
    case 'node':
      return <SiNodeDotJs />
    case 'react':
      return <FaReact />
    case 'styled components':
      return <SiStyledComponents />
    default:
      return <div />
  }
}

function Skill({ text }) {
  return (
    <SkillContainer>
      <IconWrapper>
        <SkillIcon skill={text} />
      </IconWrapper>
      <Text>{text}</Text>
    </SkillContainer>
  )
}

export default function SkillsGrid() {
  return (
    <Container>
      <Grid>
        {skills.map((name, i) => (
          <Skill key={`${name}-${i}`} text={name} />
        ))}
      </Grid>
    </Container>
  )
}
