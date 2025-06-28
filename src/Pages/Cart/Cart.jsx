import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Cart({
  product = {},
  cart = 'Add to Cart',
  buyNow = 'Buy Now',
  url1 = '/orderdetails',
  cartItems = [],
  onAddToCart,
  onRemoveFromCart,
}) {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleAddToCart = () => {
    if (onAddToCart && product) {
      onAddToCart(product)
    }
    setOpen(true)
  }

  const handleRemove = (productId) => {
    if (onRemoveFromCart) {
      onRemoveFromCart(productId)
    }
  }

  const handleBuyNow = async () => {
    if (cartItems.length === 0) return

    try {
      const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      )

      const response = await axios.post('http://localhost:8000/api/cart', {
        items: cartItems,
        subtotal, // changed from `total` to `subtotal` for consistency
      })

      console.log('Order saved:', response.data)
      setOpen(false)
      navigate(url1)
    } catch (error) {
      console.error('Error saving order:', error)
      alert('Failed to save order. Please try again.')
    }
  }

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <>
      <button
        onClick={handleAddToCart}
        className="bg-amber-800 text-white py-2 px-5 rounded font-semibold"
      >
        {cart}
      </button>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Shopping cart
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul className="-my-6 divide-y divide-gray-200">
                              {cartItems.map((item, index) => (
                                <li key={item._id || item.id || index} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={item.img1}
                                      alt={item.productname}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>
                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>{item.productname}</h3>
                                      <p className="ml-4">Rs {item.price}</p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="text-gray-500">Qty: {item.quantity}</p>
                                      <div className="flex">
                                        <button
                                          onClick={() => handleRemove(item._id || item.id)}
                                          className="font-medium text-red-600 hover:text-red-500"
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>Rs {subtotal.toLocaleString()}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                          <button
                            onClick={handleBuyNow}
                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-amber-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-amber-700"
                          >
                            {buyNow}
                          </button>
                        </div>
                        <div className="mt-6 flex justify-center text-sm text-gray-500">
                          <p>
                            or{' '}
                            <button
                              type="button"
                              onClick={() => setOpen(false)}
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Continue Shopping →
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
