import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styled from "styled-components"

const extractWidth = str =>
  str.substring(str.lastIndexOf("(") + 1, str.lastIndexOf(")"))

const SetImg = styled(Img)`
  margin: 0 auto;

  flex-grow: 1;

  padding-top: ${props => 100 / props.fluid.aspectRatio}%;
  ${props => extractWidth(props.fluid.sizes)};
`

const Title = styled.h1`
  text-align: center;
`
const Paragraph = styled.p`
  text-align: center;
`

const CenterWithPadding = styled.div`
  padding: 10px;
`

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="404: Not Found" />
      <Title>Not Found</Title>
      <Paragraph>
        The page you are looking for does not exist. To confort you enjoy this
        picture of my cat.
      </Paragraph>
      <CenterWithPadding>
        <SetImg
          fluid={data.cat.childImageSharp.fluid}
          alt="Olaf the best cat in the world"
        />
      </CenterWithPadding>
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
