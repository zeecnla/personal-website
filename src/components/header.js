import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './css/header.css'
import menu from '../images/menu.svg'



const Header = ({ siteTitle }) => (
  <aside>
    <h1 style={{ margin: 0, display: `inline`}}>
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
    <img src={menu}/>
    <nav 
      style={{
        display: `none`,
        height:0
      }}
    > 
      <ul className="navigation">
        <li>
          <Link 
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >home</Link>
        </li>
        <li>
          <Link 
          to="/blog"
          style={{
            textDecoration: `none`,
          }}
          >blog</Link>
        </li>
        <li>
          <Link 
            to="/about"
            style={{
              textDecoration: `none`,
            }} 
          >about</Link>
        </li>
        <li>
          <Link 
            to="/contact"
            style={{
              textDecoration: `none`,
            }}
          >contact</Link></li>
      </ul>
    </nav>
  </aside>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
