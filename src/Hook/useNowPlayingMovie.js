import  { useEffect } from 'react';
import { addPlayingMovie } from '../Utils/nowPlayingMovieSlice';
import { Api_options } from '../Utils/Constant'
import { useDispatch } from 'react-redux';
const UseNowPlayingMovie = () => {
    const dipatch = useDispatch();
    const getNowPlayingMovie = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', Api_options);
        const json = await data.json();
        
        dipatch(addPlayingMovie(json?.results))


    }
    useEffect(() => {
        getNowPlayingMovie();
    }, [])

}

export default UseNowPlayingMovie;
