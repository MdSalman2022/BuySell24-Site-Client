import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../../../Shared/Header/Header';

const Dashboard = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <p className="text-5xl mt-2 font-bold">Dashboard</p>
        </div>
    );
};

export default Dashboard;