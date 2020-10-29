import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/SEO'
import Hero from '../components/Sections/Hero'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <Link to="/projects/">Go to Projects</Link> <br />
  </>
)

export default IndexPage
