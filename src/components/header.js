import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

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
  font-size: 36;
  font-family: "Lustria";
  margin: 10px 40px;
`

const NavElement = styled(Link)`
  font-size: 24;
  font-family: "Lustria";
  margin: 0px 10px;
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
        <Title>{children}</Title>
      </Grow>
      <Nav>
        <NavElement to="About">about</NavElement>
      </Nav>
    </Wrapper>
  )
}

export default Header
