import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import "../components/css/index.css"
import Links from "../components/links"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`cesar`, `melchor`, `react`, `software developer`, `CSULB`]}
    />
    <Links />
  </Layout>
)

export default IndexPage
