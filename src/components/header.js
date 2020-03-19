import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import React from "react"

const Header = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      header: file(absolutePath: { regex: "/header.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      headersvg: imageSharp(id: { regex: "/header.jpg/" }) {
        sizes(
          quality: 100
          traceSVG: { color: "rgb(56, 47, 92)", threshold: 75 }
          toFormat: JPG
        ) {
          tracedSVG
          src
        }
      }
    }
  `)
  console.log(JSON.stringify(data.headersvg))
  return (
    <BackgroundImage
      loading="eager"
      fadeIn="soft"
      critical
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      backgroundColor={`#80541b`}
      color={`black`}
      fluid={data.header.childImageSharp.fluid}
      durationFadeIn={250}
      draggable={false}
    >
      <h1 style={{ padding: "140px 0px", color: "white", fontSize: 50 }}>
        {children}
      </h1>
    </BackgroundImage>
  )
}

export default Header
