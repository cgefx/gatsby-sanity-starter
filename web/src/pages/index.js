import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import About from '../components/About'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <About />
    {/* <Link to="/projects/">Go to Projects</Link> <br /> */}
  </>
)

export default IndexPage
