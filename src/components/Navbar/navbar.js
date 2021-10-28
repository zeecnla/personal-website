import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { device } from "../device"
import { navigate } from "@reach/router"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

import "./Navbar.css"

const Navigation = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  margin: auto;
`
const NavHeader = styled.header``

const Navbar = ({ siteTitle }) => {
  const handleOnClickProjects = () => {
    navigate("//#projects")
  }
  const handleOnClickContact = () => {
    navigate("//#contact")
  }
  return (
    <Navigation>
      <div>
        <Link to="/">
          <span className="full-text">
            <b>C</b>esar <b>M</b>elchor
          </span>
          <span className="short-text">
            <b>CM</b>
          </span>
        </Link>
      </div>
      <div>
        <ul>
          <li
            style={{
              display: "inline-block",
              padding: "0px 10px",
              fontSize: "15px",
            }}
          >
            <Link to="/#projects">Projects</Link>
          </li>
          <li
            style={{
              display: "inline-block",
              padding: "0px 10px",
              fontSize: "15px",
            }}
          >
            <Link to="/photography">Photography</Link>
          </li>
          {/* <li>
            <ThemeToggler>
              {({ theme, toggleTheme }) => (
                <label>
                  <input
                    id="darkmode"
                    type="checkbox"
                    onChange={(e) =>
                      toggleTheme(e.target.checked ? "dark" : "light")
                    }
                    checked={theme === "dark"}
                  />{" "}
                  Dark mode
                </label>
              )}
            </ThemeToggler>
          </li> */}
        </ul>
      </div>
    </Navigation>
  )
}

export default Navbar
