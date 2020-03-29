import React from "react"
import styled from "styled-components"
import { A } from "./a"

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
  font-size: 42;
  font-family: "Lustria";
  margin: 10px 40px;
  color: #5e81ac;
  &:hover {
    color: #2e3440;
  }
  transition: 0.3s;
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

const Header = ({ children }) => {
  return (
    <Wrapper>
      <Grow>
        <A to="/">
          <Title>{children}</Title>
        </A>
      </Grow>
      <Nav>
        <NavElement to="About">about</NavElement>
      </Nav>
    </Wrapper>
  )
}

export default Header
