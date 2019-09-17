import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled, { keyframes } from 'styled-components';
import Background from '../images/background.inline.svg'
const LandingPage = styled.div`
    height:75vh;
    display:grid;
    align-items:center;
    position:relative;
`;
const fadeout = keyframes`
  0% {
    opacity:1;
    -ms-transform: translateY(0);
    -moz-transform: translateY(0);
    -webkit-transform: translateY(0);
    -o-transform: translateY(0);
    transform:translateY(0);
  }

  100% {
    opacity:0;
    -ms-transform: translateY(20px);
    -moz-transform: translateY(20px);
    -webkit-transform: translateY(20px);
    -o-transform: translateY(20px);
    transform:translateY(20px);
  }
`
const Cta = styled.a`
    display: block;
    justify-content:center;
    align-items:center;
    color: white;
    border: 3px solid black;
    width: 2.5em;
    height: 4.5em;
    border-radius: 40px;
    cursor: pointer;
    margin: -15px auto auto auto;

  ::before {
    content:'';
    display:block;
    position:absolute;
    background:black;
    border-radius: 100%;
    margin: 7px;
    width: 20px;
    height:20px;
    animation: ${fadeout} 1.5s linear infinite;
    -webkit-animation: ${fadeout} 1.5s linear infinite; /* Safari 4+ */
    -moz-animation:    ${fadeout} 1.5s linear infinite; /* Fx 5+ */
    -o-animation:      ${fadeout} 1.5s linear infinite; /* Opera 12+ */
    -ms-animation:      ${fadeout} 1.5s linear infinite; /* Opera 12+ */

  }

`;

const Landing = ({data}) => {
    return (
        <>
            <LandingPage>
                    <h1 style={{
                        width: '220px',
                        wordBreak: `break-all`,
                        fontSize: `2.5em`,
                        lineHeight: `1.5em`,
                        margin: 0,
                        zIndex: '10',
                        position: 'absolute'

                    }}>Hello 👋,<br/> I'm Cesar!</h1>
                    <Background style={{
                      width:`100%`,
                      height:'100%'
                    }}/>
                </LandingPage>

            <Cta href="#about"/>

        </>
    )
}

export default props => (
    <StaticQuery
        query={graphql`
        query landingQuery {
            site {
                siteMetadata{
                    greeting
                }
            }
        }
        `}
        render={data => <Landing data={data} {...props} />}
    />
)
