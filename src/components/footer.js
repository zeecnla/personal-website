import { Link } from "gatsby"
import React from "react"
import './css/footer.css'
import github from '../images/assets/footer/github.svg'
import linkedin from '../images/assets/footer/linkedin.svg'
import twitter from '../images/assets/footer/twitter.svg'


const Footer = ({ data }) => (
    <footer>
        <h2>Let’s work together!</h2>

        <p>
            If you want to chat about a project you want help 
            with or need any advice, just drop me a message. 
            I’m AVAILABLE for any projects you want to work with.
        </p>
        <h3>Email Me</h3>
        <p>Get My Resume</p>



        <div class="social">
            <ul>
                <li>
                    <i src={github} />
                </li>
                <li>
                    <img src={linkedin} />
                </li>
                <li>
                    <img src={twitter} />
                </li>
            </ul>
        </div>
    </footer>
)
export default Footer




