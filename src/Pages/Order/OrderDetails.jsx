import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useNavigate } from 'react-router-dom'


function OrderDetails() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    streetAddress: '',
    city: '',
    region: '',
    postalCode: '',
  })
  const navigate = useNavigate();

  const [cartData, setCartData] = useState(null)
  const [quantities, setQuantities] = useState({})

  // Fetch cart data
  useEffect(() => {
    fetch('http://localhost:8000/api/cart')
      .then((res) => res.json())
      .then((data) => {
        const cart = Array.isArray(data) ? data[0] : data
        setCartData(cart)

        const initialQuantities = {}
        cart?.items.forEach((item, index) => {
          initialQuantities[`line${index}`] = item.quantity
        })
        setQuantities(initialQuantities)
      })
      .catch((err) => console.error('Error fetching cart:', err))
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleQuantityChange = (e, key) => {
    const value = parseInt(e.target.value)
    if (value < 1) return
    setQuantities((prev) => ({ ...prev, [key]: value }))
  }

  const handleRemoveItem = (key) => {
    setQuantities((prev) => ({ ...prev, [key]: 0 }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!cartData || !cartData.items.length) {
      alert('Cart is empty')
      return
    }

    const cartItems = cartData.items.map((item, index) => {
      const quantityKey = `line${index}`
      return {
        productId: item.productId,
        productname: item.productname,
        img1: item.img1,
        price: item.price,
        quantity: quantities[quantityKey] || 1,
      }
    }).filter(item => item.quantity > 0)

    const orderPayload = {
      firstname: formData.firstName,
      lastname: formData.lastName,
      email: formData.email,
      streetaddress: formData.streetAddress,
      city: formData.city,
      province: formData.region,
      zipcode: formData.postalCode,
      cartItems: cartItems,
    }

    try {
      const response = await fetch('http://localhost:8000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderPayload),
      })

      if (response.ok) {
        const result = await response.json()
        console.log('Order placed:', result)
        alert('Order placed successfully!')
        navigate('/orderplaced');
        // Redirect or clear form if needed
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          streetAddress: '',
          city: '',
          region: '',
          postalCode: '',
        })
        setCartData(null)
      } else {
        const error = await response.json()
        console.error('Order failed:', error)
        alert('Failed to place order.')
      }
    } catch (err) {
      console.error('Error sending order:', err)
      alert('Server error. Try again.')
    }
  }

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 p-20">
        {/* Order Form */}
        <div>
          <form onSubmit={handleSubmit}>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-900">First name</label>
                    <input id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange}
                      className="mt-2 block w-full rounded-md border border-gray-300 p-2" />
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-900">Last name</label>
                    <input id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange}
                      className="mt-2 block w-full rounded-md border border-gray-300 p-2" />
                  </div>
                  <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
                    <input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange}
                      className="mt-2 block w-full rounded-md border border-gray-300 p-2" />
                  </div>
                  <div className="col-span-full">
                    <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-900">Street address</label>
                    <input id="streetAddress" name="streetAddress" value={formData.streetAddress} onChange={handleInputChange}
                      className="mt-2 block w-full rounded-md border border-gray-300 p-2" />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-900">City</label>
                    <input id="city" name="city" value={formData.city} onChange={handleInputChange}
                      className="mt-2 block w-full rounded-md border border-gray-300 p-2" />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="region" className="block text-sm font-medium text-gray-900">State / Province</label>
                    <input id="region" name="region" value={formData.region} onChange={handleInputChange}
                      className="mt-2 block w-full rounded-md border border-gray-300 p-2" />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-900">Postal Code</label>
                    <input id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleInputChange}
                      className="mt-2 block w-full rounded-md border border-gray-300 p-2" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button type="reset" className="text-sm font-semibold text-gray-900">Cancel</button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
              >
                Confirm Order
              </button>
            </div>
          </form>
        </div>

        {/* Cart Items Section */}
        <div>
          <section className="max-w-3xl mx-auto">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl mb-6">Products</h1>

            {!cartData ? (
              <p className="text-gray-500">Loading cart...</p>
            ) : (
              <div>
                <ul className="space-y-4">
                  {cartData.items.map((item, index) => {
                    const key = `line${index}`
                    if (quantities[key] === 0) return null
                    return (
                      <li key={item.productId} className="flex items-center gap-4">
                        <img src={item.img1} alt={item.productname} className="w-16 h-16 rounded-sm object-cover" />
                        <div>
                          <h3 className="text-sm text-gray-900">{item.productname}</h3>
                          <p className="text-xs text-gray-600">Price: ${item.price}</p>
                        </div>
                        <div className="flex items-center gap-2 ml-auto">
                          <input
                            type="number"
                            min="1"
                            value={quantities[key] || 1}
                            onChange={(e) => handleQuantityChange(e, key)}
                            className="w-12 rounded-sm border border-gray-300 p-1 text-xs text-gray-700"
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveItem(key)}
                            className="text-red-500 text-sm"
                          >
                            ❌
                          </button>
                        </div>
                      </li>
                    )
                  })}
                </ul>

                <div className="mt-6 border-t pt-4 text-right">
                  <p className="text-sm text-gray-700">Subtotal: ${cartData.subtotal.toFixed(2)}</p>
                  <p className="text-base font-semibold text-gray-900">Total: ${(cartData.subtotal * 1.1).toFixed(2)} (with tax)</p>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails
