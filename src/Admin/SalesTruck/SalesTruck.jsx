import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardBtn from '../../Components/DashboardBtn';
import Logo from '../../assets/adminLogo.png';
import { Card, Typography } from "@material-tailwind/react";
import axios from 'axios';

function SalesTruck() {
  const [orders, setOrders] = useState([]);

  const TABLE_HEAD = ["id", "firstname", "lastname", "email", "streetaddress", "city", "province", "zipcode", "cartItems", "", ""];

    const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/pending");
      setOrders(res.data);
    } catch (error) {
      console.error("Failed to fetch orders", error);
    }
  };

  // 2. Use it in useEffect on mount
  useEffect(() => {
    fetchOrders();
  }, []);

  const handleStatusUpdate = async (orderId) => {
    try {
      await axios.put(`http://localhost:8000/api/orders/status/${orderId}`);
        fetchOrders();
      setOrders((prev) =>
        prev.map((order) =>
          order._id === orderId ? { ...order, status: "Success" } : order
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-black text-white flex flex-col p-4">
        <img src={Logo} alt="" />
        <DashboardBtn
          btns={[
            { name: "Orders", url: "/salesOrders" },
            { name: "Orders History", url: "/salesHistory" },
          ]}
        />
      </aside>

      <main className="flex-1 p-6 overflow-auto">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button className="bg-black text-white px-4 py-2 rounded">Generate PDF</button>
        </header>

        <Card className="h-full w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                const isLast = index === orders.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
                return (
                  <tr key={order._id}>
                    <td className={classes}>{index + 1}</td>
                    <td className={classes}>{order.firstname}</td>
                    <td className={classes}>{order.lastname}</td>
                    <td className={classes}>{order.email}</td>
                    <td className={classes}>{order.streetaddress}</td>
                    <td className={classes}>{order.city}</td>
                    <td className={classes}>{order.province}</td>
                    <td className={classes}>{order.zipcode}</td>
                    <td className={classes}>
                      <ul className="list-disc ml-4">
                        {order.cartItems.map((item) => (
                          <li key={item.productId || item._id || item.productname}>
                            {item.productname} × {item.quantity}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className={classes}>
                      <button
                        className='bg-green-600 pt-2 pb-2 pl-5 pr-5 text-white rounded'
                        onClick={() => handleStatusUpdate(order._id)}
                      >
                        Success
                      </button>
                    </td>
                    <td className={classes}>
                      <button className='bg-red-800 pt-2 pb-2 pl-5 pr-5 text-white rounded'>Fail</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </main>
    </div>
  );
}

export default SalesTruck;
