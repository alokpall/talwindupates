import React from 'react'
import Slideimg from '../../image/slide.jpg';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const Slide = () => {
  const Arrowobj1={
    fontSize:35,
    color:"black",
  }
  const Arrowobj2={
    fontSize:35,
    color:"black",
  }

  return (
    <div className="slide h-screen relative w-full  bg-black" >
        <div className="slide-image absolute h-full w-full ">
            <img src={Slideimg} alt="" className='h-full w-full object-cover opacity-60 '/>
        </div>
        <div className="content absolute top-44 mobile:relative">
            <h1 className='text-white text-8xl text-center font-light mobile:text-4xl mobile:text-center'>WE SERVE FRESH VEGITABLE & <span className=''>FRUITS</span></h1>
            <p className='para text-center text-white text-lg pt-8'>We deliver organic vegetable & fruits</p>
            <div className="btn flex-all pt-8 ">
                <Link to="/some" className='button'>View Details</Link>
            </div>
        </div>
        <div className="arrow flex items-center justify-between">
          <div className="arr absolute top-72 left-3 p-3 bg-white  rounded-lg cursor-pointer"><ArrowBackIosNewIcon style={Arrowobj1}/></div>
          <div className="arr absolute top-72 right-3 p-3 bg-white rounded-lg cursor-pointer"><ArrowForwardIosIcon style={Arrowobj2}/></div>
        </div>
    </div>
  )
}

export default Slide