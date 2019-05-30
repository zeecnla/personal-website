import { Link } from "gatsby"
import React from "react"
import './footer.css'
import github from '../../images/assets/footer/github.svg'
import linkedin from '../../images/assets/footer/linkedin.svg'
import twitter from '../../images/assets/footer/twitter.svg'


const Footer = ({ data }) => (
    <footer className="footer">
        <div className="footer__content">
            <h2>Let's Work Togethor</h2>
            <p>
                If you want to chat about a project you want
                help with or need any advice, just drop me a
                message. I’m AVAILABLE for any projects you
                want to work with.
            </p>
            <p><a href="mailto:hello@cesarmelchor.me">Email Me</a></p>
            <p><a>Get my resume</a></p>


            <div className="social">
                <ul>
                    <li style={{
                        padding: `0 10px 0 0`
                    }}>
                        <img id="github" src={github} />
                    </li>
                    <li>
                        <img id="linkedin" src={linkedin} />
                    </li>
                    <li>
                        <img id="twitter" src={twitter} />
                    </li>
                </ul>
            </div>
        </div>
    </footer>
)
export default Footer




