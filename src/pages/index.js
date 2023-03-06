import React from "react"
import Layout from "../components/Layout/layout"
import "../components/css/index.css"

import About from "../sections/about"
import Projects from "../sections/projects"

const IndexPage = () => (
  <Layout>
    <About />
    <Projects />
  </Layout>
)

export default IndexPage
