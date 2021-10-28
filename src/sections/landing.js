import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled, { keyframes } from "styled-components"
import About from "./about"

const Landing = () => {
  return (
    <>
      <div
        style={{
          height: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            fontSize: `2.5em`,
            lineHeight: `1.5em`,
            margin: 0,
          }}
        >
          Hello{" "}
          <span role="img" aria-label="Hand waiving">
            👋,
          </span>
        </h1>
        <h1
          style={{
            fontSize: `2.5em`,
            lineHeight: `1.5em`,
            margin: 0,
          }}
        >
          I'm Cesar!
        </h1>
      </div>
    </>
  )
}

export default (props) => <Landing />
