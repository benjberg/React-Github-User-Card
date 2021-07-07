import React from 'react';
import {
    Card, CardImg,  CardBody,
    CardTitle
  } from 'reactstrap';
const GitFollow= props => {
console.log('propsf', props)
   
    return (
        <div className='followCard'>
            {props.followers.map((item,index) => {
               console.log('item', item) 
               return (
                    
                   
             <Card key={index}>
             <CardImg top width="25%" src={item.avatar_url} alt="User profile" />
             <CardBody>
               <CardTitle>{item.login}</CardTitle>
               
            
             </CardBody>
           </Card>
         
                )
            })

            }
            


        </div>
    )

}
export default GitFollow;