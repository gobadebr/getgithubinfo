
import React from "react";

import styled from "styled-components";
import Table from 'react-bootstrap/Table'



const Card = ({ profile }) => {

    const MainDiv = styled.div`
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    `;

   const AvatarStyle = styled.img`
    width: 10em;
    // height: 20em;
    padding-right: 1em;
    `;

    const InfoStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 1em;
    `;


  return (
    <MainDiv>
      {/* Avatar */}
      <div>
        <AvatarStyle src={profile.avatar_url} alt={profile.name} />
      </div>
      {/* Info */}
      <InfoStyle>
        {/* Name */}
        {/* <div>Name: {profile.name}</div> */}
        {/* Github Link */}
        {/* <div>
          GitHub Link:{" "}
          <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
            {profile.html_url}
          </a>
        </div> */}
        {/* twitter */}
        {/* <div>Twitter Username: {profile.twitter_username}</div> */}
        {/* Location */}
        {/* <div>Location:{profile.location}</div> */}
        {/* Public repo */}
        {/* <div>Public repos: {profile.public_repos}</div> */}
        {/* Info */}
        {/* <div>Bio: {profile.bio}</div>
         */}

          <Table style={{textAlign: 'left'}} size="sm">
            
              <tr>
                <th>Name</th>
                <td>:</td>
                <td>{profile.name}</td>
              </tr> 
              
              <tr>
                <th>Username</th>
                <td>:</td>
                <td>{profile.login}</td>
              </tr> 

              <tr>
                <th>GitHub Link</th>
                <td>:</td>
                <td><a href={profile.html_url} target="_blank" rel="noopener noreferrer">
                {profile.html_url} </a></td>
              </tr>

              <tr>
                <th>Company</th>
                <td>:</td>
                <td>{profile.company}</td>
              </tr> 

              <tr>
                <th>Twitter Username</th>
                <td>:</td>
                <td>{profile.twitter_username}</td>
              </tr> 

              <tr>
                <th>Location</th>
                <td>:</td>
                <td>{profile.location}</td>
              </tr> 

              <tr>
                <th>Public Repos</th>
                <td>:</td>
                <td>{profile.public_repos}</td>
              </tr> 

              <tr>
                <th>Bio</th>
                <td>:</td>
                <td>{profile.bio}</td>
              </tr> 
          </Table>



      </InfoStyle>
    </MainDiv>
  );
};

export default Card;

