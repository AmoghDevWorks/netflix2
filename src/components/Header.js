import React from 'react'
import { Logo_URL } from './utils/constants'

const Header = () => {
  return (
    <div className='w-screen h-2/12 absolute'>
      <img className='h-16' src={Logo_URL} alt='logo'></img>
    </div>
  )
}

export default Header
