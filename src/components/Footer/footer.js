import React from "react"
import './footer.css'

import { StaticQuery, graphql } from 'gatsby'


const FooterListElements = ({data}) => {
    const { name, url } = data;
    return(
        <li>
            <a href="url" className={`fa fa-${name}`}></a>
        </li>
    )
};

const Footer = ({data}) => (
    <footer id="contact" className="footer">
        <div className="footer__content">
            <h2>Let's Work Togethor</h2>
            <p>
                If you want to chat about a project you want
                help with or need any advice, just drop me a
                message. I’m AVAILABLE for any projects you
                want to work with.
            </p>
            <p><a className="link" href="mailto:hello@cesarmelchor.me">Email Me</a></p>
            <p><a className="link" >Get my resume</a></p>


            <div className="social">
                <ul>
                    {data.site.siteMetadata.social.map((data,index) => <FooterListElements data={data} key ={index}/>)}
                </ul>
            </div>
        </div>
    </footer>
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




