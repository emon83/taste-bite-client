import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from '../layout/MainLayout/MainLayout';
import Home from '../pages/Home/Home/Home';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Blog from '../pages/Blog/Blog';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import RecipePage from '../pages/RecipePage/RecipePage';
import SingleChef from '../pages/Home/SingleChef/SingleChef';
import ChefDetails from '../pages/ChefDetails/ChefDetails';

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
        /* {
            path: '/chefCard/:id',
            element: <ChefCard></ChefCard>,
            loader: ({params}) => fetch(`http://localhost:5000/allData/${params.id}`)
        }, */
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
            path: '/recipePage',
            element: <RecipePage></RecipePage>,
            loader: () => fetch('http://localhost:5000/recipeData')
        },
        {
            path: '/recipePage/:id',
            element: <ChefDetails></ChefDetails>,
            loader: ({params}) => fetch(`http://localhost:5000/recipeData/${params.id}`)
            
        },
      ]
    },
  ]);

export default router;