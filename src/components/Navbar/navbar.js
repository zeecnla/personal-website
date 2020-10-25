import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { device } from "../device"
import { navigate } from "@reach/router"

const Navigation = styled.nav`
  display: grid;
  width: 100%;
  grid-template-columns: auto;
  text-align: right;
  padding: 20px 10px;

  @media ${device.tablet} {
    width: 80%;
    margin: 0 auto;
  }
  @media ${device.laptopL} {
    width: 60%;
    marginn: auto;
  }
`

const Navbar = ({ siteTitle }) => {
  const handleOnClickAbout = () => {
    navigate("/#about")
  }
  const handleOnClickProjects = () => {
    navigate("/#projects")
  }
  const handleOnClickContact = () => {
    navigate("/#contact")
  }
  return (
    <Navigation>
      <ul style={{ float: "right" }}>
        <li>
          <p onClick={handleOnClickAbout}>About</p>
        </li>
        {/* <li><Link
                id="blog"
                to="/blog/"
                activeStyle={{ borderBottom:`1px solid color(--dianne)` }}>Blog</Link></li> */}
        <li>
          <p onClick={handleOnClickProjects}>Projects</p>
        </li>
        <li>
          <p onClick={handleOnClickContact}>Contact</p>
        </li>
      </ul>
    </Navigation>
  )
}

export default Navbar
