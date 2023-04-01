import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CartContextProvider from './context/CartContext'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/khadim',
    element: <div>La page de Khadim</div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartContextProvider>
    <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>,
)
