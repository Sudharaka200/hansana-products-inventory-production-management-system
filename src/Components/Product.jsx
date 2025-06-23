import React, { useState } from 'react'
import ProductImg from '../assets/cad6e28c-d9a0-498f-9a4c-684b39845266.png'
import Cart from '../Pages/Cart/Cart'
import { Link } from 'react-router-dom'

const products = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: 'Basic Tee',
  href: '/productoverview',
  imageSrc: ProductImg,
  price: '$35',
  color: 'Black',
  quantity: 1,
}))

function Product() {
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id)
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prevItems, { ...product, quantity: 1 }]
    })
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <Link to={product.href}>
                <img
                  src={product.imageSrc}
                  alt={product.name}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
              </Link>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
              <Cart
                product={product}
                cart="Add To Cart"
                urlcart=""
                url1="/orderdetails"
                buyNow="Buy Now"
                onAddToCart={handleAddToCart}
                cartItems={cartItems}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product
