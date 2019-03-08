import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './css/header.css'
import menu from '../images/menu.svg'
import exit from '../images/exit.svg'
import styled from 'styled-components'



class Header extends React.Component {
  state = {
    isActive :false
  }
  handleMenu =()=> {
    this.setState(state => ({ isActive: !state.isActive }));
  }
  render() {

    const menuActive = this.state.isActive ? 'active ' : 'not-active';
    return (
      <aside>
        <h1 
        style={{
          margin:0
        }}>
            <a style={{ 
              margin: 0, 
              display: `inline`,
              fontSize:`40px`
              }}>
              <Link
                to="/"
                style={{
                  textDecoration: `none`
                }}
              >
                C. 
              </Link>
            </a>
        </h1>
        <img className="burger" src={menu} onClick = {this.handleMenu}/>
        <nav className={`${menuActive}`}> 
        <ul className="navigation">
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
              to="/projects"
              style={{
                textDecoration: `none`,
              }}
              >projects</Link>
            </li>
            <li>
              <Link 
              to="/photography"
              style={{
                textDecoration: `none`,
              }}
              >photography</Link>
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
              >contact</Link>
            </li>
            <li>
              <img className="exit" src={exit} onClick={this.handleMenu}/>
            </li>
          </ul>
        </nav>
      </aside>
      
    )
  }
};


Header.propTypes = {
  siteTitle: PropTypes.string,
}


export default Header
