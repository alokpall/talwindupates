import React from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
    return (
        <div className="main bg-white py-14">
            <div className="main2 w-3/5 m-auto ">
                <div className="in flex items-center justify-center space-x-6">
                    <div className="left w-4/12 border py-12 px-6">
                        <h1 className='text-3xl font-semibold pb-4'>Login</h1>
                        <span>Please Login below account detail</span>
                        <form action="" className='pt-4 space-y-4'>
                          <label htmlFor="">First Name</label><br />
                          <input type="email" placeholder='First Name' className='w-full p-2 border outline-none'/><br />
                          <label htmlFor="">Last Name</label><br />
                          <input type="email" placeholder='Last Name' className='w-full p-2 border outline-none'/><br />
                            <label htmlFor="">Email</label><br></br>
                            <input type="email" placeholder='Email' className='w-full p-2 border outline-none'/><br />
                            <label htmlFor="">Password</label><br></br>
                            <input type="password" placeholder='Password' className='w-full p-2 border outline-none'/><br />
                        </form>
                        <div className="btn pt-4">
                            <button className='px-8 py-3 bg-sky-600 rounded-full text-white cursor-pointer'>Create</button>
                        </div>
                        <div className="forget pt-3">
                            <span className='text-sm cursor-pointer font-semibold text-orange-900'>Forget Your Password?</span>
                        </div>
                    </div>
                    <div className="right w-72 space-y-5 ">
                        <h1 className='text-center font-semibold'>Already An Account Holder?</h1>
                        <div className="btn w-full flex items-center justify-center">
                            <Link to='/login' className='text-center border-2 rounded-xl text-orange-500 border-orange-400 py-3 w-full'>Login</Link>
                        </div>
                        <div className="cotent space-y-3">
                            <span className='text-orange-500 text-xs font-semibold'>Terms & Conditions</span>
                            <p className='pb-3'>Your privacy and security are important to us. For more information on how we use your data read our</p>
                            <span className='text-xs text-orange-500 font-semibold'>Privacy & Policy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register