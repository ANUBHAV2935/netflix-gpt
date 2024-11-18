import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTittle from './VideoTittle';

const MainContainer = ({ }) => {
  const movie = useSelector(store => store.Movies?.nowPlaying);
  if (!movie) return;
  const nowMovie = movie[0];

  const { title, overview, id } = nowMovie;


  return (
    <div>

      <VideoTittle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer
