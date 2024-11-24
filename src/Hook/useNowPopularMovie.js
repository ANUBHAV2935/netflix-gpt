import  { useEffect } from 'react';
import { addPlayingPopular } from '../Utils/nowPlayingMovieSlice';
import { Api_options } from '../Utils/Constant'
import { useDispatch } from 'react-redux';
const useNowPopularMovie = () => {
    const dipatch = useDispatch();
    const getNowPopularMovie = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', Api_options);
        const json = await data.json();
       
        
        
        dipatch(addPlayingPopular(json?.results))


    }
    useEffect(() => {
        getNowPopularMovie();
    }, [])

}

export default useNowPopularMovie;
