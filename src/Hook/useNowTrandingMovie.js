import  { useEffect } from 'react';
import {  addPlayingTranding } from '../Utils/nowPlayingMovieSlice';
import { Api_options } from '../Utils/Constant'
import { useDispatch } from 'react-redux';
const useNowTrandingMovie = () => {
    const dipatch = useDispatch();
    const getNowTrandingMovie = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', Api_options);
        
        const json = await data.json();
        
        
        
        dipatch(addPlayingTranding(json?.results))


    }
    useEffect(() => {
        getNowTrandingMovie();
    }, [])

}

export default useNowTrandingMovie;
