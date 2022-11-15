import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from '../../image/logo.jpg';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
// import { setRef } from '@mui/material';
var data=require('./Navbardata.json')
const Navbar = () => {
    const [value,setValue]=useState('');
const ClickMe=(e)=>{
e.preventDefault();
setValue(e.target.value)
}
    const onSearch=(searchTerm)=>{
       
        setValue(searchTerm)
        console.log("search",searchTerm)
    }
    const [shop, setShop] = useState(true);
    const clickhandle = () => {
        setShop(!shop);
    }
    const[cart,setCart]=useState(false);
    const cartClick=()=>{
        console.log("hii")
        setCart(!cart)
    }
    const iconObj = {
        fontSize: 30,

    }
    const arrow = {
        color: "#FF8C00"
    }
    const search = {
        color: "#fff",
        marginTop: 7
    }
    const Cross = {
        color: "#FF8C00",
        cursor: "pointer"
    }
    return (
        <>
            <div className="navbar bg-gray-800 flex-items justify-between py-4 px-8 tablet:px-3 ">
                <div className='left text-amber-600 text-2xl font-bold uppercase flex items-center space-x-4 flex-2 cursor-pointer small:hidden'>
                    <Link to="/">
                        <img src={Logo} alt="" className='w-12 h-12 border rounded-full' />
                    </Link>
                    <Link to="/" className='tablet:hidden'>Social Veg</Link>
                </div>
                <div className="center flex-1 flex-all small:flex-auto small:pr-3">
                    <div className="search w-3/5  relative small:w-full">
                        <input className='w-full border-none outline-none px-14 py-2 rounded-md small:text-xs small:px-3' type="text" value={value} placeholder='Seacrh Product' onChange={ClickMe} />
                        <div className="search-icon absolute top-0 left-0 px-3 cursor-pointer  small:hidden bg-amber-600 h-full" onClick={()=>onSearch(value)}>
                            <div className><SearchIcon style={search} /></div>
                        </div>
                        
                        <div className={value?"seachList absolute z-50 bg-white w-full mt-1  list-none h-72 overflow-y-scroll":"hideen"}>
                            {
                                data.filter((items)=>{
                                    const searcTerm=value.toLowerCase();
                                    const name=items.name.toLowerCase();
                                    return searcTerm &&  name.startsWith(searcTerm) && name!=searcTerm;
                                }).map((items)=>{
                                    return(
                                    <li onClick={()=>onSearch(items.name)} className='p-3 cursor-pointer hover:bg-slate-400'><a href="" key={items.index}>{items.name}</a></li>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="right flex-2 flex-items justify-end relative">
                    <ul className='flex text-white space-x-8 tablet:hidden'>
                        <li><Link to="/">Home</Link></li>
                        <li className='' onClick={clickhandle}><a href="#">Shop
                            {
                                !shop ? <ArrowDropUpIcon style={arrow} /> : <ArrowDropDownIcon style={arrow} />
                            } </a></li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/content">Content</Link>
                        </li>
                        <div className="account flex items-center space-x-1">
                            <div className="left">
                                <PersonIcon style={{ width: 30, height: 30, color: '#c27036' }} />
                            </div>
                            <div className="right leading-3">
                                <Link to="/" className='text-orange-400 text-sm font-semibold'>ACCOUNT</Link>
                                <div className="link space-x-2 -mt-1">
                                    <Link to="/register" className='text-xs'>Register</Link>
                                    <Link to="/login" className='text-xs'>Login</Link>
                                </div>
                            </div>
                        </div>
                        <div className='relative cursor-pointer'>
                            <FavoriteIcon style={iconObj} />
                            <div className="num absolute -top-4 left-3 bg-orange-500 py-0.5 px-3 rounded-full">
                                <span className='text-xs font-bold'>1</span>
                            </div>
                        </div>
                        <div className='relative  cursor-pointer' onClick={cartClick}><a href="#"><ShoppingCartIcon style={iconObj}  /></a>
                            <div className="num absolute -top-4 left-3 bg-fuchsia-500 py-0.5 px-3 rounded-full">
                                <span className='text-xs font-bold'>0</span>
                            </div>
                            <div className={cart?"shop  bg-white h-screen shadow-xl w-64 z-50 right-0 top-0 fixed":"hidden"}>
                                <div className="in p-2">
                                    <div className="cross w-10 h-10 rounded-full bg-slate-600 flex-all">
                                        <CloseIcon style={Cross} onClick={cartClick}/>
                                    </div>
                                    <div className="p">
                                        <span className='text-black'>No Product Here</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </ul>
                    <div className="menuicon lg:hidden">
                        <MenuIcon className='w-7 text-white' />
                    </div>
                    <div className="hover bg-black text-white list-none p-4 absolute top-14 left-10 hidden">
                        <li><a href="#" className='navbar-hover:flex'>Shop</a></li>
                        <li><a href="#">Whislist</a></li>
                        <li><a href="#">Single Product</a></li>
                        <li><a href="#">Cart</a></li>
                        <li><a href="#">CheckOut</a></li>
                    </div>

                </div>
                <div className={!shop ? 'hover absolute right-16 flex bg-white border text-black top-24 z-20 space-x-8 p-10  ease-in-out delay-1000 duration-1000' : 'hidden'}>
                    <ul className='flex flex-col space-y-2'>
                        <span className='font-semibold'>Shop Layouts</span>
                        <li><a href="#">Sidebar Left</a></li>
                        <li><a href="#">Sidebar Right</a></li>
                        <li><a href="#">Full Width</a></li>
                        <li><a href="#">List View</a></li>
                    </ul>
                    <ul className='flex flex-col space-y-2'>
                        <span className='font-semibold'>Shop Layouts</span>
                        <li><a href="#">Sidebar Left</a></li>
                        <li><a href="#">Sidebar Right</a></li>
                        <li><a href="#">Full Width</a></li>
                        <li><a href="#">List View</a></li>
                    </ul>
                    <ul className='flex flex-col space-y-2'>
                        <span className='font-semibold'>Shop Layouts</span>
                        <li><a href="#">Sidebar Left</a></li>
                        <li><a href="#">Sidebar Right</a></li>
                        <li><a href="#">Full Width</a></li>
                        <li><a href="#">List View</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar