import React from 'react'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { GlobalStyles, lightTheme, darkTheme } from '../styles'
import { useDarkMode } from '../utils/useDarkMode'
import Header from './header'
import 'normalize.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [theme, toggleTheme, componentMounted] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  // The default theme is loaded first and then checks local storage.
  // If a different one is found some flicker can happen.
  // This check blocks the app from loading until theme checking is done.
  // if (!componentMounted) {
  //   return <div />
  // }

  if (!componentMounted) {
    return <div />
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Header
          theme={theme}
          toggleTheme={toggleTheme}
          siteTitle={data.site.siteMetadata?.title || `Title`}
        />
        <main>{children}</main>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
