import React, { useState } from "react"
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
  color: ${({ theme }) => theme.text};
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

  * ul,
  ul {
    list-style: none;
    margin-left: 0;
    padding-left: 1em;
  }
  a {
    &:link,
    &:visited {
      color: ${({ theme }) => theme.link};
    }

    &:hover,
    &:active {
      color: ${({ theme }) => theme.linkHover};
    }
  }
  * li p:first-of-type:before,
  * li a:first-of-type:before {
    display: inline-block;
    content: "~";
    width: 1em;
    margin-left: -1em;
    font-weight: bold;
  }

  ul li {
    padding: 10px 0px;
  }

  .gatsby-resp-image-wrapper,
  img,
  * img {
    margin: 15px;
    max-width: 100%;
    height: auto;
  }
  pre,
  code {
    white-space: pre-wrap;
  }

  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding-left: 2.8em;
  }

  .gatsby-highlight {
    background-color: #2e3440;
    border-radius: 0.3em;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
  }

  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding: 0;
    padding-left: 2.8em;
    overflow: initial;
  }

  code[class*="language-"],
  pre[class*="language-"] {
    color: #f8f8f2;
    font-family: Fira Code, Consolas, Monaco, "Ubuntu Mono", monospace;
    background: #2e3440;
    text-align: left;
    white-space: pre;
    text-shadow: 0 1px #3b4252;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre[class*="language-"] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    border-radius: 0.3em;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: #2e3440;
  }

  :not(pre) > code[class*="language-"] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #636f88;
  }

  .token.punctuation {
    color: #81a1c1;
  }

  .namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #81a1c1;
  }

  .token.number {
    color: #b48ead;
  }

  .token.boolean {
    color: #81a1c1;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #a3be8c;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: #81a1c1;
    background: none;
  }

  .token.atrule,
  .token.attr-value,
  .token.function,
  .token.class-name {
    color: #88c0d0;
  }

  .token.keyword {
    color: #81a1c1;
  }

  .token.regex,
  .token.important {
    color: #ebcb8b;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
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
  color: ${({ theme }) => theme.text};
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

const EmptyCommentSection = styled.section`
  margin-bottom: 40px;
  margin-left: 10px;
`

const EmptyCommentText = styled.p`
  font-size: 20px;
  text-align: center;
  font-style: italic;
`

const EmptyCommentSpan = styled.span`
  font-size: 20px;
  text-align: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const Input = styled.input`
  padding: 4px;
  background: ${({ theme }) => theme.inputBackground};
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
  background: ${({ theme }) => theme.inputBackground};
  border: none;
  margin: 10px 0px;
  font-family: "Lora";
  font-size: 14px;
  max-width: 500px;
  height: 80px;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`
const Button = styled.button`
  font-size: 18px;
  font-family: "Lora";
  border: none;
  background: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.buttonText};
  padding: 10px;
  border-radius: 5px;
  max-width: 300px;
  margin: 10px 0px;
  &:hover,
  &:active {
    background: ${({ theme }) => theme.buttonHover};
  }
`

const LabelWrapper = styled.label`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`

const BlogPostTemplate = ({ data, pathContext: { slug } }) => {
  const [isSubmiting, setIsSubmiting] = useState(false)
  const post = data.markdownRemark
  const { siteUrl, title: siteTitle } = data.site.siteMetadata
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
      <CommentsWrapper>
        <CommentsTitle>Your comments:</CommentsTitle>
        {comments.length ? (
          <>
            {comments.map(({ node: { message, name } }) => (
              <CommentContentWrapper>
                <CommentName>{name}</CommentName>
                <CommentContent>{message}</CommentContent>
              </CommentContentWrapper>
            ))}
          </>
        ) : (
          <EmptyCommentSection>
            <EmptyCommentText>No comments yet</EmptyCommentText>
            <EmptyCommentSpan role="img" aria-label="sadness">
              😢😢😢
            </EmptyCommentSpan>
          </EmptyCommentSection>
        )}
      </CommentsWrapper>

      <Form
        method="POST"
        action="https://staticman3.herokuapp.com/v2/entry/xorob0/blog/master/comments"
        onSubmit={e => setIsSubmiting(true)}
      >
        <input
          name="options[redirect]"
          type="hidden"
          value={`${siteUrl}${slug}`}
        />
        <input name="fields[article]" type="hidden" value={slug} />
        <LabelWrapper>
          Name:{" "}
          <Input
            name="fields[name]"
            type="text"
            placeholder="xxxPussySlayerxxx"
          />
        </LabelWrapper>
        <LabelWrapper>
          Comment:{" "}
          <TextArea
            name="fields[message]"
            placeholder="Stop your bullshit man !"
          />
        </LabelWrapper>
        <Button type="submit">
          {isSubmiting ? "Sending..." : "Send a comment request"}
        </Button>
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
