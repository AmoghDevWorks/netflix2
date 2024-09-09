import React from 'react'
import Header from './Header'
import { Background_URL } from './utils/constants'

const Body = () => {
  return (
    <div className=''>
        <Header />
        <div className='absolute -z-10'>
            <img className='h-screen w-screen object-cover' src={Background_URL} alt=''></img>
        </div>
        <div className='p-2 rounded-lg bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
            <p className='mt-2 font-bold text-3xl text-white ml-5 opacity-100'>Sign In</p>
            <form className='flex flex-col text-center'>
              <input className='border-solid border-black border-2 rounded-md p-2 m-8 w-72' type='email' placeholder='Email' required/>
              <input className='border-solid border-black border-2 rounded-md p-2 m-8 w-72' type ="password" placeholder='Password' required />
              <button className='border-solid border-black border-2 rounded-md p-2 m-8 w-72 bg-red-600 text-white'>Sign In</button>
              <p className='text-white mb-2'>New to Netflix? <span className='cursor-pointer font-bold'>Sign up now.</span></p>
            </form>
        </div>
    </div>
  )
}

export default Body
