import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import '../components/css/index.css'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`cesar`, `melchor`, `react`]} />
    <div className="home">
      <h2>Hello!</h2>
      <p>
        My name is Cesar Melchor and 
        I am a Software Developer based in Los Angeles
        You can check some of my work out here
      </p>
      <button className="cta">my portfolio</button>
    </div>
  </Layout>
)

export default IndexPage


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
