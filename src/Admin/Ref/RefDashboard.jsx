import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import Chart from "react-apexcharts";
import Logo from '../../assets/adminLogo.png';
import DashboardBtn from '../../Components/DashboardBtn';

function RefDashboard() {
  const [orderStats, setOrderStats] = useState({ success: 0, failed: 0, pending: 0 });
  const [productStats, setProductStats] = useState({ success: [], failed: [] });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [res1, res2, res3] = await Promise.allSettled([
          axios.get("http://localhost:8000/api/successfailOrders"),
          axios.get("http://localhost:8000/api/pending"),
          axios.get("http://localhost:8000/api/products/status"),
        ]);

        const successData = res1.status === "fulfilled" && res1.value?.data ? res1.value.data : { success: 0, failed: 0 };
        const pendingData = res2.status === "fulfilled" && res2.value?.data ? res2.value.data : { pending: 0 };
        const productData = res3.status === "fulfilled" && res3.value?.data ? res3.value.data : { success: [], failed: [] };

        setOrderStats({
          success: successData.success || 0,
          failed: successData.failed || 0,
          pending: pendingData.pending || 0,
        });

        setProductStats({
          success: productData.success || [],
          failed: productData.failed || [],
        });
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      }
    };

    fetchStats();
  }, []);

  const totalSalesChart = {
    type: "bar",
    height: 240,
    series: [
      {
        name: "Total Sales",
        data: productStats.success?.map(p => p.totalSales) || [0],
      },
    ],
    options: {
      chart: { toolbar: { show: false } },
      xaxis: {
        categories: productStats.success?.map(p => p.productname) || ["No Data"],
        labels: { style: { fontSize: "12px" } },
      },
      colors: ["#3b82f6"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%',
        },
      },
    },
  };

  const statusPieChart = {
    type: "pie",
    series: [
      orderStats.success || 0,
      orderStats.failed || 0,
      orderStats.pending || 0,
    ],
    options: {
      labels: ["Success", "Failed", "Pending"],
      colors: ["#22c55e", "#ef4444", "#facc15"],
      legend: { position: "bottom" },
    },
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-black text-white p-4">
        <img src={Logo} alt="Admin Logo" className="mb-6" />
        <DashboardBtn
          btns={[
            { name: "Dashboard", url: "/refdashboard" },
            { name: "Orders", url: "/reforders" },
          ]}
        />
      </aside>

      <main className="flex-1 p-6 overflow-auto">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-sm text-gray-600">Success</h3>
            <p className="text-xl font-bold text-green-600">{orderStats.success || 0}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-sm text-gray-600">Failed</h3>
            <p className="text-xl font-bold text-red-600">{orderStats.failed || 0}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-sm text-gray-600">Pending</h3>
            <p className="text-xl font-bold text-yellow-500">{orderStats.pending || 0}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-sm text-gray-600">Total</h3>
            <p className="text-xl font-bold text-blue-600">
              {(orderStats.success || 0) + (orderStats.failed || 0) + (orderStats.pending || 0)}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardHeader color="transparent" className="p-4">
              <Typography variant="h6">Successful Product Sales</Typography>
            </CardHeader>
            <CardBody>
              <Chart {...totalSalesChart} />
            </CardBody>
          </Card>

          <Card>
            <CardHeader color="transparent" className="p-4">
              <Typography variant="h6">Order Status Distribution</Typography>
            </CardHeader>
            <CardBody>
              <Chart {...statusPieChart} />
            </CardBody>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default RefDashboard;
