import React from "react"
import Header from "./header"

const Layout = ({ title, children }) => (
  <>
    <Header>{title}</Header>
    <div>
      <main
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {children}
      </main>
      <footer>© {new Date().getFullYear()}, by Tim Simon</footer>
    </div>
  </>
)

export default Layout
