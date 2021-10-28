import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import "../components/css/index.css"

import About from "../sections/about"
import Landing from "../sections/landing"
import Projects from "../sections/projects"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`cesar`, `melchor`, `react`, `software developer`, `CSULB`]}
    />
    <Landing />
    <About />
    <Projects />
  </Layout>
)

export default IndexPage
