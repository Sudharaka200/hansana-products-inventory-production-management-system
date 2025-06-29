import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import DashboardBtn from '../../Components/DashboardBtn';
import Logo from '../../assets/adminLogo.png'
import OrderTable from '../../Components/OrderTabale';
import Button from '../../Components/Button';
import axios from 'axios';

function RefOrders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/orders")
            .then((res) => setOrders(res.data))
            .catch((err) => console.error("Error fetching orders", err));
    }, []);

    const tableData = orders.map(order => ([
        `${order.firstname} ${order.lastname}`,
        order.email,
        order.cartItems.map(item => item.name).join(", "), // adapt based on your schema
        `Street: ${order.streetaddress}`,
        `${order.city}, ${order.province}, ${order.zipcode}`,
        "Pending" // Placeholder — change to actual status if available
    ]));
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
                            <h1 className="text-2xl font-bold">Orders</h1>
                            <button className="bg-black text-white px-4 py-2 rounded">Generate PDF</button>
                        </header>
                        <Link to="/createneworder">
                            <button className='bg-amber-900 mt-5 mb-5 text-white px-4 py-2 rounded'>Create New Order</button>
                        </Link>
                        <OrderTable
                            ths={[
                                "Name",
                                "Email",
                                "Product",
                                "Image",
                                "Quantity",
                                "Price",
                                "Address",
                                "Location",
                                "Created At",
                            ]}
                            tds={tableData}
                        />
                    </main>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RefOrders
