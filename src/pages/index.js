import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import "../components/css/index.css"

import About from "../sections/about"
import Projects from "../sections/projects"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `cesar`,
        `melchor`,
        `react`,
        `CSULB`,
        `Gusto`,
        `Software Engineer`,
        `Software Developer`,
      ]}
    />
    <About />
    <Projects />
  </Layout>
)

export default IndexPage
