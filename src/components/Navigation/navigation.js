import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './navigation.css'
import menu from '../../images/assets/menu.svg'
import exit from '../../images/assets/exit.svg'



class Header extends React.Component {

  render() {
    return (
      <aside className="navigation">
        <h1
        style={{
          margin:0
        }}>
            <Link
              to="/"
              style={{
                textDecoration: `none`,
                color:`inherit`
              }}
            >
              C.
            </Link>
        </h1>
        <ul>
          <li>
            <Link
              to="/"
              >home</Link>
          </li>
          <li>
            <Link
            to="/about"
            style={{
              textDecoration: `none`,
            }}
            >about</Link>
          </li>
        </ul>
      </aside>
    )
  }
};


Header.propTypes = {
  siteTitle: PropTypes.string,
}


export default Header
