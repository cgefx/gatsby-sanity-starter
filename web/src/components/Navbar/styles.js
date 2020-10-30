import styled from 'styled-components'
import { Container } from 'react-bootstrap'

export const NavItem = styled.button`
  background: none;
  border: none;
  text-transform: capitalize;
  font-weight: 500;
  margin: 10px 5px;
  transition: 0.5s;
  &:hover {
    color: var(--blue);
  }
  &:focus {
    outline: none;
  }
  @media (min-width: 501px) and (max-width: 1023px) {
    font-size: 11px;
    margin: 2px;
  }
`

export const NavbarWrapper = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  padding: 20px 0;
  z-index: 100;
  &.sticky {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 0 0;
    @media (max-width: 500px) {
      padding: 20px 0;
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
  height: 40px;
  /* width: 100%; */
  @media (max-width: 1023px) {
    height: 30px;
  }
`

export const Toggler = styled.button`
  /* color: white; */
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
    background-color: rgba(0, 0, 0, 0.8);
    margin-top: 20px;
    &.hidden_mobile {
      display: none;
    }
  }
`

export const NavInner = styled.div`
  justify-content: flex-end;
`
