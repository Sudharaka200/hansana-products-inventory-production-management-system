import React from 'react'
import ProductImg from '../assets/cad6e28c-d9a0-498f-9a4c-684b39845266.png'
import Button from './Button'
import Cart from '../Pages/Cart/Cart'
import { Link } from 'react-router'


const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '/productoverview',
    imageSrc: ProductImg,
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '/productoverview',
    imageSrc: ProductImg,
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '/productoverview',
    imageSrc: ProductImg,
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '/productoverview',
    imageSrc: ProductImg,
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '/productoverview',
    imageSrc: ProductImg,
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '/productoverview',
    imageSrc: ProductImg,
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '/productoverview',
    imageSrc: ProductImg,
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '/productoverview',
    imageSrc: ProductImg,
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '/productoverview',
    imageSrc: ProductImg,
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '/productoverview',
    imageSrc: ProductImg,
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '/productoverview',
    imageSrc: ProductImg,
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '/productoverview',
    imageSrc: ProductImg,
    price: '$35',
    color: 'Black',
  },

]


function Product() {
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              
              <div key={product.id} className="group relative">
                <Link to={product.href}>
                  <img
                    src={product.imageSrc}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                  />
                
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
                </Link>
                <Cart cart="Add To Cart" buyNow="Buy Now" />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Product
