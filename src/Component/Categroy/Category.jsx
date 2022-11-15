import React from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <>
        <div className="main bg-white">
            <div className="in w-5/6 m-auto flex-justify space-x-8 pb-10 mobile:flex-col mobile-w-full mobile:space-x-0 mobile:items-center mobile:space-y-4 small:w-full small:px-3 desktop:w-full desktop:px-8">
                <div className="ca-box">
                    <img src="http://safira.mallthemes.com/wp-content/uploads/2020/06/img_banner4-1-new.jpg" alt="" />
                    <div className="ca-content top-6 ">
                        <h1 className='ca-heading small:text-lg'>Fruits & Dired Fruits</h1>
                        <div className="ca-btn">
                            <span>SHOP NOW </span>
                            <ArrowRightIcon />
                        </div>
                    </div>
                </div>
                <div className="ca-box">
                    <img src="http://safira.mallthemes.com/wp-content/uploads/2020/06/img_banner4-2-new.jpg" alt="" />
                    <div className="ca-content bottom-5">
                        <h1 className='ca-heading small:text-lg'>FRESH VEGETABLE</h1>
                        <Link to="/vegetable" className="ca-btn">
                            <span>SHOP NOW </span>
                            <ArrowRightIcon />
                        </Link>
                    </div>
                </div>
                <div className="right flex flex-col space-y-8 relative stm:flex-row stm:space-y-0 stm:space-x-4">
                    <div className="ca-box">
                        <img src="http://safira.mallthemes.com/wp-content/uploads/2020/06/img_banner4-3-new.jpg" alt="" />
                            <div className="btn pt-3 text-sm flex-items cursor-pointer absolute top-4 left-8">
                            <span className='text-2xl font-semibold small:text-lg'>FRESH BREAD </span>
                            <ArrowRightIcon />
                        </div>
                        
                    </div>
                    <div className="ca-box">
                        <img src="http://safira.mallthemes.com/wp-content/uploads/2020/06/img_banner4-4-new.jpg" alt="" />
                        <div className="btn pt-3 text-sm flex-items cursor-pointer absolute top-4 left-8">
                            <span className='text-2xl font-semibold small:text-lg'>FISH & SEAFOOD</span>
                            <ArrowRightIcon />
                        </div>
                    </div>

                </div>
            </div>
            </div>
        </>
    )
}

export default Category