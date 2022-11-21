import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data
      return (
        <a href={uri} className="underline">
          {children}
        </a>
      )
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2>{children}</h2>
    },
    ["paragraph"]: (node, next) =>
      `<p>${next(node.content).replace(/\n/g, `</br>`)}</p>`,
  },
}

export default function About() {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      allContentfulAbout {
        edges {
          node {
            name
            description
            aboutMe {
              raw
            }
          }
        }
      }
    }
  `)

  // I will only ever have 1 about section so hard-coding is fine
  const { description, aboutMe } = data.allContentfulAbout.edges[0].node

  return (
    <div className="about-container">
      <div className="flex">
        <h1 className="large-text m-0 pb-1">{description}</h1>
      </div>
      <div>{renderRichText(aboutMe)}</div>
    </div>
  )
}
