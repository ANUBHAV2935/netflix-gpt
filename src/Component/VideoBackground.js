import React from 'react'
import {  useSelector } from 'react-redux';
import useGetTrailer from '../Hook/useGetTrailer';




const VideoBackground = ({movieId}) => {
    const trailerVideo = useSelector((store)=>store.Movies?.newMovieTrailer);
    useGetTrailer(movieId);
    return (
        <div className='w-screen '>
            <iframe className='w-screen aspect-video mt-[-60px]'
            src={"https://www.youtube.com/embed/" +trailerVideo?.key + "?&autoplay=1"}
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" ></iframe>
        </div>
    )
}

export default VideoBackground
