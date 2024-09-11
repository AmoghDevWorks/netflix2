import React from 'react'
import { useNavigate } from 'react-router-dom';

const Poster = ({data}) => {
  const name = data.name;
  const poster = data.poster_URL;

  const navigate = useNavigate();

  const handleClick = () =>{
    navigate('/browse/'+name,{state:data})
  }

  return (
    <div className='h-full ml-2 cursor-pointer hover:bg-slate-900 rounded-lg' onClick={handleClick}>
      <img className='h-64 object-contain' src={poster} alt='poster' />
      <p className='font-mono font-semibold text-center text-sm'>{name}</p>
    </div>
  )
}

export default Poster
