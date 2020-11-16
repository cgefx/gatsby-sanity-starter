import React from 'react'
import 'normalize.css'
import PropTypes from 'prop-types'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'
import Footer from './Footer'
import Header from './Header'
import { indexMenuLinks } from './_config/menu-links'

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]')
}

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <Header menuLinks={indexMenuLinks} />
    <main>{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
