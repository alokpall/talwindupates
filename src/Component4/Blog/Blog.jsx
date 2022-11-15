import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
const Blog = () => {

  const [color,Setcolor]=useState(true);
  const handlemouse=()=>{
    Setcolor(!color);
  }
  const handleleave=()=>{
    Setcolor(color);
  }
  const ArrowObj={
    fontSize:16,
    cursor:"pointer",
    color:color?"red":"black"
  }
  return (
    <>
            <div className="detail py-16 bg-slate-200">
            <h1 className='text-center text-2xl font-semibold pb-3'>Product Details</h1>
            <div className="link flex justify-center items-center space-x-5">
                <span><a href="#">Home</a><ArrowForwardIosIcon style={ArrowObj} OnMouseEnter={handlemouse} OnMouseLeave={handleleave}/></span>
                <span><a href="#">Contect</a><ArrowForwardIosIcon style={ArrowObj}/></span>
            </div>
        </div>
    </>
  )
}

export default Blog