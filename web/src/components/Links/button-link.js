import styled from 'styled-components'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { flexCenter } from '../_shared/styled-mixins'

export const StyledButtonLink = styled.a`
  ${flexCenter};
  text-decoration: none;
  color: var(--bg-content-color) !important;
  background-color: var(--title-color);
  font-size: 1.8rem;
  font-weight: 500;
  white-space: nowrap;
  position: relative;
  border: none;
  padding: 0.8rem 1.6rem;

  &:hover {
    color: var(--primary-color) !important;
  }

  &:after {
    content: '';
    z-index: -1;
    border: 1px solid var(--title-color);
    position: absolute;
    bottom: -3px;
    right: -3px;
    width: 100%;
    height: 100%;
    transition: all ease var(--transition-fast);
  }

  &:hover:after {
    border: 1px solid var(--primary-color);
    bottom: -5px;
    right: -5px;
  }

  & > svg {
    fill: var(--bg-content-color);
    height: 1.6rem;
    margin-left: 0.5rem;
  }

  &:hover > svg {
    fill: var(--primary-color);
  }
`

const ButtonLink = ({ label, link }) => (
  <>
    {label && link && (
      <StyledButtonLink href={link || '#'} target="_blank" rel="noopener">
        {label}
        <FaArrowRight />
      </StyledButtonLink>
    )}
  </>
)

export default ButtonLink
