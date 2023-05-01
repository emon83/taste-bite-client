import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from '../layout/MainLayout/MainLayout';
import Home from '../pages/Home/Home/Home';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Blog from '../pages/Blog/Blog';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import RecipePage from '../pages/RecipePage/RecipePage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/recipePage',
            element: <RecipePage></RecipePage>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/',
            element: <Home></Home>
        },
      ]
    },
  ]);

export default router;