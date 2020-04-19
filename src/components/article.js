import React from "react"
import styled from "styled-components"
import { A } from "./a"

const ArticleContainer = styled.article`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

const LinkContainer = styled(A)`
  color: ${({ theme }) => theme.text};
  &:hover {
    color: ${({ theme }) => theme.linkHover};
  }
  transition: 0.3s;
`

const Title = styled.h2`
  font-family: "Lora";
  font-size: 36px;
  margin: 15px 0px;
  font-weight: bold;
  text-align: center;
`

const Subtitle = styled.h2`
  font-family: "Lora";
  font-size: 24px;
  font-weight: 100;
  margin: 5px 0px;
  text-align: center;
`

const Label = styled.small`
  font-family: "Lora";
  color: ${({ theme }) => theme.text};
  text-align: right;
  margin: 5px 0px;
`

const Spacer = styled.hr`
  margin: 4px 0px;
`

const Article = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <ArticleContainer key={node.fields.slug}>
      <LinkContainer to={node.fields.slug}>
        <Title>{title}</Title>
        <Subtitle
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description || node.excerpt,
          }}
        />
      </LinkContainer>
      <Label>
        {node.frontmatter.date} by {node.frontmatter.author}
      </Label>
      <Spacer />
    </ArticleContainer>
  )
}
export default Article
