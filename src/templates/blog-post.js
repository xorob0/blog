import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Article = styled.article`
  max-width: 1000px;
  font-family: "Lora";
  color: #2e3440;
`

const Title = styled.h2`
  font-size: 48px;
  margin: 5px 0px;
`

const Content = styled.section`
  margin: 30px 0px 0px 0px;
`

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Article>
        <header>
          <Title>{post.frontmatter.title}</Title>
          <p>
            {post.frontmatter.date} by {post.frontmatter.author}
          </p>
        </header>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
        <footer></footer>
      </Article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author
      }
    }
  }
`
