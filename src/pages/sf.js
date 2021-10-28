import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import "../components/css/photography.css"

const SFGallery = () => {
  const data = useStaticQuery(graphql`
    query CloudinarySFImage {
      allCloudinaryMedia(filter: { tags: { eq: "sfchinatown" } }) {
        edges {
          node {
            secure_url
            tags
          }
        }
      }
    }
  `)

  const images = data.allCloudinaryMedia.edges

  return (
    <div>
      <div className="specific-image-grid">
        {images.map((image, index) => (
          <div
            className="specific-image-item"
            data-aos="fade-up"
            data-aos-duration="3000"
            key={`${index}-cl`}
          >
            <img src={image.node.secure_url} alt={"no alt :("} />
          </div>
        ))}
      </div>
    </div>
  )
}

const SF = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Photography"
        keywords={[
          `cesar`,
          `melchor`,
          `film`,
          "photography",
          "filmphotography",
          "san francisco",
          "los angeles",
          "chinatown",
        ]}
      />
      <div>
        <h1
          style={{
            gridArea: "title",
            height: "20vh",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          San Francisco
        </h1>

        <SFGallery />
      </div>
    </Layout>
  )
}

export default SF
