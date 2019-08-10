import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby';
import {device} from '../components/device'

const ProjectContainer = styled.div`
  width:100%;
  height:100%;
  padding-top:2em;
  display:grid;
  grid-template-columns:1fr;
  grid-auto-flow:row;
  justify-content:center;
  align-items:center;
  grid-gap:2em;



  @media ${device.tablet} {
    grid-template-columns:repeat(2, 1fr);
  }
  @media ${device.laptopL}{
    grid-template-columns:repeat(2, 1fr)
  }
`;
const ProjectCard = styled.div`

  width:100%;
  background:rgb(6, 161, 196, 0.15);
  display:grid;
  grid-gap:1em;
  grid-template-columns: 1fr;
  flex-direction:column;
  justify-content:center;
  margin: 0px 0px 2em 0px;
  border-radius:20px;

`

const Projects = ({data}) => (

  <div id="projects" style={{
    width:`100%`,
    height:`100%`
    }}>
    <h2>Projects</h2>
    <ProjectContainer>{data.allContentfulProject.edges.map(({ node }, index) => (<Item node={node} key={index} />))}</ProjectContainer>
  </div>
)
const Item = ({node}) => {
  const {
    name,
    description,
    projectUrl,
    repositoryUrl,
    logo
     } = node;
  return(
    <ProjectCard>
      {logo && <Img fluid={logo.fluid} />}
      <div style={{
      padding:'10px 20px 20px 20px'}}>
      <h3>{name}</h3>
      <p style={{paddingTop:'2em'}}>{description}</p>
      <div style={{
        display:'inline-block',
        paddingTop:'2em'
      }}>
        <a id="globe" style={{paddingRight:'1em'}} href={projectUrl == null ? "#" : projectUrl}><i className="fa fa-2x fa-globe"></i></a>
          <a id="github" href={repositoryUrl}><i className="fa fa-github fa-2x"></i></a>
      </div>
      </div>
    </ProjectCard>)
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
                fluid(maxWidth: 445, maxHeight:296) {
                ...GatsbyContentfulFluid
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
