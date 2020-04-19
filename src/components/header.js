import React, { useContext } from "react"
import styled from "styled-components"
import { A } from "./a"
import Logo from "../../content/assets/Logo.svg"
import { ThemeContext } from "styled-components"
import { ToggleContext } from "../theme/context"
import light from "../theme/light"
import dark from "../theme/dark"

const Wrapper = styled.div`
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const Grow = styled.div`
  display: flex;
  flex-grow: 2;
`

const Title = styled.h1`
  font-size: 42px;
  font-family: "Lustria";
  color: ${({ theme }) => theme.title};
  &:hover {
    color: ${({ theme }) => theme.titleHover};
  }
  transition: 0.3s;
  margin: 0px 10px;
  @media (max-width: 570px) {
    font-size: 38px;
  }
`
const TitleLogo = styled(Logo)`
  height: 42px;
  width: 42px;
  padding-bottom: 4px;
  &:hover {
    filter: grayscale(2);
  }
  transition: 0.3s;
`

const NavElement = styled(A)`
  font-size: 24;
  font-family: "Lora";
  margin: 0px 10px;
  color: ${({ theme }) => theme.text};
  &:hover {
    color: ${({ theme }) => theme.linkHover};
  }
  transition: 0.3s;
`

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: underline;
  @media (max-width: 570px) {
    flex: 1;
  }
`

const HomeLink = styled(A)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 20px;
`

const DarkThemeButton = styled.button`
  background: none;
  border: none;
  width: 50px;
  outline: none;
`

const Header = ({ children }) => {
  const theme = useContext(ThemeContext)
  const { toggleTheme } = useContext(ToggleContext)
  return (
    <Wrapper>
      <Grow>
        <HomeLink to="/">
          <TitleLogo />
          <Title>{children}</Title>
        </HomeLink>
      </Grow>
      <Nav>
        <NavElement as="a" href="/rss.xml">
          RSS
        </NavElement>
        <NavElement to="about">About</NavElement>
      </Nav>
      <DarkThemeButton
        onClick={toggleTheme}
        title={`Enable ${
          theme && theme.name === light.name ? light.name : dark.name
        } theme`}
      >
        {theme && theme.name === "light" ? "🌚" : "😎"}
      </DarkThemeButton>
    </Wrapper>
  )
}

export default Header
