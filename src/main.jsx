import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider, Routes, Route } from 'react-router-dom' 
import Layout from '/src/dashboard/layout.jsx'
import '/src/index.css'

// Importa las páginas
import Deposit from '/src/dashboard/deposit/page.jsx'
import History from '/src/dashboard/history/page.jsx'
import Home from '/src/dashboard/home/page.jsx'
import PayService from '/src/dashboard/payService/page.jsx'
import Withdraw from '/src/dashboard/withdraw/page.jsx'
import Login from '/src/pages/login.jsx'

const router = createHashRouter(
  [
    { path: '/', element: <Login /> },
    { path: '/dashboard', element: <Layout><Home /></Layout> },
    { path: '/dashboard/deposit', element: <Layout><Deposit /></Layout> },
    { path: '/dashboard/withdraw', element: <Layout><Withdraw /></Layout> },
    { path: '/dashboard/payService', element: <Layout><PayService /></Layout> },
    { path: '/dashboard/history', element: <Layout><History /></Layout> },
  ])

const App = () => {
  return (
    <RouterProvider router={router}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/*">
            <Route index element={<Layout><Home /></Layout>} />
            <Route path="deposit" element={<Layout><Deposit /></Layout>} />
            <Route path="withdraw" element={<Layout><Withdraw /></Layout>} />
            <Route path="payService" element={<Layout><PayService /></Layout>} />
            <Route path="history" element={<Layout><History /></Layout>} />
        </Route>
        <Route path="*" element={<Layout><Login /></Layout>} />
      </Routes>
    </RouterProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)