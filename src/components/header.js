import React from "react"
import styled from "styled-components"
import { A } from "./a"
import Logo from "../../content/assets/Logo.svg"

const Wrapper = styled.div`
  width: 100vw;
  max-width: 100%;
  display: flex;
`

const Grow = styled.div`
  display: flex;
  flex-grow: 3;
`

const Title = styled.h1`
  font-size: 42px;
  font-family: "Lustria";
  color: #5e81ac;
  &:hover {
    color: #2e3440;
  }
  transition: 0.3s;
  margin: 0px 10px;
`
const TitleLogo = styled(Logo)`
  height: 42px;
  width: 42px;
`

const NavElement = styled(A)`
  font-size: 24;
  font-family: "Lora";
  margin: 0px 10px;
  color: #2e3440;
  &:hover {
    color: #5e81ac;
  }
  transition: 0.3s;
`

const Nav = styled.nav`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  margin: 10px 40px;
`

const HomeLink = styled(A)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 20px;
`

const Header = ({ children }) => {
  return (
    <Wrapper>
      <Grow>
        <HomeLink to="/">
          <TitleLogo />
          <Title>{children}</Title>
        </HomeLink>
      </Grow>
      <Nav>
        <NavElement to="About">about</NavElement>
      </Nav>
    </Wrapper>
  )
}

export default Header
