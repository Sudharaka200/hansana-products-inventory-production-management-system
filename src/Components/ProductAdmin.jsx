import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ProductAdmin() {
  const [cartItems, setCartItems] = useState([])
  const [products, setProducts] = useState([])

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cartDetails')
    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
  }, [])

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/products')
        setProducts(res.data.products || []) // safer fallback
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    fetchProducts()
  }, [])

  // Delete product
  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:8000/api/${productId}`)
      alert("Product deleted successfully!")

      // Refresh product list after deletion
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== productId)
      )
    } catch (error) {
      console.error("Error deleting product:", error)
    }
  }

  // Save cartItems to localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem('cartDetails', JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <Link to={"/addnewproduct"}>
          <button className='bg-green-500 pt-2 pb-2 pl-5 pr-5 text-white rounded'>
            Add New Product
          </button>
        </Link>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product._id} className="group relative border p-4 rounded-md shadow-sm">
              <img
                src={product.img1}
                alt={product.productname}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">{product.productname}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  Rs {product.price?.toLocaleString()}
                </p>
              </div>

              <div className="mt-4 flex gap-2">
                <Link to={`/editproduct/${product._id}`}>
                  <button className='bg-green-700 pt-2 pb-2 pl-5 pr-5 rounded text-white'>
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => deleteProduct(product._id)}
                  className='bg-red-700 pt-2 pb-2 pl-5 pr-5 rounded text-white'
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductAdmin
