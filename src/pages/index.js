import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Img from 'gatsby-image'
import '../components/css/index.css'
import background from '../images/assets/background.svg'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`cesar`, `melchor`, `react`]} />
    <div className="home">
      <h2 className="title">Hi, I'm Cesar</h2>
      <p>I am a Software Engineer bases in Los Angeles</p>
      
    </div>
    <div className="background">
      <img style={{
        width: `100%`,
        height: `100%`
      }} src={background} alt="Triangle in the background"/>
      <input class="scrollButton" type="button"></input>
      <span></span>
    </div>
    <ProjectsSection data={data}/>
  </Layout>
)

const ProjectsSection = ({data}) => (
  <section>
      <h2 style={{
          textAlign:`center`
      }}>Projects</h2>
      <ul style={{
          padding:0,
          textAlign:`center`
      }}>
          {data.allContentfulProject ? data.allContentfulProject.edges.map((edge,i)=> <ProjectItem node={edge.node} key={i}/>) : <p>no projects</p>}
      </ul>
  </section>
)

const ProjectItem = ({node}) => {

  {console.log(node)}
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
          <a href={node.projectUrl}>
              
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


export default IndexPage

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

`


/**
 * 
 * 
 * <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
 */
