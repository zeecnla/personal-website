import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import "../components/css/photography.css"

const PortraitsGallery = () => {
  const data = useStaticQuery(graphql`
    query CloudinaryPortraitsImage {
      allCloudinaryMedia(filter: { tags: { eq: "portraits" } }) {
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
  console.log(images)

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

const Portraits = ({ data }) => {
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
          Portraits
        </h1>

        <PortraitsGallery />
      </div>
    </Layout>
  )
}

export default Portraits
