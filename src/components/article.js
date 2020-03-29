import React from "react"
import styled from "styled-components"
import { A } from "./a"

const LinkContainer = styled(A)`
  color: #2e3440;
  &:hover {
    color: #5e81ac;
  }
  transition: 0.3s;
`

const Title = styled.h2`
  font-family: "Lora";
  font-size: 36px;
  margin: 10px 0px;
  font-weight: bold;
`

const Subtitle = styled.h2`
  font-family: "Lora";
  font-size: 24px;
  font-weight: 100;
  margin: 10px 0px;
`

const Label = styled.small`
  font-family: "Lora";
  color: #2e3440;
  margin: 20px 0px;
`

const Article = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <article key={node.fields.slug}>
      <LinkContainer to={node.fields.slug}>
        <Title>{title}</Title>
        <Subtitle
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description || node.excerpt,
          }}
        />
      </LinkContainer>
      <Label>
        Posted by {node.frontmatter.author} on {node.frontmatter.date}
      </Label>
      <hr style={{ margin: 10 }} />
    </article>
  )
}
export default Article
