import styled from 'styled-components'
import { Link } from 'gatsby'
import Logo from '../../assets/logo.svg'
import { mq } from '../_shared/media'

export const StyledHeader = styled.header`
  height: var(--header-height);
  flex-shrink: 0;
  background-color: transparent;
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-left);
  position: absolute;
  z-index: 1;
  width: 100%;
`
export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 0 calc((var(--space)));
`
export const StyledHomeLink = styled(Link)`
  text-decoration: none;
`
export const StyledLogo = styled(Logo)`
  height: 5rem;
  fill: var(--title-color);

  &:hover path.level-2 {
    fill: var(--primary-color);
  }
`
export const StyledNav = styled.nav`
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
export const StyledNavLink = styled(Link)`
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
