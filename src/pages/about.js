import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Summary from "../components/summary"

const About = ({ data }) => (
  <Layout title={data.site.siteMetadata.title}>
    <SEO title="All posts" />
    <Summary> {data.site.siteMetadata.author.summary}</Summary>
  </Layout>
)

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          summary
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            author
            description
          }
        }
      }
    }
  }
`
