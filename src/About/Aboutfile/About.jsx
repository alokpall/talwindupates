import React from 'react'
import Slide from '../../image/slide.jpg'
const About = () => {
  return (
   <div className="main w-3/4 flex justify-center space-x-5 m-auto py-16">
    <div className="left flex-1 space-y-5 px-3">
<h1 className='text-3xl tracking-wide font-semibold pb-5'>About Our Social Veg Store</h1>
<span className='font-semibold '>We Believe That Every Project Existing In Fresh Vegetables World Is A Result Of An Idea And Every Idea Has A Cause.</span>
<p className='tracking-wide leading-6 text-sm '>For this reason, our every design serves an idea. Our strength in design is reflected by our name, our care for details. Our specialist won't be afraid to go extra miles just to approach near perfection. We don't require everything to be perfect, but we need them to be perfectly cared for. That's a reason why we are willing to give contributions at best. Not a single detail is missed out under Billey's professional eyes. The amount of
     dedication and effort equals to the level of passion and determination. Get better, together as one.</p>
    </div>
    <div className="right flex-1">
        <div className="img bg-slate-800">
            <img src={Slide} alt="" className='opacity-70'/>
        </div>
    </div>
   </div>
  )
}

export default About