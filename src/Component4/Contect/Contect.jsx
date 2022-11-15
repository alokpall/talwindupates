import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
const Contect = () => {
    return (
        <>
            <div className="main w-3/4 m-auto flex justify-center py-16 space-x-16 bg-white tablet:flex-col tablet:space-x-0 tablet:space-y-4 small:w-full small:px-3">
                <div className="left  space-y-8 px-5 py-8 ">
                    <h1 className='text-3xl tracking-wide font-semibold'>Contect Us</h1>
                    <div className="content space-y-2">
                        <div className="head flex space-x-2">
                            <HomeIcon />
                            <h1 className='text-lg font-semibold'>Address</h1>
                        </div>
                        <p>123 Main Street, Anytown, CA 12345 – USA</p>
                    </div>
                    <hr></hr>
                    <div className="content space-y-2">
                        <div className="head flex space-x-2">
                            <HomeIcon />
                            <h1  className='text-lg font-semibold'>Phone</h1>
                        </div>
                     <span>Mobile: (08) 123 456 789</span><br></br>
                     <span>Hotline: 1009 678 456</span>
                    </div>
                    <hr></hr>
                    <div className="content space-y-2">
                        <div className="head flex space-x-2">
                            <HomeIcon />
                            <h1  className='text-lg font-semibold'>Email</h1>
                        </div>
                       <span>yourmail@domain.com</span><br></br>
                       <span>support@roadthemes.com</span>
                    </div>
                </div>
                <div className="right flex-1 shadow-lg space-y-5 px-3 py-8">
                    <h1 className='text-3xl tracking-wide font-semibold small:text-2xl' >Tell US Your Message</h1>
                    <div className="inputf space-y-2">
                        <label htmlFor="" className='font-semibold'>Your Name</label><br></br>
                        <input type="text"  placeholder='Enter Your NAME' className='input'/>
                    </div>
                    <div className="inputr space-y-2">
                        <label htmlFor="" className='font-semibold'>Your Email</label><br></br>
                        <input type="text"  placeholder='Enter Your Email' className='input'/>
                    </div>
                    <div className="inputf space-y-2">
                        <label htmlFor="" className='font-semibold'>Subject</label><br></br>
                        <input type="text"  placeholder='Enter Your Subject' className='input'/>
                    </div>
                    <div className="inputf">
                        <label htmlFor="">Your Mesaage</label><br></br>
                       <textarea name="" id="" rows="6" className='border w-full outline-none p-3'></textarea>
                    </div>
                    <div className="btn">
                        <button className='py-2 px-10 rounded-full bg-emerald-700 text-white small:text-sm'>SEND</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contect