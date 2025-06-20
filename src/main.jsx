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
  path:"/productoverview",
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
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
