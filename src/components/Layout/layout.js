import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Navbar from "../Navbar/navbar"
import Footer from "../Footer/footer"
import "./layout.css"
import "font-awesome/css/font-awesome.min.css"
import { device } from "../device"
import "animate.css"
import AOS from "aos"
import "aos/dist/aos.css" // You can also use <link> for styles

AOS.init()

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

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <div style={{ minHeight: "100vh", position: `relative` }}>
        <Navbar />
        <Container>
          <main>{children}</main>
        </Container>
        <Footer />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
