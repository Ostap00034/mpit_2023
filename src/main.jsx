import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import RegistrationScreen from './components/RegistrationScreen'
import AuthorizationScreen from './components/AuthorizationScreen'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/registration',
    element: <RegistrationScreen />,
  },
  {
    path: '/authorization',
    element: <AuthorizationScreen />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
