import React, { Component } from 'react'

import Octocat from "../images/Octocat.png";



import styled from "styled-components";

export class Banner extends Component {
    render() {
       

 const HeadingStyle = styled.h1`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-transform: uppercase;
  font-size: 3rem;
`;

 const LogoStyle = styled.img`
  width: 5rem;
`;
        return (
            <>
                <header>
                    <HeadingStyle>
                    Get GitHub Info
                    <LogoStyle src={Octocat} alt="GitHub Logo" />
                    </HeadingStyle>
                </header>
                
            </>
        )
    }
}

export default Banner
