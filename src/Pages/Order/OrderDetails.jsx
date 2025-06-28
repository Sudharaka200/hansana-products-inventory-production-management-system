import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

function OrderDetails() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: 'United States',
    streetAddress: '',
    city: '',
    region: '',
    postalCode: '',
  })

  const [cartData, setCartData] = useState(null)
  const [quantities, setQuantities] = useState({})

  // Fetch cart data
  useEffect(() => {
    fetch('http://localhost:8000/api/cart')
      .then((res) => res.json())
      .then((data) => {
        const cart = Array.isArray(data) ? data[0] : data // for safety
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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Data:', formData)
    console.log('Updated Quantities:', quantities)
  }

  const handleRemoveItem = (key) => {
    setQuantities((prev) => ({ ...prev, [key]: 0 }))
  }

  return (
    <div>
      <Navbar />

      {/* Layout grid */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 p-20">
        {/* Order Form */}
        <div>
          <form>
                        <div className="space-y-12">
                            
                            <div className="border-b border-gray-900/10 pb-12">
                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                                            First name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="first-name"
                                                name="first-name"
                                                type="text"
                                                autoComplete="given-name"
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                                            Last name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="last-name"
                                                name="last-name"
                                                type="text"
                                                autoComplete="family-name"
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-4">
                                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                                            Country
                                        </label>
                                        <div className="mt-2 grid grid-cols-1">
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            >
                                                <option>United States</option>
                                                <option>Canada</option>
                                                <option>Mexico</option>
                                            </select>
                                            <ChevronDownIcon
                                                aria-hidden="true"
                                                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900">
                                            Street address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="street-address"
                                                name="street-address"
                                                type="text"
                                                autoComplete="street-address"
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2 sm:col-start-1">
                                        <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">
                                            City
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="city"
                                                name="city"
                                                type="text"
                                                autoComplete="address-level2"
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="region" className="block text-sm/6 font-medium text-gray-900">
                                            State / Province
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="region"
                                                name="region"
                                                type="text"
                                                autoComplete="address-level1"
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="postal-code" className="block text-sm/6 font-medium text-gray-900">
                                            ZIP / Postal code
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="postal-code"
                                                name="postal-code"
                                                type="text"
                                                autoComplete="postal-code"
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                        </div>

                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button type="button" className="text-sm/6 font-semibold text-gray-900">
                                Cancel
                            </button>
                            <a href="/orderplaced">
                                <button
                                type="button" 
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Confirm Order
                            </button>
                            </a>
                        </div>
                    </form>
        </div>

        {/* Cart Items Section */}
        <div>
          <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
              <div className="mx-auto max-w-3xl">
                <header className="text-center">
                  <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Products</h1>
                </header>

                {!cartData ? (
                  <p className="mt-8 text-center text-gray-500">Loading cart...</p>
                ) : (
                  <div className="mt-8">
                    <ul className="space-y-4">
                      {cartData.items.map((item, index) => {
                        const key = `line${index}`
                        if (quantities[key] === 0) return null // hide removed
                        return (
                          <li key={item.productId} className="flex items-center gap-4">
                            <img
                              src={item.img1}
                              alt={item.productname}
                              className="size-16 rounded-sm object-cover"
                            />
                            <div>
                              <h3 className="text-sm text-gray-900">{item.productname}</h3>
                              <p className="text-xs text-gray-600">Price: ${item.price}</p>
                            </div>

                            <div className="flex flex-1 items-center justify-end gap-2">
                              <input
                                type="number"
                                min="1"
                                value={quantities[key] || 1}
                                onChange={(e) => handleQuantityChange(e, key)}
                                className="h-8 w-12 rounded-sm border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600"
                              />
                              <button
                                className="text-gray-600 hover:text-red-600"
                                type="button"
                                onClick={() => handleRemoveItem(key)}
                              >
                                <span className="sr-only">Remove item</span>
                                ❌
                              </button>
                            </div>
                          </li>
                        )
                      })}
                    </ul>

                    {/* Totals */}
                    <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                      <div className="w-screen max-w-lg space-y-4">
                        <dl className="space-y-0.5 text-sm text-gray-700">
                          <div className="flex justify-between">
                            <dt>Subtotal</dt>
                            <dd>${cartData.subtotal.toFixed(2)}</dd>
                          </div>
                          <div className="flex justify-between !text-base font-medium">
                            <dt>Total</dt>
                            <dd>${(cartData.subtotal * 1.1).toFixed(2)} (10% tax included)</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails
