import React, { useState } from 'react'
import White1 from '../../image/white1.jpg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CachedIcon from '@mui/icons-material/Cached';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { productdata } from './Productitem';
const Product = () => {
  const renderCard=(card,index)=>{
    return(
      <div className="boxes  shadow-lg  cursor-pointer" key={index.id}>
      <div className="img-box bg-black w-full h-1/2 relative">
        <img src={card.image} alt="" className='opacity-80 w-full h-full object-cover'  />
        <div  className='hover-icon flex-all space-x-3 absolute bottom-2 rounded-3xl left-12 bg-slate-200 py-1 px-2'>
        <div className="icon">
          <ShoppingCartIcon />
        </div>
        <div className="icon">
          <CachedIcon />
        </div>
        <div className="icon">
          <SearchIcon />
        </div>
        <div className="icon">
          <FavoriteIcon />
        </div>
      </div>
      </div>
      
      <div className="content pt-3 space-y-3 pb-4 flex-items flex-col">
        <h1 className='text-lg font-semibold'>{card.title}</h1>
        <p className='text-sm font-semibold'>{card.name}</p>
        <p className='text-green-700 text-lg font-bold'>{card.price}</p>
      </div>
    </div>
    )
  }
  return (
    <div className="product bg-white py-5">
      <div className="content flex-all flex-col space-y-4 ">
        <h5 className='text-green-600 font-semibold text-xl'>Featured Product</h5>
        <h2 className='text-4xl font-semibold small:text-2xl'>Our Product</h2>
        <p className='font-semibold mobile:text-center'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
      </div>
      <div className="box grid grid-cols-4 gap-5 w-4/5 m-auto pt-10 mobile:flex-col mobile:flex mobile:w-full mobile:px-2">
     {
      productdata.map(renderCard)
     }
     </div>
    </div>
  )
}
export default Product