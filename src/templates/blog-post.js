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

const Subtitle = styled.h4`
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

const CommentsWrapper = styled.section`
  display: flex;
  width: 100%;
  align-items: flex-start;
  flex-direction: column;
  color: #2e3440;
`

const CommentsTitle = styled.h3`
  font-size: 26px;
`

const CommentName = styled.p`
  font-size: 20px;
  font-family: "Lustria";
  font-weight: 800;
`

const CommentContentWrapper = styled.div`
  border: 1px #d8dee9 solid;
  padding: 0px 10px;
  margin: 10px 0px;
  width: 100%;
  box-sizing: border-box;
  max-width: 100%;
  border-radius: 5px;
`

const CommentContent = styled.p`
  padding-left: 4px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const Input = styled.input`
  padding: 4px;
  background: #eceff4;
  border: none;
  margin: 10px 0px;
  font-size: 18px;
  font-family: "Lustria";
  font-weight: 800;
  border-radius: 5px;
  max-width: 200px;
  &:focus {
    outline: none;
  }
`
const TextArea = styled.textarea`
  padding: 4px;
  background: #eceff4;
  border: none;
  margin: 10px 0px;
  font-family: "Lora";
  resize: none;
  font-size: 14px;
  max-width: 500px;
  height: 350px;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`
const Button = styled.button`
  font-size: 18px;
  font-family: "Lora";
  border: none;
  background: #3b4252;
  color: #eceff4;
  padding: 10px;
  border-radius: 5px;
  max-width: 300px;
`

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const comments = data.allCommentsJson.edges
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
      {comments.length ? (
        <CommentsWrapper>
          <CommentsTitle>Your comments:</CommentsTitle>
          {comments.map(({ node: { message, name } }) => (
            <CommentContentWrapper>
              <CommentName>{name}</CommentName>
              <CommentContent>{message}</CommentContent>
            </CommentContentWrapper>
          ))}
        </CommentsWrapper>
      ) : null}

      <Form
        method="POST"
        action="https://staticman3.herokuapp.com/v2/entry/xorob0/blog/master/comments"
      >
        <input
          name="field[article]"
          type="hidden"
          value={typeof window !== "undefined" && window.location.pathname}
        />
        <input
          name="option[article]"
          type="hidden"
          value={typeof window !== "undefined" && window.location.pathname}
        />
        <Input
          name="fields[name]"
          type="text"
          placeholder="xxxPussySlayerxxx"
        />
        <TextArea
          name="fields[message]"
          placeholder="Stop your bullshit man !"
        />
        <Button type="submit">Send a comment request</Button>
      </Form>
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
    allCommentsJson(filter: { article: { eq: $slug } }) {
      edges {
        node {
          id
          message
          name
        }
      }
    }
  }
`
