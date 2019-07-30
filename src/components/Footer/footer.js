import React from "react"
import './footer.css'

import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';
import { device } from '../device'

const FooterDiv = styled.footer`
    background: #AF8282;
    padding: 20px;
    color:white;
`;
const FooterContent = styled.div`
    width:100%;

    @media ${device.tablet}{
        width:80%;
        margin:0 auto;
    }
    @media ${device.laptopL}{
    width:60%;
    marginn:auto;
  }
`;
const FooterListElements = ({data}) => {
    const { name, url } = data;
    return(
        <li>
            <a href={url} id={name}> <i className={`fa fa-${name} fa-2x`}></i></a>
        </li>
    )
};

const Footer = ({data}) => (
    <FooterDiv id="contact">
        <FooterContent>
            <h2>Let's Work Togethor</h2>
            <p>
                If you want to chat about a project you want
                help with or need any advice, just drop me a
                message. I’m AVAILABLE for any projects you
                want to work with.
            </p>
            <p><a className="link" href="mailto:hello@cesarmelchor.me">Email Me</a></p>

            <div className="social">
                <ul>
                    {data.site.siteMetadata.social.map((data,index) => <FooterListElements data={data} key ={index}/>)}
                </ul>
            </div>
        </FooterContent>
    </FooterDiv>
)
export default props => (
    <StaticQuery
        query={graphql`
        query footerQuery {
            site {
                siteMetadata {
                    social {
                        name
                        url
                    }
                }
            }
        }
        `}
        render={data => <Footer data={data} {...props} />}
    />
)




