import React from 'react'
import Blog from '../Component/Blog/Blog'
import Category from '../Component/Categroy/Category'
import Day from '../Component/Day/Day'
import Footer from '../Component/Footer/Footer'
import News from '../Component/Newssellater/News'
import Navbar from '../Component/Nvabar/Navbar'
import Navbar2 from '../Component/Nvabar/Navbar2'
import Product from '../Component/Products/Product'
import Shipping from '../Component/Shipping/Shipping'
import Slide from '../Component/Slider/Slide'
import New from '../component8/New'
const Home = () => {
  return (
    <>
    <Navbar2/>
    <Navbar/>
    <Slide/>
    <Shipping/>
    <New/>
    <Category/>
    <Product/>
    <Day/>
    <Blog/>
    <News/>
    <Footer/>

    </>
  )
}

export default Home