import styled from 'styled-components'
import { Link } from 'gatsby'

export const StyledContentLink = styled(Link)`
  text-decoration: none;

  &:hover > * {
    cursor: pointer;
    color: var(--primary-color);
  }
`
