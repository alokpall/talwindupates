import React from 'react'
import Product from '../Component2/ProductGreen/Product'
import Navbar from '../Component/Nvabar/Navbar'
import ProductCart from '../Component2/ProductCart/ProductCart'
import Distcription from '../Component2/Discription/Distcription'
import Related from '../Component2/Related/Related';
import Footer from '../Component/Footer/Footer'
const Page2 = () => {
  return (
    <>
    <Navbar/>
    <Product/>
    <ProductCart/>
    <Distcription/>
    <Related/>
    <Footer/>
    </>
  )
}

export default Page2