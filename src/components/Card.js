import React from 'react';
const Card = (props) => {

    return ( 
        <div>
            <img src={props.img} alt=''/>
            <h5 className='pictext'>{props.Name}</h5>
        </div>
     );

}
 
export default Card;