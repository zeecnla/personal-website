import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

import Img from 'gatsby-image'
import Logo from '../images/logo.jpg'
import '../components/css/index.css'
import Background from '../images/background.inline.svg'

const IndexPage = ({data}) => (
  <Layout>
      <SEO title="Home" keywords={[`cesar`, `melchor`, `react`]} />

      <div className="home">
        <div style={{
          position:`absolute`,
          width:`100%`
        }}>
          <Background />
        </div>
        <div className="intro">
            <p
              className="title"
              style={{
                fontSize: `35px`,
                marginTop: 0,
                marginBottom: `10px`
              }}
            >Hi, <br/>I'm Cesar Melchor</p>
            <p style={{
              fontSize: `15px`,
              margin: 0
            }}>Full Stack Developer</p>
        </div>
      </div>
      <ProjectsSection data={data}/>
  </Layout>
)

const ProjectsSection = ({data}) => (
  <section>
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
      <li className="project-card">

        <Link to={node.slug}>
          <div style={{
              padding:`2px 16px`
          }}>
              <h3>{node.name}</h3>
              <p>{node.description}</p>
          </div>
        </Link>
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
        slug
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
