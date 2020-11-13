import styled from 'styled-components'
import React from 'react'
import { FaCaretRight } from 'react-icons/fa'

const StyledTechContainer = styled.section`
  margin-top: 1.6rem;
  display: flex;
  flex-wrap: wrap;
`
const StyledTag = styled.span`
  display: flex;
  align-items: center;
  white-space: nowrap;
  color: var(--body-color);
  margin: 0 2rem 1rem 0;

  & > svg {
    color: var(--primary-color);
    height: 1.6rem;
    margin-right: 0.5rem;
  }
`

const TechList = ({ techs }) => (
  <StyledTechContainer>
    {techs.map((tech, index) => (
      <StyledTag key={tech + index}>
        <FaCaretRight />
        {tech.name}
      </StyledTag>
    ))}
  </StyledTechContainer>
)

export default TechList
