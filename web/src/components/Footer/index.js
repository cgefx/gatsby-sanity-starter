import React from 'react'
import { socialIconList } from '../_config/social-icon-list'
// import SocialIcons from './social-icons';
import {
  StyledFooter,
  StyledSocialContainer,
  StyledCopyright,
  StyledRotator,
} from './styles'

const Footer = ({ author }) => (
  <StyledFooter>
    <StyledSocialContainer>
      <StyledCopyright>
        © {new Date().getFullYear()} Colin Gibson
      </StyledCopyright>
      {/* <SocialIcons icons={socialIconList} /> */}
    </StyledSocialContainer>
    <StyledRotator>
      Made with
      <span role="img" aria-label="heart emoji">
        💖
      </span>
    </StyledRotator>
  </StyledFooter>
)

export default Footer
