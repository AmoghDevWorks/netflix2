import React from 'react'
import Poster from './Poster';
import ComedyMovies from './API/IndianComedyMovies';

const Comedy = () => {

  const container = ComedyMovies.container;
  const movies = ComedyMovies.movies;  

  return (
    <div className='p-5'>
      <p className='font-mono font-bold text-3xl'>{container}</p>
      <div className='h-70 w-auto flex px-1'>
        {movies.map((movie)=>(<Poster key={movie.id} name={movie.name} poster={movie.poster_URL} />))}
      </div>
    </div>
  )
}

export default Comedy
