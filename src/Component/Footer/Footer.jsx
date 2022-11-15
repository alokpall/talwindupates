import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <div className="footer flex-justify py-16 stm:px-3 bg-slate-900 mobile:flex-col mobile:px-3 mobile:space-y-4">
                <div className="one w-1/6 text-white mobile:w-full">
                    <h3 className='text-3xl font-semibold pb-3 small:text-lg small:pb-0'>Social Veg</h3>
                    <p className='small:text-xs small:leading-5'>Far far away, behind the word mountains,
                        far from the countries Vokalia and Consonantia.
                    </p>
                    <div className="social pt-3 flex-items space-x-3">
                        <Link to="https://www.facebook.com/roshnibano.roshnibano.1/photos_by">
                        <FacebookIcon />
                        </Link>
                        <Link to="https://twitter.com/abubakarazmi04">
                        <TwitterIcon />
                        </Link>
                        <Link to="https://www.instagram.com/ab_star_04/">
                        <InstagramIcon />
                        </Link>
                    </div>
                </div>
                <div className="two w-1/6  text-white items-center flex flex-col moblie:w-full ">
                    <h3 className=" text-xl pb-3">Menu</h3>
                    <ul class="list-none items-start flex flex-col small:text-xs small:leading-5" >
                        <li><a href="">Shop</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Content</a></li>
                        <li><a href="">Jouronal</a></li>
                    </ul>
                </div>
                <div className="three w-1/6 text-white mobile:w-full">
                    <h3 className='text-xl pb-3'>Help</h3>
                    <ul className='small:text-xs small:leading-5'>
                        <li><a href="">Shipping Information</a></li>
                        <li><a href="">Retur & Exchange</a></li>
                        <li><a href="">Terms & Condition</a></li>
                        <li><a href="">Privacy & Policy</a></li>
                    </ul>

                </div>
                <div className="four w-1/6 text-white mobile:w-full small:space-y-2">
                    <h3 className='text-xl pb-3'>Have a Question?</h3>
                    <div className="location small:space-x-2">
                        <LocationOnIcon  />
                        <span className='small:text-xs'>Lucknow,uttar pardesh</span>
                    </div>
                    <div className="phone small:text-xs small:space-x-2">
                        <LocalPhoneIcon />
                        <span>9696132246</span>
                    </div>
                    <div className="email small:text-xs small:space-x-2">
                        <AttachEmailIcon />
                        <span>alokpal258@gmail.com</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer