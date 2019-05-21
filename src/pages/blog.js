import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/layout"


const BlogPost = ({node}) =>{
  return(
    <li>
      <Link to={node.slug}>{node.title}</Link>
      <img src={node.thumbnail ===null ? '' : node.thumbnail.fixed.src}/>
      <div>{node.content.childMarkdownRemark.excerpt}</div>
    </li>
  )
}

const BlogPage = ({data}) => (
  <Layout>
    <ul>
      {/** {data.allContentfulBlog.edges.map((edge,i)=> <BlogPost node={edge.node} key={i}/>)} */}
    </ul>
  </Layout>
)

export default BlogPage

export const pageQuery = graphql`
  query blogQuery {
    allContentfulBlog(
      filter:{
        node_locale: {eq:"en-US"}
      },
      sort: {
        fields: [date], order:DESC
      }

      ){
      edges{
        node{
          title
          slug
          content {
            childMarkdownRemark {
              excerpt
            }
          }
          thumbnail {
            fixed(width:300, height:300){
              src
            }
          }
        }
      }
    }
  }
`


/**
 *
 *
 * <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
 */
