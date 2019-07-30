import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import '../components/css/index.css'

import About from '../sections/about';
import Landing from '../sections/landing';
import Projects from '../sections/projects';


const IndexPage = () => (
  <Layout>

      <SEO title="Home" keywords={[`cesar`, `melchor`, `react`]} />
      <Landing/>
      <About/>
      <Projects/>
  </Layout>
)



// const ProjectsSection = ({data}) => (
//   <section>
//       <div className="project-container" style={{
//           padding:0,
//           textAlign:`center`
//       }}>
//           {data.allContentfulProject ? data.allContentfulProject.edges.map((edge,i)=> <ProjectItem node={edge.node} key={i}/>) : <p>no projects</p>}
//       </div>
//   </section>
// )

// const ProjectItem = ({node}) => {

//   {console.log(node)}
//   return(
//       <div className="project-card">

//         <Link to={node.slug}>
//           <div style={{
//               padding:`2px 16px`
//           }}>
//               <h3>{node.name}</h3>
//           </div>
//         </Link>
//       </div>
//   )
// };


export default IndexPage


