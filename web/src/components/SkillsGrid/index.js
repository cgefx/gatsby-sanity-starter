import React from 'react'

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

import {
  SkillContainer,
  IconWrapper,
  Text,
  Container,
  Heading,
  Grid,
} from './styles'

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
      <Heading className="active">Skills</Heading>
      <Grid>
        {skills.map(name => (
          <Skill text={name} />
        ))}
      </Grid>
    </Container>
  )
}
