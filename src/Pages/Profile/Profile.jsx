import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar';
import { Star } from 'lucide-react';

const DEFAULT_PRODUCT_ID = '68632add6c9bcb766c3cd03d';

const Profile = () => {
    const [user, setUser] = useState({
        name: 'John Doe',
        email: '',
        phone: '+94 71 123 4567',
        address: '123 Main St, Colombo, Sri Lanka',
        joined: 'March 2025',
    });
    const [pendingOrders, setPendingOrders] = useState([]);
    const [successOrders, setSuccessOrders] = useState([]);
    const [ratings, setRatings] = useState({});
    const [hoveredStars, setHoveredStars] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedEmail = localStorage.getItem('userEmail');
        if (storedEmail) {
            setUser((prev) => ({ ...prev, email: storedEmail }));

            const fetchOrders = async () => {
                try {
                    const [pendingRes, successRes] = await Promise.all([
                        axios.get(`http://localhost:8000/api/pendingOrdersByEmail?email=${storedEmail}`),
                        axios.get(`http://localhost:8000/api/successOrdersByEmail?email=${storedEmail}`),
                    ]);
                    setPendingOrders(pendingRes.data);
                    setSuccessOrders(successRes.data);
                } catch (err) {
                    console.error('Error fetching orders:', err);
                } finally {
                    setLoading(false);
                }
            };

            fetchOrders();
        } else {
            setLoading(false);
        }
    }, []);

    const handleRating = (orderId, rating) => {
        setRatings((prev) => ({
            ...prev,
            [orderId]: { ...prev[orderId], rating },
        }));
    };

    const handleCommentChange = (orderId, comment) => {
        setRatings((prev) => ({
            ...prev,
            [orderId]: { ...prev[orderId], comment },
        }));
    };

    const handleReviewSubmit = async (orderId, productId) => {
        const { rating, comment } = ratings[orderId] || {};

        const email = user.email?.trim();
        const cleanedComment = comment?.trim();

        if (!rating || !cleanedComment || !email) {
            alert('Please provide a rating, comment, and ensure email is present.');
            return;
        }

        const validProductId = productId || DEFAULT_PRODUCT_ID;

        try {
            const payload = {
                rating: Number(rating),
                comment: cleanedComment,
                user: email,
            };

            console.log('Submitting review:', payload);

            await axios.post(`http://localhost:8000/api/products/${validProductId}/reviews`, payload);

            alert('Review submitted successfully!');
            setRatings((prev) => ({ ...prev, [orderId]: { rating: 0, comment: '' } }));
        } catch (error) {
            console.error('Error submitting review:', error?.response?.data || error.message);
            alert(`Failed to submit review. ${error?.response?.data?.message || ''}`);
        }
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
                <div className="w-full max-w-4xl">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">👤 My Profile</h1>

                    <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row items-center md:items-start gap-8 mb-10">
                        <img
                            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=4f46e5&color=fff&size=128`}
                            alt="Profile"
                            className="w-32 h-32 rounded-full border-4 border-indigo-600"
                        />
                        <div className="flex-1 space-y-4">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                                <p className="text-gray-600">{user.email || 'No email stored'}</p>
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
                                    localStorage.removeItem('userEmail');
                                    window.location.href = '/login';
                                }}
                                className="mt-4 px-5 py-2.5 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-500"
                            >
                                🚪 Logout
                            </button>
                        </div>
                    </div>

                    {/* Pending Orders */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 mb-10 w-full">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">🛒 New Orders</h2>
                        {loading ? (
                            <p className="text-gray-600">Loading orders...</p>
                        ) : pendingOrders.length > 0 ? (
                            <div className="space-y-4">
                                {pendingOrders.map((order) => {
                                    const productId = order.productId || DEFAULT_PRODUCT_ID;
                                    return (
                                        <div key={order._id} className="border rounded-xl p-4 flex justify-between items-center">
                                            <div>
                                                <h3 className="font-semibold text-gray-800">Order ID: {order._id}</h3>
                                                <p className="text-sm text-gray-600">Product ID: {productId}</p>
                                                <p className="text-sm text-gray-600">Status: <span className="text-yellow-600 font-medium">{order.status}</span></p>
                                            </div>
                                            <div className="text-lg font-semibold text-gray-800">${order.total}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <p className="text-gray-600">No pending orders.</p>
                        )}
                    </div>

                    {/* Order History + Reviews */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 mb-10 w-full">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">📦 Order History</h2>
                        {loading ? (
                            <p className="text-gray-600">Loading orders...</p>
                        ) : successOrders.length > 0 ? (
                            <div className="space-y-6">
                                {successOrders.map((order) => {
                                    const orderId = order._id;
                                    const productId = order.productId || DEFAULT_PRODUCT_ID;
                                    const selectedRating = ratings[orderId]?.rating || 0;
                                    const hoverRating = hoveredStars[orderId] || 0;
                                    const comment = ratings[orderId]?.comment || '';

                                    return (
                                        <div key={orderId} className="border rounded-xl p-4 space-y-4">
                                            <div className="flex justify-between">
                                                <div>
                                                    <h3 className="font-semibold text-gray-800">Order ID: {orderId}</h3>
                                                    <p className="text-sm text-gray-600">Product ID: {productId}</p>
                                                    <p className="text-sm text-green-600">Delivered</p>
                                                </div>
                                                <div className="text-lg font-semibold text-gray-800">${order.total}</div>
                                            </div>
                                            <div className="flex gap-2">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <Star
                                                        key={star}
                                                        className={`w-6 h-6 cursor-pointer ${
                                                            (hoverRating || selectedRating) >= star
                                                                ? 'text-yellow-400'
                                                                : 'text-gray-300'
                                                        }`}
                                                        onMouseEnter={() => setHoveredStars((prev) => ({ ...prev, [orderId]: star }))}
                                                        onMouseLeave={() => setHoveredStars((prev) => ({ ...prev, [orderId]: 0 }))}
                                                        onClick={() => handleRating(orderId, star)}
                                                    />
                                                ))}
                                            </div>
                                            {selectedRating > 0 && (
                                                <>
                                                    <textarea
                                                        rows="3"
                                                        placeholder="Write a comment..."
                                                        value={comment}
                                                        onChange={(e) => handleCommentChange(orderId, e.target.value)}
                                                        className="w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                                                    />
                                                    <button
                                                        onClick={() => handleReviewSubmit(orderId, productId)}
                                                        className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
                                                    >
                                                        Submit Review
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    );
                                })}
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
