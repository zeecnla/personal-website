import React from "react"

import Layout from "../components/Layout/layout"
import { Link } from "gatsby"

import "../components/css/404.css"

const NotFoundPage = () => (
  <Layout>
    <div class="page">
      <h2>Sorry 404</h2>
      <div className="info">
        <p>
          I will take you to back to the home page, you may find something
          interesting...
        </p>
        <Link to="/" class="gohome">
          Go to Home
        </Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
