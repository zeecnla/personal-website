import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled, { keyframes } from "styled-components"

const AboutDiv = styled.div`
  width: 100%;
  padding: 40px 0px;
  z-index: -1;
  line-height: 2em;
`

const About = () => (
  <AboutDiv id="about">
    <h2>About Me</h2>
    <p style={{ lineHeight: "30px", paddingTop: "2em" }}>
      I am a Software Developer. I enjoy learning and building pretty much
      anything. Web Apps, Websites, Legos. I am proficient in
      Java,C#,HTML,CSS,Javascript. I am currently diving into React and
      GatsbyJS. When I am not working/coding, I am doing photography, hiking,
      and playing basketball.
    </p>
    <br />
    <p style={{ lineHeight: "30px", paddingTop: "2em" }}>
      I am open to work. You can see me resume or some of the projects I have
      worked on.
    </p>
  </AboutDiv>
)

export default About
