import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from "../components/Layout/layout"


class BlogPost extends Component {
  render() {
      const {
          title,
          content,
          date
      }= this.props.data.contentfulBlog
      console.log(this.props.data);
    return (
      <Layout>
        <div>
          <h1>{title} </h1>
          <h2>{date}</h2>
          <div dangerouslySetInnerHTML={{__html: content.childMarkdownRemark.html}}/>
        </div>
      </Layout>

    )
  }
};
BlogPost.propTypes = {
    data: PropTypes.object.isRequired
};
export default BlogPost;
export const pageQuery = graphql`
    query($slug: String!) {
        contentfulBlog(slug: {eq:$slug} ){
            title
            slug
            date
            content {
              childMarkdownRemark{
                html
              }
            }

        }
    }
`

