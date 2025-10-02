import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ErrorPage from './Component/Error/Errorpage.jsx'
import './index.css'
import App from './App.jsx'
import Layout from './Component/layout.jsx'
import Home from './Component/Home/Home.jsx'   // ✅ Capitalized
import Contact from './Component/Contact/Contact.jsx'
import Checkout from './Component/Checkout/Checkout.jsx'
import Filter from './Component/Filter/Filter.jsx'
import CartPage from './Component/Addtocard/Addcard.jsx'
import Testing from './Component/Testing/Testing.jsx'
import Contactus from './Component/Contactus/Contact.jsx'
import Blog from './Component/Blogs/Blogs.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
      errorElement: <ErrorPage />,   // ✅ custom error page
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
  path: '/checkout/:productName',   // ✅ Dynamic Route
  element: <Checkout />,
}
,
 {
        path: '/CartPage/:productName',
        element: <CartPage />,
      },
      {
        path: '/CartPage/:productName',
        element: <CartPage />,
      },
      {
        path: '/Testing',
        element: <Testing />,
      },
        {
        path: '/Contactus',
        element: <Contactus />,
      },
      {
        path: '/Blog',
        element: <Blog />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
 <StrictMode>
  <RouterProvider router={router}/>
</StrictMode>

)
