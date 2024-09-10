import React from 'react'
import Thriller from './Thriller'
import Hollywood from './Hollywood'
import Comedy from './Comedy'
import Horror from './Horror'
import Cartoon from './Cartoon'

const SecondaryContainer = () => {
  return (
    <div className='p-4 h-auto bg-black text-white'>
      <Thriller />
      <Hollywood />
      <Comedy />
      <Horror />
      <Cartoon />
    </div>
  )
}

export default SecondaryContainer
