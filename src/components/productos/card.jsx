import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as falStar} from '@fortawesome/free-regular-svg-icons';


const Card = (props) => {
    const data = props.data; 
    
    const getStars = (rate) => {
        const completeStars = parseInt(rate);
        const midStars = (rate * 10) % 10;
        const stars = [];
        for(let i = 0; i < completeStars; i++){
            stars.push(<FontAwesomeIcon key={stars.length} icon={faStar} />);
        }
        if(midStars >= 5){
            stars.push(<FontAwesomeIcon key={stars.length} icon={faStarHalfAlt} />)
        }
        for(let i = stars.length; i < 5; i++){
            stars.push(<FontAwesomeIcon key={stars.length} icon={falStar} />);
        }
        return stars
    }

    return <div className='card'>
                <div className='imagen'><a href="/producto"><img src={data.image}/></a></div>
                <div className='data'>
                    <a href="/producto" className='titulo'>{data.title}</a>
                    <div className='ratio'>{getStars(data.rating.rate)}
                    </div>
                    {/* Descripcion:<p className='desc'> {data.description}</p> */}
                    <div className='cardBottom'>
                        <div className='precio'>${data.price}</div>
                        <div className='addCart'>ADD TO CART</div>
                    </div>
                </div>
            </div>
}

export default Card;
