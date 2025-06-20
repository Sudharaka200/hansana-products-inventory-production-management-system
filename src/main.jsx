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

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
