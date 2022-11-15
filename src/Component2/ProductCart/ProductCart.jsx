import React from 'react'
import White1 from '../../image/white2.jpg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { productdata } from './Productcartdata';
import { useState } from 'react';
const ProductCart = () => {
    const [isHover, setHover] = useState(false);
    const handlemouse = () => {
        setHover(true);
    }
    const handlemouse2 = () => {
        setHover(false);
    }
    const Arrowobj = {
        fontSize: 18,
        cursor: "pointer",
        color: isHover ? 'red' : 'black',
    }
    const Dataimage = (data) => {
        return (
            <div className="image w-28 h-28">
                <img src={data.image} alt="" />
            </div>
        )
    }
    return (
        <>
            <div className="main bg-white w-full">
                <div className="product-cart py-10 w-3/4 m-auto mobile:w-full mobile:px-2">
                    <div className="two flex-all space-x-5 mobile:flex-col mobile:space-x-0">
                        <div className="left flex-1 border bg-slate-200">
                            <img src={White1} alt="" className='w-full h-full ' />
                        </div>
                        <div className="right flex-1 border p-5 rounded-lg space-y-3">
                            <div className="flex items-center justify-between">
                                <h1 className='text-2xl font-semibold small:text-xl'>Apple China Imported</h1>
                                <div className="right-box border rounded-md p-1"><ArrowForwardIosIcon style={Arrowobj} onMouseEnter={handlemouse} onMouseLeave={handlemouse2} /></div>
                            </div>
                            <span className='pt-3 text-emerald-600 text-3xl font-bold small:text-2xl '>100.00$</span>
                            <div className='width-full h-0.5 bg-slate-200'></div>
                            <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus
                            </p>
                            <div className='width-full h-0.5 bg-slate-200'></div>
                            <div className="btn flex space-x-5 pt-5">
                                <button className='border px-10 py-2 rounded-3xl desktop:'>1</button>
                                <button className='bg-emerald-500 rounded-3xl py-2 px-10 text-white desktop:px-3 mobile:text-xs'>ADD TO CART</button>
                            </div>
                            <div className="add flex items-center space-x-7 pt-3 small:space-x-1">
                                <div className="heart cursor-pointer hover:text-emerald-400 space-x-2 small:flex small:items-center">
                                    <FavoriteIcon />
                                    <a href="" className='small:text-sm'>Browse Whislist</a>
                                </div>
                                <div className="Compare cursor-pointer hover:text-emerald-400 space-x-2 small:flex small:items-center">
                                    <AutorenewIcon/>
                                    <a href="" className='small:text-sm'>Compare</a>
                                </div>
                            </div>
                            <div className='width-full h-0.5 bg-slate-200'></div>
                            <div className="cat">
                                <span>Category: </span>
                                <a href="" className='cursor-pointer hover:text-emerald-400'>Green Vegetables</a>
                            </div>
                            <div className="tags small:text-sm">
                                <a href="">Reduce Vegesity, </a>
                                <a href="">Reduce Vegesity, </a>
                                <a href="">Reduce Vegesity, </a>
                                <a href="">Reduce Vegesity, </a>
                            </div>
                            <div className="social pt-3 flex-items space-x-3">
                                <span>Share</span>
                                <FacebookIcon />
                                <TwitterIcon />
                                <InstagramIcon />
                            </div>
                        </div>
                    </div>
                    {/* <div className="bottom flex items-center justify-center py-10 ">
                    <div className="btn">
                        <ArrowBackIosNewIcon/>
                    </div>
                    <div className="content flex items-center">
                        {
                            productdata.map(Dataimage)
                        }
                    </div>
                    <div className="btn">
                        <ArrowForwardIosIcon/>
                    </div>
                </div> */}
                </div>
            </div>
        </>
    )
}

export default ProductCart