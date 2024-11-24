import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'


const SecondinaryContainer = () => {
  const movies = useSelector((store)=>store.Movies);
  
  
  
  return (
    <div className='bg-black mt-[-200px]'>
      
      <MovieList title={" Now Playing Movie"} movies={movies?.nowPlaying} />
      <MovieList title={" Popular"} movies={movies?.movieTrailer}/>
      <MovieList title={" Trending"} movies={movies?.tradingMovie}/>
      <MovieList title={"Horrer "} movies={movies?.crimeMovie}/>
      <MovieList title={"Crime "} movies={movies?.nowPlaying}/>
     
    </div>
  )
}

export default SecondinaryContainer
