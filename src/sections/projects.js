import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'

const Projects = ({data}) => (

  <div id="projects" style={{
    width:`100%`,
    height:`100%`
    }}>
    <h2>Projects</h2>
    <div style={{
      width:`100%`,
      height:`100%`,
      paddingTop:`2em`
    }}>{data.allContentfulProject.edges.map(({ node }, index) => (<Item node={node} key={index}/>))}</div>
  </div>
)
const Item = ({node}) => {
  const {
    name,
    description,
    projectUrl,
    respositoryUrl,
    logo
     } = node;
  console.log(node);
  return(
    <div style={{
      maxWith:`500px`,
      maxHeight:`500px`,
      width:`100%`,
      height:`100%`,
      background:'tomato',
      display:'grid',
      gridGap:'1em',
      gridTemplateColumns: '1fr',
      flexDirection:'column',
      justifyContent:'center',
      margin: `0px 0px 2em 0px`,
      cursor:`pointer`}}>
      {logo && <Img fixed={logo.fixed} />}
      <div style={{
      padding:'10px 20px 20px 20px'}}>
      <h3>{name}</h3>
      <p style={{paddingTop:'2em'}}>{description}</p>
      <div style={{
        display:'inline-block',
        paddingTop:'2em'
      }}>
        <a style={{paddingRight:'1em'}} href={projectUrl}>proejcy</a>
        <a href={respositoryUrl}>respositrory</a>
      </div>
      </div>
    </div>)
}

export default props => (
  <StaticQuery
    query={graphql`
      query projectQuery {
        allContentfulProject(limit:100) {
          edges {
            node {
              name
              repositoryUrl
              description
              projectUrl
              slug
              logo {
                fixed(width: 445, height:296) {
                ...GatsbyContentfulFixed
                }
              }
            }
          }
        }
      }
    `}
    render={ data => <Projects data={data} {...props}/>}
  />

)
