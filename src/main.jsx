import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App'
import RegistrationScreen from './components/RegistrationScreen'
import AuthorizationScreen from './components/AuthorizationScreen'
import VerificationScreen from './components/VerificationScreen'
import RequestsScreen from './components/RequestsScreen'
import { store } from './store/index'

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
  {
    path: '/verification',
    element: <VerificationScreen />,
  },
  {
    path: '/requests',
    element: <RequestsScreen />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
