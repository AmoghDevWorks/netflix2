import React from 'react'
import Poster from './Poster'

const Container = ({api}) => {
  const container = api.container;
  const movies = api.movies;


  return (
    <div className='p-5'>
      <p className='font-mono font-bold text-3xl'>{container}</p>
      <div className='h-70 w-auto flex px-1'>
        {movies.map((movie)=>(<Poster key={movie.name} data={movie} />))}
      </div>
    </div>
  )
}

export default Container
