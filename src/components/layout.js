import React from "react"
import { Link } from "gatsby"

import Header from "./header"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = <Header>{title}</Header>
  } else {
    header = (
      <h3 style={{}}>
        <Link style={{}} to={`/`}>
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <>
      <header>{header}</header>
      <div style={{}}>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}, by Tim Simon</footer>
      </div>
    </>
  )
}

export default Layout
