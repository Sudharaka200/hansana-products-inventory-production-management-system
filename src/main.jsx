import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App.jsx'
import About from './Pages/About/About.jsx';
import Products from './Pages/Products/Products.jsx';
import Gallery from './Pages/Gallery/Gallery.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Login/Register.jsx';
import ProductOverview from './Pages/Products/ProductOverview.jsx';
import Cart from './Pages/Cart/Cart.jsx';
import OrderDetails from './Pages/Order/OrderDetails.jsx';
import OrderPlaced from './Pages/Order/OrderPlaced.jsx';
import AdminLogin from './Admin/AdminLogin.jsx'
import RefDashboard from './Admin/Ref/RefDashboard.jsx';
import TestDashboards from './Admin/TestDashboards.jsx';
import SalesTruck from './Admin/SalesTruck/SalesTruck.jsx';
import FinanceManager from './Admin/FinanceManager/FinanceManager.jsx';
import RefOrders from './Admin/Ref/RefOrders.jsx';
import SalesHistory from './Admin/SalesTruck/SalesHistory.jsx';
import ProductDashboard from './Admin/ProductManager/ProductDashboard.jsx';
import ProductAll from './Admin/ProductManager/ProductAll.jsx';
import ProductOrder from './Admin/ProductManager/ProductOrder.jsx'
import ProductHistory from './Admin/ProductManager/ProductOrderHistory.jsx'
import NewOrders from './Admin/Ref/NewOrders.jsx';
import AddNewProduct from './Admin/ProductManager/AddNewProduct.jsx';


const router = createBrowserRouter([
{
  path:"/",
  element: <App />
},
{
  path:"/about",
  element: <About />
},
{
  path:"/products",
  element: <Products />
},
{
  path:"/gallery",
  element: <Gallery />
},
{
  path:"/login",
  element: <Login />
},
{
  path:"/register",
  element: <Register />
},
{
  path:"/productoverview/:id",
  element: <ProductOverview />
},
{
  path:"/cart",
  element: <Cart />
},
{
  path:"/orderdetails",
  element: <OrderDetails />
},
{
  path:"/orderplaced",
  element: <OrderPlaced />
},
{
  path:"/adminlogin",
  element: <AdminLogin />
},
{
  path:"/testdashbaord",
  element: <TestDashboards />
},
{
  path:"/refdashbord",
  element: <RefDashboard />
},
{
  path:"/salestruck",
  element: <SalesTruck />
},
{
  path:"/productdashbaord",
  element: <ProductDashboard />
},
{
  path:"/financemanager",
  element: <FinanceManager />
},
{
  path:"/reforders",
  element: <RefOrders />
},
{
  path:"/refdashboard",
  element: <RefDashboard />
},
{
  path:"/salesOrders",
  element: <SalesTruck />
},
{
  path:"/salesHistory",
  element: <SalesHistory />
},
{
  path:"/productsallproducts",
  element: <ProductAll />
},
{
  path:"/productshistory",
  element: <ProductOrder />
},
{
  path:"/prodcutsorderhistory",
  element: <ProductHistory />
},
{
  path:"/createneworder",
  element: <NewOrders />
},
{
  path:"/addnewproduct",
  element: <AddNewProduct />
}



]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
