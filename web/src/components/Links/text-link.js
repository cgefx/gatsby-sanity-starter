import styled from 'styled-components'
import { Link } from 'gatsby'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { flexCenter } from '../_shared/styled-mixins'

export const StyledTextLink = styled(Link)`
  ${flexCenter};
  text-decoration: none;
  /* font-size: 1.6rem; */
  /* font-weight: 500; */
  white-space: nowrap;
  padding: 0.4rem 0.8rem;
  color: var(--primary-color);

  &:hover {
    color: var(--secondary-color);
    text-decoration: underline;
  }

  & > svg {
    height: 0.8rem;
    fill: currentColor;
    margin-left: 0.25rem;
    transition: margin-left var(--transition-fast) ease;
  }

  &:hover > svg {
    margin-left: 0.5rem;
  }
`

const TextLink = ({ label, link }) => (
  <>
    {label && link && (
      <StyledTextLink to={link || '#'}>
        {label}
        <FaArrowRight />
      </StyledTextLink>
    )}
  </>
)

export default TextLink
