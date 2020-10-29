import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalStyles from '../../styles/GlobalStyles'
import Navbar from '../Navbar'

const sections = ['about', 'work', 'contact']

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Navbar sections={sections} />
    <div>{children}</div>
    {/* <Footer /> */}
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
