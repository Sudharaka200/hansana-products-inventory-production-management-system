import React from 'react'
import { Link } from 'react-router-dom';
import DashboardBtn from '../../Components/DashboardBtn';
import Logo from '../../assets/adminLogo.png'
import OrderTable from '../../Components/OrderTabale';
import Button from '../../Components/Button';
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import Product from '../../Components/Product';


function NewOrders() {
    return (
        <div>
            <div>
                <div className="flex h-screen bg-gray-100">
                    {/* Sidebar */}
                    <aside className="w-64 bg-black text-white flex flex-col p-4">
                        <div>
                            <img src={Logo} alt="" />
                        </div>
                        <DashboardBtn
                            btns={[
                                { name: "Dashboard", url: "/refdashboard" },
                                { name: "Orders", url: "/reforders" },
                            ]}
                        />
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 p-6">
                        <header className="flex justify-between items-center mb-6">
                            <h1 className="text-2xl font-bold">Create New Order</h1>
                        </header>
                        <div className='pl-10 pr-10'>
                            {/* <form>
                                <div className="space-y-12">

                                    <div className="border-b border-gray-900/10 pb-12">
                                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                            <div className="sm:col-span-3">
                                                <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                                                    Name
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
                                                    Number
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        id="number"
                                                        name="number"
                                                        type="nubmer"
                                                        autoComplete="family-name"
                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-4">
                                                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                                    Order Items
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        id="orderitem"
                                                        name="orderitem"
                                                        type="text"
                                                        autoComplete="orderitem"
                                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
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
                                    <button
                                        type="submit"
                                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Confirm Order
                                    </button>
                                </div>
                            </form> */}
                            <div>
                                <h1>select Products</h1>
                                <Product />
                            </div>
                        </div>
                    </main>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewOrders
