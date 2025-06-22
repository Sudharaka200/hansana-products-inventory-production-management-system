import React from 'react'
import { Link } from 'react-router-dom';
import DashboardBtn from '../../Components/DashboardBtn';
import Logo from '../../assets/adminLogo.png'

function RefDashboard() {
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
                                { name: "Dashboard", url: "/refdashboard" },
                                { name: "Orders", url: "/reforders" },
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
                        <div className="grid grid-cols-4 gap-4 mb-6">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="h-24 bg-white rounded shadow"></div>
                            ))}
                        </div>

                        {/* Charts (placeholder) */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white rounded shadow p-4 h-64">
                                <div className="h-full w-full flex items-center justify-center text-gray-400">📊 Bar Chart</div>
                            </div>
                            <div className="bg-white rounded shadow p-4 h-64">
                                <div className="h-full w-full flex items-center justify-center text-gray-400">🟠 Pie Chart</div>
                            </div>
                            <div className="bg-white rounded shadow p-4 h-64 col-span-2">
                                <div className="h-full w-full flex items-center justify-center text-gray-400">📈 Line Chart</div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default RefDashboard
