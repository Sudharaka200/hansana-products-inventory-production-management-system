import React from 'react'
import Navbar from '../../Components/Navbar'
import OrderPlacedImg from '../../assets/568a0cfe-6cfd-497e-b3dc-1621b15687d2order.png'
import Titles from '../../Components/titles'

function OrderPlaced() {
    return (
        <div>
            <Navbar />
            <div className='text-center display-flex justify-center p-20'>
                <div className='flex items-center justify-center'>
                    <img className='' src={OrderPlacedImg} alt="" />
                </div>
                <Titles mainTitle="Thankyou for your order ...." />
                <a href="/">
                    <button className='mt-5 inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700'>
                    Home
                </button>
                </a>
            </div>
        </div>
    )
}

export default OrderPlaced
