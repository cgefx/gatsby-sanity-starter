import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <About />
    <Contact />
    {/* <Link to="/projects/">Go to Projects</Link> <br /> */}
  </>
)

export default IndexPage
