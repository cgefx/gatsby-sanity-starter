import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/projects/">Go to Projects</Link> <br />
  </>
)

export default IndexPage
