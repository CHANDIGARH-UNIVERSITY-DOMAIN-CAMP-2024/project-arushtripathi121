import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../components/Home'
import Tour from '../components/Tour'
import About from '../components/About'

const Router = () => {
    

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Home/>
        }, 
        {
            path: '/tour',
            element: <Tour/>
        }, 
        {
            path: '/about',
            element: <About/>
        }
    ])
  return (
    <RouterProvider router={appRouter}>

    </RouterProvider>
  )
}

export default Router

