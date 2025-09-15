import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './Component/layout.jsx'
import Home from './Component/Home/Home.jsx'   // ✅ Capitalized
import Contact from './Component/Contact/Contact.jsx'
import Checkout from './Component/Checkout/Checkout.jsx'
import Filter from './Component/Filter/Filter.jsx'
import CartPage from './Component/Addtocard/Addcard.jsx'
import Testing from './Component/Testing/Testing.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
    {
    path: '/',
        element: <Home />,   // ✅ Use capitalized component
      },
      {
        path: '/Filter',
        element: <Filter />,
      },
      {
        path: '/Checkout',
        element: <Checkout />,
      },
 {
        path: '/CartPage',
        element: <CartPage />,
      },
      {
        path: '/Testing',
        element: <Testing />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
 <StrictMode>
  <RouterProvider router={router}/>
</StrictMode>

)
