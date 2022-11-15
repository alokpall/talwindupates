import React, { useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { shippingdata } from '../Component/Shipping/Shippingdata';
import CheckIcon from '@mui/icons-material/Check';
const Main = () => {
    const [count, setcount] = useState(1);
    const setIncrese = () => {
        setcount(count + 1);
    }
    const setDecrease = () => {
        setcount(count - 1)
    }
    const [val, setval] = useState(16)
    const click1 = () => {
        setval(32)
    }
    const click2 = () => {
        setval(48)
    }
    const click3 = () => {
        setval(64)
    }
    const Star = {
        fontSize: 20,
        color: "	#FF8C00",
    }
    const Media = {
        fontSize: 22,
        marginRight: '5px'
    }
    return (
        <div className="main bg-white w-full py-14">
            <div className="in w-4/5 m-auto flex justify-center space-x-8 mobile:flex-col tablet:w-full tablet:px-4 mobile:space-x-0 mobile:space-y-8">
                <div className="left flex-1">
                    <div className="box space-y-4">
                        <div className="img shadow-lg bg-slate-200">
                            <img className='opacity-70' src="https://images.unsplash.com/photo-1615485925873-7ecbbe90a866?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                        </div>
                        <div className="small-img flex space-x-4 cursor-pointer">
                            <div className="img shadow-xl flex-1 border h-32 mobile:h-0">
                                <img className='w-full h-full  object-cover ' src="https://images.unsplash.com/photo-1582287104445-6754664dbdb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                            </div>
                            <div className="img flex-1 border shadow-lg">
                                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1582287104445-6754664dbdb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                            </div>
                            <div className="img flex-1 border shadow-lg">
                                <img className='h-full object-cover' src="https://images.unsplash.com/photo-1582287104445-6754664dbdb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                            </div>
                            <div className="img flex-1 border shadow-lg ">
                                <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1582287104445-6754664dbdb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="center flex-1 px-5">
                    <h1 className='font-semibold text-lg pb-2'>Fresh carrot natural free</h1>
                    <hr />
                    <div className="star flex items-center space-x-2 pt-4">
                        <StarIcon style={Star} />
                        <StarIcon style={Star} />
                        <StarIcon style={Star} />
                        <StarIcon style={Star} />
                        <StarIcon style={Star} />
                    </div>
                    <div className="avibility pt-2">
                        <b>Availability: </b>
                        <span>In Stock<CheckIcon style={{color:'#006400'}}/></span>
                    </div>
                    <div className="price space-x-2 py-3">
                        <b>$31.00</b>
                        <del>$41.00</del>
                        <span className='bg-orange-700 text-white py-1 px-3 rounded-l-2xl'>31%</span>
                    </div>
                    <div className="warning">
                        Hurry up! only <span className='text-pink-700 font-bold'>{val}</span> products left in stock!
                    </div>
                    <div className="para tracking-wide leading-6 text-gray-400">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </div>
                    <div className="size space-x-4 pt-4">
                        <span>Size:</span>
                        <button onClick={click1} className=' text-gray-400 border-b-2 py-1 px-2'>5KG</button>
                        <button onClick={click2} className=' text-gray-400 border-b-2 py-1 px-2'>4KG</button>
                        <button onClick={click3} className=' text-gray-400 border-b-2 py-1 px-2'>2KG</button>
                    </div>
                    <div className="qauntity pt-4">
                        <span className='font-bold pr-2'>Quantity:</span>
                        <button onClick={setDecrease} className='py-1 px-3 border outline-none'>-</button>
                        <input type="text" className='border outline-none px-2 w-16 mx-3 py-1 text-center' value={count} />
                        <button onClick={setIncrese} className='py-1 px-3 border outline-none '>+</button>
                    </div>
                    <div className="btn-group pt-4 pb-3 space-x-4 mobile:flex mobile:flex-col mobile:space-x-0 mobile:space-y-6">
                        <button className='px-5 py-1 rounded-full bg-orange-400'><FavoriteIcon style={{ fontSize: 18, color: 'white' }} /></button>
                        <button className='px-5 py-2 rounded-full bg-orange-400 text-white tracking-wide text-sm font-semibold'>ADD TO CART</button>
                        <button className='px-5 py-2 rounded-full bg-orange-400 text-white tracking-wide text-sm font-semibold'>BUY NOW</button>
                    </div>
                    <hr />
                    <div className="sku pt-4 space-x-4">
                        <b>SKU:</b>
                        <span>147852385-15-9</span>
                    </div>
                    <div className="share">
                        <b className='pr-3'>Share:</b>
                        <FacebookIcon style={Media} />
                        <WhatsAppIcon style={Media} />
                        <EmailIcon style={Media} />
                    </div>
                    <div className="pay pt-4">
                        <div className="img">
                            <img src="https://cdn.shopify.com/s/files/1/0412/8151/9765/files/trust_image.png?v=1595856453" alt="" />
                        </div>
                    </div>
                </div>
                <div className="right flex-1">
                    <div className="shippping bg-white flex-all flex-col space-y-5  tablet:grid tablet:grid-cols-2 tablet:px-4 tablet:space-y-0 ">
                        {
                            shippingdata.map((items) => {
                                const { id, image, title, value, } = items;
                                return (
                                    <div className="box flex-items flex-col border p-4 small:px-2 small:py-4" key={items.id}>
                                        <img src={image} alt="" className='w-10 small:w-10 ' />
                                        <span className='small:text-[10px]'>{title}</span>
                                        <span className='small:text-[10px]'>{value}</span>
                                    </div>
                                )
                            })
                        }
                    </div></div>
            </div>
        </div>
    )
}

export default Main