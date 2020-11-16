import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { StyledIndexNumber } from './_shared/styled-index-number'
import Logo from '../assets/logo.svg'
import { mq } from './_shared/media'

const StyledHeader = styled.header`
  /* height: var(--header-height); */
  background-color: transparent;
  padding: 2.4rem 0;
  /* position: absolute; */
  /* z-index: 1; */
  width: 100%;
`
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 825px;
  margin: 0 auto;
  /* padding: 0 calc((var(--space))); */
`
const StyledHomeLink = styled(Link)`
  text-decoration: none;
`
const StyledLogo = styled(Logo)`
  height: 5rem;
  fill: var(--title-color);

  &:hover path.level-2 {
    fill: var(--primary-color);
  }
`
const StyledNav = styled.nav`
  flex: 1;
  height: 100%;
  display: none;

  ${mq.gt.sm} {
    display: flex;
    align-items: stretch;
    justify-content: flex-end;
    margin-left: 1.5rem;
  }

  & > a {
    color: var(--title-color);
    &:hover {
      color: var(--primary-color);
    }
  }
`
const StyledNavLink = styled(Link)`
  position: relative;
  margin: 0 1rem;
  text-decoration: none;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 100%;
    bottom: 0;
    background: var(--primary-color);
    height: 2px;
    transition: right var(--transition-fast) ease-out;
  }

  &:hover:before {
    right: 0;
  }
`

const Header = ({ menuLinks }) => (
  <StyledHeader>
    <StyledContainer>
      <StyledHomeLink title="logo" to="/">
        <StyledLogo />
      </StyledHomeLink>
      <StyledNav>
        {menuLinks.map((link, index) => (
          <StyledNavLink
            key={link.name}
            to={link.link}
            activeClassName="active"
          >
            <StyledIndexNumber>{`${String(index + 1).padStart(
              2,
              '0'
            )}.`}</StyledIndexNumber>
            {link.name}
          </StyledNavLink>
        ))}
      </StyledNav>
      {/* <SocialIcons icons={socialIconList} /> */}
    </StyledContainer>
  </StyledHeader>
)

export default Header
