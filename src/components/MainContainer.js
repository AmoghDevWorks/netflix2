import React from 'react'
import ThrillerMovies from './API/IndianTrillerMovies'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const Movies = ThrillerMovies.movies;

  const movie = Movies[0];

  const {name,theme,actors,trailer_url,director,id} = movie;

  return (
    <div className='w-screen h-screen relative bg-gradient-to-r from-black'>
      <VideoTitle name={name} theme={theme} actors={actors} director={director} id={id}/>
      <VideoBackground trailer_url={trailer_url}/>
    </div>
  )
}

export default MainContainer
