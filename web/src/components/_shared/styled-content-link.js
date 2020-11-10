import styled from 'styled-components'

export const StyledContentLink = styled.a`
  text-decoration: none;

  &:hover > * {
    cursor: pointer;
    color: var(--primary-color);
  }
`
