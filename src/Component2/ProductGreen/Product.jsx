import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Product = () => {
    return (
        <>
        <div className="detail py-16 bg-slate-200 small:px-2">
            <h1 className='text-center text-2xl font-semibold pb-3 small:text-xl'>Product Details</h1>
            <div className="link flex justify-center items-center space-x-5">
                <span className='small:text-xs small:flex small:items-center'><a href="#">Home</a><ArrowForwardIosIcon style={{fontSize:10}}/></span>
                <span className="small:text-xs small:flex small:items-center"><a href="#">Green Vegetables</a><ArrowForwardIosIcon style={{fontSize:10}}/></span>
                <span className='small:text-xs small:flex small:items-center'><a href="#">Apple China Imported</a><ArrowForwardIosIcon style={{fontSize:10}}/></span>
            </div>
        </div>
        </>
    )
}

export default Product