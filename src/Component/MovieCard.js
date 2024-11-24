import React from 'react'
import { mdn_link } from '../Utils/Constant'

const MovieCard = ({movie}) => {
    
    
    
    return (
        <div className=''>
             <img src={mdn_link+movie?.poster_path}  alt="Image can be here" />
        </div>
    )
}

export default MovieCard
