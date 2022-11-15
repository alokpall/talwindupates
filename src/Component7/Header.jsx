import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="main w-full bg-white">
        <div className="in w-full">
            <div className="img h-40 w-full bg-slate-900 relative">
                <img className='w-full h-full object-cover opacity-70' src="http://safira.mallthemes.com/wp-content/uploads/2020/06/img_banner4-2-new.jpg" alt="" />
                <div className="absolute top-16 left-28 content text-black flex flex-col items-center justify-center">
                    <Link to="/" className='text-black text-xl font-bold'>Home</Link>
                    <span className='text-lg font-semibold'>Register</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header