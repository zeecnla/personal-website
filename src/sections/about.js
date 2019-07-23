import React from 'react'
import { StaticQuery , graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled, { keyframes } from 'styled-components';

const AboutDiv = styled.div`
  width:100%;
  padding: 80px 0px;
  z-index:-1;
  line-height:2em;
`;


const About = ({ data }) => {

  const { name, description, socialLinks, aboutMe, profile } = data.allContentfulAbout.edges[0].node;
  const { rawMarkdownBody } = aboutMe.childMarkdownRemark;

  return (
    <AboutDiv id="about">
      <h2>About</h2>
      <p style={{lineHeight: '30px', 'paddingTop': '2em'}}>{rawMarkdownBody}</p>
    </AboutDiv>
  )
}

export default props=> (
 <StaticQuery
    query={graphql`
      query aboutQuery {
        allContentfulAbout {
          edges {
            node{
              name
              description
              socialLinks {
                name
                fontAwesomeIcon
                url
              }
              profile {
                fluid(maxWidth:200, quality:100){
                  ...GatsbyContentfulFluid
                }
              }
              aboutMe {
                childMarkdownRemark {
                  rawMarkdownBody
                }
              }
            }
          }
        }
      }
    `}
  render = { data => <About data={data} {...props}/> }
  />
)

