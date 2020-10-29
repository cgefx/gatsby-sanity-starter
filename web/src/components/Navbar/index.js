/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { FaBars } from 'react-icons/fa'
import logo from '../../images/logo.svg'

import {
  NavItem,
  NavbarWrapper,
  NavbarContainer,
  Nav,
  LogoWrapper,
  Logo,
  NavInner,
  Toggler,
} from './styles'

const scrollToElement = require('scroll-to-element')

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapse: false,
      sticky: false,
      sections: this.props.sections,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (window.pageYOffset >= 50 && this.state.sticky) {
      if (this.state.collapse !== nextState.collapse) {
        return true
      }
      return false
    }
    return true
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = event => {
    if (window.pageYOffset >= 50) {
      this.setState({ sticky: true })
    } else {
      this.setState({ sticky: false })
    }
  }

  collapseNav() {
    console.log(this.state, 'col')
    if (!this.state.collapse) {
      this.setState({ collapse: true })
    } else {
      this.setState({ collapse: false })
    }
  }

  navigate(id) {
    if (this.props.scroll) {
      const el = document.getElementById(id)
      scrollToElement(el, {
        offset: 0,
        ease: 'in-out-expo',
        duration: 2000,
      })
    } else {
      window.location.href = `./#${id}`
    }
  }

  navItems() {
    return this.state.sections.map((value, index) => (
      <NavItem key={index} onClick={() => this.navigate(value)}>
        {value}
      </NavItem>
    ))
  }

  render() {
    return (
      <NavbarWrapper
        className={`header${this.state.sticky === true ? ' sticky' : ''}`}
      >
        <NavbarContainer>
          <LogoWrapper className="logo">
            <Logo src={logo} alt="logo" />
          </LogoWrapper>
          <Toggler
            onClick={() => this.collapseNav()}
            className="navbar-toggler navbar-toggler-right"
          >
            <FaBars />
          </Toggler>
          <Nav
            className={`navbar navbar-expand-sm ${
              this.state.collapse === true ? 'expand' : 'hidden_mobile'
            }`}
          >
            <NavInner
              className={`navbar-collapse collapse ${
                this.state.collapse === true ? 'show' : ''
              }`}
            >
              <div className="navbar-nav">{this.navItems()}</div>
            </NavInner>
          </Nav>
        </NavbarContainer>
      </NavbarWrapper>
    )
  }
}

export default Navbar
