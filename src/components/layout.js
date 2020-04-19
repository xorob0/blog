import React from "react"
import styled from "styled-components"
import Header from "./header"

const Footer = styled.footer`
  color: ${({ theme }) => theme.textSecondary};
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding-right: 10px;
  box-sizing: border-box;
  width: 100%;
  flex-wrap: wrap;
`

const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  flex-grow: 1;
`

const Wrapper = styled.div`
  background: ${({ theme }) => theme.background};
  font-family: Lora;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`

const Link = styled.a`
  &:link,
  &:visited {
    color: ${({ theme }) => theme.link};
  }

  &:hover,
  &:active {
    color: ${({ theme }) => theme.linkHover};
  }
`

const Layout = ({ title, children }) => {
  return (
    <Wrapper>
      <Header>{title}</Header>
      <Main>{children}</Main>
      <Footer>
        This content is licensed under a&nbsp;
        <Link rel="license" href="http://creativecommons.org/licenses/by/4.0/">
          CC BY 4.0
        </Link>
        .
      </Footer>
    </Wrapper>
  )
}

export default Layout
