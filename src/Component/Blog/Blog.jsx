import React from 'react'
import { blogdata } from './Blogdata';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CommentIcon from '@mui/icons-material/Comment';
import { Link } from 'react-router-dom';
const Blog = () => {
    const blogfun = (data, index) => {
        return (
            <div className="box shadow-md ca-box rounded-sm cursor-pointer" key={index.id}>
                <div className="image-box bg-slate-800 ">
                    <img src={data.image} alt="" className='opacity-75 w-full' />
                </div>
                <div className="content px-2 py-3 space-y-4">
                    <span className='font-semibold pt-2  mobile:text-xl'>{data.name}</span>
                    <div className="writer-date">
                        <span className='text-sm mobile:text-sm'>By<a href="#" className='text-green-700 font-semibold pl-3'>{data.writter}</a></span>
                        <span className='pl-3 small:text-sm'>{data.date}</span>
                    </div>
                    <p className='text-sm font-semibold stm:text-lg'>{data.para}</p>
                    <div className="btn flex justify-between items-center">
                        <Link to="/blog" className=' hover:text-red-700 stm:text-lg stm:font-semibold'>Read More <ArrowRightIcon/></Link>
                        <div><CommentIcon/></div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="blog bg-white w-3/4 m-auto py-10  tablet:w-full tablet:px-2 mobile:px-3">
            <h1 className='text-center text-3xl font-semibold small:text-2xl'>Latest New From Blog</h1>
            <div className="boxes py-8 flex items-center justify-center space-x-5  mobile:flex-col mobile:space-x-0 mobile:space-y-4">
                {
                    blogdata.map(blogfun)
                }
            </div>
        </div>
    )
}

export default Blog