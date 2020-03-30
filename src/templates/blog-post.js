import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
  font-family: "Lora";
  color: #2e3440;
`

const Title = styled.h2`
  font-size: 48px;
  margin: 5px 0px;
  text-align: center;
`

const Subtitle = styled.h3`
  font-size: 28px;
  margin: 5px 0px;
  font-weight: 100;
  text-align: center;
`

const Content = styled.section`
  margin: 30px 0px 0px 0px;
  width: 1000px;
`

const Header = styled.header`
  display: inline-flex;
  flex-direction: column;
  max-width: 750px;
`

const Label = styled.small`
  text-align: right;
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
        <Header>
          <Title>{post.frontmatter.title}</Title>
          <Subtitle>{post.frontmatter.description}</Subtitle>
          <Label>
            {post.frontmatter.date} by {post.frontmatter.author}
          </Label>
        </Header>
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
        description
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
