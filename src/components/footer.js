import { Link } from "gatsby"
import React from "react"
import './css/footer.css'
import github from '../images/assets/footer/github.svg'
import linkedin from '../images/assets/footer/linkedin.svg'
import twitter from '../images/assets/footer/twitter.svg'


const Footer = ({ data }) => (
    <footer>
        <div class="social">
            <p>Let's Connect!</p>
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




