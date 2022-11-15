import React from 'react'
import White from '../../image/white1.jpg';
const Day = () => {
  return (
<>
<div className="main flex-all bg-slate-100 mobile:flex-col mobile:bg-slate-400">
    <div className="left flex-1 sym:order-2 ">
        <div className="content flex-items  flex-col py-4 space-y-7 ">
            <span className='text-xl font-bold text-green-900 uppercase'>Black Friday</span>
            <h1 className='text-5xl pt-3 small:text-2xl small:font-semibold '>SALE 50% OFF</h1>
            <span className='text-3xl small:text-xl small:font-semibold'>All VEGITABLE PRODUCTS</span>
            <div className="btn pt-3">
                <button className='button small:text-xs'>DISCOVER NOW</button>
            </div>
        </div>
    </div>
    <div className="right flex-1 ">
        <img className='opacity-80 h-full w-full' src={White} alt="" />
    </div>
</div>
</>
  )
}

export default Day