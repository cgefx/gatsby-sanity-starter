import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import ThemeToggler from './themeToggler'

const Header = ({ siteTitle, theme, toggleTheme }) => (
  <header>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
          <div>
            <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
          </div>
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
