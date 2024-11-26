import  { useEffect } from 'react';
import {  addPlayingCrime } from '../Utils/nowPlayingMovieSlice';
import { Api_options } from '../Utils/Constant'
import { useDispatch } from 'react-redux';
const useNowCrimeMovie = () => {
    const dipatch = useDispatch();
    const getNowCrimeMovie = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', Api_options);
        
        const json = await data.json();
        
        
        
        dipatch(addPlayingCrime(json?.results))


    }
    useEffect(() => {
        getNowCrimeMovie();
    }, [])

}

export default useNowCrimeMovie;
