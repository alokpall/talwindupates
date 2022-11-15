import React from 'react'
import { shippingdata } from './Shippingdata';
const Shipping = () => {
    return (
        <>
            <div className="shippping bg-white flex-all py-14 space-x-14 tablet:grid tablet:grid-cols-2 tablet:px-4 tablet:space-x-0
            ">
                {
                    shippingdata.map((items)=>{
                        const{id,image,title,value,}=items;
                        return(
                            <div className="box flex-items flex-col border p-4 small:px-2 small:py-4" key={items.id}>
                                <img src={image} alt="" className='w-20 small:w-10 '/>
                                <span className='small:text-[10px]'>{title}</span>
                                <span className='small:text-[10px]'>{value}</span>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Shipping;