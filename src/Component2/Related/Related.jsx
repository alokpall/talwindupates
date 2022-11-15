import React from 'react'
import { relateddata } from './Relateddata'

const Related = () => {
    const DataRealted = (data, index) => {
        return (
            <div className="box shadow-2xl ca-box cursor-pointer">
                <div className="image bg-slate-700 ">
                    <img src={data.image} alt="" className='opacity-80'/>
                </div>
                <div className="content flex flex-col py-5 justify-center items-center">
                    <h1 className='text-lg font-semibold'>{data.name}</h1>
                    <span >{data.title}</span>
                    <span className='text-lg font-semibold text-emerald-500'>{data.price}</span>
                </div>
            </div>
        )
    }
    return (
        <>
        <div className="in bg-white">
            <div className="main w-3/4 py-16 m-auto mobile:w-full mobile:px-2">
                <div className="head flex flex-col items-center justify-center pb-5 space-y-2">
                    <h1 className='text-4xl font-semibold'>Realted Products</h1>
                    <span className='text-sm pb-1  text-emerald-400'>Recently Added our store</span>
                    <div className='w-14 h-0.5 pt-1 bg-black'></div>
                </div>
                <div className="item flex items-center space-x-5 py-3 mobile:flex-col mobile:space-x-0">
                    {
                        relateddata.map(DataRealted)
                    }
                </div>
            </div>
            </div>
        </>
    )
}

export default Related