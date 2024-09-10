import React from 'react'
import ThrillerMovies from './API/IndianTrillerMovies'
import HorrorMovies from './API/IndianHorrorMovies'
import CartoonMovies from './API/CartoonMovies'
import ComedyMovies from './API/IndianComedyMovies'
import EnglishMovies from './API/EnglishMovies'
import Container from './Container'

const SecondaryContainer = () => {
  return (
    <div className='p-4 h-auto bg-black text-white'>
      <Container api={ThrillerMovies} />
      <Container api={HorrorMovies} />
      <Container api={ComedyMovies} />
      <Container api={EnglishMovies} />
      <Container api={CartoonMovies} />
    </div>
  )
}

export default SecondaryContainer
