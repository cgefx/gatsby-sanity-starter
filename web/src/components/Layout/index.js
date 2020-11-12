import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalStyles from '../../styles/GlobalStyles'
import Typography from '../../styles/Typography'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Header from '../Header'
import { indexMenuLinks } from '../_config/menu-links'

const sections = ['about', 'work', 'contact']

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]')
}

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <Header menuLinks={indexMenuLinks} />
    {/* <Navbar sections={sections} /> */}
    <main>{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
