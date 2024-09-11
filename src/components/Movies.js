import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const Movies = () => {
  const {id} = useParams();
  const location = useLocation();
  const myObject = location.state;
  const {name,theme,actors,director,trailer_url} = myObject;

  return (
    <div className='relative w-full h-screen '>
      <VideoTitle name={name} theme={theme} actors={actors} director={director} id={id}/>
      <VideoBackground trailer_url={trailer_url}/>
    </div>
  )
}

export default Movies
