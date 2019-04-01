import { Link } from "gatsby"
import React from "react"
import './css/footer.css'
import github from '../images/assets/footer/github.svg'
import linkedin from '../images/assets/footer/linkedin.svg'
import twitter from '../images/assets/footer/twitter.svg'


const Footer = ({ data }) => (
    <footer style={{
        padding: `20px`
    }}>
        <h2>Let's Work Togethor</h2>
        <p> 
            If you want to chat about a project you want 
            help with or need any advice, just drop me a 
            message. I’m AVAILABLE for any projects you 
            want to work with.
        </p>
        <h3>Email Me</h3>
        <p>Get my resume</p>


        <div className="social">
            <ul style={{
                margin: 0,
                padding: 0
            }}>
                <li style={{
                    display:`inline-flex`,
                    padding: `0 10px`
                }}>
                    <img src={github} />
                </li>
                <li style={{
                    display:`inline-flex`,
                    padding: `0 10px`
                }}> 
                    <img src={linkedin} />
                </li>
                <li style={{
                    display:`inline-flex`,
                    padding: `0 10px`
                }}> 
                    <img src={twitter} />
                </li>
            </ul>
        </div>
    </footer>
)
export default Footer




