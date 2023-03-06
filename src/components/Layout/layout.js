import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Navbar from "../Navbar/navbar"
import Footer from "../Footer/footer"
import "aos/dist/aos.css"
import "./layout.css"
import "font-awesome/css/font-awesome.min.css"
import { device } from "../device"
import "animate.css"

const Container = styled.div`
  padding: 0 20px 0px 20px;
  width: 100%;
  padding-bottom: 25em;

  @media ${device.tablet} {
    width: 80%;
    margin: 0 auto;
  }
  @media ${device.laptopL} {
    width: 60%;
    marginn: auto;
  }
`

const Layout = ({ children }) => {
  let AOS
  useEffect(() => {
    /**
     * Server-side rendering does not provide the 'document' object
     * therefore this import is required either in useEffect or componentDidMount as they
     * are exclusively executed on a client
     */
    const AOS = require("aos")
    AOS.init({
      once: true,
    })
  }, [])

  useEffect(() => {
    if (AOS) {
      AOS.refresh()
    }
  })

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div style={{ minHeight: "100vh", position: `relative` }}>
      <Navbar />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
