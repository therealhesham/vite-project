import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './login.jsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<BrowserRouter>
<Routes>
<Route  Component={Login} path='/login'/>

</Routes>

    </BrowserRouter>

  </React.StrictMode>,
)
