import React, { useState, useEffect } from "react"
import Header from "./header"
import styled, { ThemeProvider } from "styled-components"

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
  background: ${({ theme }) => theme.background};
  font-family: Lora;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`

const nord = {
  nord0: "#2E3440",
  nord1: "#3B4252",
  nord2: "#434C5E",
  nord3: "#4C566A",
  nord4: "#D8DEE9",
  nord5: "#E5E9F0",
  nord6: "#ECEFF4",
  nord7: "#8FBCBB",
  nord8: "#88C0D0",
  nord9: "#81A1C1",
  nord10: "#5E81AC",
  nord1110: "#BF616A",
  nord1210: "#D08770",
  nord1310: "#EBCB8B",
  nord1410: "#A3BE8C",
  nord1510: "#B48EAD",
}

const light = {
  name: "light",
  background: "white",
  text: nord.nord0,
  hover: nord.nord10,
  title: nord.nord10,
  titleHover: nord.nord0,
  link: nord.nord10,
  linkHover: nord.nord7,
  button: nord.nord1,
  buttonHover: nord.nord0,
  buttonText: nord.nord6,
  inputBackground: nord.nord6,
  codeBackground: nord.nord0,
  codeTextNormal: nord.nord6,
  codeTextShadow: nord.nord1,
  codeTextComment: nord.nord3,
}

const dark = {
  name: "dark",
  background: nord.nord0,
  text: nord.nord6,
  hover: nord.nord10,
  title: nord.nord10,
  titleHover: nord.nord7,
  link: nord.nord10,
  linkHover: nord.nord7,
  button: nord.nord1,
  buttonHover: nord.nord0,
  buttonText: nord.nord6,
  inputBackground: nord.nord6,
  codeBackground: nord.nord6,
  codeTextNormal: nord.nord0,
  codeTextShadow: nord.nord5,
  codeTextComment: nord.nord3,
}

const Layout = ({ title, children }) => {
  const [theme, setTheme] = useState(light)

  useEffect(() => {
    if (
      window &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme(dark)
    }
  }, [])

  const toggleTheme = () =>
    setTheme(t => (t.background === light.background ? dark : light))

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header toggleTheme={toggleTheme}>{title}</Header>
        <Main>{children}</Main>
        <Footer>
          This work is licensed under a&nbsp;
          <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
            CC BY 4.0
          </a>
          .
        </Footer>
      </Wrapper>
    </ThemeProvider>
  )
}

export default Layout
