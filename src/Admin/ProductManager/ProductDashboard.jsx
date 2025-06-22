import React from 'react'
import { Link } from 'react-router-dom';
import DashboardBtn from '../../Components/DashboardBtn';
import Logo from '../../assets/adminLogo.png'

function ProductDashboard() {
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
                            <h1 className="text-2xl font-bold">Dashboard</h1>
                            <button className="bg-black text-white px-4 py-2 rounded">Generate PDF</button>
                        </header>

                        {/* Stats Cards */}
                        
                    </main>
                </div>
            </div>
        </div>
    )
}

export default ProductDashboard
