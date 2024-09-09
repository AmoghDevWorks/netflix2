import React, { useRef, useState } from 'react'
import Header from './Header'
import { auth } from './utils/firebase'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { Background_URL } from './utils/constants'
import checkValidData from './utils/validate';

const Body = () => {

  const [isSignIn,setisSignIn] = useState(true);
  const [errorMessage,seterrorMessage] = useState(null)

  const manageSignInSignOut = () =>{
    setisSignIn(!isSignIn);
  }

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () =>{
    const message = checkValidData(email.current.value,password.current.value)
    seterrorMessage(message)

    if(message) return;

    //signin/signup logic
    if(!isSignIn){
      //signup
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
          .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // console.log(user);
        })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrorMessage(errorCode,errorMessage)
      });
    }
    else{
      //sign In
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // console.log(user,"heyy")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode,errorMessage)
        });
    }
  }

  return (
    <div className=''>
        <Header />
        <div className='absolute -z-10'>
            <img className='h-screen w-screen object-cover' src={Background_URL} alt=''></img>
        </div>
        <div className='p-2 rounded-lg bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
            <p className='mt-2 font-bold text-3xl text-white ml-5 opacity-100 mb-8'>{isSignIn?"Sign In":"Sign Up"}</p>
            <form onSubmit={(e)=>e.preventDefault()} className='flex flex-col text-center'>
              {
                !isSignIn && <input type="text" placeholder='Full Name' className=' bg-slate-600 border-solid border-black border-2 rounded-md p-2 m-6 w-80'/>
              }
              <input ref={email} className='border-solid border-black border-2 rounded-md p-2 m-6 w-80 bg-slate-600 ' type='email' placeholder='Email' required/>
              <input ref={password} className='border-solid border-black border-2 rounded-md p-2 m-6 w-80 bg-slate-600 ' type ="password" placeholder='Password' required />
              <p className='m-1 text-red-500'>{errorMessage}</p>
              <button className='border-solid border-black border-2 rounded-md p-2 m-6 w-80 bg-red-600 text-white' onClick={handleButtonClick}>{isSignIn?"Sign In":"Sign Up"}</button>
              <p className='text-white mb-2 cursor-pointer' onClick={manageSignInSignOut}>
                {isSignIn?"New to Netflix? Sign up now.":"Do you have an account?Sign In now"}
              </p>
            </form>
        </div>
    </div>
  )
}

export default Body
