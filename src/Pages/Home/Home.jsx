import React from 'react'
import Navbar from '../../Components/Navbar'
import Banner from '../../Components/Banner'
import Titles from '../../Components/titles'
import ImageGallery from '../../Components/ImageGallery'
import TextSection from '../../Components/TextSection'
import Product from '../../Components/Product'
import BannerImg1 from '../../assets/BackgrounImg.png'
import BannerImg2 from '../../assets/13bd1834-4db4-4f94-a8e5-fa92f4ff8b55 1.png'
import OurStoryImg1 from '../../assets/6bd87c68-2b50-4da8-bb56-8af5d77a3f0e.png'
import OurStoryImg2 from '../../assets/fb5878f2-05e4-4023-90ae-9200d8b9946c - Copy.png'
import BottomImageGallery from '../../Components/BottomImageGallery'
import Footer from '../../Components/Footer'

function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Navbar */}
      
      {/* Banner */}
      <Banner img={BannerImg1} bannerTitle="hello" bannerP="hello" button1="Get Started" button2="Learn More"/>
      {/* Banner */}

      {/* Hellow Section */}    
      <Titles mainTitle="Welcome to Hansana Product " secondTitle="Where Quality Meets Affordability" />
      <div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 p-20">
          <div className="">
            <ImageGallery />
          </div>
          <div className="">
            <TextSection text="At Hansana Product, we believe in delivering more than just goods — we bring you a story of passion, tradition, and excellence. Our carefully crafted products reflect the rich heritage and natural beauty of our land, made with love and dedication by local artisans and experts.
                                Whether you're looking for [natural wellness items, handmade crafts, organic foods, or traditional skincare], Hansana Product offers a blend of authenticity and modern quality you can trust.
                                Explore our collections, feel the difference, and be part of our journey toward sustainable living and community empowerment."/>
          </div>
        </div>
      </div>
      {/* Hellow Section */}    

      {/* Product section */}
      <Titles mainTitle="Products" secondTitle="Where Quality Meets Tradition" />
      <Product />
      {/* Product section */}

      {/* Second Banner */}
      <Banner img={BannerImg2} bannerTitle="hello" bannerP="hello" button1="Get Started" button2="Learn More"/>
      {/* Second Banner */}

      {/* Our Story Section */}
      <Titles mainTitle="Our Story" secondTitle="Rooted in Passion, Grown with Purpose"/>
      <div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 p-20">
          <div className="">
            <TextSection text="At Hansana Product, we believe in delivering more than just goods — we bring you a story of passion, tradition, and excellence. Our carefully crafted products reflect the rich heritage and natural beauty of our land, made with love and dedication by local artisans and experts.
                                Whether you're looking for [natural wellness items, handmade crafts, organic foods, or traditional skincare], Hansana Product offers a blend of authenticity and modern quality you can trust.
                                Explore our collections, feel the difference, and be part of our journey toward sustainable living and community empowerment."/>
          </div>
          <div className="">
            <img src={OurStoryImg1} alt="" />
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 p-20">
          <div className="">
            <img src={OurStoryImg2} alt="" />
          </div>
          <div className="">
            <TextSection text="At Hansana Product, we believe in delivering more than just goods — we bring you a story of passion, tradition, and excellence. Our carefully crafted products reflect the rich heritage and natural beauty of our land, made with love and dedication by local artisans and experts.
                                Whether you're looking for [natural wellness items, handmade crafts, organic foods, or traditional skincare], Hansana Product offers a blend of authenticity and modern quality you can trust.
                                Explore our collections, feel the difference, and be part of our journey toward sustainable living and community empowerment."/>
          </div>
        </div>
      </div>

      {/* Our Story Section */}

      {/* Gallery */}
      <Titles mainTitle="Gallery" secondTitle="Crafted with Care, Made for You" />
      <BottomImageGallery />
      {/* Gallery */}

      {/* Footer */}
      <Footer />
      {/* Footer */}




    </div>
  )
}

export default Home
