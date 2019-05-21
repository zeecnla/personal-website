
import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from "../components/Layout/layout"


class ProjectPost extends Component {
    render() {
        const {
            projectUrl,
            name,
            description,
            content
        } = this.props.data.contentfulProject
        console.log(this.props.data);
        return (
            <Layout>
                <div>
                    <h1>{name} </h1>
                    <h2>{description}</h2>
                    <div dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }} />
                </div>
            </Layout>

        )
    }
};
ProjectPost.propTypes = {
    data: PropTypes.object.isRequired
};
export default ProjectPost;



export const projectPageQuery = graphql`

    query($slug: String!) {
        contentfulProject(slug: {eq:$slug} ) {
            name
            repositoryUrl
            description
            projectUrl
            logo {
                fixed(width: 100, height: 100) {
                    ...GatsbyContentfulFixed
                }
            }
            content {
              childMarkdownRemark{
                html
              }
            }
        }
    }

`
