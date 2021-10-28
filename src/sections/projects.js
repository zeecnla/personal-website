import React from "react"
import styled from "styled-components"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, StaticQuery } from "gatsby"
import { device } from "../components/device"

const ProjectContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 2em;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  justify-content: center;
  align-items: start;
  grid-gap: 2em;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.laptopL} {
    grid-template-columns: repeat(2, 1fr);
  }
`
const ProjectCard = styled.div`
  width: 100%;
  background: #a8dadc;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 1fr;
  flex-direction: column;
  justify-content: center;
  margin: 0px 0px 2em 0px;
  border-radius: 20px;
`

const Projects = ({ data }) => (
  <div
    id="projects"
    style={{
      width: `100%`,
      height: `100%`,
    }}
  >
    <h2>Projects</h2>
    <ProjectContainer>
      {data.allContentfulProject.edges.map(({ node }, index) => (
        <Item node={node} key={index} />
      ))}
    </ProjectContainer>
  </div>
)
const Item = ({ node }) => {
  console.log(node)
  const { name, description, projectUrl, repositoryUrl, logo } = node
  const image = getImage(logo)
  console.log(logo)
  return (
    <ProjectCard data-aos="fade-up" data-aos-duration="3000">
      {logo && (
        <a href={projectUrl == null ? "#" : projectUrl}>
          {" "}
          <GatsbyImage image={image} alt={name} />
        </a>
      )}
      <div
        style={{
          padding: "10px 20px 20px 20px",
        }}
      >
        <h3>{name}</h3>
        <p style={{ paddingTop: "2em" }}>{description}</p>
        <div
          style={{
            display: "inline-block",
            paddingTop: "2em",
          }}
        >
          <a id="github" href={repositoryUrl}>
            <i className="fa fa-github fa-2x"></i>
          </a>
        </div>
      </div>
    </ProjectCard>
  )
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query projectQuery {
        allContentfulProject {
          edges {
            node {
              name
              id
              description
              projectUrl
              repositoryUrl
              slug
              logo {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    `}
    render={(data) => <Projects data={data} {...props} />}
  />
)
