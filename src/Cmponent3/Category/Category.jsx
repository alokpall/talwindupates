import React from 'react'
import { category, datarecent } from './Categorydata'

const Category = () => {
    const Catdate=(data,index)=>{
        return(
        <div className="box flex shadow-lg  space-x-6">
            <div className="image bg-slate-800 ">
                <img src={data.image} alt="" className='opacity-70 '/>
            </div>
            <div className="content py-3 space-y-4">
                <h1 className='text-2xl font-semibold'>{data.name}</h1>
                <span>By <a href="" className='hover:text-emerald-600'>admin</a> / Date {data.date}</span>
                <p className='text-sm leading-6 text-slate-600'>{data.title}</p>
                <div className="btn pt-3">
                    <button className='py-2 px-16 rounded-2xl bg-emerald-600'>VIEW ALL</button>
                </div>
            </div>
        </div>
        )
    }
    const Post=(data,index)=>{
        return(
            <div className="box flex space-x-3 items-center">
                <div className="imgae w-36">
                    <img src={data.image} alt="" />
                </div>
                <div className="right flex flex-col leading-5 text-xs">
                    <a href='' className='hover:text-emerald-600'>{data.name}</a>
                    <span >{data.date}</span>
                </div>
            </div>
        )
    }
  return (
<>
<div className="main w-3/4 m-auto py-10 flex space-x-10 ">
    <div className="left flex-2 flex flex-col space-y-5">
        {
            category.map(Catdate)
        }
    </div>
    <div className="right space-y-5 px-3 flex-1">
        <div className="search space-y-4">
            <h1 className='text-xl font-semibold'>Search</h1>
            <hr className='bg-black'/>
            <div className="search-c border">
                <input type="text" placeholder='Search Here' className='py-2 px-3 outline-none border-none w-full'/>
            </div>
        </div>
        <div className="post space-y-4">
            <h1 className='text-xl font-semibold'>Recent Post</h1>
            <hr />
            <div className="allpost space-y-4">
                {
                    datarecent.map(Post)
                }
            </div>
        </div>
    </div>
</div>
</>
  )
}

export default Category