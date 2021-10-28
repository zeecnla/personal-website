import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import "../components/css/photography.css"

const YosemiteGallery = () => {
  const data = useStaticQuery(graphql`
    query CloudinaryImage {
      allCloudinaryMedia(filter: { tags: { eq: "yosemite" } }) {
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

const Yosemite = ({ data }) => {
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
          Yosemite
        </h1>

        <YosemiteGallery />
      </div>
    </Layout>
  )
}

export default Yosemite
