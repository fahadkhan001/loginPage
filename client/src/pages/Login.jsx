import React from 'react'
import { Link } from "react-router-dom";
import {BiUser} from 'react-icons/bi'
import {AiOutlineLock} from 'react-icons/ai'

const Login = () => {
  return (
    <div>
        <div className='bg-slate-800 border border-slate-400 p-8 rounded-md shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative '>
            <h1 className='text-4xl text-whitefont-bold text-center mb-6 '>Login</h1>
                <form className=''>
                <div className='relative my-4'>
                <input type='email' className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder=''/>
               <label htmlFor='' className='absolute text-sm duration-300 text-white transform  translate-y-6 scale-75  top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 '>Email</label>
               <BiUser  className='absolute top-4 right-4' />
               
                </div>                      
                <div className='relative my-4 '>
                <input type='password' className='block w-72 py-2.5  px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder=''/>
               <label htmlFor='' className='absolute text-sm duration-300 text-white transform translate-y-6 scale-75  top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 '>Password</label>
               <AiOutlineLock  className='absolute top-4 right-4' /> 
               </div>
                <div className='flex justify-between items-center '>
                    <div className='item-center gap-2 flex'>
                        <input type='checkbox'  name='' id='' />
                        <label htmlFor='Remember Me'>Remember Me</label>
                    </div>
                    <Link className='text-blue-500'>Forgot password ?</Link>
                </div>
                <button className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300'  type='Submit'>Login</button>
                <div>
                <span className='m-4'>New Here ? <Link className='text-blue-500' to='/register'>Create an account</Link> </span>
                </div>
                </form>
                
        </div>
    </div>
  )
}

export default Login;