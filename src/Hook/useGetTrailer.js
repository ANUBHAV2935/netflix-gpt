import { Api_options } from '../Utils/Constant'
import { useDispatch } from 'react-redux';
import { addnewTrailer } from '../Utils/nowPlayingMovieSlice';
import { useEffect } from 'react';


const useGetTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getTrailer = async () => {

        
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", Api_options);

        const json = await data.json();
  
        const fliterData = json?.results.filter((video) => video.type === "Trailer")
        const filter = fliterData.length ? fliterData[0] : json.results[0];
        
        dispatch(addnewTrailer(filter));

    }
    useEffect(() => { getTrailer() }, [])
}
export default useGetTrailer;