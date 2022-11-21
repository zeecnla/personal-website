import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import "../components/css/photography.css"
import { StaticImage } from "gatsby-plugin-image"
import { navigate } from "gatsby"

const Gallery = () => {
  return (
    <div className="image-grid ">
      <div
        className="image-item "
        data-aos="fade-up"
        data-aos-duration="3000"
        onClick={() => navigate("/yosemite")}
      >
        <StaticImage
          placeholder="blurred"
          layout="fullWidth"
          src="../albums/yosemite.jpg"
          alt="Glaicer Point over view"
          quality="90"
        />
        <h3>Yosemite</h3>
      </div>
      <div
        className="image-item "
        data-aos="fade-up"
        data-aos-duration="3000"
        onClick={() => navigate("/sf")}
      >
        <StaticImage
          placeholder="blurred"
          layout="fullWidth"
          src="../albums/sfchinatown.jpg"
          alt="San Francisco Chinatown"
          objectPosition="low"
          quality="90"
        />
        <h3>SF / Chinatown</h3>
      </div>
      <div
        className="image-item "
        data-aos="fade-up"
        data-aos-duration="3000"
        onClick={() => navigate("/losangeles")}
      >
        <StaticImage
          placeholder="blurred"
          layout="fullWidth"
          src="../albums/losangeles.jpg"
          alt="Los angeles"
          quality="90"
        />
        <h3>Los Angeles</h3>
      </div>
      <div
        className="image-item "
        data-aos="fade-up"
        data-aos-duration="3000"
        onClick={() => navigate("/joshuatree")}
      >
        <StaticImage
          placeholder="blurred"
          layout="fullWidth"
          src="../albums/joshuatree.jpg"
          alt="joshua tree"
          quality="90"
        />
        <h3>Joshua Tree</h3>
      </div>

      <div
        className="image-item "
        data-aos="fade-up"
        data-aos-duration="3000"
        onClick={() => navigate("/portraits")}
      >
        <StaticImage
          placeholder="blurred"
          layout="fullWidth"
          src="../albums/portraits.jpg"
          alt="A park ranger"
          quality="90"
        />
        <h3>Portraits</h3>
      </div>
    </div>
  )
}

const Photography = ({ data }) => {
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
      <div
      // style={{
      //   display: "grid",
      //   gridTemplateAreas: `
      //     "title title title"
      //     "description description description"
      //     "albums albums albums"
      //     "thumbnails thumbnails thumbnails"
      //     `,
      // }}
      >
        <h1
          style={{
            gridArea: "title",
            height: "20vh",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Photography
        </h1>
        <p
          style={{
            gridArea: "description",
            marginBottom: "40px",
            lineHeight: `2.5`,
            fontSize: "2em",
          }}
          className="animated fadeInUp delay-2s"
        >
          I started photography in 2018. I started with a digital camera, but
          fell in love with shooting film. I like shooting a variety of things.
          Street,portraits,landscapes,etc.
        </p>

        <h3
          style={{
            display: "flex",
            gridArea: "albums",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        ></h3>
        <Gallery className="animated fadeInUp delay-2s" />
      </div>
    </Layout>
  )
}

export default Photography
