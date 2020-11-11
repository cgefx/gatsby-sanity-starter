import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import { Link } from 'gatsby'

export const StyledHomeLink = styled(Link)`
  text-decoration: none;
`

export const NavItem = styled.button`
  background: none;
  border: none;
  text-transform: capitalize;
  font-weight: 500;
  margin: 1rem 0.5rem;
  transition: 0.5s;
  &:hover {
    color: var(--primary-color);
  }
  &:focus {
    outline: none;
  }
  @media (min-width: 501px) and (max-width: 1023px) {
    font-size: 11px;
    margin: 0.2rem;
  }
`

export const NavbarWrapper = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  padding: 2rem 0;
  z-index: 100;
  &.sticky {
    position: fixed;
    background-color: var(--overlay-black-dark);
    padding: 0;
    @media (max-width: 500px) {
      padding: 2rem 0;
    }
  }
`

export const NavbarContainer = styled(Container)`
  display: flex;
  position: relative;
  @media (max-width: 500px) {
    display: block;
    padding: 0;
  }
`

export const LogoWrapper = styled.div`
  flex: 0 0 20%;
  max-width: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 500px) {
    flex: 0 0 100%;
    max-width: 100%;
    justify-content: center;
  }
`

export const Logo = styled.img`
  height: 4rem;
  @media (max-width: 1023px) {
    height: 3rem;
  }
`

export const Toggler = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  @media (min-width: 500px) {
    display: none;
  }
`

export const Nav = styled.nav`
  flex: 0 0 80%;
  max-width: 80%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 500px) {
    flex: 0 0 100%;
    max-width: 100%;
    justify-content: center;
    background-color: var(--overlay-black-dark);
    margin-top: 2rem;
    &.hidden_mobile {
      display: none;
    }
  }
`

export const NavInner = styled.div`
  justify-content: flex-end;
`
