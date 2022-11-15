import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
const Blog = () => {
  const Arrowobj={
    fontSize:14
  }
  return (
    <>
            <div className="detail py-16 bg-slate-200">
            <h1 className='text-center text-2xl font-semibold pb-3'>Product Details</h1>
            <div className="link flex justify-center items-center space-x-5">
                <span><Link to="/">Home</Link><ArrowForwardIosIcon style={Arrowobj}/></span>
                <span><a href="#">About</a><ArrowForwardIosIcon style={Arrowobj}/></span>
            </div>
        </div>
    </>
  )
}

export default Blog