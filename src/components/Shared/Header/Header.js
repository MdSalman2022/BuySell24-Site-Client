import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='home'>Home</Link></li>
                        <li><Link to='blog'>Blog</Link></li>
                        <li><Link to='dashboard'>Dashboard</Link></li>
                    </ul>
                </div>
                <Link to='/' className=" normal-case text-3xl text-secondary font-bold underline decoration-primary">Buy&Sell24</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='home'>Home</Link></li>
                    <li><Link to='blog'>Blog</Link></li>
                    <li><Link to='dashboard'>Dashboard</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-primary mr-2">Login</a>
                <a className="btn btn-primary">Register</a>
            </div>
        </div>
    );
};

export default Header;