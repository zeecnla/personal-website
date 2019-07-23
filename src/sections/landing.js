import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled, { keyframes } from 'styled-components';

const LandingPage = styled.div`
    height:250px;
    display:grid;
    align-items:center;
`;
const fadeout = keyframes`
  from {
    opacity:1;
    transform:translateY(0);
  }

  to {
    opacity:0;
    transform:translateY(20px);
  }
`
const Cta = styled.div`
    display: block;
    justify-content:center;
    align-items:center;
    color: white;
    border: 3px solid black;
    width: 2.5em;
    height: 4.5em;
    border-radius: 40px;
    cursor: pointer;
    margin: 0 auto -15px auto;

  ::before {
    content:'';
    display:block;
    position:absolute;
    background:black;
    border-radius: 100%;
    margin: 7px;
    width: 20px;
    height:20px;
    animation: ${fadeout} 1.5s linear infinite

  }

`;

const Landing = ({data}) => {
    const greeting = data.site.siteMetadata.greeting;
    return (
        <>
            <LandingPage>
                {/* <Background style={{
                    position:'absolute',
                    width:'500px'
                }}/> */}
                <h1 style={{
                    width:'220px',
                    wordBreak: `break-all`,
                    fontSize:`2.5em`,
                    lineHeight:`1.5em`,
                    margin:0
                    }}>{greeting}</h1>
            </LandingPage>

            <a href="#about"><Cta/></a>

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
