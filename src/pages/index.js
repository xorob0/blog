import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Article from "../components/article"
import Summary from "../components/summary"

const ArticleList = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout title={siteTitle}>
      <SEO title="All posts" />
      <Summary> {data.site.siteMetadata.author.summary}</Summary>
      <ArticleList>
        {posts.map(({ node }) => (
          <Article node={node} />
        ))}
      </ArticleList>
    </Layout>
  )
}

export default BlogIndex

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
