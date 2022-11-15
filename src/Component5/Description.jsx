import React from 'react'
import { useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
const Description = () => {
    const [nav, setnav] = useState(1);
    const setClick = (index) => {
        setnav(index);
    }
    const Star = {
        fontSize: 20,
        color:"black",
    }
    return (
        <div className="main bg-white py-14 w-full">
            <div className="in w-3/4 m-auto mobile:w-full mobile:px-4">
                <div className="btn-group flex justify-center items-center space-x-5 mobile:flex-col mobile:space-x-0 mobile:space-y-6">
                    <button onClick={() => {setClick(1)}} className='px-8 py-2  border-none outline font-semibold rounded-full hover:border'>Discription</button>
                    <button onClick={() => {setClick(2)}} className='px-8 py-2 border-none font-semibold rounded-full hover:outline'>Additional Information</button>
                    <button onClick={() => {setClick(3)}} className='px-8 py-2 border-none font-semibold rounded-full hover:outline'>Review</button>
                </div>
                <div className="content mobile:px-3">
                    <div className={nav===1?'content1 pt-10 block':'hidden'}>
                        <div className="in-content">
                            <h2 className='font-bold text-xl'>More detail</h2>
                            <ul className='list-disc pt-3 text-sm tracking-wide'>
                                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus rerum placeat
                                    repellendus eum veniam mollitia sapiente sed alias esse </li>
                                <li>repellendus eum veniam mollitia sapiente sed alias esse </li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis labore, esse sequi fugit amet optio est
                                    fugiat impedit enim velit, accusamus laudantium, voluptates corrupti.
                                </li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, at.</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quam vero nemo nobis rem architecto porro?</li>
                            </ul>
                        </div>
                        <div className="key">
                            <h2 className='font-bold text-xl'>Key Sepecification</h2>
                            <ul className='list-disc text-sm leading-6 pt-3 tracking-wide'>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure optio ut voluptas laboriosam ducimus ipsum repellat.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure optio ut voluptas laboriosam ducimus ipsum repellat.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure optio ut voluptas laboriosam ducimus ipsum repellat.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure optio ut voluptas laboriosam ducimus ipsum repellat.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure optio ut voluptas laboriosam ducimus ipsum repellat.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure optio ut voluptas laboriosam ducimus ipsum repellat.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure optio ut voluptas laboriosam ducimus ipsum repellat.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure optio ut voluptas laboriosam ducimus ipsum repellat.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={nav===2?"content2 pt-10 block":"hidden"}>
                        <div className="in flex">
                            <div className="left flex-1 flex-col flex">
                                <span className='border px-3 py-2 font-semibold'>Vender:</span>
                                <span className='border px-3 py-2 font-semibold'>Vender:</span>
                                <span className='border px-3 py-2 font-semibold'>Vender:</span>
                            </div>
                            <div className="right flex-1 flex flex-col">
                                <span className='border px-4 py-2'>jfhffjieiei</span>
                                <span className='border px-4 py-2'>5kg,2kg,4kg</span>
                                <span className='border px-4 py-2'>uueuueemvj85858</span>
                            </div>
                        </div>
                    </div>
                    <div className={nav==3?'block pt-10':'hidden'}>
                        <div className="1 pb-3">
                            <b>Customer Reviews</b>
                            <div className="star flex items-center space-x-2 pt-2">
                                <StarIcon style={Star} />
                                <StarIcon style={Star} />
                                <StarIcon style={Star} />
                                <StarIcon style={Star} />
                                <StarIcon style={Star} />
                            </div>
                            <p className='pt-4'>based on review</p>
                            <a href="" className='text-red-400 underline '>write a review</a>
                        </div>
                        <hr ></hr>
                        <div className="2">
                        <div className="star flex items-center space-x-2 pt-4">
                                <StarIcon style={Star} />
                                <StarIcon style={Star} />
                                <StarIcon style={Star} />
                                <StarIcon style={Star} />
                                <StarIcon style={Star} />
                            </div>
                            <b>Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. ...</b> 
                            <i>kelin patel on Oct 21, 2020</i>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean commodo ligula eget dolor. ...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Description