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
  width: 100%;
  box-sizing: border-box;
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
  width: fit-content;
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

  console.log()

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
      </Article>

      <form
        method="POST"
        action="https://staticman3.herokuapp.com/v2/entry/xorob0/blog/master/comments"
      >
        <input
          name="options[redirect]"
          type="hidden"
          value={data.site.siteMetadata.siteUrl}
        />
        <input
          name="options[article]"
          type="hidden"
          value={window.location.pathname.slice(1, -1)}
        />
        <input name="options[slug]" type="hidden" value="{{ page.slug }}" />
        <label>
          <input name="fields[name]" type="text" />
          Name
        </label>
        <label>
          <textarea name="fields[message]" />
          Message
        </label>

        <button type="submit">Go!</button>
      </form>
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
        siteUrl
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
