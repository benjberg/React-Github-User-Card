import React from 'react';

const GitCard= props => {

   
        return (
            <div className='userCard'>
                <img src={props.user.avatar_url}/>
                <h2>{props.user.name}</h2>
                <p>{props.user.login}</p>
                <p>Location: {props.user.location}</p>
                <p>URL: {props.user.url}</p>
                <p>Followers: {props.user.followers}</p>
                <p>Following: {props.user.following}</p>
                <p>Bio: {props.user.bio}</p>


            </div>
        )
    
}
export default GitCard;