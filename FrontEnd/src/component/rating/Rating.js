import React from 'react';
import './Rating.scss'

function Rating({vote}) {
    return ( 
        <>
            <span className='rating'>
                <span>{vote}</span>
            </span>
        </>
     );
}

export default Rating;