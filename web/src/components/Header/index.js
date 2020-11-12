import React from 'react'
import {
  StyledHeader,
  StyledContainer,
  StyledHomeLink,
  StyledLogo,
  StyledNavLink,
  StyledNav,
} from './styles'
import { StyledIndexNumber } from '../_shared/styled-index-number'

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
