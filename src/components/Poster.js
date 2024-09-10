import React from 'react'

const Poster = ({name,poster}) => {
  return (
    <div className='h-full ml-2'>
      <img className='h-64 object-contain' src={poster} alt='poster' />
      <p className='font-mono font-semibold text-center text-sm'>{name}</p>
    </div>
  )
}

export default Poster
