import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Blog = () => {
  return (
    <>
            <div className="detail py-16 bg-slate-200">
            <h1 className='text-center text-2xl font-semibold pb-3'>Product Details</h1>
            <div className="link flex justify-center items-center space-x-5">
                <span><a href="#">Home</a><ArrowForwardIosIcon/></span>
                <span><a href="#">Fresh Fruits</a><ArrowForwardIosIcon/></span>
                <span><a href="#">Apple China Imported Fruits</a><ArrowForwardIosIcon/></span>
            </div>
        </div>
    </>
  )
}

export default Blog