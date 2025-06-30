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
  const [reviews, setReviews] = useState([])

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cartDetails')
    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
  }, [])

  // Fetch product + reviews
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

    const fetchReviews = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/products/${id}/reviews`)
        setReviews(res.data.reviews || [])
      } catch (error) {
        console.error('Error fetching reviews:', error)
      }
    }

    fetchProduct()
    fetchReviews()
  }, [id])

  if (!product) return <div className="text-center mt-20">Loading product...</div>

  const imageArray = [product.img1, product.img2, product.img3, product.img4, product.img5]

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

  const handleRemoveFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item._id !== productId))
  }

  return (
    <div>
      <Navbar />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* Left: Image & Reviews */}
        <div>
          {/* Images */}
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
                img && (
                  <div key={index}>
                    <img
                      onClick={() => setActive(img)}
                      src={img}
                      className="h-20 w-full cursor-pointer rounded-lg object-cover object-center"
                      alt={`Thumbnail ${index + 1}`}
                    />
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Customer Reviews</h2>
            {Array.isArray(reviews) && reviews.length > 0 ? (
              <div className="space-y-4">
                {reviews.map((review, idx) => (
                  <div key={idx} className="bg-white p-4 border rounded-lg shadow-sm">
                    <p className="text-sm text-gray-700 font-semibold mb-1">
                      {review.user || "Anonymous"} rated it:
                    </p>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'
                            }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.018 3.145a1 1 0 00.95.69h3.3c.969 0 1.371 1.24.588 1.81l-2.671 1.943a1 1 0 00-.364 1.118l1.018 3.145c.3.921-.755 1.688-1.54 1.118L10 13.347l-2.671 1.943c-.784.57-1.838-.197-1.539-1.118l1.017-3.145a1 1 0 00-.364-1.118L3.772 8.572c-.783-.57-.38-1.81.588-1.81h3.3a1 1 0 00.951-.69l1.018-3.145z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm">{review.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 text-sm">No reviews yet for this product.</p>
            )}

          </div>
        </div>

        {/* Right: Product Info + Cart */}
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
              onRemoveFromCart={handleRemoveFromCart}
              url1="/orderdetails"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductOverview
