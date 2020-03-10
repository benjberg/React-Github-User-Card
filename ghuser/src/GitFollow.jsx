import React from 'react';

const GitFollow= props => {
console.log('propsf', props)
   
    return (
        <div className='followCard'>
            {props.followers.map((item,index) => {
                return (
                    <div key={index}>
                    <img src={props.followers.avatar_url}/>
                    <h2>{item.followers.name}</h2>
                    <p>{props.followers.login}</p>
                    </div>
            
                )
            })

            }
            


        </div>
    )

}
export default GitFollow;