import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import IndexPage from './pages'
import GodeProjectPage from './pages/godeProject'
import ErrorPage from './pages/err'

const router = createBrowserRouter([
  {
    path: '/',
    element: IndexPage(),
    errorElement: ErrorPage()
  },
  {
    path: '/gode',
    element: GodeProjectPage()
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
