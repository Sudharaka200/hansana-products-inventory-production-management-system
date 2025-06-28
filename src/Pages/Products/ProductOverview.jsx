import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../../Components/Navbar'
import Cart from '../Cart/Cart'

function ProductOverview() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [active, setActive] = useState("")
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/products/${id}`)
        setProduct(res.data.product)
        setActive(res.data.product.img1) // default main image
      } catch (error) {
        console.error('Error fetching product:', error)
      }
    }

    fetchProduct()
  }, [id])

  // 🔹 Add product to cart
  const handleAddToCart = (product) => {
    const existing = cartItems.find(item => item._id === product._id)
    if (existing) {
      // Increase quantity if already in cart
      setCartItems(cartItems.map(item =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      // Add new item
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  if (!product) return <div className="text-center mt-20">Loading product...</div>

  const imageArray = [product.img1, product.img2, product.img3, product.img4, product.img5]

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* Left: Images */}
        <div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                src={active}
                alt="Main"
              />
            </div>
            <div className="grid grid-cols-5 gap-4">
              {imageArray.map((img, index) => (
                <div key={index}>
                  <img
                    onClick={() => setActive(img)}
                    src={img}
                    className="h-20 w-full cursor-pointer rounded-lg object-cover object-center"
                    alt={`Thumbnail ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Details */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-4xl">{product.productname}</h1>
          <p className="text-base text-gray-700 mt-5">{product.description}</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-5">Rs {product.price.toLocaleString()}</h2>
          <p className="text-base text-gray-700 mt-5">
            Whether you're baking, brewing, or seasoning — let Hansana {product.productname} bring purity and tradition to your kitchen.
          </p>

          {/* Cart Button */}
          <div className="mt-4 flex gap-4 sm:mt-6">
            <Cart
              product={product}
              cart="Add To Cart"
              buyNow="Buy Now"
              onAddToCart={handleAddToCart}
              cartItems={cartItems}
              url1="/orderdetails"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductOverview
