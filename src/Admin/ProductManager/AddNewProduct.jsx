import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardBtn from '../../Components/DashboardBtn';
import Logo from '../../assets/adminLogo.png'
import ProductAdmin from '../../Components/ProductAdmin';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import axios from 'axios';


//product Manager
//DB productname, description, price, img1, img2, img3, img4, img5

function AddNewProduct() {

    const [formData, setFormData] = useState({
        productname: '',
        description: '',
        price: '',
        img1: '',
        img2: '',
        img3: '',
        img4: '',
        img5: ''
    });

    // handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/api/products', formData);
            console.log('Product created:', res.data);
            // clear form
            setFormData({
                productname: '',
                description: '',
                price: '',
                img1: '',
                img2: '',
                img3: '',
                img4: '',
                img5: ''
            });
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };
    return (
        <div>
            <div>
                <div className="flex h-screen bg-gray-100">
                    {/* Sidebar */}
                    <aside className="w-64 bg-black text-white flex flex-col p-4">
                        <div >
                            <img src={Logo} alt="" />
                        </div>
                        <DashboardBtn
                            btns={[
                                { name: "Dashboard", url: "/productdashbaord" },
                                { name: "Products", url: "/productsallproducts" },
                                { name: "Orders", url: "/productshistory" },
                                { name: "OrderHistory", url: "/prodcutsorderhistory" },
                            ]}
                        />
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 p-6">
                        <header className="flex justify-between items-center mb-6">
                            <h1 className="text-2xl font-bold">Products</h1>
                            <button className="bg-black text-white px-4 py-2 rounded">Generate PDF</button>
                        </header>
                        <div className='p-20'>
                            <form onSubmit={handleSubmit}>
                                <div className="space-y-6">
                                    <div className="flex flex-wrap gap-6">
                                        {[
                                            { label: 'Productname', name: 'productname' },
                                            { label: 'Description', name: 'description' },
                                            { label: 'Price', name: 'price' },
                                            { label: 'Img 1', name: 'img1' },
                                            { label: 'Img 2', name: 'img2' },
                                            { label: 'Img 3', name: 'img3' },
                                            { label: 'Img 4', name: 'img4' },
                                            { label: 'Img 5', name: 'img5' },
                                        ].map((field) => (
                                            <div key={field.name} className="flex-1 min-w-[45%]">
                                                <label htmlFor={field.name} className="block text-sm font-medium text-gray-900">
                                                    {field.label}
                                                </label>
                                                <input
                                                    id={field.name}
                                                    name={field.name}
                                                    type="text"
                                                    value={formData[field.name]}
                                                    onChange={handleChange}
                                                    className="mt-1 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-6 flex items-center justify-end gap-x-6">
                                    <button
                                        type="button"
                                        onClick={() => setFormData({
                                            productname: '',
                                            description: '',
                                            price: '',
                                            img1: '',
                                            img2: '',
                                            img3: '',
                                            img4: '',
                                            img5: ''
                                        })}
                                        className="text-sm font-semibold text-gray-900"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default AddNewProduct
