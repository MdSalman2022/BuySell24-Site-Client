import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Home from '../../components/Pages/Home/Home';
import CategoryPage from '../../components/Pages/Category/CategoryPage';
import Login from '../../components/Shared/Login/Login';
import Register from '../../components/Shared/Register/Register';
import MyOrders from '../../components/Pages/Dashboard/MyOrders/MyOrders';
import Dashboard from '../../components/Pages/Dashboard/Dashboard/Dashboard'
import AddProduct from '../../components/Pages/Dashboard/AddProduct/AddProduct';
import MyProducts from '../../components/Pages/Dashboard/MyProducts/MyProducts';
import MyBuyers from '../../components/Pages/Dashboard/MyBuyers/MyBuyers';
import DashboardLayout from '../../Layout/DashboardLayout';
import AllSeller from '../../components/Pages/Dashboard/AllSellers/AllSellers';
import AllBuyers from '../../components/Pages/Dashboard/AllBuyers/AllBuyers';
import Reports from '../../components/Pages/Dashboard/Reports/Reports';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import ErrorPage from '../../components/Pages/ErrorPage/ErrorPage';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <CategoryPage></CategoryPage>
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
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: '/dashboard/myorders/',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/wishlist/',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addproduct/',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/addproduct/',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myproducts/',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/mybuyers/',
                element: <MyBuyers></MyBuyers>
            },
            {
                path: '/dashboard/allsellers/',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/allbuyers/',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/reports/',
                element: <Reports></Reports>
            },
        ]
    }

])