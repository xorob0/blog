import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styled from "styled-components"

const SetImg = styled(Img)`
  display: block !important;
  margin: 0 auto;
  flex-grow: 1;

  height: 800px;
  width: 500px;

  @media (max-width: 580px) {
    height: 400px;
    width: 250px;
  }
`

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>
        The page you are looking for does not exist. To confort you enjoy this
        picture of my cat.
      </p>
      <SetImg
        fluid={data.cat.childImageSharp.fluid}
        alt="Olaf the best cat in the world"
      />
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    cat: file(absolutePath: { regex: "/olaf.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
