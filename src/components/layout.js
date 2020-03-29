import React from "react"
import Header from "./header"

const Layout = ({ title, children }) => (
  <>
    <Header>{title}</Header>
    <div style={{ fontFamily: "Lora" }}>
      <main
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {children}
      </main>
      <footer style={{ margin: 20 }}>
        © {new Date().getFullYear()}, by Tim Simon
      </footer>
    </div>
  </>
)

export default Layout
