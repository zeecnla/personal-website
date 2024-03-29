import React from "react"
import "./footer.css"

import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { device } from "../device"

const FooterDiv = styled.footer`
  padding: 20px;
  position: absolute;
  bottom: 0;
  width: 100%;
`
const FooterContent = styled.div`
  width: 100%;

  @media ${device.tablet} {
    width: 80%;
    margin: 0 auto;
  }
  @media ${device.laptopL} {
    width: 60%;
    marginn: auto;
  }
`
const FooterListElements = ({ data }) => {
  const { name, url } = data

  return (
    <li>
      <a href={url} id={name}>
        {" "}
        <i className={`fa fa-brands fa-${name} fa-2x`}></i>
      </a>
    </li>
  )
}

const Footer = ({ data }) => (
  <FooterDiv id="contact">
    <FooterContent>
      <div
        className="social"
        style={{
          display: `flex`,
          alignItems: `center`,
          padding: ` 20px 0px`,
        }}
      >
        <ul>
          {data.site.siteMetadata.social.map((data, index) => (
            <FooterListElements data={data} key={index} />
          ))}
        </ul>
      </div>
      <div>
        <span
          style={{
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          Copyright © {new Date().getFullYear()} Cesar Melchor. All rights
          reserved.
        </span>
      </div>
    </FooterContent>
  </FooterDiv>
)
export default (props) => {
  const data = useStaticQuery(graphql`
    query footerQuery {
      site {
        siteMetadata {
          social {
            name
            url
          }
        }
      }
    }
  `)
  return <Footer data={data} {...props} />
}
