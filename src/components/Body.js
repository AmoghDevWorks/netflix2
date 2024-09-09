import React, { useState } from 'react'
import Header from './Header'
import { Background_URL } from './utils/constants'

const Body = () => {

  const [isSignIn,setisSignIn] = useState(true);

  const manageSignInSignOut = () =>{
    setisSignIn(!isSignIn);
  }

  return (
    <div className=''>
        <Header />
        <div className='absolute -z-10'>
            <img className='h-screen w-screen object-cover' src={Background_URL} alt=''></img>
        </div>
        <div className='p-2 rounded-lg bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
            <p className='mt-2 font-bold text-3xl text-white ml-5 opacity-100 mb-8'>{isSignIn?"Sign In":"Sign Up"}</p>
            <form className='flex flex-col text-center'>
              {
                !isSignIn && <input type="text" placeholder='Full Name' className='border-solid border-black border-2 rounded-md p-2 m-6 w-80'/>
              }
              <input className='border-solid border-black border-2 rounded-md p-2 m-6 w-80' type='email' placeholder='Email' required/>
              <input className='border-solid border-black border-2 rounded-md p-2 m-6 w-80' type ="password" placeholder='Password' required />
              <button className='border-solid border-black border-2 rounded-md p-2 m-6 w-80 bg-red-600 text-white'>{isSignIn?"Sign In":"Sign Up"}</button>
              <p className='text-white mb-2 cursor-pointer' onClick={manageSignInSignOut}>
                {isSignIn?"New to Netflix? Sign up now.":"Do you have an account?Sign In now"}
              </p>
            </form>
        </div>
    </div>
  )
}

export default Body
