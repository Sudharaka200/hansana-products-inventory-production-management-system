import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import Chart from "react-apexcharts";
import DashboardBtn from "../../Components/DashboardBtn";
import Logo from "../../assets/adminLogo.png";

function ProductDashboard() {
  const [salesStats, setSalesStats] = useState([]);

  useEffect(() => {
    const fetchSalesStats = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/products/salesstats");
        setSalesStats(res.data.success || []);
      } catch (err) {
        console.error("Error fetching product sales stats:", err);
      }
    };

    fetchSalesStats();
  }, []);

  const salesChartConfig = {
    type: "bar",
    height: 300,
    series: [
      {
        name: "Sales",
        data: salesStats.map(item => item.totalSales),
      },
    ],
    options: {
      chart: {
        toolbar: { show: false },
      },
      xaxis: {
        categories: salesStats.map(item => item.productname),
        labels: {
          rotate: -45,
          style: {
            fontSize: '12px',
          },
        },
      },
      colors: ["#0ea5e9"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
        },
      },
      dataLabels: {
        enabled: true,
      },
    },
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white flex flex-col p-4">
        <img src={Logo} alt="Logo" className="mb-6" />
        <DashboardBtn
          btns={[
            { name: "Dashboard", url: "/productdashboard" },
            { name: "Products", url: "/productsallproducts" },
            { name: "Orders", url: "/productshistory" },
            { name: "Order History", url: "/productsorderhistory" },
          ]}
        />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Product Dashboard</h1>
          <button className="bg-black text-white px-4 py-2 rounded">Generate PDF</button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader color="transparent" className="p-4">
              <Typography variant="h6">Product Sales Overview</Typography>
            </CardHeader>
            <CardBody>
              <Chart {...salesChartConfig} />
            </CardBody>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default ProductDashboard;
