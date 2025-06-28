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

  // Load cartItems from localStorage when component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem('cartDetails')
    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/products/${id}`)
        setProduct(res.data.product)
        setActive(res.data.product.img1)
      } catch (error) {
        console.error('Error fetching product:', error)
      }
    }
    fetchProduct()
  }, [id])

  if (!product) return <div className="text-center mt-20">Loading product...</div>

  const imageArray = [product.img1, product.img2, product.img3, product.img4, product.img5]

  // Handle Add To Cart
  const handleAddToCart = (item) => {
    setCartItems(prev => {
      const existingItem = prev.find(p => p._id === item._id)
      if (existingItem) {
        return prev.map(p =>
          p._id === item._id ? { ...p, quantity: p.quantity + 1 } : p
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  // Handle Remove from Cart (optional, if you want to pass)
  const handleRemoveFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item._id !== productId))
  }

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* Left: Image Section */}
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

        {/* Right: Product Details */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-4xl">{product.productname}</h1>
          <p className="text-base text-pretty text-gray-700 sm:text-lg/relaxed mt-5">{product.description}</p>
          <h2 className="text-2xl font-bold text-gray-900 sm:text-4xl mt-5">Rs {product.price.toLocaleString()}</h2>
          <p className="text-base text-pretty text-gray-700 sm:text-lg/relaxed mt-5">
            Whether you're baking, brewing, or seasoning — let Hansana {product.productname} bring purity and tradition to your kitchen.
          </p>
          <div className="mt-4 flex gap-4 sm:mt-6">
            <Cart
              product={product}
              cart="Add To Cart"
              buyNow="Buy Now"
              cartItems={cartItems}
              onAddToCart={handleAddToCart}
              onRemoveFromCart={handleRemoveFromCart}  // pass remove handler too
              url1="/orderdetails"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductOverview
