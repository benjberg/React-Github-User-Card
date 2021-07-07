import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  
const GitCard= props => {

   
        return (
           
                
            
      <Card>
        <CardImg top width="25%" src={props.user.avatar_url} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.user.name}</CardTitle>
          <CardSubtitle>{props.user.login}</CardSubtitle>
          <CardText>Followers: {props.user.followers}</CardText>
          <CardText>Following: {props.user.following}</CardText>
          
        </CardBody>
      </Card>
    
  );

            
        
    
}
export default GitCard;