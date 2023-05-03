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
import PrivateRoute from './PrivateRoute';

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
            element: <PrivateRoute><RecipePage></RecipePage></PrivateRoute>,
            loader: () => fetch('https://tastebite-chef-recipe-hunter-server-emon83.vercel.app/recipeData')
        },
        {
            path: '/recipePage/:id',
            element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
            loader: ({params}) => fetch(`https://tastebite-chef-recipe-hunter-server-emon83.vercel.app/recipeData/${params.id}`)
            
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
      ]
    },
  ]);

export default router;

/* 
section data 1: https://tastebite-chef-recipe-hunter-server-emon83.vercel.app/sectionData1
section data 2: https://tastebite-chef-recipe-hunter-server-emon83.vercel.app/sectionData2
*/