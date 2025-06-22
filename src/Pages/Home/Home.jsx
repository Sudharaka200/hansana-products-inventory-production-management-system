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
      <Banner img={BannerImg1} bannerTitle="Hansana Product - Where Heritage Meets Quality" bannerP="Authentic, Artisan-Made Goods That Celebrate Nature, Wellness, and Tradition" button1="Get Started" button2="Learn More" />
      {/* Banner */}

      {/* Hellow Section */}
      <Titles mainTitle="Welcome to Hansana Product " secondTitle="Where Quality Meets Affordability" />
      <div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="">
            <ImageGallery />
          </div>
          <div className="">
            <TextSection title="Crafted with Care, Rooted in Tradition" text="At Hansana Product, we believe that every item tells a story — a story rooted in passion, tradition, and craftsmanship. We are more than just a brand; we are a movement dedicated to preserving the rich heritage, natural beauty, and cultural essence of our land. Each product we offer is thoughtfully created with love and care by skilled local artisans, farmers, and wellness experts who have inherited their knowledge through generations.
          From natural wellness items and handmade crafts to organic foods and traditional skincare, our collections reflect a deep respect for nature and a commitment to purity and quality. We source ingredients and materials locally, ensuring they are sustainably grown and ethically harvested. This not only supports the local economy but also promotes environmentally responsible practices that benefit both people and the planet.
          What sets Hansana Product apart is our dedication to authenticity. We blend age-old traditions with modern standards of excellence, creating goods that are as effective as they are meaningful. Whether it’s a herbal balm made with ancient formulas or a handcrafted basket woven with traditional techniques, every item in our store has a soul — a connection to real people, real stories, and real impact.
          We invite you to explore our collections and experience the unique charm that defines Hansana Product."/>
          </div>
        </div>
      </div>
      {/* Hellow Section */}

      {/* Product section */}
      <Titles mainTitle="Products" secondTitle="Where Quality Meets Tradition" />
      <Product />
      {/* Product section */}

      {/* Second Banner */}
      <Banner img={BannerImg2} bannerTitle="Hansana Product – Crafted with Heart, Rooted in Tradition" bannerP="Discover wellness, beauty, and culture through handcrafted goods inspired by nature and made with care by local artisans." button1="Get Started" button2="Learn More" />
      {/* Second Banner */}

      {/* Our Story Section */}
      <Titles mainTitle="Our Story" secondTitle="Rooted in Passion, Grown with Purpose" />
      <div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="">
            <TextSection title="Hansana Product – Heritage Meets Quality" text="At Hansana Product, we believe in delivering more than just goods — we bring you a story of passion, tradition, and excellence. Our carefully crafted products reflect the rich heritage and natural beauty of our land, made with love and dedication by local artisans and experts.
                                Whether you're looking for [natural wellness items, handmade crafts, organic foods, or traditional skincare], Hansana Product offers a blend of authenticity and modern quality you can trust.
                                Explore our collections, feel the difference, and be part of our journey toward sustainable living and community empowerment."/>
          </div>
          <div className="">
            <img src={OurStoryImg1} className='w-100' alt="" />
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="">
            <img src={OurStoryImg2} className='w-100' alt="" />
          </div>
          <div className="">
            <TextSection title="Rooted in Heritage, Crafted for Today" text="At Hansana Product, we believe in delivering more than just goods — we bring you a story of passion, tradition, and excellence. Our carefully crafted products reflect the rich heritage and natural beauty of our land, made with love and dedication by local artisans and experts.
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
