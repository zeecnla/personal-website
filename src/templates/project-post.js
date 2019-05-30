
import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from "../components/Layout/layout"

import github from '../images/assets/footer/github.svg'
import link from '../images/assets/footer/link.svg'


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
                    <div
                        style={{display:`flex`}}>

                        <h1>{name}</h1>
                        <div
                            style={{
                                margin: `auto 0 auto auto`
                            }}
                            className="social">
                            <ul>
                                <li style={{
                                    padding: `0 10px 0 0`
                                }}>
                                    <img id="github" src={github} />
                                </li>
                                <li>
                                    <img id="linkedin" src={link} />
                                </li>
                            </ul>
                        </div>
                    </div>
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
