import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalStyles from '../../styles/GlobalStyles'
import Typography from '../../styles/Typography'
import Navbar from '../Navbar'

const sections = ['about', 'work', 'contact']

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <Navbar sections={sections} />
    <main>{children}</main>
    {/* <Footer /> */}
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
