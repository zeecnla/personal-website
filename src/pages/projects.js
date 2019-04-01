import React from "react"
import Img from 'gatsby-image'

import Layout from "../components/layout"

const page = ()=>(
    <h2>hello</h2>
)
export default page; 
{/*
const ProjectItem = ({node}) => {

    return(
        <li style={{
            display:`inline-block`,
            boxShadow:`0 4px 8px 0 rgba(0,0,0,0.2)`,
            background:`#fff`,
            margin: `20px`,
            textAlign:`center`,
            width:`240px`,
            maxWidth:`240px`,
            padding:`10px`,
            borderRadius:`20px`
        }}>
            <a href={node.prjectUrl}>
                <Img fixed={node.logo.fixed} />
            </a>
            <div style={{
                padding:`2px 16px`
            }}> 
                <h3>{node.name}</h3>
                <p>{node.description}</p>
                <a href={node.repositoryUrl}>Github</a>
                <a href={node.prjectUrl}></a>
            </div>
        </li>
    )
};

const ProjectsPage = ({data}) => (
    <Layout>
        <section style={{
            background:`#A9A5A3`
        }}>
            <h2 style={{
                textAlign:`center`
            }}>Projects</h2>
            <ul style={{
                padding:0
            }}>
                {data.allContentfulProject.edges.map((edge,i)=> <ProjectItem node={edge.node} key={i}/>)}
            </ul>
        </section>
    </Layout>
)
export default ProjectsPage

export const pageQuery = graphql`
query projectQuery {
    allContentfulProject {
      edges {
        node {
          name
          repositoryUrl
          description
          projectUrl
          logo {
            fixed(width: 100, height: 100) {
                ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
  
`*/}