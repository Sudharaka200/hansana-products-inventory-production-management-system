import React from 'react'
import Navbar from '../../Components/Navbar'
import Product from '../../Components/Product'
import Titles from '../../Components/titles'
import Footer from '../../Components/Footer'

function Products() {
  return (
    <div>
      <Navbar />
      <Titles mainTitle="Our Products"/>
      <Product />
      <Footer />
    </div>
  )
}

export default Products
