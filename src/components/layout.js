import React from "react"
import Header from "./header"
import styled from "styled-components"

const Footer = styled.footer`
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
  font-family: Lora;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`

const Layout = ({ title, children }) => (
  <Wrapper>
    <Header>{title}</Header>
    <Main>{children}</Main>
    <Footer>
      This work is licensed under a&nbsp;
      <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
        CC BY 4.0
      </a>
      .
    </Footer>
  </Wrapper>
)

export default Layout
