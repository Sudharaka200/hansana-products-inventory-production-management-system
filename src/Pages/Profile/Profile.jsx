import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar';

const Profile = () => {
    const [user, setUser] = useState({
        name: "John Doe",
        email: "",
        phone: "+94 71 123 4567",
        address: "123 Main St, Colombo, Sri Lanka",
        joined: "March 2025",
    });

    const [pendingOrders, setPendingOrders] = useState([]);
    const [successOrders, setSuccessOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedEmail = localStorage.getItem("userEmail");
        if (storedEmail) {
            setUser(prev => ({ ...prev, email: storedEmail }));

            const fetchOrders = async () => {
                try {
                    // pending orders
                    const pendingRes = await axios.get(http://localhost:8000/api/pendingOrdersByEmail?email=${storedEmail});
                    setPendingOrders(pendingRes.data);

                    // success orders
                    const successRes = await axios.get(http://localhost:8000/api/successOrdersByEmail?email=${storedEmail});
                    setSuccessOrders(successRes.data);

                } catch (err) {
                    console.error("Error fetching orders:", err);
                } finally {
                    setLoading(false);
                }
            };

            fetchOrders();
        } else {
            setLoading(false);
        }
    }, []);

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
                <div className="w-full max-w-4xl">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">👤 My Profile</h1>

                    {/* Profile Card */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row items-center md:items-start gap-8 mb-10">
                        <img
                            src={https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=4f46e5&color=fff&size=128}
                            alt="Profile"
                            className="w-32 h-32 rounded-full border-4 border-indigo-600"
                        />
                        <div className="flex-1 space-y-4">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                                <p className="text-gray-600">{user.email || "No email stored"}</p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-gray-100 rounded-xl p-4">
                                    <h3 className="text-sm font-medium text-gray-600">Phone</h3>
                                    <p className="text-gray-800">{user.phone}</p>
                                </div>
                                <div className="bg-gray-100 rounded-xl p-4">
                                    <h3 className="text-sm font-medium text-gray-600">Address</h3>
                                    <p className="text-gray-800">{user.address}</p>
                                </div>
                                <div className="bg-gray-100 rounded-xl p-4">
                                    <h3 className="text-sm font-medium text-gray-600">Member Since</h3>
                                    <p className="text-gray-800">{user.joined}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    localStorage.removeItem("userEmail");
                                    window.location.href = "/login";
                                }}
                                className="mt-4 inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-red-600 hover:bg-red-500"
                            >
                                🚪 Logout
                            </button>
                        </div>
                    </div>

                    {/* New Orders Section */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 mb-10 w-full">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">🛒 New Orders</h2>
                        {loading ? (
                            <p className="text-gray-600">Loading orders...</p>
                        ) : pendingOrders.length > 0 ? (
                            <div className="space-y-4">
                                {pendingOrders.map(order => (

                                    <div
                                    
                                        key={order._id || order.id}
                                        className="border rounded-xl p-4 flex justify-between items-center hover:shadow transition"
                                    >
                                        
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Order ID: {order._id || order.id}</h3>
                                            <p className="text-sm text-gray-600">
                                                Date: {order.date ? new Date(order.date).toLocaleDateString() : "N/A"}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                Status:{" "}
                                                <span className="font-semibold text-yellow-600">
                                                    {order.status || "Pending"}
                                                </span>
                                            </p>
                                            
                                        </div>
                                        
                                        <div className="text-lg font-semibold text-gray-800">
                                            {order.total ? $${order.total} : "N/A"}
                                        </div>
                                        
                                    </div>
                                    
                                ))}
                                
                            </div>
                        ) : (
                            <p className="text-gray-600">No new pending orders.</p>
                        )}
                    </div>

                    {/* Order History Section */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 mb-10 w-full">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">📦 Order History</h2>
                        {loading ? (
                            <p className="text-gray-600">Loading orders...</p>
                        ) : successOrders.length > 0 ? (
                            <div className="space-y-4">
                                {successOrders.map(order => (
                                    <div
                                        key={order._id || order.id}
                                        className="border rounded-xl p-4 flex justify-between items-center hover:shadow transition"
                                    >
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Order ID: {order._id || order.id}</h3>
                                            <p className="text-sm text-gray-600">
                                                Date: {order.date ? new Date(order.date).toLocaleDateString() : "N/A"}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                Status:{" "}
                                                <span className="font-semibold text-green-600">
                                                    {order.status || "Delivered"}
                                                </span>
                                            </p>
                                        </div>
                                        <div className="text-lg font-semibold text-gray-800">
                                            {order.total ? $${order.total} : "N/A"}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-600">No delivered orders yet.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;