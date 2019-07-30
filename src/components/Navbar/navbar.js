import React from 'react'
import styled from 'styled-components'
import { device } from '../device'

const Navigation = styled.nav`
    display: grid;
    width:100%;
    grid-template-columns: auto;
    text-align:right;
    padding:20px 10px;

    @media ${device.tablet}{
        width:80%;
        margin:0 auto;
    }
    @media ${device.laptopL}{
    width:60%;
    marginn:auto;
  }
`;




const Navbar = ({siteTitle}) => (
    <Navigation>
        <ul style={{ float:"right"}}>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </Navigation>
)

export default Navbar
