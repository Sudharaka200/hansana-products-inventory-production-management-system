import React from 'react'
import Navbar from '../../Components/Navbar'
import Banner from '../../Components/Banner'
import Titles from '../../Components/titles'
import ImageGallery from '../../Components/ImageGallery'
import TextSection from '../../Components/TextSection'

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Titles mainTitle="Welcome to Hansana Product " secondTitle="Where Quality Meets Affordability" />
      <div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 p-20">
          <div className="h-32 rounded">
            <ImageGallery />
          </div>
          <div className="h-32 rounded">
            <TextSection text="At Hansana Product, we believe in delivering more than just goods — we bring you a story of passion, tradition, and excellence. Our carefully crafted products reflect the rich heritage and natural beauty of our land, made with love and dedication by local artisans and experts.
                                Whether you're looking for [natural wellness items, handmade crafts, organic foods, or traditional skincare], Hansana Product offers a blend of authenticity and modern quality you can trust.
                                Explore our collections, feel the difference, and be part of our journey toward sustainable living and community empowerment."/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
