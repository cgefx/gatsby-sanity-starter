import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import FeaturedProjects from '../components/FeaturedProjects'

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    {/* <Hero /> */}
    <About />
    <FeaturedProjects projects={data.featuredProjects.nodes} />
    <Contact />
  </>
)

export const query = graphql`
  query {
    featuredProjects: allSanityProject(
      limit: 3
      filter: { featured: { eq: true } }
    ) {
      nodes {
        title
        excerpt
        techStack {
          name
          image {
            asset {
              fixed(width: 32) {
                src
              }
            }
          }
        }
        repoLink
        demoLink
        coverImage {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
        slug {
          current
        }
      }
    }
  }
`

export default IndexPage
