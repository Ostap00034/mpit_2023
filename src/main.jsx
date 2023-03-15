import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import RegistrationScreen from './components/RegistrationScreen'
import AuthorizationScreen from './components/AuthorizationScreen'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <AuthorizationScreen />
  </React.StrictMode>
)
