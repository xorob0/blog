import React, { createContext, useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import light from "./light"
import dark from "./dark"

const prefersDarkMode = () => {
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme) return savedTheme === dark.name
  else return window.matchMedia("(prefers-color-scheme: dark)").matches === true
}

export const ToggleContext = createContext({ toggleTheme: () => {} })

export const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState(prefersDarkMode() ? dark : light)

  useEffect(() => {
    localStorage.setItem("theme", theme.name)
  }, [theme])

  const toggleTheme = () =>
    setTheme(t => (t.name === light.name ? dark : light))

  return (
    <ToggleContext.Provider
      value={{
        toggleTheme,
      }}
    >
      <ThemeProvider theme={theme}>
        {React.cloneElement(children, { toggleTheme })}
      </ThemeProvider>
    </ToggleContext.Provider>
  )
}
