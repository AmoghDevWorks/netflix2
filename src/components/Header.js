import React, { useEffect } from 'react'
import { Logo_URL } from './utils/constants'
import {auth} from './utils/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import {user} from './Body'

const Header = () => {

  const user = useSelector((state)=>state.user)
  const navigate = useNavigate();

  useEffect(()=>{
    if(!user){
      navigate('/')
    }
  },[])
  
  const handleSignOut =()=>{
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    });
  }


  return (
    <div className='flex items-center justify-between w-screen px-4 h-2/12 absolute bg-gradient-to-b from-black'>
      <img className='h-16' src={Logo_URL} alt='logo'></img>
      {user && <button onClick={handleSignOut} className='text-white border-solid border-black border-2 py-1 px-2 rounded-md bg-red-700'>Sign Out</button>}
    </div>

  )
}

export default Header
