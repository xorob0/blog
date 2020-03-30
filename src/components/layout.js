import React from "react"
import Header from "./header"
import styled from "styled-components"

const Footer = styled.footer`
  width: 100vw;
  text-align: right;
  padding-right: 20px;
  box-sizing: border-box;
`

const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px;
`

const Wrapper = styled.div`
  font-family: Lora;
`

const Layout = ({ title, children }) => (
  <>
    <Header>{title}</Header>
    <Wrapper>
      <Main style={{}}>{children}</Main>
      <Footer>© {new Date().getFullYear()}, by Tim Simon</Footer>
    </Wrapper>
  </>
)

export default Layout
