import React from "react"

import Layout from "../components/Layout/layout"
import Footer from '../components/Footer/footer'
import '../components/css/about.css'

const AboutPage = () => (
    <Layout>
        <div className="about">
            <h1>Hi!</h1>
            {/** my image of myself will go here*/}
            <p>
                I am currently a Software Engineer at FCTI Inc.
                with a passion for coding and building software. My current projects
                include building the API and working on the front end of 2 internal
                applications. When I am not coding I enjoy lifting, taking pictures, playing
                videogames and playing basketball.

            </p>
        </div>
        <Footer/>
    </Layout>
)
export default AboutPage
