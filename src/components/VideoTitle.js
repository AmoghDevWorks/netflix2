import React from 'react'


const VideoTitle = ({name,theme,actors,director,id}) => {

  return (
    <div className='text-white h-3/6 w-full lg:w-2/6 absolute left-1 lg:left-14 bottom-0 z-10'>
      <h1 className='font-extrabold font-sans text-6xl'>{name}</h1>
      <p className='m-1 mt-4 font-bold text-3xl '>Produced by {director}</p>
      <p className='m-1 mt-4 font-semibold font-mono capitalize text-xl'>genre of a movie are {theme}</p>
      <p className='m-1 mt-4 font-semibold font-mono capitalize text-xl'>actors are {actors.map((actor,idx)=><span key={idx}>{actor} </span>)}</p>
      <button className='border-solid border-2 border-red-600 p-2 rounded m-1 mt-0 lg:mt-4 bg-red-800 text-white'>Watch Now</button>
    </div>
  )
}

export default VideoTitle
