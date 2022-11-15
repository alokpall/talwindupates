import React, { useRef } from 'react';
const News = () => {
  return (
<>
<div className="news flex-items bg-slate-300 py-20 justify-evenly space-x-4 mobile:flex-col mobile:space-x-0 mobile:space-y-10">
    <div className="left flex-1 flex-all flex-col">
        <span className='text-3xl small:text-xl'>Subcribe to our Newsletter</span>
        <p className='text-xl text-center small:text-sm'>Get e-mail updates about our latest shops and special offers</p>
    </div>
    <form  className="right flex-1 flex-items border-black small:px-3">
        <input className='w-3/5 border-none outline-none py-3 px-5 small:text-xs small:px-2' type="text" placeholder='Send Mail For Contect'/>
        <button className='py-3 bg-amber-400 px-7 small:text-xs '>Suscribe</button>
    </form>
</div>
</>
  )
}

export default News