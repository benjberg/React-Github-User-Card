import React from 'react';

const GitFollow= props => {
console.log('propsf', props)
   
    return (
        <div className='followCard'>
            {props.followers.map((item,index) => {
               console.log('item', item) 
               return (
                    
                    <div key={index}>
                    <img src={item.avatar_url}/>
                    <h2>{item.login}</h2>
                    <p>{props.followers.login}</p>
                    </div>
            
                )
            })

            }
            


        </div>
    )

}
export default GitFollow;